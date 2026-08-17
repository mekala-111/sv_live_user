import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import FooterSimple from "@/components/FooterSimple";

const SLUGS = [
  "wedding-live-streaming",
  "corporate-events",
  "concerts-music",
  "spiritual-events",
  "sports-events",
  "private-events",
  "conference-seminars",
  "product-launches",
  "multi-camera-production",
  "social-media-streaming",
];

const FEATURES = [
  {
    title: "Multi-Camera Setup",
    desc: "2-4 cameras covering the mandap, altar and reception stage.",
  },
  {
    title: "HD / 4K Streaming",
    desc: "Clear video quality across all connection speeds.",
  },
  {
    title: "Private Access",
    desc: "Password-protected link shared only with invited guests.",
  },
  {
    title: "Global Viewers",
    desc: "Family overseas can watch live in their own time zone.",
  },
];

const STEPS = [
  {
    num: "01",
    title: "Book",
    desc: "Confirm your date, venue and guest streaming needs.",
  },
  {
    num: "02",
    title: "Site Visit",
    desc: "We plan camera positions and connectivity in advance.",
  },
  {
    num: "03",
    title: "Go Live",
    desc: "Multi-camera crew streams the ceremony in real time.",
  },
  {
    num: "04",
    title: "Recording Delivered",
    desc: "Full recording shared after the event.",
  },
];

const INCLUDED = [
  "Up to 4 cameras with a live switching operator",
  "Dedicated streaming technician on-site",
  "Private, password-protected viewing link",
  "HD streaming with backup internet connection",
  "Full-length cloud recording",
  "Support call before the event to confirm setup",
];

const GALLERY = [
  {
    src: "/uploads/Portfolio.png",
    alt: "Bride and groom at a floral wedding stage",
    span: 2,
  },
  {
    src: "/uploads/aboutus.png",
    alt: "Wedding stage photographer at work",
    span: 1,
  },
  {
    src: "/uploads/hero-1.png",
    alt: "Wedding celebration with stage lighting",
    span: 1,
  },
  {
    src: "/uploads/hero-2.png",
    alt: "Wedding event coverage crew",
    span: 1,
  },
];

const BENEFITS = [
  {
    title: "No One Misses The Moment",
    desc: "Guests who can't travel still feel present.",
  },
  {
    title: "Stress-Free On The Day",
    desc: "Our crew handles setup so your family can focus on the wedding.",
  },
  {
    title: "Keep It Forever",
    desc: "Full recording delivered after the event to revisit anytime.",
  },
];

const FAQS = [
  {
    question: "How many guests can watch at once?",
    answer:
      "There is no fixed limit — the private link supports large numbers of simultaneous viewers.",
  },
  {
    question: "Can the stream be password protected?",
    answer:
      "Yes, every wedding stream is private by default and shared only with a link and PIN you distribute.",
  },
  {
    question: "What if our venue has weak internet?",
    answer:
      "We bring a backup mobile connection so the stream stays live even if venue Wi-Fi drops.",
  },
  {
    question: "Do we get a recording afterward?",
    answer:
      "Yes, a full recording is saved to the cloud and shared with you within 48 hours.",
  },
  {
    question: "How far in advance should we book?",
    answer:
      "We recommend booking at least 3-4 weeks ahead, especially during wedding season.",
  },
];

export function generateStaticParams() {
  return SLUGS.map((slug) => ({ slug }));
}

