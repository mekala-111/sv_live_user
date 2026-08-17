import Image from "next/image";

const DIGITS = [1, 2, 3, 4, 5, 6];

export default function VerifyOtpPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-[#FFF4E8] p-4 text-[#252525]">
      <div className="w-full max-w-[380px] rounded-[20px] border border-[#F0E2CC] bg-white p-6 text-center sm:p-10">
        <Image
          src="/uploads/Logo.png"
          alt="SV Live Events"
          width={56}
          height={56}
          className="mx-auto mb-4 h-14 w-14 rounded-full object-cover"
        />
        <h1 className="font-heading m-0 mb-2.5 text-[22px] font-bold uppercase">
          Verify Your Number
        </h1>
        <p className="m-0 mb-6 text-[13.5px] text-[#6B6B6B]">
          We sent a 6-digit code to +91 93973 64040
        </p>
        <div className="mb-6 flex justify-center gap-2.5">
          {DIGITS.map((d) => (
            <input
              key={d}
              type="text"
              maxLength={1}
              className="h-[50px] min-w-0 flex-1 rounded-[10px] border border-[#E0D3BC] text-center text-xl font-bold"
            />
          ))}
        </div>
        <button
          type="button"
          className="mb-3.5 w-full rounded-full bg-[#FF7A00] py-[13px] text-[15px] font-bold text-white"
        >
          Verify
        </button>
        <div className="text-[13px] text-[#6B6B6B]">
          Didn&apos;t get a code?{" "}
          <a href="#" className="font-bold text-[#FF7A00]">
            Resend
          </a>
        </div>
      </div>
    </div>
  );
}
