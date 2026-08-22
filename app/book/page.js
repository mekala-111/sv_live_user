"use client";

import { useState } from "react";
import Header from "@/components/Header";
import FooterSimple from "@/components/FooterSimple";
import { publicApi } from "@/lib/api";

export default function BookPage() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    eventType: "Wedding",
    eventDate: "",
    location: "",
    expectedViewers: "",
    cameras: "",
    platforms: "",
    message: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  function update(field) {
    return (e) => setForm((prev) => ({ ...prev, [field]: e.target.value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setSubmitting(true);
    setError("");
    setSuccess("");
    try {
      const extras = [
        form.cameras ? `Cameras: ${form.cameras}` : "",
        form.platforms ? `Platforms: ${form.platforms}` : "",
        form.message || "",
      ]
        .filter(Boolean)
        .join("\n");

      await publicApi.createBooking({
        name: form.name,
        phone: form.phone,
        email: form.email || undefined,
        eventType: form.eventType,
        eventDate: form.eventDate || undefined,
        location: form.location || undefined,
        expectedViewers: form.expectedViewers || undefined,
        message: extras || undefined,
      });
      setSuccess("Thanks! We received your request and will reply within 24 hours.");
      setForm({
        name: "",
        phone: "",
        email: "",
        eventType: "Wedding",
        eventDate: "",
        location: "",
        expectedViewers: "",
        cameras: "",
        platforms: "",
        message: "",
      });
    } catch (err) {
      setError(err.message || "Could not submit booking");
    } finally {
      setSubmitting(false);
    }
  }

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

        <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
          <div className="grid grid-cols-2 gap-5 max-sm:grid-cols-1">
            <div>
              <label className="mb-2 block text-[13px] font-semibold">
                Name
              </label>
              <input
                type="text"
                placeholder="Your full name"
                value={form.name}
                onChange={update("name")}
                required
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
                value={form.phone}
                onChange={update("phone")}
                required
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
              value={form.email}
              onChange={update("email")}
              className="w-full rounded-[10px] border border-[#E0D3BC] bg-white px-4 py-[13px] text-sm"
            />
          </div>
          <div className="grid grid-cols-2 gap-5 max-sm:grid-cols-1">
            <div>
              <label className="mb-2 block text-[13px] font-semibold">
                Event Type
              </label>
              <select
                value={form.eventType}
                onChange={update("eventType")}
                className="w-full rounded-[10px] border border-[#E0D3BC] bg-white px-4 py-[13px] text-sm"
              >
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
                value={form.eventDate}
                onChange={update("eventDate")}
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
              value={form.location}
              onChange={update("location")}
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
                value={form.expectedViewers}
                onChange={update("expectedViewers")}
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
                value={form.cameras}
                onChange={update("cameras")}
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
              value={form.platforms}
              onChange={update("platforms")}
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
              value={form.message}
              onChange={update("message")}
              className="w-full resize-y rounded-[10px] border border-[#E0D3BC] bg-white px-4 py-[13px] text-sm"
            />
          </div>
          {error ? <p className="m-0 text-sm text-[#F52222]">{error}</p> : null}
          {success ? <p className="m-0 text-sm text-green-700">{success}</p> : null}
          <button
            type="submit"
            disabled={submitting}
            className="mt-2 rounded-full bg-[#FF7A00] p-4 text-[15px] font-bold text-white disabled:opacity-60"
          >
            {submitting ? "Submitting…" : "Request Quote →"}
          </button>
        </form>
      </section>

      <FooterSimple />
    </div>
  );
}
