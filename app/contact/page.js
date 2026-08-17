import Header from "@/components/Header";
import FooterSimple from "@/components/FooterSimple";

const CONTACT_CARDS = [
  { label: "PHONE", value: "93973 64040", href: "tel:9397364040" },
  {
    label: "WHATSAPP",
    value: "Chat with us",
    href: "https://wa.me/919397364040",
  },
  {
    label: "EMAIL",
    value: "svliveevents@gmail.com",
    href: "mailto:svliveevents@gmail.com",
  },
  { label: "WORKING HOURS", value: "Mon – Sun, 9:00 AM – 9:00 PM" },
  { label: "LOCATION", value: "Available Anywhere" },
];

const SOCIAL_LINKS = ["Facebook", "Instagram", "YouTube"];

export default function ContactPage() {
  return (
    <div className="bg-[#FFFDF9] text-[#252525]">
      <Header />

      <section className="px-12 pb-10 pt-[70px] text-center max-lg:px-6">
        <div className="mb-3 text-[13px] font-bold tracking-wide text-[#FF7A00]">
          GET IN TOUCH
        </div>
        <h1 className="font-heading m-0 text-[42px] font-bold uppercase max-sm:text-[30px]">
          Contact Us
        </h1>
      </section>

      <section className="mx-auto grid max-w-[1100px] grid-cols-[0.9fr_1.1fr] gap-12 px-12 pb-[100px] pt-5 max-lg:grid-cols-1 max-lg:px-6">
        <div>
          <div className="mb-8 flex flex-col gap-4">
            {CONTACT_CARDS.map((card) => (
              <div
                key={card.label}
                className="rounded-[14px] border border-[#F0E2CC] bg-[#FFF4E8] p-5"
              >
                <div className="mb-1 text-xs font-bold text-[#FF7A00]">
                  {card.label}
                </div>
                {card.href ? (
                  <a
                    href={card.href}
                    className="text-[15px] font-semibold text-[#252525]"
                  >
                    {card.value}
                  </a>
                ) : (
                  <div className="text-[15px] font-semibold text-[#252525]">
                    {card.value}
                  </div>
                )}
              </div>
            ))}
          </div>
          <div className="flex gap-3.5">
            {SOCIAL_LINKS.map((social) => (
              <a
                key={social}
                href="#"
                className="text-[13.5px] font-semibold text-[#6B6B6B]"
              >
                {social}
              </a>
            ))}
          </div>
        </div>

        <div>
          <div className="mb-6 flex h-[200px] items-center justify-center rounded-2xl border border-[#F0E2CC] bg-[repeating-linear-gradient(45deg,#FFF4E8,#FFF4E8_10px,#FFFFFF_10px,#FFFFFF_20px)]">
            <div className="font-mono text-[13px] text-[#6B6B6B]">
              [ Google Map embed ]
            </div>
          </div>
          <form className="flex flex-col gap-4">
            <div className="grid grid-cols-2 gap-4 max-sm:grid-cols-1">
              <input
                type="text"
                placeholder="Name"
                className="rounded-[10px] border border-[#E0D3BC] bg-white px-4 py-[13px] text-sm"
              />
              <input
                type="tel"
                placeholder="Phone"
                className="rounded-[10px] border border-[#E0D3BC] bg-white px-4 py-[13px] text-sm"
              />
            </div>
            <input
              type="email"
              placeholder="Email"
              className="rounded-[10px] border border-[#E0D3BC] bg-white px-4 py-[13px] text-sm"
            />
            <textarea
              placeholder="Your message"
              rows={4}
              className="resize-y rounded-[10px] border border-[#E0D3BC] bg-white px-4 py-[13px] text-sm"
            />
            <button
              type="button"
              className="rounded-full bg-[#FF7A00] p-[15px] text-[15px] font-bold text-white"
            >
              Send Message →
            </button>
          </form>
        </div>
      </section>

      <FooterSimple />
    </div>
  );
}
