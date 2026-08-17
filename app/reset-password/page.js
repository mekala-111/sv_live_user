import Image from "next/image";

export default function ResetPasswordPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-[#FFF4E8] p-4 text-[#252525]">
      <div className="w-full max-w-[400px] rounded-[20px] border border-[#F0E2CC] bg-white p-6 sm:p-10">
        <Image
          src="/uploads/Logo.png"
          alt="SV Live Events"
          width={56}
          height={56}
          className="mx-auto mb-4 block h-14 w-14 rounded-full object-cover"
        />
        <h1 className="font-heading m-0 mb-2.5 text-center text-[22px] font-bold uppercase">
          Reset Password
        </h1>
        <p className="m-0 mb-6 text-center text-[13.5px] text-[#6B6B6B]">
          Choose a new password for your account.
        </p>
        <form className="flex flex-col gap-4">
          <input
            type="password"
            placeholder="New Password"
            className="rounded-[10px] border border-[#E0D3BC] px-3.5 py-3 text-sm"
          />
          <input
            type="password"
            placeholder="Confirm New Password"
            className="rounded-[10px] border border-[#E0D3BC] px-3.5 py-3 text-sm"
          />
          <button
            type="button"
            className="rounded-full bg-[#FF7A00] py-[13px] text-[15px] font-bold text-white"
          >
            Reset Password
          </button>
        </form>
      </div>
    </div>
  );
}
