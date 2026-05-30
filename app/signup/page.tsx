"use client";

import { useState } from "react";
import Link from "next/link";
import {
  UserIcon,
  MailIcon,
  LockIcon,
  PhoneIcon,
  EyeIcon,
  EyeOffIcon,
  ArrowRightIcon,
  CheckIcon,
} from "lucide-react";

const perks = [
  "Save addresses for faster checkout",
  "Track every order in real-time",
  "Early access to new harvests",
  "Subscriber-only pricing",
];

export default function SignupPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
  });
  const [showPw, setShowPw] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Signup will be wired to Supabase Auth in Phase 3. For now this is just the UI.");
  };

  return (
    <section className="min-h-screen pt-32 pb-20 px-6 md:px-14 bg-snow relative overflow-hidden">
      <div
        className="absolute top-20 right-0 w-[500px] h-[500px] pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(212,160,23,0.10) 0%, transparent 65%)",
        }}
      />
      <div className="absolute bottom-0 left-0 w-32 h-32 paisley-bg opacity-30 rounded-full pointer-events-none" />

      <div className="relative max-w-5xl mx-auto grid lg:grid-cols-[1fr_1.1fr] gap-8 lg:gap-12 items-center">
        <div className="hidden lg:block">
          <div className="text-rust text-xs font-medium tracking-[0.3em] uppercase mb-4">
            Join Mandaar
          </div>
          <h1 className="font-display text-4xl lg:text-5xl text-mandaar font-normal tracking-tight leading-[1.05] mb-6">
            Welcome to the<br />
            <span className="italic text-saffron">inner circle</span>.
          </h1>
          <p className="text-warm-gray text-base leading-relaxed mb-9">
            Premium dry fruits, hand-picked from origin farms - now at your fingertips. Create an account in 30 seconds.
          </p>

          <ul className="space-y-4">
            {perks.map((p) => (
              <li key={p} className="flex gap-3 items-center">
                <span className="w-7 h-7 rounded-full bg-mandaar text-saffron flex items-center justify-center flex-shrink-0">
                  <CheckIcon size={14} strokeWidth={3} />
                </span>
                <span className="text-mandaar text-sm">{p}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-snow rounded-3xl p-8 md:p-10 shadow-card-hover w-full max-w-md mx-auto lg:max-w-none">
          <div className="lg:hidden text-center mb-8">
            <div className="text-rust text-xs font-medium tracking-[0.3em] uppercase mb-3">
              Join Mandaar
            </div>
            <h1 className="font-display text-3xl text-mandaar font-normal tracking-tight">
              Create your <span className="italic text-saffron">account</span>
            </h1>
          </div>
          <div className="hidden lg:block mb-7">
            <h2 className="font-display text-2xl text-mandaar font-medium mb-1">
              Create your account
            </h2>
            <p className="text-warm-gray text-sm">It takes about 30 seconds.</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <Field
              icon={<UserIcon size={16} strokeWidth={1.8} />}
              label="Full name"
              type="text"
              placeholder="Your name"
              value={form.name}
              onChange={(v) => setForm({ ...form, name: v })}
            />
            <Field
              icon={<MailIcon size={16} strokeWidth={1.8} />}
              label="Email"
              type="email"
              placeholder="you@example.com"
              value={form.email}
              onChange={(v) => setForm({ ...form, email: v })}
            />
            <Field
              icon={<PhoneIcon size={16} strokeWidth={1.8} />}
              label="WhatsApp number"
              type="tel"
              placeholder="+91 99XXX XXXXX"
              value={form.phone}
              onChange={(v) => setForm({ ...form, phone: v })}
            />

            <div>
              <label className="text-mandaar text-xs font-medium tracking-wide block mb-2">
                Password
              </label>
              <div className="relative">
                <LockIcon
                  size={16}
                  strokeWidth={1.8}
                  className="absolute top-1/2 left-4 -translate-y-1/2 text-warm-gray"
                />
                <input
                  type={showPw ? "text" : "password"}
                  required
                  minLength={8}
                  value={form.password}
                  onChange={(e) => setForm({ ...form, password: e.target.value })}
                  placeholder="At least 8 characters"
                  className="w-full bg-cream-warm border border-mandaar/10 rounded-xl pl-11 pr-12 py-3.5 text-sm text-mandaar placeholder:text-warm-gray-light outline-none focus:border-mandaar transition-colors"
                />
                <button
                  type="button"
                  onClick={() => setShowPw(!showPw)}
                  className="absolute top-1/2 right-4 -translate-y-1/2 text-warm-gray hover:text-mandaar transition-colors"
                  aria-label={showPw ? "Hide password" : "Show password"}
                >
                  {showPw ? <EyeOffIcon size={16} /> : <EyeIcon size={16} />}
                </button>
              </div>
            </div>

            <p className="text-warm-gray text-xs leading-relaxed pt-2">
              By creating an account, you agree to Mandaar&apos;s{" "}
              <Link href="/terms" className="underline">Terms</Link>{" "}
              and{" "}
              <Link href="/privacy" className="underline">Privacy Policy</Link>.
            </p>

            <button
              type="submit"
              className="w-full inline-flex items-center justify-center gap-3 bg-mandaar text-cream py-4 rounded-full text-sm font-semibold tracking-wide btn-magnetic hover:bg-mandaar-deep mt-2"
            >
              Create Account
              <ArrowRightIcon size={16} />
            </button>
          </form>

          <p className="text-center text-warm-gray text-sm mt-7">
            Already have an account?{" "}
            <Link
              href="/login"
              className="text-mandaar font-medium hover:text-saffron transition-colors"
            >
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}

function Field({
  icon,
  label,
  type,
  placeholder,
  value,
  onChange,
}: {
  icon: React.ReactNode;
  label: string;
  type: string;
  placeholder: string;
  value: string;
  onChange: (v: string) => void;
}) {
  return (
    <div>
      <label className="text-mandaar text-xs font-medium tracking-wide block mb-2">
        {label}
      </label>
      <div className="relative">
        <span className="absolute top-1/2 left-4 -translate-y-1/2 text-warm-gray">
          {icon}
        </span>
        <input
          type={type}
          required
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          className="w-full bg-cream-warm border border-mandaar/10 rounded-xl pl-11 pr-4 py-3.5 text-sm text-mandaar placeholder:text-warm-gray-light outline-none focus:border-mandaar transition-colors"
        />
      </div>
    </div>
  );
}
