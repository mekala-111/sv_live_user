import Image from "next/image";
import Link from "next/link";

export default function LoginPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-[#FFF4E8] p-4 text-[#252525]">
      <div className="w-full max-w-[400px] rounded-[20px] border border-[#F0E2CC] bg-white p-6 sm:p-10">
        <div className="mb-7 flex flex-col items-center">
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
          Welcome Back
        </h1>
        <form className="flex flex-col gap-4">
          <div>
            <label className="mb-1.5 block text-[13px] font-semibold">
              Email or Phone
            </label>
            <input
              type="text"
              placeholder="you@email.com"
              className="w-full rounded-[10px] border border-[#E0D3BC] px-3.5 py-3 text-sm"
            />
          </div>
          <div>
            <label className="mb-1.5 block text-[13px] font-semibold">
              Password
            </label>
            <input
              type="password"
              placeholder="••••••••"
              className="w-full rounded-[10px] border border-[#E0D3BC] px-3.5 py-3 text-sm"
            />
          </div>
          <div className="text-right">
            <Link
              href="/forgot-password"
              className="text-[12.5px] font-semibold text-[#FF7A00]"
            >
              Forgot password?
            </Link>
          </div>
          <button
            type="button"
            className="rounded-full bg-[#FF7A00] py-[13px] text-[15px] font-bold text-white"
          >
            Log In
          </button>
          <div className="my-1.5 flex items-center gap-2.5 text-xs text-[#6B6B6B]">
            <div className="h-px flex-1 bg-[#F0E2CC]" /> OR
            <div className="h-px flex-1 bg-[#F0E2CC]" />
          </div>
          <button
            type="button"
            className="rounded-full border border-[#E0D3BC] bg-white py-3 text-sm font-semibold text-[#252525]"
          >
            Continue with Google
          </button>
        </form>
        <div className="mt-5 text-center text-[13px] text-[#6B6B6B]">
          Don&apos;t have an account?{" "}
          <Link href="/register" className="font-bold text-[#FF7A00]">
            Sign up
          </Link>
        </div>
      </div>
    </div>
  );
}
