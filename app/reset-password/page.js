"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { authApi } from "@/lib/api";

export default function ResetPasswordPage() {
  const router = useRouter();
  const [form, setForm] = useState({
    email: "",
    code: "",
    newPassword: "",
    confirmPassword: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  function update(field) {
    return (e) => setForm((prev) => ({ ...prev, [field]: e.target.value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setError("");
    if (form.newPassword !== form.confirmPassword) {
      setError("Passwords do not match.");
      return;
    }
    setSubmitting(true);
    try {
      const data = await authApi.resetPassword(
        form.email,
        form.code,
        form.newPassword
      );
      setSuccess(data?.message || "Password updated. Please log in again.");
      setTimeout(() => router.push("/login"), 1200);
    } catch (err) {
      setError(err.message || "Reset failed");
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
          Reset Password
        </h1>
        <p className="m-0 mb-6 text-center text-[13.5px] text-[#6B6B6B]">
          Enter your email, reset code, and a new password.
        </p>
        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Email"
            value={form.email}
            onChange={update("email")}
            required
            className="rounded-[10px] border border-[#E0D3BC] px-3.5 py-3 text-sm"
          />
          <input
            type="text"
            placeholder="Reset code"
            value={form.code}
            onChange={update("code")}
            required
            className="rounded-[10px] border border-[#E0D3BC] px-3.5 py-3 text-sm"
          />
          <input
            type="password"
            placeholder="New Password"
            value={form.newPassword}
            onChange={update("newPassword")}
            required
            minLength={8}
            className="rounded-[10px] border border-[#E0D3BC] px-3.5 py-3 text-sm"
          />
          <input
            type="password"
            placeholder="Confirm New Password"
            value={form.confirmPassword}
            onChange={update("confirmPassword")}
            required
            minLength={8}
            className="rounded-[10px] border border-[#E0D3BC] px-3.5 py-3 text-sm"
          />
          {error ? <p className="m-0 text-sm text-[#F52222]">{error}</p> : null}
          {success ? <p className="m-0 text-sm text-green-700">{success}</p> : null}
          <button
            type="submit"
            disabled={submitting}
            className="rounded-full bg-[#FF7A00] py-[13px] text-[15px] font-bold text-white disabled:opacity-60"
          >
            {submitting ? "Updating…" : "Reset Password"}
          </button>
        </form>
        <div className="mt-5 text-center text-[13px] text-[#6B6B6B]">
          <Link href="/login" className="font-bold text-[#FF7A00]">
            ← Back to Login
          </Link>
        </div>
      </div>
    </div>
  );
}
