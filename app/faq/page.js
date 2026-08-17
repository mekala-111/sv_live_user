import Header from "@/components/Header";
import FooterSimple from "@/components/FooterSimple";

const FAQ_GROUPS = [
  {
    category: "General",
    items: [
      {
        question: "What areas do you serve?",
        answer:
          "We travel to events anywhere and can coordinate logistics for locations outside our home base.",
      },
      {
        question: "How do I book SV Live Events?",
        answer:
          "Fill out the booking form or call us directly with your event date and requirements.",
      },
    ],
  },
  {
    category: "Streaming",
    items: [
      {
        question: "What platforms can you stream to?",
        answer:
          "YouTube, Facebook, Instagram, and private links — simultaneously if needed.",
      },
      {
        question: "Is a stable internet connection guaranteed?",
        answer:
          "We bring backup mobile connectivity to every event to keep the stream live.",
      },
    ],
  },
  {
    category: "Events",
    items: [
      {
        question: "Can I make my event private?",
        answer:
          "Yes, private events are password or PIN protected and only accessible via a shared link.",
      },
    ],
  },
  {
    category: "Pricing",
    items: [
      {
        question: "How is pricing determined?",
        answer:
          "Pricing depends on camera count, duration, location and streaming requirements — request a quote for an exact number.",
      },
    ],
  },
  {
    category: "Technical",
    items: [
      {
        question: "What equipment do you use?",
        answer:
          "Broadcast-grade cameras, professional switchers, encoders and redundant connectivity gear.",
      },
    ],
  },
  {
    category: "Recording",
    items: [
      {
        question: "Do I get a copy of the recording?",
        answer:
          "Yes, every stream is recorded and delivered to you within 48 hours of the event.",
      },
    ],
  },
  {
    category: "Private Streaming",
    items: [
      {
        question: "Who can access a private stream?",
        answer:
          "Only people you share the event link and PIN with can view a private stream.",
      },
    ],
  },
];

export default function FaqPage() {
  return (
    <div className="bg-[#FFFDF9] text-[#252525]">
      <Header />

      <section className="px-12 pb-10 pt-[70px] text-center max-lg:px-6">
        <div className="mb-3 text-[13px] font-bold tracking-wide text-[#FF7A00]">
          SUPPORT
        </div>
        <h1 className="font-heading m-0 text-[42px] font-bold uppercase max-sm:text-[26px]">
          Frequently Asked Questions
        </h1>
      </section>

      <section className="mx-auto max-w-[760px] px-12 pb-[100px] pt-5 max-lg:px-6">
        {FAQ_GROUPS.map((group) => (
          <div key={group.category} className="mb-10">
            <div className="font-heading mb-4 text-xl font-semibold uppercase text-[#FF7A00]">
              {group.category}
            </div>
            <div className="flex flex-col gap-3.5">
              {group.items.map((item) => (
                <div
                  key={item.question}
                  className="rounded-xl border border-[#F0E2CC] bg-[#FFF4E8] px-[22px] py-[18px]"
                >
                  <div className="mb-1.5 text-[15px] font-semibold">
                    {item.question}
                  </div>
                  <div className="text-[13.5px] leading-[1.55] text-[#6B6B6B]">
                    {item.answer}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </section>

      <FooterSimple />
    </div>
  );
}
