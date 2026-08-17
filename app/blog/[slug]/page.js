import Image from "next/image";
import Header from "@/components/Header";
import FooterSimple from "@/components/FooterSimple";

export const dynamicParams = true;

export default async function BlogDetailsPage({ params }) {
  await params;

  return (
    <div className="bg-[#FFFDF9] text-[#252525]">
      <Header />

      <section className="mx-auto max-w-[720px] px-12 pt-[50px] max-lg:px-6">
        <div className="mb-3 text-xs font-bold tracking-[0.5px] text-[#FF7A00]">
          WEDDINGS
        </div>
        <h1 className="font-heading m-0 mb-3.5 text-[34px] font-bold leading-[1.2]">
          How to Live Stream a Wedding: A Complete Guide
        </h1>
        <div className="mb-[30px] text-[13px] text-[#6B6B6B]">
          Aug 10, 2026 · SV Live Events Team
        </div>
        <div className="relative mb-9 h-[400px] overflow-hidden rounded-2xl">
          <Image
            src="/uploads/Portfolio.png"
            alt="Wedding photography and streaming setup"
            fill
            className="object-cover"
          />
        </div>
      </section>

      <section className="mx-auto max-w-[720px] px-12 pb-[90px] max-lg:px-6">
        <p className="m-0 mb-5 text-[15.5px] leading-[1.75] text-[#252525]">
          Streaming a wedding well takes more than pointing a single camera
          at the ceremony. Guests joining remotely should feel like they have
          a good seat in the room — which means thinking through camera
          angles, audio, and connectivity well before the big day.
        </p>
        <h2 className="font-heading mb-3.5 mt-8 text-[22px] font-semibold">
          Plan Camera Positions Early
        </h2>
        <p className="m-0 mb-5 text-[15px] leading-[1.7] text-[#6B6B6B]">
          A wide shot of the mandap or altar, a closer shot on the couple,
          and a shot covering guest reactions together give viewers a
          complete picture of the ceremony. Walk the venue in advance to
          confirm sightlines and power access.
        </p>
        <h2 className="font-heading mb-3.5 mt-8 text-[22px] font-semibold">
          Always Bring Backup Connectivity
        </h2>
        <p className="m-0 mb-5 text-[15px] leading-[1.7] text-[#6B6B6B]">
          Venue Wi-Fi can be unreliable, especially with many guests
          connected at once. A dedicated mobile hotspot or bonded connection
          keeps the stream live even if the venue network drops.
        </p>
        <h2 className="font-heading mb-3.5 mt-8 text-[22px] font-semibold">
          Keep The Stream Private
        </h2>
        <p className="m-0 text-[15px] leading-[1.7] text-[#6B6B6B]">
          Most families prefer a private, password-protected link over a
          fully public stream. It keeps the moment intimate while still
          reaching relatives who can&apos;t attend in person.
        </p>
      </section>

      <FooterSimple />
    </div>
  );
}
