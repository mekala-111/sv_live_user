import Header from "@/components/Header";
import FooterSimple from "@/components/FooterSimple";

export default function BookPage() {
  return (
    <div className="bg-[#FFFDF9] text-[#252525]">
      <Header />

      <section className="mx-auto max-w-[720px] px-12 pb-[90px] pt-[60px] max-lg:px-6 max-sm:px-4">
        <div className="mb-10 text-center">
          <div className="mb-3 text-[13px] font-bold tracking-wide text-[#FF7A00]">
            REQUEST A QUOTE
          </div>
          <h1 className="font-heading m-0 mb-3 text-[38px] font-bold uppercase max-sm:text-[28px]">
            Book Your Event
          </h1>
          <p className="m-0 text-[15px] text-[#6B6B6B]">
            Share the details below and we&apos;ll send a custom quote within
            24 hours.
          </p>
        </div>

        <form className="flex flex-col gap-5">
          <div className="grid grid-cols-2 gap-5 max-sm:grid-cols-1">
            <div>
              <label className="mb-2 block text-[13px] font-semibold">
                Name
              </label>
              <input
                type="text"
                placeholder="Your full name"
                className="w-full rounded-[10px] border border-[#E0D3BC] bg-white px-4 py-[13px] text-sm"
              />
            </div>
            <div>
              <label className="mb-2 block text-[13px] font-semibold">
                Phone
              </label>
              <input
                type="tel"
                placeholder="Phone number"
                className="w-full rounded-[10px] border border-[#E0D3BC] bg-white px-4 py-[13px] text-sm"
              />
            </div>
          </div>
          <div>
            <label className="mb-2 block text-[13px] font-semibold">
              Email
            </label>
            <input
              type="email"
              placeholder="you@email.com"
              className="w-full rounded-[10px] border border-[#E0D3BC] bg-white px-4 py-[13px] text-sm"
            />
          </div>
          <div className="grid grid-cols-2 gap-5 max-sm:grid-cols-1">
            <div>
              <label className="mb-2 block text-[13px] font-semibold">
                Event Type
              </label>
              <select className="w-full rounded-[10px] border border-[#E0D3BC] bg-white px-4 py-[13px] text-sm">
                <option>Wedding</option>
                <option>Corporate Event</option>
                <option>Concert / Music</option>
                <option>Spiritual Event</option>
                <option>Sports Event</option>
                <option>Private Event</option>
              </select>
            </div>
            <div>
              <label className="mb-2 block text-[13px] font-semibold">
                Event Date
              </label>
              <input
                type="date"
                className="w-full rounded-[10px] border border-[#E0D3BC] bg-white px-4 py-[13px] text-sm"
              />
            </div>
          </div>
          <div>
            <label className="mb-2 block text-[13px] font-semibold">
              Event Location
            </label>
            <input
              type="text"
              placeholder="Venue, city"
              className="w-full rounded-[10px] border border-[#E0D3BC] bg-white px-4 py-[13px] text-sm"
            />
          </div>
          <div className="grid grid-cols-2 gap-5 max-sm:grid-cols-1">
            <div>
              <label className="mb-2 block text-[13px] font-semibold">
                Expected Viewers
              </label>
              <input
                type="text"
                placeholder="e.g. 200"
                className="w-full rounded-[10px] border border-[#E0D3BC] bg-white px-4 py-[13px] text-sm"
              />
            </div>
            <div>
              <label className="mb-2 block text-[13px] font-semibold">
                Number of Cameras
              </label>
              <input
                type="text"
                placeholder="e.g. 3"
                className="w-full rounded-[10px] border border-[#E0D3BC] bg-white px-4 py-[13px] text-sm"
              />
            </div>
          </div>
          <div>
            <label className="mb-2 block text-[13px] font-semibold">
              Streaming Platforms
            </label>
            <input
              type="text"
              placeholder="e.g. YouTube, private link"
              className="w-full rounded-[10px] border border-[#E0D3BC] bg-white px-4 py-[13px] text-sm"
            />
          </div>
          <div>
            <label className="mb-2 block text-[13px] font-semibold">
              Additional Requirements
            </label>
            <textarea
              placeholder="Tell us anything else we should know"
              rows={4}
              className="w-full resize-y rounded-[10px] border border-[#E0D3BC] bg-white px-4 py-[13px] text-sm"
            />
          </div>
          <button
            type="button"
            className="mt-2 rounded-full bg-[#FF7A00] p-4 text-[15px] font-bold text-white"
          >
            Request Quote →
          </button>
        </form>
      </section>

      <FooterSimple />
    </div>
  );
}
