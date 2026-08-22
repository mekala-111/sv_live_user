"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { authApi } from "@/lib/api";

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    setSubmitting(true);
    setError("");
    setSuccess("");
    try {
      const data = await authApi.forgotPassword(email);
      setSuccess(data?.message || "If that email exists, a reset code has been sent.");
    } catch (err) {
      setError(err.message || "Request failed");
    } finally {
      setSubmitting(false);
    }
  }

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
          Forgot Password
        </h1>
        <p className="m-0 mb-6 text-center text-[13.5px] text-[#6B6B6B]">
          Enter your email and we&apos;ll send a reset code.
        </p>
        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="you@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="rounded-[10px] border border-[#E0D3BC] px-3.5 py-3 text-sm"
          />
          {error ? <p className="m-0 text-sm text-[#F52222]">{error}</p> : null}
          {success ? <p className="m-0 text-sm text-green-700">{success}</p> : null}
          <button
            type="submit"
            disabled={submitting}
            className="rounded-full bg-[#FF7A00] py-[13px] text-[15px] font-bold text-white disabled:opacity-60"
          >
            {submitting ? "Sending…" : "Send Reset Code"}
          </button>
        </form>
        <div className="mt-5 text-center text-[13px] text-[#6B6B6B]">
          <Link href="/reset-password" className="font-bold text-[#FF7A00]">
            Have a code? Reset password →
          </Link>
          <div className="mt-3">
            <Link href="/login" className="font-bold text-[#FF7A00]">
              ← Back to Login
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
