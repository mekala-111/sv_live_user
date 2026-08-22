"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { authApi } from "@/lib/api";

export default function VerifyOtpPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [code, setCode] = useState("");
  const [purpose, setPurpose] = useState("EMAIL_VERIFY");
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    setSubmitting(true);
    setError("");
    setSuccess("");
    try {
      await authApi.verifyOtp(email, code, purpose);
      setSuccess("Verified successfully.");
      setTimeout(() => router.push("/login"), 1000);
    } catch (err) {
      setError(err.message || "Verification failed");
    } finally {
      setSubmitting(false);
    }
  }

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
          Verify OTP
        </h1>
        <p className="m-0 mb-6 text-[13.5px] text-[#6B6B6B]">
          Enter the email and verification code you received.
        </p>
        <form className="flex flex-col gap-3.5 text-left" onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="rounded-[10px] border border-[#E0D3BC] px-3.5 py-3 text-sm"
          />
          <input
            type="text"
            placeholder="6-digit code"
            value={code}
            onChange={(e) => setCode(e.target.value)}
            required
            className="rounded-[10px] border border-[#E0D3BC] px-3.5 py-3 text-center text-xl font-bold tracking-[4px]"
          />
          <select
            value={purpose}
            onChange={(e) => setPurpose(e.target.value)}
            className="rounded-[10px] border border-[#E0D3BC] px-3.5 py-3 text-sm"
          >
            <option value="EMAIL_VERIFY">Email verify</option>
            <option value="PHONE_VERIFY">Phone verify</option>
            <option value="LOGIN">Login</option>
          </select>
          {error ? <p className="m-0 text-sm text-[#F52222]">{error}</p> : null}
          {success ? <p className="m-0 text-sm text-green-700">{success}</p> : null}
          <button
            type="submit"
            disabled={submitting}
            className="w-full rounded-full bg-[#FF7A00] py-[13px] text-[15px] font-bold text-white disabled:opacity-60"
          >
            {submitting ? "Verifying…" : "Verify"}
          </button>
        </form>
        <div className="mt-5 text-[13px] text-[#6B6B6B]">
          <Link href="/login" className="font-bold text-[#FF7A00]">
            ← Back to Login
          </Link>
        </div>
      </div>
    </div>
  );
}
