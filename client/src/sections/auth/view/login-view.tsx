"use client";

import { useState } from "react";
import Link from "next/link";

import { useAuthActions } from "@/actions/auth";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Container } from "@/components/core";

// -----------------------------------------------------------------------

interface logInCredentials {
  email: string;
  password: string;
}

// -----------------------------------------------------------------------

export function LogInView() {
  const Auth = useAuthActions();

  const [credentials, setCredentials] = useState<logInCredentials>({
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setCredentials((prev) => ({ ...prev, [name]: value }));
    if (error) setError("");
  };

  const handleLogin = async () => {
    setLoading(true);
    setError("");
    try {
      const user = await Auth.login(credentials);
      console.log("Login Success! User:", user);
    } catch (err) {
      setError(
        err instanceof Error ? err.message : "Invalid email or password.",
      );
    } finally {
      setLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") handleLogin();
  };

  return (
    <Container
      maxWidth="lg"
      className="min-h-[calc(100vh-72px)] items-center justify-center px-4"
      disablePadding
    >
      <div className="flex items-center justify-center px-4">
        <div className="w-full max-w-4xl flex rounded-2xl overflow-hidden border border-gray-200/60 shadow-sm">
          {/* ── Left panel ── */}
          <div className="hidden md:flex flex-1 relative bg-green-800 flex-col items-center justify-center p-12 overflow-hidden">
            {/* Decorative blobs */}
            <div className="absolute -top-15 -right-15 w-64 h-64 rounded-full bg-green-700/50" />
            <div className="absolute -bottom-10 -left-10 w-48 h-48 rounded-full bg-amber-400/20" />
            <div className="absolute top-[40%] -left-5 w-24 h-24 rounded-full bg-green-600/40" />

            {/* Content */}
            <div className="relative z-10 text-center flex flex-col items-center gap-6">
              {/* Icon plate */}
              <div className="w-20 h-20 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center text-4xl">
                🥗
              </div>

              <div>
                <h2 className="text-white text-3xl font-semibold tracking-tight leading-snug">
                  Good food,
                  <br />
                  <span className="text-amber-300 italic font-light">
                    every day.
                  </span>
                </h2>
                <p className="text-green-200/80 text-sm font-light mt-3 max-w-xs leading-relaxed">
                  Healthy chef-crafted meals delivered to your door. Fresh
                  ingredients, zero compromise.
                </p>
              </div>

              {/* Proof pill */}
              <div className="flex items-center gap-2 bg-white/10 border border-white/15 rounded-full px-4 py-2">
                <div className="flex -space-x-1.5">
                  {["AN", "MK", "RS"].map((i) => (
                    <div
                      key={i}
                      className="w-6 h-6 rounded-full bg-green-600 border-2 border-green-800 flex items-center justify-center text-[9px] font-medium text-white"
                    >
                      {i}
                    </div>
                  ))}
                </div>
                <span className="text-green-100 text-xs">
                  10,000+ happy customers
                </span>
              </div>
            </div>
          </div>

          {/* ── Right panel ── */}
          <div className="flex-1 bg-white flex flex-col justify-center px-8 py-12 md:px-12">
            {/* Logo */}
            <div className="flex items-center gap-2 mb-8">
              <span className="w-2 h-2 rounded-full bg-amber-400" />
              <span className="text-green-800 font-semibold text-base tracking-tight">
                freshmeals
              </span>
            </div>

            {/* Heading */}
            <div className="mb-8">
              <h1 className="text-2xl font-bold text-gray-900 tracking-tight">
                Welcome back
              </h1>
              <p className="text-sm text-gray-400 font-light mt-1">
                Sign in to your account to continue
              </p>
            </div>

            {/* Error alert */}
            {error && (
              <div
                role="alert"
                aria-live="polite"
                className="mb-5 flex items-start gap-2 bg-red-50 border border-red-200 text-red-700 text-sm px-4 py-3 rounded-lg"
              >
                <span className="mt-0.5">⚠</span>
                <span>{error}</span>
              </div>
            )}

            {/* Form */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleLogin();
              }}
              noValidate
              className="flex flex-col gap-5"
            >
              {/* Email */}
              <div className="flex flex-col gap-1.5">
                <Label
                  htmlFor="email"
                  className="text-sm font-medium text-gray-700"
                >
                  Email address
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  placeholder="you@example.com"
                  value={credentials.email}
                  onChange={onChange}
                  onKeyDown={handleKeyDown}
                  required
                  aria-required="true"
                  className="h-11 rounded-lg border-gray-200 focus:border-green-600 focus:ring-green-600/20 text-sm"
                />
              </div>

              {/* Password */}
              <div className="flex flex-col gap-1.5">
                <div className="flex items-center justify-between">
                  <Label
                    htmlFor="password"
                    className="text-sm font-medium text-gray-700"
                  >
                    Password
                  </Label>
                  <Link
                    href="/forgot-password"
                    className="text-xs text-green-700 hover:text-green-800 transition-colors"
                  >
                    Forgot password?
                  </Link>
                </div>
                <Input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  placeholder="Enter your password"
                  value={credentials.password}
                  onChange={onChange}
                  onKeyDown={handleKeyDown}
                  required
                  aria-required="true"
                  className="h-11 rounded-lg border-gray-200 focus:border-green-600 focus:ring-green-600/20 text-sm"
                />
              </div>

              {/* Submit */}
              <Button
                type="submit"
                disabled={loading}
                aria-busy={loading}
                className="h-11 w-full rounded-full bg-green-700 hover:bg-green-800 text-white font-medium text-sm mt-1 transition-colors"
              >
                {loading ? (
                  <span className="flex items-center gap-2">
                    <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    Signing in...
                  </span>
                ) : (
                  "Sign in"
                )}
              </Button>
            </form>

            {/* Sign up link */}
            <p className="text-sm text-gray-400 text-center mt-6">
              Don't have an account?{" "}
              <Link
                href="/sign-up"
                className="text-green-700 font-medium hover:text-green-800 transition-colors"
              >
                Sign up free →
              </Link>
            </p>
          </div>
        </div>
      </div>
    </Container>
  );
}
