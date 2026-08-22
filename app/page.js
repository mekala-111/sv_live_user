import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { publicApi } from "@/lib/api";
import { asEventList, coverSrc, formatEventDate } from "@/lib/event-helpers";

const STATS = [
  { value: "1500+", label: "Events Delivered" },
  { value: "500+", label: "Happy Clients" },
  { value: "10+", label: "Years Experience" },
  { value: "24/7", label: "Support" },
];

const SERVICES = [
  {
    image: "/uploads/Photography.png",
    alt: "Photographer capturing a wedding stage",
    title: "Photography",
    desc: "Premium event photography for weddings, corporate functions and concerts.",
  },
  {
    image: "/uploads/liveStreaming.png",
    alt: "Multi-camera live streaming setup",
    title: "Live Streaming",
    desc: "Multi-camera live production streamed to YouTube, Facebook and private links.",
  },
  {
    image: "/uploads/drone.png",
    alt: "Drone flying above a lit outdoor stage",
    title: "Drone Coverage",
    desc: "Aerial cinematography for venues, processions and large-scale events.",
  },
  {
    image: "/uploads/led_streaming.png",
    alt: "LED wall backdrop on a concert stage",
    title: "LED Screens",
    desc: "Indoor and outdoor LED wall rental with full visual programming.",
  },
  {
    image: "/uploads/event-coverage.png",
    alt: "Visual jockey mixing live show visuals",
    title: "Visual Jockey",
    desc: "Real-time visual mixing synced to music, speeches and stage cues.",
  },
  {
    image: "/uploads/video-production.png",
    alt: "Cinema camera filming a live performance",
    title: "Videography",
    desc: "Cinematic highlight films and full-length event documentation.",
  },
];

const WHY_POINTS = [
  { title: "HD / 4K Streaming", desc: "Crisp video at every bandwidth tier." },
  { title: "Multi-Camera", desc: "Up to 8 synchronized camera feeds." },
  { title: "Low Latency", desc: "Near real-time delivery to viewers." },
  { title: "Secure Streaming", desc: "Password-protected private events." },
  { title: "Cloud Recording", desc: "Every stream saved and downloadable." },
  { title: "24/7 Support", desc: "On-call technical crew on event day." },
];

async function loadHomeEvents() {
  try {
    const data = await publicApi.listEvents({ limit: 50 });
    const events = asEventList(data);
    return {
      live: events.filter((e) => e.status === "LIVE"),
      upcoming: events.filter((e) => e.status === "UPCOMING"),
    };
  } catch {
    return { live: [], upcoming: [] };
  }
}

