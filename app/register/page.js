"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { Suspense } from "react";
import { authApi } from "@/lib/api";
import { saveSession } from "@/lib/auth-client";

function RegisterForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const queryVendorId = searchParams.get("vendorId") || "";

  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    password: "",
    confirmPassword: "",
    vendorId: queryVendorId,
    agree: false,
  });
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");

  const vendorId = useMemo(
    () => form.vendorId || queryVendorId,
    [form.vendorId, queryVendorId]
  );

  function update(field) {
    return (e) => {
      const value = field === "agree" ? e.target.checked : e.target.value;
      setForm((prev) => ({ ...prev, [field]: value }));
    };
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setError("");

    if (!form.agree) {
      setError("Please agree to the Terms of Service.");
      return;
    }
    if (form.password !== form.confirmPassword) {
      setError("Passwords do not match.");
      return;
    }
    if (!vendorId) {
      setError("Vendor ID is required. Use ?vendorId=… or enter it below.");
      return;
    }

    setSubmitting(true);
    try {
      const data = await authApi.register({
        name: form.name,
        email: form.email,
        phone: form.phone || undefined,
        password: form.password,
        vendorId,
      });
      saveSession({
        accessToken: data.accessToken,
        refreshToken: data.refreshToken,
        user: data.user || { name: form.name, email: form.email },
      });
      router.push("/");
    } catch (err) {
      setError(err.message || "Registration failed");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-[#FFF4E8] p-6 text-[#252525]">
      <div className="w-full max-w-[420px] rounded-[20px] border border-[#F0E2CC] bg-white p-6 sm:p-10">
        <div className="mb-6 flex flex-col items-center">
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
          Create Account
        </h1>
        <form className="flex flex-col gap-3.5" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Full Name"
            value={form.name}
            onChange={update("name")}
            required
            className="rounded-[10px] border border-[#E0D3BC] px-3.5 py-3 text-sm"
          />
          <input
            type="tel"
            placeholder="Phone Number"
            value={form.phone}
            onChange={update("phone")}
            className="rounded-[10px] border border-[#E0D3BC] px-3.5 py-3 text-sm"
          />
          <input
            type="email"
            placeholder="Email"
            value={form.email}
            onChange={update("email")}
            required
            className="rounded-[10px] border border-[#E0D3BC] px-3.5 py-3 text-sm"
          />
          <input
            type="password"
            placeholder="Password"
            value={form.password}
            onChange={update("password")}
            required
            minLength={8}
            className="rounded-[10px] border border-[#E0D3BC] px-3.5 py-3 text-sm"
          />
          <input
            type="password"
            placeholder="Confirm Password"
            value={form.confirmPassword}
            onChange={update("confirmPassword")}
            required
            minLength={8}
            className="rounded-[10px] border border-[#E0D3BC] px-3.5 py-3 text-sm"
          />
          <input
            type="text"
            placeholder="Vendor ID (required)"
            value={form.vendorId}
            onChange={update("vendorId")}
            required={!queryVendorId}
            className="rounded-[10px] border border-[#E0D3BC] px-3.5 py-3 text-sm"
          />
          <label className="mt-1 flex items-start gap-2 text-[12.5px] text-[#6B6B6B]">
            <input
              type="checkbox"
              className="mt-0.5"
              checked={form.agree}
              onChange={update("agree")}
            />{" "}
            I agree to the Terms of Service and Privacy Policy
          </label>
          {error ? <p className="m-0 text-sm text-[#F52222]">{error}</p> : null}
          <button
            type="submit"
            disabled={submitting}
            className="mt-1.5 rounded-full bg-[#FF7A00] py-[13px] text-[15px] font-bold text-white disabled:opacity-60"
          >
            {submitting ? "Creating…" : "Create Account"}
          </button>
        </form>
        <div className="mt-5 text-center text-[13px] text-[#6B6B6B]">
          Already have an account?{" "}
          <Link href="/login" className="font-bold text-[#FF7A00]">
            Log in
          </Link>
        </div>
      </div>
    </div>
  );
}

export default function RegisterPage() {
  return (
    <Suspense
      fallback={
        <div className="flex min-h-screen items-center justify-center bg-[#FFF4E8] text-[#6B6B6B]">
          Loading…
        </div>
      }
    >
      <RegisterForm />
    </Suspense>
  );
}
