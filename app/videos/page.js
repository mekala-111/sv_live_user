import Image from "next/image";
import Header from "@/components/Header";
import FooterSimple from "@/components/FooterSimple";

const GROUPS = [
  {
    title: "Featured Videos",
    videos: [
      {
        image: "/uploads/event-coverage.png",
        alt: "Concert stage highlight video thumbnail",
        title: "Summer Beats Festival — Highlights",
      },
      {
        image: "/uploads/Portfolio.png",
        alt: "Wedding highlight video thumbnail",
        title: "Rahul & Priya — Wedding Film",
      },
      {
        image: "/uploads/liveStreaming.png",
        alt: "Corporate event highlight thumbnail",
        title: "TechNova Summit 2026",
      },
    ],
  },
  {
    title: "Wedding Highlights",
    videos: [
      {
        image: "/uploads/hero-1.png",
        alt: "Wedding celebration video thumbnail",
        title: "Karthik & Meena — Highlight Film",
      },
      {
        image: "/uploads/aboutus.png",
        alt: "Wedding photography behind the scenes",
        title: "Behind the Lens — Wedding Season",
      },
      {
        image: "/uploads/hero-2.png",
        alt: "Wedding reception video thumbnail",
        title: "Anil & Divya — Sneak Peek",
      },
    ],
  },
  {
    title: "Event Highlights",
    videos: [
      {
        image: "/uploads/led_streaming.png",
        alt: "LED stage production video thumbnail",
        title: "Stage Production Reel",
      },
      {
        image: "/uploads/drone.png",
        alt: "Drone aerial footage thumbnail",
        title: "Aerial Coverage Showcase",
      },
      {
        image: "/uploads/video-production.png",
        alt: "Live production behind the scenes",
        title: "On Set with SV Live",
      },
    ],
  },
  {
    title: "Behind The Scenes",
    videos: [
      {
        image: "/uploads/hero-cinematic.png",
        alt: "Behind the scenes production still",
        title: "A Day With Our Crew",
      },
      {
        image: "/uploads/hero-composition-alt.png",
        alt: "Crew setting up cameras",
        title: "Setting Up For Show Day",
      },
      {
        image: "/uploads/hero-scene.png",
        alt: "Production crew at an event",
        title: "The Full Production Team",
      },
    ],
  },
];

export default function VideosPage() {
  return (
    <div className="bg-[#FFFDF9] text-[#252525]">
      <Header />

      <section className="px-12 pb-10 pt-[60px] text-center max-lg:px-6">
        <div className="mb-3 text-[13px] font-bold tracking-[1px] text-[#FF7A00]">
          MEDIA
        </div>
        <h1 className="font-heading m-0 text-[42px] font-bold uppercase max-sm:text-[28px]">
          Videos & Highlights
        </h1>
      </section>

      {GROUPS.map((grp) => (
        <section key={grp.title} className="px-12 pb-[60px] pt-5 max-lg:px-6">
          <h2 className="font-heading m-0 mb-5 text-[22px] font-bold uppercase">
            {grp.title}
          </h2>
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
            {grp.videos.map((v) => (
              <div
                key={v.title}
                className="overflow-hidden rounded-[14px] border border-[#F0E2CC] bg-white"
              >
                <div className="relative h-[160px]">
                  <Image src={v.image} alt={v.alt} fill className="object-cover" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[rgba(255,255,255,0.9)] text-base">
                      ▶
                    </div>
                  </div>
                </div>
                <div className="px-4 py-3.5">
                  <div className="text-sm font-semibold">{v.title}</div>
                </div>
              </div>
            ))}
          </div>
        </section>
      ))}

      <FooterSimple />
    </div>
  );
}
