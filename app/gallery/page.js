import Image from "next/image";
import Header from "@/components/Header";
import FooterSimple from "@/components/FooterSimple";

const CATEGORIES = [
  { label: "All", bg: "#FF7A00", color: "#FFFFFF" },
  { label: "Weddings", bg: "#FFFFFF", color: "#252525" },
  { label: "Corporate", bg: "#FFFFFF", color: "#252525" },
  { label: "Concerts", bg: "#FFFFFF", color: "#252525" },
  { label: "Spiritual", bg: "#FFFFFF", color: "#252525" },
  { label: "Sports", bg: "#FFFFFF", color: "#252525" },
  { label: "Private Events", bg: "#FFFFFF", color: "#252525" },
];

const IMAGES = [
  {
    src: "/uploads/event-coverage.png",
    alt: "Concert stage with pyrotechnics",
    category: "Concerts",
    span: 2,
  },
  {
    src: "/uploads/Portfolio.png",
    alt: "Wedding ceremony photography",
    category: "Weddings",
    span: 1,
  },
  {
    src: "/uploads/led_streaming.png",
    alt: "LED wall backdrop stage",
    category: "Corporate",
    span: 1,
  },
  {
    src: "/uploads/video-production.png",
    alt: "Camera operator filming a show",
    category: "Concerts",
    span: 1,
  },
  {
    src: "/uploads/drone.png",
    alt: "Aerial drone over event venue",
    category: "Corporate",
    span: 1,
  },
  {
    src: "/uploads/liveStreaming.png",
    alt: "Broadcast control room",
    category: "Corporate",
    span: 2,
  },
  {
    src: "/uploads/aboutus.png",
    alt: "Wedding stage photography setup",
    category: "Weddings",
    span: 1,
  },
  {
    src: "/uploads/hero-1.png",
    alt: "Event stage with lighting",
    category: "Concerts",
    span: 1,
  },
  {
    src: "/uploads/hero-2.png",
    alt: "Crew filming a live show",
    category: "Corporate",
    span: 1,
  },
  {
    src: "/uploads/hero-cinematic.png",
    alt: "Cinematic event coverage still",
    category: "Weddings",
    span: 1,
  },
];

export default function GalleryPage() {
  return (
    <div className="bg-[#FFFDF9] text-[#252525]">
      <Header active="Gallery" />

      <section className="px-12 pb-8 pt-[60px] text-center max-lg:px-6 max-sm:px-4">
        <div className="mb-3 text-[13px] font-bold tracking-[1px] text-[#FF7A00]">
          GALLERY
        </div>
        <h1 className="font-heading m-0 mb-4 text-[42px] font-bold uppercase max-sm:text-[30px]">
          Our Work
        </h1>
        <div className="mt-5 flex flex-wrap justify-center gap-2.5">
          {CATEGORIES.map((cat) => (
            <div
              key={cat.label}
              style={{ background: cat.bg, color: cat.color }}
              className="rounded-full border border-[#F0E2CC] px-[18px] py-[9px] text-[13.5px] font-bold"
            >
              {cat.label}
            </div>
          ))}
        </div>
      </section>

      <section className="px-12 pb-[90px] max-lg:px-6 max-sm:px-4">
        <div className="grid grid-cols-4 gap-4 [grid-auto-rows:190px] max-lg:grid-cols-2 max-sm:grid-cols-1 max-sm:[grid-auto-rows:220px]">
          {IMAGES.map((img) => (
            <div
              key={img.src + img.alt}
              className={`relative overflow-hidden rounded-xl ${
                img.span === 2 ? "row-span-2 max-sm:row-span-1" : "row-span-1"
              }`}
            >
              <Image src={img.src} alt={img.alt} fill className="object-cover" />
              <div className="absolute inset-x-0 bottom-0 bg-[linear-gradient(to_top,rgba(0,0,0,0.5),transparent)] px-3 py-2.5 text-xs font-semibold text-white">
                {img.category}
              </div>
            </div>
          ))}
        </div>
      </section>

      <FooterSimple />
    </div>
  );
}
