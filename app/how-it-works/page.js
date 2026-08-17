import Header from "@/components/Header";
import FooterSimple from "@/components/FooterSimple";

const STEPS = [
  {
    num: "01",
    title: "Book Your Event",
    desc: "Tell us your event date, venue and streaming requirements.",
  },
  {
    num: "02",
    title: "Production Planning",
    desc: "We plan camera positions, crew size and equipment for your venue.",
  },
  {
    num: "03",
    title: "Camera Setup",
    desc: "Cameras, encoders and backup connectivity are installed on-site.",
  },
  {
    num: "04",
    title: "Go Live",
    desc: "Our crew streams the event live with multi-camera switching.",
  },
  {
    num: "05",
    title: "Share With Audience",
    desc: "Guests join through a private or public link, from any device.",
  },
  {
    num: "06",
    title: "Recording Delivered",
    desc: "A full recording is saved and shared with you after the event.",
  },
];

export default function HowItWorksPage() {
  return (
    <div className="overflow-x-clip bg-[#FFFDF9] text-[#252525]">
      <Header active="How It Works" />

      <section className="px-12 pb-10 pt-[70px] text-center max-lg:px-6 max-sm:px-4">
        <div className="mb-3 text-[13px] font-bold tracking-wide text-[#FF7A00]">
          HOW IT WORKS
        </div>
        <h1 className="font-heading m-0 mb-4 text-[42px] font-bold uppercase max-sm:text-[30px]">
          From Booking To Broadcast
        </h1>
        <p className="mx-auto m-0 max-w-[520px] text-[15px] text-[#6B6B6B]">
          A clear, dependable process behind every stream — here&apos;s what
          happens at each stage.
        </p>
      </section>

      <section className="mx-auto max-w-[760px] px-12 pb-[100px] pt-10 max-lg:px-6 max-sm:px-4">
        {STEPS.map((step) => (
          <div key={step.num} className="mb-2 flex gap-5 sm:gap-7">
            <div className="flex flex-shrink-0 flex-col items-center">
              <div className="font-heading flex h-[52px] w-[52px] items-center justify-center rounded-full bg-[#FF7A00] text-[17px] font-bold text-white">
                {step.num}
              </div>
              <div className="my-1.5 w-0.5 flex-1 bg-[#F0E2CC]" />
            </div>
            <div className="pb-10">
              <div className="font-heading mb-2 text-xl font-semibold">
                {step.title}
              </div>
              <div className="text-[14.5px] leading-[1.6] text-[#6B6B6B]">
                {step.desc}
              </div>
            </div>
          </div>
        ))}
      </section>

      <FooterSimple />
    </div>
  );
}
