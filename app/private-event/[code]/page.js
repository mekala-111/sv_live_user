import Image from "next/image";

export const dynamicParams = true;

export default async function PrivateEventAccessPage({ params }) {
  await params;

  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden">
      <Image
        src="/uploads/event-coverage.png"
        alt="Concert stage with lighting"
        fill
        priority
        className="object-cover"
      />
      <div className="absolute inset-0 bg-[rgba(20,15,10,0.72)]" />
      <div className="relative z-[1] w-[380px] max-w-[calc(100%-32px)] rounded-[20px] bg-[rgba(255,253,249,0.97)] p-11 text-center">
        <Image
          src="/uploads/Logo.png"
          alt="SV Live Events"
          width={56}
          height={56}
          className="mx-auto mb-[18px] block h-14 w-14 rounded-full object-cover"
        />
        <div className="mb-2 text-xs font-bold tracking-wide text-[#FF7A00]">
          PRIVATE EVENT
        </div>
        <h1 className="font-heading m-0 mb-2 text-[22px] font-bold text-[#252525]">
          Rahul & Priya — Wedding
        </h1>
        <p className="m-0 mb-7 text-[13.5px] text-[#6B6B6B]">
          Enter the event PIN shared by the host to watch.
        </p>
        <input
          type="text"
          placeholder="Enter Event PIN"
          maxLength={6}
          disabled
          className="mb-4 w-full rounded-xl border border-[#E0D3BC] p-3.5 text-center text-lg font-bold tracking-[4px] text-[#252525]"
        />
        <button
          type="button"
          className="w-full rounded-full bg-[#FF7A00] p-3.5 text-[15px] font-bold text-white"
        >
          Watch Event →
        </button>
      </div>
    </div>
  );
}
