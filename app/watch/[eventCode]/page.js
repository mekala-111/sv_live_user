import Image from "next/image";
import Link from "next/link";
import { publicApi } from "@/lib/api";
import { coverSrc, formatEventDateTime } from "@/lib/event-helpers";

export const dynamicParams = true;

export default async function WatchEventLandingPage({ params }) {
  const { eventCode } = await params;

  let payload = null;
  let error = "";
  try {
    payload = await publicApi.watchByCode(eventCode);
  } catch (err) {
    error = err.message || "Event not found";
  }

  const event = payload?.event;
  const requiresPassword = Boolean(payload?.requiresPassword);
  const href = event?.eventSlug ? `/event/${event.eventSlug}` : null;

  return (
    <div className="mx-auto flex min-h-screen max-w-[420px] flex-col bg-[#FFFDF9]">
      <div className="p-6 text-center">
        <Image
          src="/uploads/Logo.png"
          alt="SV Live Events"
          width={44}
          height={44}
          className="mx-auto mb-2 block h-11 w-11 rounded-full object-cover"
        />
        <div className="font-heading text-sm font-bold">SV LIVE EVENTS</div>
      </div>

      {error ? (
        <div className="flex flex-1 flex-col p-6">
          <p className="m-0 text-center text-[15px] text-[#F52222]">{error}</p>
          <Link
            href="/events"
            className="mt-6 block rounded-full bg-[#FF7A00] p-4 text-center text-base font-bold text-white hover:text-white"
          >
            Browse Events
          </Link>
        </div>
      ) : (
        <>
          <div className="relative aspect-[4/3]">
            <Image
              src={coverSrc(event?.coverImage)}
              alt={event?.eventName || "Event cover"}
              fill
              unoptimized={Boolean(event?.coverImage?.startsWith("http"))}
              className="object-cover"
            />
            {event?.status === "LIVE" ? (
              <div className="absolute left-3.5 top-3.5 flex items-center gap-1.5 rounded-full bg-[#F52222] px-3 py-1.5 text-xs font-bold text-white">
                <span className="h-[7px] w-[7px] rounded-full bg-white" />
                LIVE NOW
              </div>
            ) : null}
          </div>

          <div className="flex flex-1 flex-col p-6">
            <h1 className="font-heading m-0 mb-2 text-2xl font-bold">
              {event?.eventName || "Event"}
            </h1>
            {requiresPassword ? (
              <div className="mb-5 text-[13.5px] text-[#6B6B6B]">
                Private event — password required
              </div>
            ) : null}
            <div className="mb-7 flex flex-col gap-2.5 text-[13.5px] text-[#6B6B6B]">
              <div>
                📅 {formatEventDateTime(event?.eventDate, event?.startTime)}
              </div>
              {event?.location ? <div>📍 {event.location}</div> : null}
            </div>
            {href ? (
              <Link
                href={href}
                className="mt-auto block rounded-full bg-[#FF7A00] p-4 text-center text-base font-bold text-white hover:text-white"
              >
                {requiresPassword ? "Enter Password →" : "▶ Watch Live"}
              </Link>
            ) : null}
          </div>
        </>
      )}
    </div>
  );
}
