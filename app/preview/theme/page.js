"use client";

import { useEffect, useState } from "react";
import EventThemeRenderer from "@/components/themes/EventThemeRenderer";
import styles from "./preview.module.css";

/** Legacy preview route — renderer lives in sv-admin-panel/src/themes. */
export default function ThemePreviewPage() {
  const [payload, setPayload] = useState(null);

  useEffect(() => {
    function onMessage(event) {
      if (event.data?.type !== "SV_THEME_PREVIEW") return;
      setPayload(event.data.payload ?? null);
    }

    window.addEventListener("message", onMessage);
    window.parent?.postMessage({ type: "SV_THEME_PREVIEW_READY" }, "*");

    return () => window.removeEventListener("message", onMessage);
  }, []);

  if (!payload?.event) {
    return (
      <div className={styles.waiting}>
        <p>Theme preview</p>
        <span>Adjust settings on the left to see the live render.</span>
      </div>
    );
  }

  return (
    <>
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@500;600;700&family=Great+Vibes&family=Lora:wght@500;600;700&family=Playfair+Display:wght@500;600;700&display=swap"
      />
      <div className={styles.frame}>
        <EventThemeRenderer
          event={payload.event}
          youtube={payload.youtube}
          media={payload.media ?? []}
          branding={payload.branding}
          theme={payload.theme}
          publicPath={payload.publicPath ?? "/event/draft"}
        />
      </div>
    </>
  );
}
