"use client";

import { useEffect, useState } from "react";
import { useParams, useSearchParams } from "next/navigation";
import EventThemeRenderer from "@/components/themes/EventThemeRenderer";
import { publicApi } from "@/lib/api";
import { cacheUnlockedEvent } from "@/lib/event-helpers";
import styles from "./event-page.module.css";

export default function EventDetailsClient({ apiKind = "event" }) {
  const params = useParams();
  const searchParams = useSearchParams();
  const slug = params?.slug;
  const previewToken = searchParams?.get("previewToken") || undefined;
  const isInvitation = apiKind === "invitation";

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [requiresPassword, setRequiresPassword] = useState(false);
  const [password, setPassword] = useState("");
  const [unlocking, setUnlocking] = useState(false);
  const [payload, setPayload] = useState(null);

  useEffect(() => {
    if (!slug) return;
    let cancelled = false;

    (async () => {
      setLoading(true);
      setError("");
      try {
        const data = isInvitation
          ? await publicApi.getInvitation(slug, { previewToken })
          : await publicApi.getEvent(slug, { previewToken });
        if (cancelled) return;
        if (data?.requiresPassword) {
          setRequiresPassword(true);
          setPayload(data);
        } else {
          setRequiresPassword(false);
          setPayload(data);
          cacheUnlockedEvent(slug, data);
        }
      } catch (err) {
        if (!cancelled) setError(err.message || (isInvitation ? "Invitation not found" : "Event not found"));
      } finally {
        if (!cancelled) setLoading(false);
      }
    })();

    return () => {
      cancelled = true;
    };
  }, [slug, previewToken, isInvitation]);

  useEffect(() => {
    if (!payload?.event) return;
    const title = payload.event.pageTitle || payload.event.eventName;
    if (title) document.title = title;
  }, [payload]);

  async function handleUnlock(e) {
    e.preventDefault();
    if (!slug || !password) return;
    setUnlocking(true);
    setError("");
    try {
      const data = isInvitation
        ? await publicApi.unlockInvitation(slug, password)
        : await publicApi.unlockEvent(slug, password);
      cacheUnlockedEvent(slug, data);
      setPayload(data);
      setRequiresPassword(false);
    } catch (err) {
      setError(err.message || "Incorrect password");
    } finally {
      setUnlocking(false);
    }
  }

  if (loading) {
    return (
      <div className={styles.stateScreen}>
        <p>{isInvitation ? "Loading invitation…" : "Loading event…"}</p>
      </div>
    );
  }

  if (requiresPassword) {
    return (
      <div className={styles.lockScreen}>
        <div className={styles.lockCard}>
          <div className={styles.lockEyebrow}>{isInvitation ? "PRIVATE INVITATION" : "PRIVATE EVENT"}</div>
          <h1>{payload?.event?.eventName || (isInvitation ? "Private Invitation" : "Private Event")}</h1>
          <p>{isInvitation ? "Enter the PIN shared by the host to view." : "Enter the PIN shared by the host to watch."}</p>
          <form onSubmit={handleUnlock}>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder={isInvitation ? "Invitation PIN" : "Event PIN"}
              required
            />
            {error ? <p className={styles.error}>{error}</p> : null}
            <button type="submit" disabled={unlocking}>
              {unlocking ? "Unlocking…" : isInvitation ? "View Invitation" : "Watch Event"}
            </button>
          </form>
        </div>
      </div>
    );
  }

  if (error && !payload?.event) {
    return (
      <div className={styles.stateScreen}>
        <p className={styles.error}>{error}</p>
      </div>
    );
  }

  if (!payload?.event) return null;

  return (
    <>
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@500;600;700&family=Great+Vibes&family=Lora:wght@500;600;700&family=Playfair+Display:wght@500;600;700&display=swap"
      />
      <EventThemeRenderer
        event={payload.event}
        youtube={payload.youtube}
        media={payload.media}
        branding={payload.branding}
        theme={payload.theme}
        publicPath={isInvitation ? `/invitation/${slug}` : `/event/${slug}`}
      />
    </>
  );
}
