import Link from "next/link";
import Image from "next/image";

const NAV_ITEMS = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Events", href: "/events" },
  { label: "Gallery", href: "/gallery" },
  { label: "About", href: "/about" },
  { label: "How It Works", href: "/how-it-works" },
];

export default function Header({ active }) {
  return (
    <header className="relative z-50 flex items-center justify-between border-b border-[#F0E2CC] bg-[#FFFDF9] px-12 py-[18px] max-lg:px-6 max-sm:px-4">
      <Link href="/" className="shrink-0">
        <Image
          src="/uploads/Logo.png"
          alt="SV Live Events"
          width={56}
          height={56}
          className="h-14 w-14 rounded-full object-cover max-sm:h-12 max-sm:w-12"
        />
      </Link>

      <input id="nav-toggle" type="checkbox" className="peer sr-only" />
      <label
        htmlFor="nav-toggle"
        className="ml-auto flex h-11 w-11 cursor-pointer flex-col items-center justify-center gap-[5px] lg:hidden"
        aria-label="Open menu"
      >
        <span className="block h-0.5 w-5 bg-[#252525]" />
        <span className="block h-0.5 w-5 bg-[#252525]" />
        <span className="block h-0.5 w-5 bg-[#252525]" />
      </label>

      <label
        htmlFor="nav-toggle"
        aria-label="Close menu"
        className="invisible fixed inset-0 z-[60] bg-black/50 opacity-0 transition-opacity duration-300 peer-checked:visible peer-checked:opacity-100 lg:hidden"
      />

      <div className="fixed inset-y-0 right-0 z-[70] flex w-[min(22rem,86vw)] translate-x-full flex-col bg-[#1a1612] transition-transform duration-300 ease-out peer-checked:translate-x-0 lg:hidden">
        <div className="flex justify-end px-4 pt-5">
          <label
            htmlFor="nav-toggle"
            className="flex h-11 w-11 cursor-pointer items-center justify-center text-[28px] leading-none text-white"
            aria-label="Close menu"
          >
            ×
          </label>
        </div>
        <nav className="flex flex-1 flex-col overflow-y-auto px-6">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className={
                item.label === active
                  ? "border-b border-white/10 py-[18px] text-[15px] font-semibold text-[#FFB000] hover:text-[#FFB000]"
                  : "border-b border-white/10 py-[18px] text-[15px] font-semibold text-white hover:text-white"
              }
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="p-6 pb-8">
          <Link
            href="/book"
            className="block rounded-md bg-[#FFB000] py-4 text-center text-[13px] font-bold tracking-[0.8px] text-white uppercase hover:text-white"
          >
            Book Your Event
          </Link>
        </div>
      </div>

      <nav className="pointer-events-none absolute left-1/2 hidden -translate-x-1/2 items-center gap-8 text-sm font-semibold tracking-[0.3px] lg:flex">
        {NAV_ITEMS.map((item) => (
          <Link
            key={item.label}
            href={item.href}
            className={
              item.label === active
                ? "pointer-events-auto border-b-2 border-[#FFB000] pb-1 text-[#C98700]"
                : "pointer-events-auto text-[#252525] hover:text-[#E56D00]"
            }
          >
            {item.label}
          </Link>
        ))}
      </nav>
      <Link
        href="/book"
        className="hidden items-center gap-2 rounded-full bg-gradient-to-br from-[#FFB000] to-[#FF7A00] px-6 py-3 text-sm font-bold text-white shadow-[0_4px_14px_rgba(255,176,0,0.35)] hover:text-white lg:inline-flex"
      >
        Book Your Event →
      </Link>
    </header>
  );
}
