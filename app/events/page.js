import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import FooterSimple from "@/components/FooterSimple";
import { publicApi } from "@/lib/api";
import { asEventList, coverSrc, formatEventDate } from "@/lib/event-helpers";

async function loadEvents() {
  try {
    const data = await publicApi.listEvents({ limit: 50 });
    const events = asEventList(data);
    return {
      live: events.filter((e) => e.status === "LIVE"),
      upcoming: events.filter((e) => e.status === "UPCOMING"),
      completed: events.filter((e) => e.status === "COMPLETED" || e.status === "ENDED"),
    };
  } catch {
    return { live: [], upcoming: [], completed: [] };
  }
}

export default async function EventsPage() {
  const { live: LIVE_EVENTS, upcoming: UPCOMING_EVENTS, completed: ARCHIVED_EVENTS } =
    await loadEvents();

  return (
    <div className="overflow-x-clip bg-[#FFFDF9] text-[#252525]">
      <Header active="Events" />

      <section className="px-12 pb-8 pt-[60px] text-center max-lg:px-6 max-sm:px-4">
        <div className="mb-3 text-[13px] font-bold tracking-wide text-[#FF7A00]">
          EVENT DISCOVERY
        </div>
        <h1 className="font-heading m-0 mb-4 text-[42px] font-bold uppercase max-sm:text-[30px]">
          Events
        </h1>
        <p className="mx-auto m-0 max-w-[520px] text-[15px] text-[#6B6B6B]">
          Watch live streams, see what&apos;s coming up, or catch a past event
          on recording.
        </p>
      </section>

      <section className="px-12 pb-5 pt-10 max-lg:px-6">
        <h2 className="font-heading m-0 mb-6 flex items-center gap-2.5 text-[22px] font-bold uppercase">
          <span className="inline-block h-2 w-2 rounded-full bg-[#F52222]" />
          Live Now
        </h2>
        {LIVE_EVENTS.length === 0 ? (
          <p className="m-0 text-[15px] text-[#6B6B6B]">No live events at the moment.</p>
        ) : (
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {LIVE_EVENTS.map((ev) => (
              <Link
                key={ev.eventSlug || ev.id}
                href={`/event/${ev.eventSlug}`}
                className="block overflow-hidden rounded-2xl border border-[#F0E2CC] bg-white text-[#252525] hover:text-[#252525]"
              >
                <div className="relative h-[170px]">
                  <Image
                    src={coverSrc(ev.coverImage)}
                    alt={ev.eventName || "Live event"}
                    fill
                    unoptimized={Boolean(ev.coverImage?.startsWith("http"))}
                    className="object-cover"
                  />
                  <div className="absolute left-3 top-3 flex items-center gap-1.5 rounded-full bg-[#F52222] px-2.5 py-[5px] text-[11px] font-bold text-white">
                    <span className="h-1.5 w-1.5 rounded-full bg-white" />
                    LIVE
                  </div>
                </div>
                <div className="p-[18px]">
                  <div className="mb-1.5 text-[11px] font-bold text-[#FF7A00]">
                    {(ev.eventType || "EVENT").toUpperCase()}
                  </div>
                  <div className="font-heading mb-1 text-[17px] font-semibold">
                    {ev.eventName}
                  </div>
                  <div className="text-[13px] text-[#6B6B6B]">
                    {ev.location || "Location TBA"}
                    {ev.eventDate ? ` · ${formatEventDate(ev.eventDate)?.full}` : ""}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </section>

      <section className="px-12 pb-5 pt-[60px] max-lg:px-6">
        <h2 className="font-heading m-0 mb-6 text-[22px] font-bold uppercase">
          Upcoming
        </h2>
        {UPCOMING_EVENTS.length === 0 ? (
          <p className="m-0 text-[15px] text-[#6B6B6B]">No upcoming events yet.</p>
        ) : (
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {UPCOMING_EVENTS.map((ev) => {
              const date = formatEventDate(ev.eventDate);
              return (
                <Link
                  key={ev.eventSlug || ev.id}
                  href={`/event/${ev.eventSlug}`}
                  className="flex gap-4 rounded-2xl border border-[#F0E2CC] bg-[#FFF4E8] p-5 text-[#252525] hover:text-[#252525]"
                >
                  <div className="w-[60px] flex-shrink-0 rounded-[10px] bg-white py-2.5 text-center">
                    <div className="font-heading text-xl font-bold text-[#FF7A00]">
                      {date?.day || "--"}
                    </div>
                    <div className="text-[10.5px] text-[#6B6B6B]">{date?.month || "TBA"}</div>
                  </div>
                  <div>
                    <div className="mb-1 text-[11px] font-bold text-[#C98700]">
                      {(ev.eventType || "EVENT").toUpperCase()}
                    </div>
                    <div className="font-heading mb-1 text-[15.5px] font-semibold">
                      {ev.eventName}
                    </div>
                    <div className="mb-2.5 text-[12.5px] text-[#6B6B6B]">
                      {ev.location || "Location TBA"}
                    </div>
                    <span className="text-[12.5px] font-bold">View event →</span>
                  </div>
                </Link>
              );
            })}
          </div>
        )}
      </section>

      <section className="px-12 pb-[90px] pt-[60px] max-lg:px-6">
        <h2 className="font-heading m-0 mb-6 text-[22px] font-bold uppercase">
          Event Archive
        </h2>
        {ARCHIVED_EVENTS.length === 0 ? (
          <p className="m-0 text-[15px] text-[#6B6B6B]">
            Recordings will appear here when available.
          </p>
        ) : (
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {ARCHIVED_EVENTS.map((ev) => (
              <Link
                key={ev.eventSlug || ev.id}
                href={`/event/${ev.eventSlug}`}
                className="overflow-hidden rounded-2xl border border-[#F0E2CC] bg-white text-[#252525] hover:text-[#252525]"
              >
                <div className="relative h-[150px]">
                  <Image
                    src={coverSrc(ev.coverImage)}
                    alt={ev.eventName || "Past event"}
                    fill
                    unoptimized={Boolean(ev.coverImage?.startsWith("http"))}
                    className="object-cover grayscale-[0.2]"
                  />
                  <div className="absolute bottom-2.5 right-2.5 rounded-full bg-[rgba(37,37,37,0.65)] px-[9px] py-1 text-[11px] text-white">
                    ▶ Recording
                  </div>
                </div>
                <div className="p-4">
                  <div className="font-heading mb-1 text-[15px] font-semibold">
                    {ev.eventName}
                  </div>
                  <div className="text-[12.5px] text-[#6B6B6B]">
                    {formatEventDate(ev.eventDate)?.full || "Past event"}
                    {ev.location ? ` · ${ev.location}` : ""}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </section>

      <FooterSimple />
    </div>
  );
}
