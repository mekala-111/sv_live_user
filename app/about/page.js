import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import FooterSimple from "@/components/FooterSimple";

const STATS = [
  { value: "1500+", label: "Events Delivered" },
  { value: "500+", label: "Happy Clients" },
  { value: "10+", label: "Years Experience" },
  { value: "24/7", label: "Support" },
];

const TEAM = [
  { initials: "SN", name: "Suman Narsing", role: "Founder & Lead Producer" },
  { initials: "RK", name: "Ravi Kumar", role: "Technical Director" },
  { initials: "AP", name: "Anitha P.", role: "Production Manager" },
  { initials: "VJ", name: "Vikram J.", role: "Visual Jockey" },
];

export default function AboutPage() {
  return (
    <div className="overflow-x-clip bg-[#FFFDF9] text-[#252525]">
      <Header active="About" />

      <section className="relative flex min-h-[420px] items-center">
        <Image
          src="/uploads/aboutus.png"
          alt="Photographer at work behind a stage light"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,#FFFDF9_0%,rgba(255,253,249,0.9)_38%,rgba(255,253,249,0.25)_70%,transparent_100%)] max-sm:bg-[linear-gradient(180deg,#FFFDF9_0%,rgba(255,253,249,0.94)_70%,rgba(255,253,249,0.55)_100%)]" />
        <div className="relative z-[2] max-w-[560px] px-12 py-10 max-lg:px-6 max-sm:px-4">
          <div className="mb-3.5 text-[13px] font-bold tracking-wide text-[#FF7A00]">
            WHO WE ARE
          </div>
          <h1 className="font-heading m-0 mb-[18px] text-[42px] font-bold uppercase leading-[1.1] max-sm:text-[30px]">
            Every Event, Captured Right
          </h1>
          <p className="m-0 text-[15px] leading-[1.6] text-[#6B6B6B]">
            SV Live Events is a full-service event production company
            covering photography, videography, drone cinematography, LED
            walls and multi-camera live streaming.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-[720px] px-12 py-20 max-lg:px-6 max-sm:px-4 max-sm:py-12">
        <h2 className="font-heading m-0 mb-5 text-[28px] font-bold uppercase">
          Our Story
        </h2>
        <p className="m-0 mb-4 text-[15px] leading-[1.7] text-[#6B6B6B]">
          SV Live Events started with a simple idea: every important moment
          deserves to be captured well and shared with the people who
          matter, wherever they are. What began as event photography grew
          into a full production team handling live streaming, drone
          coverage and LED stage visuals.
        </p>
        <p className="m-0 text-[15px] leading-[1.7] text-[#6B6B6B]">
          Today the team works across weddings, corporate events, concerts,
          spiritual gatherings and private celebrations — bringing
          broadcast-level production to events of every size.
        </p>
      </section>

      <section className="bg-[#FFF4E8] px-12 pb-[90px] pt-20 max-lg:px-6">
        <div className="mx-auto grid max-w-[900px] grid-cols-2 gap-6 max-sm:grid-cols-1">
          <div className="rounded-2xl border border-[#F0E2CC] bg-white p-[30px]">
            <div className="font-heading mb-2.5 text-[18px] font-semibold">
              Mission
            </div>
            <div className="text-sm leading-[1.6] text-[#6B6B6B]">
              To deliver reliable, high-quality event production and
              streaming so no important moment goes unseen.
            </div>
          </div>
          <div className="rounded-2xl border border-[#F0E2CC] bg-white p-[30px]">
            <div className="font-heading mb-2.5 text-[18px] font-semibold">
              Vision
            </div>
            <div className="text-sm leading-[1.6] text-[#6B6B6B]">
              To be the most trusted event production partner for families,
              brands and organizers across the region.
            </div>
          </div>
        </div>
      </section>

      <section className="px-12 py-[90px] max-lg:px-6">
        <div className="mx-auto mb-12 max-w-[600px] text-center">
          <div className="mb-3 text-[13px] font-bold tracking-wide text-[#FF7A00]">
            EXPERIENCE
          </div>
          <h2 className="font-heading m-0 text-[32px] font-bold uppercase">
            By The Numbers
          </h2>
        </div>
        <div className="flex flex-wrap justify-center gap-8 sm:gap-14">
          {STATS.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="font-heading text-[34px] font-bold text-[#FF7A00]">
                {stat.value}
              </div>
              <div className="text-[12.5px] tracking-[0.3px] text-[#6B6B6B]">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-[#FFF4E8] px-12 pb-[90px] pt-20 max-lg:px-6">
        <div className="mx-auto mb-12 max-w-[600px] text-center">
          <div className="mb-3 text-[13px] font-bold tracking-wide text-[#C98700]">
            OUR TEAM
          </div>
          <h2 className="font-heading m-0 text-[32px] font-bold uppercase">
            The People Behind The Production
          </h2>
        </div>
        <div className="mx-auto grid max-w-[900px] grid-cols-4 gap-5 max-lg:grid-cols-2 max-sm:grid-cols-1">
          {TEAM.map((member) => (
            <div
              key={member.name}
              className="rounded-[14px] border border-[#F0E2CC] bg-white p-6 text-center"
            >
              <div className="font-heading mx-auto mb-3.5 flex h-16 w-16 items-center justify-center rounded-full bg-[#FFE4C7] text-[20px] font-bold text-[#C98700]">
                {member.initials}
              </div>
              <div className="mb-1 text-[14.5px] font-semibold">
                {member.name}
              </div>
              <div className="text-[12.5px] text-[#6B6B6B]">
                {member.role}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="px-12 py-[90px] text-center max-lg:px-6">
        <h2 className="font-heading m-0 mb-4 text-[30px] font-bold uppercase">
          See Why Clients Trust Us
        </h2>
        <Link
          href="/why-svlive"
          className="inline-block rounded-full bg-[#FF7A00] px-[34px] py-4 text-[15px] font-bold text-white hover:text-white"
        >
          Why SV Live →
        </Link>
      </section>

      <FooterSimple />
    </div>
  );
}
