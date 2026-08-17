import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import FooterSimple from "@/components/FooterSimple";

const SERVICES = [
  {
    image: "/uploads/Portfolio.png",
    alt: "Wedding ceremony photography",
    title: "Wedding Live Streaming",
    desc: "Multi-camera coverage for ceremonies and receptions, streamed privately to family anywhere.",
    href: "/services/wedding-live-streaming",
  },
  {
    image: "/uploads/liveStreaming.png",
    alt: "Corporate conference control room",
    title: "Corporate Events",
    desc: "Conferences, meetings and product launches with reliable multi-camera production.",
    href: "/services/corporate-events",
  },
  {
    image: "/uploads/event-coverage.png",
    alt: "Concert stage with lighting and confetti",
    title: "Concerts & Music",
    desc: "Full stage production coverage with live graphics and audience shots.",
    href: "/services/concerts-music",
  },
  {
    image: "/uploads/led_streaming.png",
    alt: "LED wall backdrop for a stage event",
    title: "Spiritual Events",
    desc: "Temple functions and religious celebrations streamed to devotees worldwide.",
    href: "/services/spiritual-events",
  },
  {
    image: "/uploads/video-production.png",
    alt: "Camera filming a live sports event",
    title: "Sports Events",
    desc: "Multi-camera coverage with live commentary for tournaments and matches.",
    href: "/services/sports-events",
  },
  {
    image: "/uploads/drone.png",
    alt: "Aerial drone above an outdoor gathering",
    title: "Private Events",
    desc: "Birthdays, engagements and family functions with secure, password-protected streaming.",
    href: "/services/private-events",
  },
  {
    image: "/uploads/liveStreaming.png",
    alt: "Multi-camera switcher setup",
    title: "Conference & Seminars",
    desc: "Professional streaming for panels, seminars and speaker sessions.",
    href: "/services/conference-seminars",
  },
  {
    image: "/uploads/Photography.png",
    alt: "Photographer at a product launch",
    title: "Product Launches",
    desc: "Camera and streaming coverage for brand reveals and launch events.",
    href: "/services/product-launches",
  },
  {
    image: "/uploads/event-coverage.png",
    alt: "Multi-camera live production crew",
    title: "Multi-Camera Production",
    desc: "Up to 8 synchronized cameras switched live for any event format.",
    href: "/services/multi-camera-production",
  },
  {
    image: "/uploads/video-production.png",
    alt: "Videographer filming for social media",
    title: "Social Media Streaming",
    desc: "Simultaneous streaming to YouTube, Facebook and Instagram.",
    href: "/services/social-media-streaming",
  },
];

export default function ServicesPage() {
  return (
    <div className="overflow-x-clip bg-[#FFFDF9] text-[#252525]">
      <Header active="Services" />

      <section className="px-12 pb-14 pt-[72px] text-center max-lg:px-6 max-sm:px-4">
        <div className="mb-3 text-[13px] font-bold tracking-wide text-[#FF7A00]">
          WHAT WE DO
        </div>
        <h1 className="font-heading m-0 mb-4 text-[44px] font-bold uppercase max-sm:text-[32px]">
          Our Services
        </h1>
        <p className="mx-auto m-0 max-w-[560px] text-[15.5px] leading-relaxed text-[#6B6B6B]">
          Full-service photography, videography, drone coverage, LED walls
          and multi-camera live streaming — tailored to your event type.
        </p>
      </section>

      <section className="px-12 pb-[100px] max-lg:px-6 max-sm:px-4">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((svc) => (
            <Link
              key={svc.title}
              href={svc.href}
              className="block overflow-hidden rounded-2xl border border-[#F0E2CC] bg-white text-[#252525] shadow-[0_2px_10px_rgba(37,37,37,0.05)] hover:text-[#252525]"
            >
              <div className="relative h-[170px] overflow-hidden">
                <Image
                  src={svc.image}
                  alt={svc.alt}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-[22px]">
                <div className="font-heading mb-2 text-lg font-semibold">
                  {svc.title}
                </div>
                <div className="mb-3.5 text-[13.5px] leading-relaxed text-[#6B6B6B]">
                  {svc.desc}
                </div>
                <div className="text-[13px] font-bold text-[#FF7A00]">
                  Learn more →
                </div>
              </div>
            </Link>
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
            Not Sure Which Service You Need?
          </h2>
          <p className="m-0 mb-7 text-[15px] leading-relaxed text-[#6B6B6B]">
            Tell us about your event and we&apos;ll recommend the right setup.
          </p>
          <Link
            href="/book"
            className="rounded-full bg-[#FF7A00] px-[34px] py-4 text-[15px] font-bold text-white hover:text-white"
          >
            Request a Quote →
          </Link>
        </div>
      </section>

      <FooterSimple />
    </div>
  );
}
