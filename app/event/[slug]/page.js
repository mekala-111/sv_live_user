import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import FooterSimple from "@/components/FooterSimple";

export const dynamicParams = true;

const SCHEDULE = [
  { time: "5:00 PM", label: "Guests arrive, pre-ceremony coverage begins" },
  { time: "6:00 PM", label: "Wedding ceremony" },
  { time: "8:00 PM", label: "Reception & celebrations" },
];

export default async function EventDetailsPage({ params }) {
  await params;

  return (
    <div className="overflow-x-clip bg-[#FFFDF9] text-[#252525]">
      <Header active="Events" />

      <section className="mx-auto max-w-[1200px] grid grid-cols-[1.4fr_0.9fr] gap-9 px-12 py-10 max-lg:grid-cols-1 max-lg:px-6">
        <div>
          <div className="relative aspect-video overflow-hidden rounded-2xl bg-[#252525]">
            <Image
              src="/uploads/Portfolio.png"
              alt="Live video player showing the wedding ceremony"
              fill
              className="object-cover opacity-90"
            />
            <div className="absolute left-4 top-4 flex items-center gap-1.5 rounded-full bg-[#F52222] px-3 py-1.5 text-xs font-bold text-white">
              <span className="h-[7px] w-[7px] rounded-full bg-white" />
              LIVE
            </div>
            <div className="absolute bottom-4 right-4 rounded-full bg-[rgba(0,0,0,0.55)] px-3 py-1.5 text-[13px] text-white">
              👁 2,340 watching
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="flex h-[68px] w-[68px] items-center justify-center rounded-full bg-[rgba(255,255,255,0.9)] text-2xl text-[#252525]">
                ▶
              </div>
            </div>
          </div>

          <div className="mt-7">
            <div className="mb-2 text-xs font-bold tracking-[0.5px] text-[#FF7A00]">
              WEDDING
            </div>
            <h1 className="font-heading m-0 mb-3 text-[30px] font-bold">
              Rahul & Priya — Wedding Ceremony
            </h1>
            <div className="mb-5 flex flex-wrap gap-5 text-[13.5px] text-[#6B6B6B]">
              <div>📅 22 Aug 2026 · 6:00 PM IST</div>
              <div>📍 Hyderabad, Telangana</div>
            </div>
            <p className="m-0 mb-6 text-[14.5px] leading-relaxed text-[#6B6B6B]">
              Join the live stream of Rahul and Priya&apos;s wedding
              ceremony, streamed in multi-camera HD directly from the venue.
              The stream includes the full ceremony and the reception that
              follows.
            </p>
            <div className="flex flex-wrap gap-3.5">
              <a
                href="#"
                className="rounded-full border border-[#F0E2CC] bg-[#FFF4E8] px-[18px] py-2.5 text-[13.5px] font-semibold text-[#252525] hover:text-[#252525]"
              >
                📤 Share
              </a>
              <a
                href="#"
                className="rounded-full border border-[#F0E2CC] bg-[#FFF4E8] px-[18px] py-2.5 text-[13.5px] font-semibold text-[#252525] hover:text-[#252525]"
              >
                Facebook
              </a>
              <a
                href="#"
                className="rounded-full border border-[#F0E2CC] bg-[#FFF4E8] px-[18px] py-2.5 text-[13.5px] font-semibold text-[#252525] hover:text-[#252525]"
              >
                WhatsApp
              </a>
            </div>
          </div>
        </div>

        <div>
          <div className="mb-5 rounded-2xl border border-[#F0E2CC] bg-[#FFF4E8] p-6">
            <div className="font-heading mb-3.5 text-[15px] font-semibold">
              Event Info
            </div>
            <div className="flex flex-col gap-2.5 text-[13.5px] text-[#6B6B6B]">
              <div>
                <strong className="text-[#252525]">Host:</strong> Kumar
                Family
              </div>
              <div>
                <strong className="text-[#252525]">Category:</strong> Wedding
              </div>
              <div>
                <strong className="text-[#252525]">Access:</strong> Private —
                invited guests only
              </div>
              <div>
                <strong className="text-[#252525]">Recording:</strong>{" "}
                Available after event
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-[#F0E2CC] bg-white p-6">
            <div className="font-heading mb-3.5 text-[15px] font-semibold">
              Schedule
            </div>
            {SCHEDULE.map((s) => (
              <div
                key={s.time}
                className="flex gap-3 border-b border-[#F0E2CC] py-2.5 text-[13.5px] last:border-b-0"
              >
                <div className="w-[70px] flex-shrink-0 font-bold text-[#FF7A00]">
                  {s.time}
                </div>
                <div className="text-[#6B6B6B]">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FooterSimple />
    </div>
  );
}
