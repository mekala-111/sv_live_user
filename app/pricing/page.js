import Link from "next/link";
import Header from "@/components/Header";
import FooterSimple from "@/components/FooterSimple";

const PLANS = [
  {
    name: "Essential",
    tagline: "For small events",
    bg: "#FFFFFF",
    border: "#F0E2CC",
    text: "#252525",
    subtext: "#6B6B6B",
    btnBg: "#FFF4E8",
    btnText: "#252525",
    cta: "Get a Quote",
    features: [
      "1-2 cameras",
      "Single-platform streaming",
      "Basic recording",
      "Up to 4 hours coverage",
    ],
  },
  {
    name: "Professional",
    tagline: "Weddings & corporate events",
    bg: "#FF7A00",
    border: "#FF7A00",
    text: "#FFFFFF",
    subtext: "rgba(255,255,255,0.9)",
    btnBg: "#FFFFFF",
    btnText: "#FF7A00",
    cta: "Get a Quote",
    features: [
      "3-4 cameras",
      "Multi-platform streaming",
      "Cloud recording",
      "Full-day coverage",
      "Dedicated technician",
    ],
  },
  {
    name: "Premium",
    tagline: "For large events",
    bg: "#FFFFFF",
    border: "#F0E2CC",
    text: "#252525",
    subtext: "#6B6B6B",
    btnBg: "#FFF4E8",
    btnText: "#252525",
    cta: "Get a Quote",
    features: [
      "Up to 8 cameras",
      "Drone coverage included",
      "LED screen add-on",
      "Private + public streaming",
      "24/7 on-call support",
    ],
  },
  {
    name: "Custom",
    tagline: "Enterprise requirements",
    bg: "#FFF4E8",
    border: "#F0E2CC",
    text: "#252525",
    subtext: "#6B6B6B",
    btnBg: "#252525",
    btnText: "#FFFFFF",
    cta: "Contact Sales",
    features: [
      "Fully tailored setup",
      "Multi-day / multi-venue",
      "Custom branding & overlays",
      "Dedicated account manager",
    ],
  },
];

export default function PricingPage() {
  return (
    <div className="bg-[#FFFDF9] text-[#252525]">
      <Header />

      <section className="px-12 pb-10 pt-[70px] text-center max-lg:px-6">
        <div className="mb-3 text-[13px] font-bold tracking-wide text-[#FF7A00]">
          PRICING
        </div>
        <h1 className="font-heading m-0 mb-4 text-[42px] font-bold uppercase max-sm:text-[28px]">
          Plans For Every Event
        </h1>
        <p className="mx-auto m-0 max-w-[520px] text-[15px] text-[#6B6B6B]">
          Every event is different — these plans are a starting point.
          Contact us for an exact quote.
        </p>
      </section>

      <section className="px-12 pb-[100px] pt-10 max-lg:px-6">
        <div className="mx-auto grid max-w-[1200px] grid-cols-4 gap-5 max-lg:grid-cols-2 max-sm:grid-cols-1">
          {PLANS.map((plan) => (
            <div
              key={plan.name}
              className="rounded-[18px] px-6 py-[30px]"
              style={{ background: plan.bg, border: `1px solid ${plan.border}` }}
            >
              <div
                className="font-heading mb-1.5 text-[19px] font-semibold"
                style={{ color: plan.text }}
              >
                {plan.name}
              </div>
              <div
                className="mb-5 text-[13px]"
                style={{ color: plan.subtext }}
              >
                {plan.tagline}
              </div>
              <div className="mb-6 flex flex-col gap-2.5">
                {plan.features.map((feature) => (
                  <div
                    key={feature}
                    className="text-[13px]"
                    style={{ color: plan.subtext }}
                  >
                    ✓ {feature}
                  </div>
                ))}
              </div>
              <Link
                href="/book"
                className="block rounded-full p-3 text-center text-sm font-bold"
                style={{ background: plan.btnBg, color: plan.btnText }}
              >
                {plan.cta}
              </Link>
            </div>
          ))}
        </div>
      </section>

      <FooterSimple />
    </div>
  );
}
