import Image from "next/image";
import Link from "next/link";

export const dynamicParams = true;

export default async function WatchEventLandingPage({ params }) {
  await params;

  return (
    <div className="mx-auto flex min-h-screen max-w-[420px] flex-col bg-[#FFFDF9]">
      <div className="p-6 text-center">
        <Image
          src="/uploads/Logo.png"
          alt="SV Live Events"
          width={44}
          height={44}
          className="mx-auto mb-2 block h-11 w-11 rounded-full object-cover"
        />
        <div className="font-heading text-sm font-bold">SV LIVE EVENTS</div>
      </div>

      <div className="relative aspect-[4/3]">
        <Image
          src="/uploads/Portfolio.png"
          alt="Wedding celebration cover photo"
          fill
          className="object-cover"
        />
        <div className="absolute left-3.5 top-3.5 flex items-center gap-1.5 rounded-full bg-[#F52222] px-3 py-1.5 text-xs font-bold text-white">
          <span className="h-[7px] w-[7px] rounded-full bg-white" />
          LIVE NOW
        </div>
      </div>

      <div className="flex flex-1 flex-col p-6">
        <h1 className="font-heading m-0 mb-2 text-2xl font-bold">
          Wedding Celebration
        </h1>
        <div className="mb-5 text-[13.5px] text-[#6B6B6B]">Rahul & Priya</div>
        <div className="mb-7 flex flex-col gap-2.5 text-[13.5px] text-[#6B6B6B]">
          <div>📅 22 August 2026, 6:00 PM</div>
          <div>📍 Hyderabad, Telangana</div>
        </div>
        <Link
          href="/event/rahul-priya-wedding"
          className="mt-auto block rounded-full bg-[#FF7A00] p-4 text-center text-base font-bold text-white hover:text-white"
        >
          ▶ Watch Live
        </Link>
      </div>
    </div>
  );
}