export default async function HomePage() {
  const { live: LIVE_EVENTS, upcoming: UPCOMING_EVENTS } = await loadHomeEvents();

  return (
    <div className="overflow-x-clip bg-[#FFFDF9] text-[#252525]">
      <Header active="Home" />

      {/* HERO */}
      <section className="relative flex min-h-[640px] items-center max-sm:min-h-0">
        <Image
          src="/uploads/bg.png"
          alt="Live event production crew filming a concert stage"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,#FFFDF9_0%,rgba(255,253,249,0.9)_32%,rgba(255,253,249,0.35)_65%,transparent_100%)] max-sm:bg-[linear-gradient(180deg,#FFFDF9_0%,rgba(255,253,249,0.94)_58%,rgba(255,253,249,0.55)_100%)]" />
        <div className="relative z-[2] max-w-[640px] px-12 pb-[60px] pt-10 max-lg:px-6 max-sm:px-4 max-sm:pb-10">
          <div className="mb-5 inline-flex max-w-full items-center gap-2 rounded-full border border-[#F52222] bg-[#FFE4C7] px-3.5 py-1.5 text-xs font-bold tracking-wide text-[#F52222]">
            <span className="inline-block h-[7px] w-[7px] shrink-0 rounded-full bg-[#F52222]" />
            LIVE NOW · {LIVE_EVENTS.length} EVENT{LIVE_EVENTS.length === 1 ? "" : "S"} STREAMING
          </div>
          <h1 className="font-heading m-0 mb-5 text-[56px] font-bold uppercase leading-[1.05] text-[#252525] max-sm:text-[32px]">
            Every Moment.
            <br />
            <span className="text-[#FF7A00]">Streamed Live.</span>
          </h1>
          <p className="m-0 mb-8 max-w-[500px] text-base leading-relaxed text-[#6B6B6B]">
            Multi-camera production, drone cinematography, LED walls and
            professional live streaming for weddings, concerts, corporate
            events and conferences.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-4">
            <Link
              href="/book"
              className="rounded-full bg-[#FF7A00] px-[30px] py-4 text-center text-[15px] font-bold text-white hover:text-white"
            >
              Book Your Event →
            </Link>
            <Link
              href="/events"
              className="inline-flex items-center justify-center gap-2.5 rounded-full border-[1.5px] border-[#E0D3BC] bg-white px-[30px] py-4 text-[15px] font-semibold text-[#252525] hover:text-[#252525]"
            >
              ▶ Watch Live Now
            </Link>
          </div>
          <div className="mt-14 grid grid-cols-2 gap-6 sm:flex sm:flex-wrap sm:gap-10">
            {STATS.map((stat) => (
              <div key={stat.label}>
                <div className="font-heading text-[30px] font-bold text-[#FF7A00]">
                  {stat.value}
                </div>
                <div className="text-xs tracking-[0.3px] text-[#6B6B6B]">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LIVE NOW */}
      <section id="live" className="bg-[#FFF4E8] px-12 py-[90px] max-lg:px-6 max-sm:px-4 max-sm:py-14">
        <div className="mb-10 flex flex-wrap items-baseline justify-between gap-4">
          <h2 className="font-heading m-0 text-[34px] font-bold uppercase max-sm:text-[26px]">
            Live Now
          </h2>
          <Link href="/events" className="text-sm font-semibold">
            View all live events →
          </Link>
        </div>
        {LIVE_EVENTS.length === 0 ? (
          <p className="m-0 text-[15px] text-[#6B6B6B]">No live events right now. Check back soon.</p>
        ) : (
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {LIVE_EVENTS.map((ev) => (
              <div
                key={ev.eventSlug || ev.id}
                className="overflow-hidden rounded-2xl border border-[#F0E2CC] bg-white shadow-[0_2px_10px_rgba(37,37,37,0.05)]"
              >
                <div className="relative h-[180px]">
                  <Image
                    src={coverSrc(ev.coverImage)}
                    alt={ev.eventName || "Live event"}
                    fill
                    unoptimized={Boolean(ev.coverImage?.startsWith("http"))}
                    className="object-cover"
                  />
                  <div className="absolute left-3 top-3 flex items-center gap-1.5 rounded-full bg-[#F52222] px-2.5 py-1 text-[11px] font-bold tracking-wide text-white">
                    <span className="h-1.5 w-1.5 rounded-full bg-white" />
                    LIVE
                  </div>
                </div>
                <div className="p-5">
                  <div className="mb-1.5 text-xs font-bold tracking-wide text-[#FF7A00]">
                    {(ev.eventType || "EVENT").toUpperCase()}
                  </div>
                  <div className="font-heading mb-2 text-[19px] font-semibold">
                    {ev.eventName}
                  </div>
                  <div className="mb-4 text-[13px] text-[#6B6B6B]">
                    {ev.location || "Location TBA"}
                  </div>
                  <Link
                    href={`/event/${ev.eventSlug}`}
                    className="block rounded-[10px] bg-[#FFE4C7] p-3 text-center text-sm font-semibold text-[#252525] hover:text-[#252525]"
                  >
                    Watch Live
                  </Link>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* FEATURED EVENTS */}
      <section className="bg-[#FFFDF9] px-12 py-[90px] max-lg:px-6 max-sm:px-4 max-sm:py-14">
        <div className="mb-10 flex flex-wrap items-baseline justify-between gap-4">
          <h2 className="font-heading m-0 text-[34px] font-bold uppercase max-sm:text-[26px]">
            Featured Events
          </h2>
          <Link href="/events" className="text-sm font-semibold">
            View all events →
          </Link>
        </div>
        {UPCOMING_EVENTS.length === 0 ? (
          <p className="m-0 text-[15px] text-[#6B6B6B]">No upcoming events listed yet.</p>
        ) : (
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {UPCOMING_EVENTS.map((ev) => {
              const date = formatEventDate(ev.eventDate);
              return (
                <div
                  key={ev.eventSlug || ev.id}
                  className="flex gap-[18px] rounded-2xl border border-[#F0E2CC] bg-white p-5"
                >
                  <div className="w-16 flex-shrink-0 rounded-[10px] bg-[#FFF4E8] py-2.5 text-center">
                    <div className="font-heading text-[22px] font-bold text-[#FF7A00]">
                      {date?.day || "--"}
                    </div>
                    <div className="text-[11px] tracking-wide text-[#6B6B6B]">
                      {date?.month || "TBA"}
                    </div>
                  </div>
                  <div>
                    <div className="mb-1.5 text-[11px] font-bold tracking-wide text-[#C98700]">
                      {(ev.eventType || "EVENT").toUpperCase()}
                    </div>
                    <div className="font-heading mb-1.5 text-[17px] font-semibold">
                      {ev.eventName}
                    </div>
                    <div className="mb-3 text-[13px] text-[#6B6B6B]">
                      {ev.location || "Location TBA"}
                    </div>
                    <Link href={`/event/${ev.eventSlug}`} className="text-[13px] font-bold">
                      View event →
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </section>

      {/* SERVICES */}
      <section id="services" className="bg-[#FFF4E8] px-12 py-[90px] max-lg:px-6 max-sm:px-4 max-sm:py-14">
        <div className="mx-auto mb-14 max-w-[600px] text-center">
          <div className="mb-3 text-[13px] font-bold tracking-wide text-[#FF7A00]">
            WHAT WE DO
          </div>
          <h2 className="font-heading m-0 text-[34px] font-bold uppercase max-sm:text-[26px]">
            Full-Service Event Production
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((svc) => (
            <div
              key={svc.title}
              className="overflow-hidden rounded-2xl border border-[#F0E2CC] bg-white"
            >
              <div className="relative h-40 overflow-hidden">
                <Image src={svc.image} alt={svc.alt} fill className="object-cover" />
              </div>
              <div className="p-6">
                <div className="font-heading mb-2.5 text-[19px] font-semibold">
                  {svc.title}
                </div>
                <div className="text-sm leading-relaxed text-[#6B6B6B]">
                  {svc.desc}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* WHY SV LIVE */}
      <section className="bg-[#FFFDF9] px-12 py-[90px] max-lg:px-6 max-sm:px-4 max-sm:py-14">
        <div className="grid grid-cols-[0.9fr_1.1fr] items-center gap-16 max-lg:grid-cols-1 max-lg:gap-8">
          <div>
            <div className="mb-3 text-[13px] font-bold tracking-wide text-[#FF7A00]">
              WHY SV LIVE
            </div>
            <h2 className="font-heading m-0 mb-5 text-[34px] font-bold uppercase leading-[1.15] max-sm:text-[26px]">
              Built For Reliability On Event Day
            </h2>
            <p className="m-0 text-[15px] leading-relaxed text-[#6B6B6B]">
              Redundant equipment, trained crews and tested streaming
              pipelines — so your broadcast stays live from the first camera
              cue to the final frame.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-5 max-sm:grid-cols-1">
            {WHY_POINTS.map((pt) => (
              <div
                key={pt.title}
                className="rounded-[14px] border border-[#F0E2CC] bg-[#FFF4E8] p-[22px]"
              >
                <div className="font-heading mb-1.5 text-base font-semibold text-[#252525]">
                  {pt.title}
                </div>
                <div className="text-[13px] leading-relaxed text-[#6B6B6B]">
                  {pt.desc}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        id="book"
        className="relative overflow-hidden px-12 py-[100px] text-center max-lg:px-6 max-sm:px-4 max-sm:py-16"
      >
        <Image
          src="/uploads/drone.png"
          alt="Drone aerial view of a lit outdoor event stage at dusk"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[rgba(255,253,249,0.86)]" />
        <div className="relative z-[2] mx-auto max-w-[640px]">
          <h2 className="font-heading m-0 mb-4 text-[38px] font-bold uppercase text-[#252525] max-sm:text-[26px]">
            Let&apos;s Make Your Event Unforgettable
          </h2>
          <p className="m-0 mb-8 text-[15.5px] leading-relaxed text-[#6B6B6B]">
            Tell us your event date, location and requirements — we&apos;ll
            send a custom quote within 24 hours.
          </p>
          <div className="flex flex-col justify-center gap-3 sm:flex-row sm:flex-wrap sm:gap-4">
            <Link
              href="/book"
              className="rounded-full bg-[#FF7A00] px-[34px] py-4 text-center text-[15px] font-bold text-white hover:text-white"
            >
              Request a Quote →
            </Link>
            <a
              href="tel:9397364040"
              className="rounded-full border-[1.5px] border-[#E0D3BC] bg-white px-[34px] py-4 text-center text-[15px] font-semibold text-[#252525] hover:text-[#252525]"
            >
              Call 93973 64040
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
