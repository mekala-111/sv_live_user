import Link from "next/link";
import Header from "@/components/Header";
import FooterSimple from "@/components/FooterSimple";
import { publicApi } from "@/lib/api";
import { planFeatureList } from "@/lib/event-helpers";

const CARD_STYLES = [
  {
    bg: "#FFFFFF",
    border: "#F0E2CC",
    text: "#252525",
    subtext: "#6B6B6B",
    btnBg: "#FFF4E8",
    btnText: "#252525",
  },
  {
    bg: "#FF7A00",
    border: "#FF7A00",
    text: "#FFFFFF",
    subtext: "rgba(255,255,255,0.9)",
    btnBg: "#FFFFFF",
    btnText: "#FF7A00",
  },
  {
    bg: "#FFFFFF",
    border: "#F0E2CC",
    text: "#252525",
    subtext: "#6B6B6B",
    btnBg: "#FFF4E8",
    btnText: "#252525",
  },
  {
    bg: "#FFF4E8",
    border: "#F0E2CC",
    text: "#252525",
    subtext: "#6B6B6B",
    btnBg: "#252525",
    btnText: "#FFFFFF",
  },
];

async function loadPlans() {
  try {
    const data = await publicApi.listPricing();
    return Array.isArray(data) ? data : [];
  } catch {
    return [];
  }
}

function formatPrice(plan) {
  if (!plan?.price && plan?.price !== 0) return null;
  if (Number(plan.price) === 0) return "Custom";
  const currency = plan.currency || "INR";
  try {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency,
      maximumFractionDigits: 0,
    }).format(plan.price);
  } catch {
    return `${currency} ${plan.price}`;
  }
}

export default async function PricingPage() {
  const plans = await loadPlans();

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
        {plans.length === 0 ? (
          <p className="m-0 text-center text-[15px] text-[#6B6B6B]">
            Pricing plans are unavailable right now.{" "}
            <Link href="/book" className="font-semibold text-[#FF7A00]">
              Request a quote
            </Link>
            .
          </p>
        ) : (
          <div className="mx-auto grid max-w-[1200px] grid-cols-4 gap-5 max-lg:grid-cols-2 max-sm:grid-cols-1">
            {plans.map((plan, index) => {
              const style = CARD_STYLES[index % CARD_STYLES.length];
              const features = planFeatureList(plan);
              const priceLabel = formatPrice(plan);
              return (
                <div
                  key={plan.id || plan.code || plan.name}
                  className="rounded-[18px] px-6 py-[30px]"
                  style={{ background: style.bg, border: `1px solid ${style.border}` }}
                >
                  <div
                    className="font-heading mb-1.5 text-[19px] font-semibold"
                    style={{ color: style.text }}
                  >
                    {plan.name}
                  </div>
                  <div
                    className="mb-2 text-[13px]"
                    style={{ color: style.subtext }}
                  >
                    {plan.billingPeriod
                      ? `${String(plan.billingPeriod).charAt(0).toUpperCase()}${String(plan.billingPeriod).slice(1)} plan`
                      : "Event plan"}
                  </div>
                  {priceLabel ? (
                    <div
                      className="mb-5 text-[22px] font-bold"
                      style={{ color: style.text }}
                    >
                      {priceLabel}
                    </div>
                  ) : (
                    <div className="mb-5" />
                  )}
                  <div className="mb-6 flex flex-col gap-2.5">
                    {features.map((feature) => (
                      <div
                        key={feature}
                        className="text-[13px]"
                        style={{ color: style.subtext }}
                      >
                        ✓ {feature}
                      </div>
                    ))}
                  </div>
                  <Link
                    href="/book"
                    className="block rounded-full p-3 text-center text-sm font-bold"
                    style={{ background: style.btnBg, color: style.btnText }}
                  >
                    {Number(plan.price) === 0 ? "Contact Sales" : "Get a Quote"}
                  </Link>
                </div>
              );
            })}
          </div>
        )}
      </section>

      <FooterSimple />
    </div>
  );
}
