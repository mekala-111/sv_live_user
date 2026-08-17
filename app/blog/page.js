import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import FooterSimple from "@/components/FooterSimple";

const CATEGORIES = [
  { label: "All", bg: "#FF7A00", color: "#FFFFFF" },
  { label: "Weddings", bg: "#FFFFFF", color: "#252525" },
  { label: "Streaming Tips", bg: "#FFFFFF", color: "#252525" },
  { label: "Corporate", bg: "#FFFFFF", color: "#252525" },
];

const POSTS = [
  {
    slug: "how-to-live-stream-a-wedding-a-complete-guide",
    image: "/uploads/Portfolio.png",
    alt: "Wedding photography setup",
    category: "WEDDINGS",
    title: "How to Live Stream a Wedding: A Complete Guide",
    date: "Aug 10, 2026",
  },
  {
    slug: "best-live-streaming-setup-for-large-events",
    image: "/uploads/liveStreaming.png",
    alt: "Multi-camera streaming setup",
    category: "STREAMING TIPS",
    title: "Best Live Streaming Setup for Large Events",
    date: "Jul 28, 2026",
  },
  {
    slug: "why-professional-event-streaming-matters",
    image: "/uploads/event-coverage.png",
    alt: "Concert stage production",
    category: "CORPORATE",
    title: "Why Professional Event Streaming Matters",
    date: "Jul 12, 2026",
  },
];

export default function BlogPage() {
  return (
    <div className="bg-[#FFFDF9] text-[#252525]">
      <Header />

      <section className="px-12 pb-8 pt-[60px] text-center max-lg:px-6">
        <div className="mb-3 text-[13px] font-bold tracking-[1px] text-[#FF7A00]">
          BLOG
        </div>
        <h1 className="font-heading m-0 mb-4 text-[42px] font-bold uppercase max-sm:text-[28px]">
          Insights &amp; Guides
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

      <section className="px-12 pb-[100px] pt-5 max-lg:px-6">
        <div className="mx-auto grid max-w-[1100px] grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {POSTS.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="block overflow-hidden rounded-2xl border border-[#F0E2CC] bg-white text-[#252525] hover:text-[#252525]"
            >
              <div className="relative h-[170px] overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.alt}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-5">
                <div className="mb-2 text-[11.5px] font-bold text-[#FF7A00]">
                  {post.category}
                </div>
                <div className="font-heading mb-2 text-[17px] font-semibold leading-[1.3]">
                  {post.title}
                </div>
                <div className="text-[13px] text-[#6B6B6B]">{post.date}</div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <FooterSimple />
    </div>
  );
}
