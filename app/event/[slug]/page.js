import { Suspense } from "react";
import EventDetailsClient from "./EventDetailsClient";
import styles from "./event-page.module.css";

export default function EventDetailsPage() {
  return (
    <Suspense
      fallback={
        <div className={styles.stateScreen}>
          <p>Loading event…</p>
        </div>
      }
    >
      <EventDetailsClient />
    </Suspense>
  );
}