export default async function ServiceDetailPage({ params }) {
  await params;

  return (
    <div className="overflow-x-clip bg-[#FFFDF9] text-[#252525]">
      <Header active="Services" />

      <div className="px-12 pt-[18px] text-[13px] text-[#6B6B6B] max-lg:px-6">
        <Link href="/services" className="text-[#6B6B6B]">
          Services
        </Link>{" "}
        / <span className="text-[#252525]">Wedding Live Streaming</span>
      </div>

      <section className="relative mt-[18px] flex min-h-[480px] items-center">
        <Image
          src="/uploads/Portfolio.png"
          alt="Photographer capturing a wedding ceremony under floral decor"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,#FFFDF9_0%,rgba(255,253,249,0.9)_35%,rgba(255,253,249,0.3)_68%,transparent_100%)] max-sm:bg-[linear-gradient(180deg,#FFFDF9_0%,rgba(255,253,249,0.94)_70%,rgba(255,253,249,0.55)_100%)]" />
        <div className="relative z-[2] max-w-[600px] px-12 pb-[60px] pt-10 max-lg:px-6 max-sm:px-4">
          <div className="mb-3.5 text-[13px] font-bold tracking-wide text-[#FF7A00]">
            WEDDING SERVICES
          </div>
          <h1 className="font-heading m-0 mb-[18px] text-[46px] font-bold uppercase leading-[1.08] max-sm:text-[32px]">
            Wedding Live Streaming
          </h1>
          <p className="m-0 mb-7 max-w-[480px] text-[15.5px] leading-relaxed text-[#6B6B6B]">
            Let family and friends anywhere in the world watch the ceremony
            as it happens — in HD, with private, secure access.
          </p>
          <Link
            href="/book"
            className="inline-block rounded-full bg-[#FF7A00] px-[30px] py-4 text-[15px] font-bold text-white hover:text-white"
          >
            Book Now →
          </Link>
        </div>
      </section>

      <section className="mx-auto max-w-[720px] px-12 py-20 max-lg:px-6">
        <h2 className="font-heading m-0 mb-5 text-[28px] font-bold uppercase">
          A Front-Row Seat, From Anywhere
        </h2>
        <p className="m-0 mb-4 text-[15.5px] leading-relaxed text-[#6B6B6B]">
          Our wedding streaming team covers every key moment of your
          ceremony and reception with a multi-camera setup, so nothing is
          missed — the entrance, the vows, the rituals, and the celebration
          after.
        </p>
        <p className="m-0 text-[15.5px] leading-relaxed text-[#6B6B6B]">
          The stream is shared through a private, password-protected link,
          so only invited guests can watch. Every stream is recorded and
          made available afterward.
        </p>
      </section>

      <section className="bg-[#FFF4E8] px-12 pb-[90px] pt-20 max-lg:px-6">
        <div className="mx-auto mb-12 max-w-[600px] text-center">
          <div className="mb-3 text-[13px] font-bold tracking-wide text-[#FF7A00]">
            FEATURES
          </div>
          <h2 className="font-heading m-0 text-[32px] font-bold uppercase">
            What You Get
          </h2>
        </div>
        <div className="grid grid-cols-4 gap-5 max-lg:grid-cols-2 max-sm:grid-cols-1">
          {FEATURES.map((f) => (
            <div
              key={f.title}
              className="rounded-[14px] border border-[#F0E2CC] bg-white p-[22px]"
            >
              <div className="font-heading mb-2 text-base font-semibold">
                {f.title}
              </div>
              <div className="text-[13px] leading-relaxed text-[#6B6B6B]">
                {f.desc}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="px-12 py-[90px] max-lg:px-6">
        <div className="mx-auto mb-12 max-w-[600px] text-center">
          <div className="mb-3 text-[13px] font-bold tracking-wide text-[#C98700]">
            HOW IT WORKS
          </div>
          <h2 className="font-heading m-0 text-[32px] font-bold uppercase">
            Simple, Start To Finish
          </h2>
        </div>
        <div className="grid grid-cols-4 gap-6 max-lg:grid-cols-2 max-sm:grid-cols-1">
          {STEPS.map((step) => (
            <div key={step.num} className="px-3 text-center">
              <div className="font-heading mb-2.5 text-[38px] font-bold text-[#FFE4C7]">
                {step.num}
              </div>
              <div className="font-heading mb-1.5 text-[17px] font-semibold">
                {step.title}
              </div>
              <div className="text-[13.5px] leading-relaxed text-[#6B6B6B]">
                {step.desc}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-[#FFF4E8] px-12 pb-[90px] pt-20 max-lg:px-6">
        <div className="grid grid-cols-2 items-center gap-16 max-lg:grid-cols-1">
          <div className="relative h-[360px] overflow-hidden rounded-[18px] max-lg:h-[280px]">
            <Image
              src="/uploads/liveStreaming.png"
              alt="Multi-camera live streaming control setup"
              fill
              className="object-cover"
            />
          </div>
          <div>
            <div className="mb-3 text-[13px] font-bold tracking-wide text-[#FF7A00]">
              WHAT&apos;S INCLUDED
            </div>
            <h2 className="font-heading m-0 mb-5 text-[28px] font-bold uppercase">
              Every Package Includes
            </h2>
            <div className="flex flex-col gap-3.5">
              {INCLUDED.map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <div className="mt-[7px] h-2 w-2 flex-shrink-0 rounded-full bg-[#FF7A00]" />
                  <div className="text-[14.5px] text-[#252525]">{item}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="px-12 py-[90px] max-lg:px-6">
        <div className="mx-auto mb-12 max-w-[600px] text-center">
          <div className="mb-3 text-[13px] font-bold tracking-wide text-[#FF7A00]">
            GALLERY
          </div>
          <h2 className="font-heading m-0 text-[32px] font-bold uppercase">
            From Recent Weddings
          </h2>
        </div>
        <div className="grid grid-cols-4 auto-rows-[160px] gap-4 max-lg:grid-cols-2 max-sm:grid-cols-1 max-sm:auto-rows-[200px]">
          {GALLERY.map((g) => (
            <div
              key={g.src}
              className={`relative overflow-hidden rounded-xl ${
                g.span === 2 ? "row-span-2 max-sm:row-span-1" : ""
              }`}
            >
              <Image src={g.src} alt={g.alt} fill className="object-cover" />
            </div>
          ))}
        </div>
      </section>

      <section className="bg-[#FFF4E8] px-12 pb-[90px] pt-20 max-lg:px-6">
        <div className="mx-auto mb-12 max-w-[600px] text-center">
          <div className="mb-3 text-[13px] font-bold tracking-wide text-[#C98700]">
            BENEFITS
          </div>
          <h2 className="font-heading m-0 text-[32px] font-bold uppercase">
            Why Couples Choose Us
          </h2>
        </div>
        <div className="grid grid-cols-3 gap-5 max-lg:grid-cols-1">
          {BENEFITS.map((b) => (
            <div
              key={b.title}
              className="rounded-[14px] border border-[#F0E2CC] bg-white p-6 text-center"
            >
              <div className="font-heading mb-2 text-[17px] font-semibold">
                {b.title}
              </div>
              <div className="text-[13.5px] leading-relaxed text-[#6B6B6B]">
                {b.desc}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-[720px] px-12 py-[90px] max-lg:px-6">
        <div className="mb-10 text-center">
          <div className="mb-3 text-[13px] font-bold tracking-wide text-[#FF7A00]">
            FAQ
          </div>
          <h2 className="font-heading m-0 text-[32px] font-bold uppercase">
            Common Questions
          </h2>
        </div>
        <div className="flex flex-col gap-4">
          {FAQS.map((q) => (
            <div
              key={q.question}
              className="rounded-xl border border-[#F0E2CC] bg-[#FFF4E8] px-6 py-5"
            >
              <div className="mb-2 text-[15px] font-semibold">
                {q.question}
              </div>
              <div className="text-sm leading-relaxed text-[#6B6B6B]">
                {q.answer}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="relative overflow-hidden px-12 py-[90px] text-center max-lg:px-6">
        <Image
          src="/uploads/drone.png"
          alt="Drone aerial view of a lit outdoor event stage at dusk"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[rgba(255,253,249,0.86)]" />
        <div className="relative z-[2] mx-auto max-w-[600px]">
          <h2 className="font-heading m-0 mb-4 text-[34px] font-bold uppercase">
            Ready To Stream Your Wedding?
          </h2>
          <p className="m-0 mb-7 text-[15px] leading-relaxed text-[#6B6B6B]">
            Share your date and venue — we&apos;ll send a custom package
            within 24 hours.
          </p>
          <Link
            href="/book"
            className="rounded-full bg-[#FF7A00] px-[34px] py-4 text-[15px] font-bold text-white hover:text-white"
          >
            Book Now →
          </Link>
        </div>
      </section>

      <FooterSimple />
    </div>
  );
}
