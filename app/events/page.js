import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import FooterSimple from "@/components/FooterSimple";

const TABS = [
  { label: "All", active: "#FF7A00", color: "#FFFFFF" },
  { label: "Live", active: "#FFFFFF", color: "#252525" },
  { label: "Upcoming", active: "#FFFFFF", color: "#252525" },
  { label: "Completed", active: "#FFFFFF", color: "#252525" },
];

const LIVE_EVENTS = [
  {
    image: "/uploads/Portfolio.png",
    alt: "Wedding ceremony coverage",
    category: "WEDDING",
    title: "Rahul & Priya — Wedding Ceremony",
    location: "Hyderabad",
    date: "Today",
    viewers: "2,340",
  },
  {
    image: "/uploads/event-coverage.png",
    alt: "Concert stage with lighting",
    category: "CONCERT",
    title: "Summer Beats Music Festival",
    location: "Vijayawada",
    date: "Today",
    viewers: "8,120",
  },
  {
    image: "/uploads/liveStreaming.png",
    alt: "Corporate summit control room",
    category: "CORPORATE",
    title: "Annual Leadership Summit",
    location: "Bengaluru",
    date: "Today",
    viewers: "640",
  },
];

const UPCOMING_EVENTS = [
  {
    day: "22",
    month: "AUG",
    category: "SPIRITUAL",
    title: "Ganesh Chaturthi Celebrations",
    location: "Vijayawada",
  },
  {
    day: "30",
    month: "AUG",
    category: "CORPORATE",
    title: "Product Launch — TechNova",
    location: "Hyderabad",
  },
  {
    day: "06",
    month: "SEP",
    category: "WEDDING",
    title: "Anil & Divya — Wedding Live",
    location: "Guntur",
  },
];

const ARCHIVED_EVENTS = [
  {
    image: "/uploads/hero-1.png",
    alt: "Past wedding celebration recording",
    title: "Karthik & Meena Wedding",
    date: "Jul 2026",
    location: "Vizag",
  },
  {
    image: "/uploads/hero-2.png",
    alt: "Past corporate event recording",
    title: "TechNova Annual Meet 2025",
    date: "Dec 2025",
    location: "Hyderabad",
  },
  {
    image: "/uploads/hero-cinematic.png",
    alt: "Past concert event recording",
    title: "New Year Music Fest",
    date: "Jan 2026",
    location: "Vijayawada",
  },
];

export default function EventsPage() {
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

      <section className="flex flex-col items-stretch gap-3 px-12 pb-6 max-lg:px-6 max-sm:px-4 sm:flex-row sm:flex-wrap sm:justify-center">
        {TABS.map((tab) => (
          <div
            key={tab.label}
            style={{ background: tab.active, color: tab.color }}
            className="rounded-full border border-[#F0E2CC] px-[22px] py-2.5 text-center text-sm font-bold"
          >
            {tab.label}
          </div>
        ))}
        <input
          type="text"
          placeholder="Search events..."
          className="w-full rounded-full border border-[#E0D3BC] bg-white px-[18px] py-2.5 text-sm sm:ml-3 sm:w-[220px]"
        />
      </section>

      <section className="px-12 pb-5 pt-10 max-lg:px-6">
        <h2 className="font-heading m-0 mb-6 flex items-center gap-2.5 text-[22px] font-bold uppercase">
          <span className="inline-block h-2 w-2 rounded-full bg-[#F52222]" />
          Live Now
        </h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {LIVE_EVENTS.map((ev) => (
            <Link
              key={ev.title}
              href="/event/rahul-priya-wedding"
              className="block overflow-hidden rounded-2xl border border-[#F0E2CC] bg-white text-[#252525] hover:text-[#252525]"
            >
              <div className="relative h-[170px]">
                <Image
                  src={ev.image}
                  alt={ev.alt}
                  fill
                  className="object-cover"
                />
                <div className="absolute left-3 top-3 flex items-center gap-1.5 rounded-full bg-[#F52222] px-2.5 py-[5px] text-[11px] font-bold text-white">
                  <span className="h-1.5 w-1.5 rounded-full bg-white" />
                  LIVE
                </div>
                <div className="absolute bottom-3 right-3 rounded-full bg-[rgba(37,37,37,0.65)] px-2.5 py-[5px] text-xs text-white">
                  👁 {ev.viewers}
                </div>
              </div>
              <div className="p-[18px]">
                <div className="mb-1.5 text-[11px] font-bold text-[#FF7A00]">
                  {ev.category}
                </div>
                <div className="font-heading mb-1 text-[17px] font-semibold">
                  {ev.title}
                </div>
                <div className="text-[13px] text-[#6B6B6B]">
                  {ev.location} · {ev.date}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="px-12 pb-5 pt-[60px] max-lg:px-6">
        <h2 className="font-heading m-0 mb-6 text-[22px] font-bold uppercase">
          Upcoming
        </h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {UPCOMING_EVENTS.map((ev) => (
            <div
              key={ev.title}
              className="flex gap-4 rounded-2xl border border-[#F0E2CC] bg-[#FFF4E8] p-5"
            >
              <div className="w-[60px] flex-shrink-0 rounded-[10px] bg-white py-2.5 text-center">
                <div className="font-heading text-xl font-bold text-[#FF7A00]">
                  {ev.day}
                </div>
                <div className="text-[10.5px] text-[#6B6B6B]">{ev.month}</div>
              </div>
              <div>
                <div className="mb-1 text-[11px] font-bold text-[#C98700]">
                  {ev.category}
                </div>
                <div className="font-heading mb-1 text-[15.5px] font-semibold">
                  {ev.title}
                </div>
                <div className="mb-2.5 text-[12.5px] text-[#6B6B6B]">
                  {ev.location}
                </div>
                <a href="#" className="text-[12.5px] font-bold">
                  Set Reminder →
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="px-12 pb-[90px] pt-[60px] max-lg:px-6">
        <h2 className="font-heading m-0 mb-6 text-[22px] font-bold uppercase">
          Event Archive
        </h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {ARCHIVED_EVENTS.map((ev) => (
            <div
              key={ev.title}
              className="overflow-hidden rounded-2xl border border-[#F0E2CC] bg-white"
            >
              <div className="relative h-[150px]">
                <Image
                  src={ev.image}
                  alt={ev.alt}
                  fill
                  className="object-cover grayscale-[0.2]"
                />
                <div className="absolute bottom-2.5 right-2.5 rounded-full bg-[rgba(37,37,37,0.65)] px-[9px] py-1 text-[11px] text-white">
                  ▶ Recording
                </div>
              </div>
              <div className="p-4">
                <div className="font-heading mb-1 text-[15px] font-semibold">
                  {ev.title}
                </div>
                <div className="text-[12.5px] text-[#6B6B6B]">
                  {ev.date} · {ev.location}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <FooterSimple />
    </div>
  );
}
