import Image from "next/image";
import Link from "next/link";

export default function RegisterPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-[#FFF4E8] p-6 text-[#252525]">
      <div className="w-full max-w-[420px] rounded-[20px] border border-[#F0E2CC] bg-white p-6 sm:p-10">
        <div className="mb-6 flex flex-col items-center">
          <Image
            src="/uploads/Logo.png"
            alt="SV Live Events"
            width={56}
            height={56}
            className="mb-3 h-14 w-14 rounded-full object-cover"
          />
          <div className="font-heading text-lg font-bold">SV LIVE EVENTS</div>
        </div>
        <h1 className="font-heading m-0 mb-6 text-center text-2xl font-bold uppercase">
          Create Account
        </h1>
        <form className="flex flex-col gap-3.5">
          <input
            type="text"
            placeholder="Full Name"
            className="rounded-[10px] border border-[#E0D3BC] px-3.5 py-3 text-sm"
          />
          <input
            type="tel"
            placeholder="Phone Number"
            className="rounded-[10px] border border-[#E0D3BC] px-3.5 py-3 text-sm"
          />
          <input
            type="email"
            placeholder="Email"
            className="rounded-[10px] border border-[#E0D3BC] px-3.5 py-3 text-sm"
          />
          <input
            type="password"
            placeholder="Password"
            className="rounded-[10px] border border-[#E0D3BC] px-3.5 py-3 text-sm"
          />
          <input
            type="password"
            placeholder="Confirm Password"
            className="rounded-[10px] border border-[#E0D3BC] px-3.5 py-3 text-sm"
          />
          <label className="mt-1 flex items-start gap-2 text-[12.5px] text-[#6B6B6B]">
            <input type="checkbox" className="mt-0.5" /> I agree to the Terms
            of Service and Privacy Policy
          </label>
          <button
            type="button"
            className="mt-1.5 rounded-full bg-[#FF7A00] py-[13px] text-[15px] font-bold text-white"
          >
            Create Account
          </button>
        </form>
        <div className="mt-5 text-center text-[13px] text-[#6B6B6B]">
          Already have an account?{" "}
          <Link href="/login" className="font-bold text-[#FF7A00]">
            Log in
          </Link>
        </div>
      </div>
    </div>
  );
}
