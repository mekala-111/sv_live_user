"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { useParams, useRouter } from "next/navigation";
import { publicApi } from "@/lib/api";
import { cacheUnlockedEvent } from "@/lib/event-helpers";

export default function PrivateEventAccessPage() {
  const params = useParams();
  const router = useRouter();
  const code = params?.code;

  const [eventName, setEventName] = useState("Private Event");
  const [slug, setSlug] = useState(null);
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!code) return;
    let cancelled = false;

    (async () => {
      setLoading(true);
      setError("");
      try {
        let data;
        try {
          data = await publicApi.getEvent(code);
        } catch {
          data = await publicApi.watchByCode(code);
        }
        if (cancelled) return;

        const eventSlug = data?.event?.eventSlug || code;
        setSlug(eventSlug);
        setEventName(data?.event?.eventName || "Private Event");

        if (!data?.requiresPassword && eventSlug) {
          router.replace(`/event/${eventSlug}`);
        }
      } catch (err) {
        if (!cancelled) setError(err.message || "Event not found");
      } finally {
        if (!cancelled) setLoading(false);
      }
    })();

    return () => {
      cancelled = true;
    };
  }, [code, router]);

  async function handleSubmit(e) {
    e.preventDefault();
    if (!slug || !password) return;
    setSubmitting(true);
    setError("");
    try {
      const data = await publicApi.unlockEvent(slug, password);
      cacheUnlockedEvent(slug, data);
      router.push(`/event/${slug}`);
    } catch (err) {
      setError(err.message || "Incorrect password");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden">
      <Image
        src="/uploads/event-coverage.png"
        alt="Concert stage with lighting"
        fill
        priority
        className="object-cover"
      />
      <div className="absolute inset-0 bg-[rgba(20,15,10,0.72)]" />
      <div className="relative z-[1] w-[380px] max-w-[calc(100%-32px)] rounded-[20px] bg-[rgba(255,253,249,0.97)] p-11 text-center">
        <Image
          src="/uploads/Logo.png"
          alt="SV Live Events"
          width={56}
          height={56}
          className="mx-auto mb-[18px] block h-14 w-14 rounded-full object-cover"
        />
        <div className="mb-2 text-xs font-bold tracking-wide text-[#FF7A00]">
          PRIVATE EVENT
        </div>
        <h1 className="font-heading m-0 mb-2 text-[22px] font-bold text-[#252525]">
          {loading ? "Loading…" : eventName}
        </h1>
        <p className="m-0 mb-7 text-[13.5px] text-[#6B6B6B]">
          Enter the event PIN shared by the host to watch.
        </p>
        <form onSubmit={handleSubmit}>
          <input
            type="password"
            placeholder="Enter Event PIN"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="mb-4 w-full rounded-xl border border-[#E0D3BC] p-3.5 text-center text-lg font-bold tracking-[4px] text-[#252525]"
            required
          />
          {error ? (
            <p className="mb-3 text-sm text-[#F52222]">{error}</p>
          ) : null}
          <button
            type="submit"
            disabled={submitting || loading || !slug}
            className="w-full rounded-full bg-[#FF7A00] p-3.5 text-[15px] font-bold text-white disabled:opacity-60"
          >
            {submitting ? "Checking…" : "Watch Event →"}
          </button>
        </form>
      </div>
    </div>
  );
}
