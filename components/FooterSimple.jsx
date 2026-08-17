import Image from "next/image";

export default function FooterSimple() {
  return (
    <footer className="flex flex-wrap items-center justify-between gap-4 border-t border-[#F0E2CC] bg-[#FFF4E8] px-12 pb-7 pt-12 max-lg:px-6 max-sm:px-4">
      <div className="flex items-center gap-2.5">
        <Image
          src="/uploads/Logo.png"
          alt="SV Live Events"
          width={36}
          height={36}
          className="h-9 w-9 rounded-full object-cover"
        />
        <div className="font-heading text-[15px] font-semibold">
          SV Live Events
        </div>
      </div>
      <div className="text-[12.5px] text-[#6B6B6B]">
        © 2026 SV Live Events. All rights reserved.
      </div>
    </footer>
  );
}
