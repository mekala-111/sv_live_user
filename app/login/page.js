"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { authApi } from "@/lib/api";
import { saveSession } from "@/lib/auth-client";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    setSubmitting(true);
    setError("");
    try {
      const data = await authApi.login(email, password);
      saveSession({
        accessToken: data.accessToken,
        refreshToken: data.refreshToken,
        user: data.user,
      });
      router.push("/events");
    } catch (err) {
      setError(err.message || "Login failed");
    } finally {
      setSubmitting(false);
    }
  }

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
        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          <div>
            <label className="mb-1.5 block text-[13px] font-semibold">
              Email
            </label>
            <input
              type="email"
              placeholder="you@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
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
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
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
          {error ? <p className="m-0 text-sm text-[#F52222]">{error}</p> : null}
          <button
            type="submit"
            disabled={submitting}
            className="rounded-full bg-[#FF7A00] py-[13px] text-[15px] font-bold text-white disabled:opacity-60"
          >
            {submitting ? "Logging in…" : "Log In"}
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
