import { Suspense } from "react";
import EventDetailsClient from "../../event/[slug]/EventDetailsClient";
import styles from "../../event/[slug]/event-page.module.css";

export default function InvitationDetailsPage() {
  return (
    <Suspense
      fallback={
        <div className={styles.stateScreen}>
          <p>Loading invitation…</p>
        </div>
      }
    >
      <EventDetailsClient apiKind="invitation" />
    </Suspense>
  );
}
