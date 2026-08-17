import Header from "@/components/Header";
import FooterSimple from "@/components/FooterSimple";

const POINTS = [
  {
    title: "Professional Production",
    desc: "Trained multi-camera crews on every shoot.",
  },
  {
    title: "HD / 4K Streaming",
    desc: "Crisp video at every bandwidth tier.",
  },
  {
    title: "Multi-Camera Coverage",
    desc: "Up to 8 synchronized feeds, switched live.",
  },
  {
    title: "Low Latency",
    desc: "Near real-time delivery to every viewer.",
  },
  {
    title: "Secure Streaming",
    desc: "Password-protected private event links.",
  },
  {
    title: "Global CDN",
    desc: "Smooth playback for viewers anywhere in the world.",
  },
  {
    title: "Cloud Recording",
    desc: "Every stream saved and downloadable afterward.",
  },
  {
    title: "Technical Support",
    desc: "On-call crew and backup gear on event day.",
  },
  {
    title: "Custom Branding",
    desc: "Your logo and colors on the stream overlay.",
  },
];

export default function WhySvLivePage() {
  return (
    <div className="overflow-x-clip bg-[#FFFDF9] text-[#252525]">
      <Header />

      <section className="px-12 pb-10 pt-[70px] text-center max-lg:px-6">
        <div className="mb-3 text-[13px] font-bold tracking-wide text-[#FF7A00]">
          TRUST & RELIABILITY
        </div>
        <h1 className="font-heading m-0 mb-4 text-[42px] font-bold uppercase max-sm:text-[30px]">
          Why SV Live
        </h1>
        <p className="mx-auto m-0 max-w-[540px] text-[15px] text-[#6B6B6B]">
          Broadcast-grade equipment, trained crews and tested pipelines —
          built so your event goes live without surprises.
        </p>
      </section>

      <section className="px-12 pb-[100px] pt-10 max-lg:px-6">
        <div className="mx-auto grid max-w-[1100px] grid-cols-3 gap-6 max-lg:grid-cols-2 max-sm:grid-cols-1">
          {POINTS.map((point) => (
            <div
              key={point.title}
              className="rounded-2xl border border-[#F0E2CC] bg-[#FFF4E8] p-7"
            >
              <div className="font-heading mb-2.5 text-[18px] font-semibold">
                {point.title}
              </div>
              <div className="text-sm leading-[1.6] text-[#6B6B6B]">
                {point.desc}
              </div>
            </div>
          ))}
        </div>
      </section>

      <FooterSimple />
    </div>
  );
}
