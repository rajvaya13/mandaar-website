"use client";

import { useState } from "react";
import Link from "next/link";
import { MailIcon, LockIcon, EyeIcon, EyeOffIcon, ArrowRightIcon } from "lucide-react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPw, setShowPw] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Login will be wired to Supabase Auth in Phase 3. For now this is just the UI.");
  };

  return (
    <section className="min-h-screen pt-32 pb-20 px-6 md:px-14 bg-snow relative overflow-hidden">
      {/* Ambient glow */}
      <div
        className="absolute top-20 right-0 w-[500px] h-[500px] pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(212,160,23,0.10) 0%, transparent 65%)",
        }}
      />
      <div className="absolute bottom-0 left-0 w-32 h-32 paisley-bg opacity-30 rounded-full pointer-events-none" />

      <div className="relative max-w-md mx-auto">
        <div className="bg-snow rounded-3xl p-8 md:p-10 shadow-card-hover">
          <div className="text-center mb-8">
            <div className="text-rust text-xs font-medium tracking-[0.3em] uppercase mb-3">
              Welcome Back
            </div>
            <h1 className="font-display text-3xl md:text-4xl text-mandaar font-normal tracking-tight">
              Sign in to <span className="italic text-saffron">Mandaar</span>
            </h1>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="text-mandaar text-xs font-medium tracking-wide block mb-2">
                Email
              </label>
              <div className="relative">
                <MailIcon
                  size={16}
                  strokeWidth={1.8}
                  className="absolute top-1/2 left-4 -translate-y-1/2 text-warm-gray"
                />
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@example.com"
                  className="w-full bg-cream-warm border border-mandaar/10 rounded-xl pl-11 pr-4 py-3.5 text-sm text-mandaar placeholder:text-warm-gray-light outline-none focus:border-mandaar transition-colors"
                />
              </div>
            </div>

            <div>
              <div className="flex items-baseline justify-between mb-2">
                <label className="text-mandaar text-xs font-medium tracking-wide">
                  Password
                </label>
                <Link
                  href="/forgot-password"
                  className="text-saffron text-xs hover:underline"
                >
                  Forgot?
                </Link>
              </div>
              <div className="relative">
                <LockIcon
                  size={16}
                  strokeWidth={1.8}
                  className="absolute top-1/2 left-4 -translate-y-1/2 text-warm-gray"
                />
                <input
                  type={showPw ? "text" : "password"}
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Your password"
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

            <button
              type="submit"
              className="w-full inline-flex items-center justify-center gap-3 bg-mandaar text-cream py-4 rounded-full text-sm font-semibold tracking-wide btn-magnetic hover:bg-mandaar-deep mt-2"
            >
              Sign In
              <ArrowRightIcon size={16} />
            </button>
          </form>

          {/* Divider */}
          <div className="flex items-center gap-4 my-6">
            <div className="flex-1 h-px bg-mandaar/10" />
            <span className="text-warm-gray text-xs uppercase tracking-wide">
              or
            </span>
            <div className="flex-1 h-px bg-mandaar/10" />
          </div>

          {/* Continue with WhatsApp */}
          <button className="w-full inline-flex items-center justify-center gap-3 bg-[#25D366] text-white py-4 rounded-full text-sm font-semibold tracking-wide btn-magnetic hover:bg-[#1ea954]">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.464 3.488" />
            </svg>
            Continue with WhatsApp
          </button>

          <p className="text-center text-warm-gray text-sm mt-7">
            New to Mandaar?{" "}
            <Link
              href="/signup"
              className="text-mandaar font-medium hover:text-saffron transition-colors"
            >
              Create an account
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}
