import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="border-t border-[#F0E2CC] bg-[#FFF4E8] px-12 pb-8 pt-16 max-lg:px-6 max-sm:px-4">
      <div className="mb-12 grid grid-cols-[1.4fr_1fr_1fr_1.2fr] gap-12 max-lg:grid-cols-2 max-sm:grid-cols-1">
        <div>
          <div className="mb-4 flex items-center gap-2.5">
            <Image
              src="/uploads/Logo.png"
              alt="SV Live Events"
              width={36}
              height={36}
              className="h-9 w-9 rounded-full object-cover"
            />
            <div className="font-heading text-[17px] font-semibold">
              SV Live Events
            </div>
          </div>
          <p className="max-w-[280px] text-[13.5px] leading-relaxed text-[#6B6B6B]">
            Photography, videography, drone cinematography, LED walls and
            multi-camera live streaming for events of every scale.
          </p>
        </div>
        <div>
          <div className="mb-4 text-[13px] font-bold tracking-[0.5px]">
            COMPANY
          </div>
          <div className="flex flex-col gap-2.5 text-[13.5px]">
            <Link href="/about" className="text-[#6B6B6B] hover:text-[#FF7A00]">
              About Us
            </Link>
            <Link
              href="/how-it-works"
              className="text-[#6B6B6B] hover:text-[#FF7A00]"
            >
              How It Works
            </Link>
            <Link href="/pricing" className="text-[#6B6B6B] hover:text-[#FF7A00]">
              Pricing
            </Link>
            <Link href="/faq" className="text-[#6B6B6B] hover:text-[#FF7A00]">
              FAQ
            </Link>
          </div>
        </div>
        <div>
          <div className="mb-4 text-[13px] font-bold tracking-[0.5px]">
            SERVICES
          </div>
          <div className="flex flex-col gap-2.5 text-[13.5px]">
            <Link
              href="/services"
              className="text-[#6B6B6B] hover:text-[#FF7A00]"
            >
              Live Streaming
            </Link>
            <Link
              href="/services"
              className="text-[#6B6B6B] hover:text-[#FF7A00]"
            >
              Photography
            </Link>
            <Link
              href="/services"
              className="text-[#6B6B6B] hover:text-[#FF7A00]"
            >
              Drone Coverage
            </Link>
            <Link
              href="/services"
              className="text-[#6B6B6B] hover:text-[#FF7A00]"
            >
              LED Screens
            </Link>
          </div>
        </div>
        <div>
          <div className="mb-4 text-[13px] font-bold tracking-[0.5px]">
            GET IN TOUCH
          </div>
          <div className="flex flex-col gap-2.5 text-[13.5px] text-[#6B6B6B]">
            <div>
              📞{" "}
              <a href="tel:9397364040" className="text-[#6B6B6B] hover:text-[#FF7A00]">
                93973 64040
              </a>
            </div>
            <div>
              ✉{" "}
              <a
                href="mailto:svliveevents@gmail.com"
                className="text-[#6B6B6B] hover:text-[#FF7A00]"
              >
                <span className="break-all">svliveevents@gmail.com</span>
              </a>
            </div>
            <div>
              📍{" "}
              <Link href="/contact" className="text-[#6B6B6B] hover:text-[#FF7A00]">
                Available Anywhere
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap items-center justify-between gap-3 border-t border-[#E8D9BE] pt-6 text-[12.5px] text-[#6B6B6B]">
        <div>© 2026 SV Live Events. All rights reserved.</div>
        <div className="flex gap-5">
          <a href="#" className="text-[#6B6B6B] hover:text-[#FF7A00]">
            Facebook
          </a>
          <a href="#" className="text-[#6B6B6B] hover:text-[#FF7A00]">
            Instagram
          </a>
          <a href="#" className="text-[#6B6B6B] hover:text-[#FF7A00]">
            YouTube
          </a>
          <a href="#" className="text-[#6B6B6B] hover:text-[#FF7A00]">
            WhatsApp
          </a>
        </div>
      </div>
    </footer>
  );
}
