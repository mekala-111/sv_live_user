import Image from "next/image";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-[#FFFDF9] p-6 text-center text-[#252525]">
      <Image
        src="/uploads/Logo.png"
        alt="SV Live Events"
        width={56}
        height={56}
        className="mb-6 h-14 w-14 rounded-full object-cover"
      />
      <div className="font-heading text-[100px] font-bold leading-none text-[#FFE4C7] max-sm:text-[72px]">
        404
      </div>
      <h1 className="font-heading m-0 mb-3 mt-3 text-[26px] font-bold uppercase">
        This Stream Doesn&apos;t Exist
      </h1>
      <p className="m-0 mb-7 max-w-[420px] text-[14.5px] text-[#6B6B6B]">
        The page you&apos;re looking for may have been moved, or the event
        link has expired.
      </p>
      <Link
        href="/"
        className="rounded-full bg-[#FF7A00] px-[30px] py-3.5 text-[15px] font-bold text-white hover:text-white"
      >
        Back to Home →
      </Link>
    </div>
  );
}
