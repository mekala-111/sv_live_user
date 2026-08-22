import Image from "next/image";
import { redirect } from "next/navigation";
import { publicApi } from "@/lib/api";

export default async function MaintenancePage() {
  let maintenance = false;
  try {
    const settings = await publicApi.getSettings();
    maintenance =
      settings?.maintenance_mode === true ||
      settings?.maintenance_mode === "true" ||
      settings?.maintenance_mode === 1;
  } catch {
    maintenance = false;
  }

  if (!maintenance) {
    redirect("/");
  }

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-[#FFFDF9] p-6 text-center text-[#252525]">
      <Image
        src="/uploads/Logo.png"
        alt="SV Live Events"
        width={64}
        height={64}
        className="mb-7 h-16 w-16 rounded-full object-cover"
      />
      <h1 className="font-heading m-0 mb-3.5 text-[32px] font-bold uppercase">
        We&apos;ll Be Back Shortly
      </h1>
      <p className="m-0 mb-2 max-w-[420px] text-[15px] text-[#6B6B6B]">
        We&apos;re making some improvements to serve you better. Please check
        back soon.
      </p>
      <div className="font-heading mt-6 text-[15px] font-bold tracking-wide">
        SV LIVE EVENTS
      </div>
    </div>
  );
}
