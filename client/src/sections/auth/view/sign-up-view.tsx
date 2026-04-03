"use client";

import { useState } from "react";
import Link from "next/link";

import { useAuthActions } from "@/actions/auth";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Container } from "@/components/core";

// -----------------------------------------------------------------------

interface SignUpCredentials {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
}

// -----------------------------------------------------------------------

export function SignUpView() {
  const Auth = useAuthActions();

  const [credentials, setCredentials] = useState<SignUpCredentials>({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setCredentials((prev) => ({ ...prev, [name]: value }));
    if (error) setError("");
  };

  const handleSignUp = async () => {
    if (credentials.password !== credentials.confirmPassword) {
      setError("Passwords do not match.");
      return;
    }
    if (credentials.password.length < 8) {
      setError("Password must be at least 8 characters.");
      return;
    }

    setLoading(true);
    setError("");
    try {
      const user = await Auth.signup({
        username: credentials.username,
        email: credentials.email,
        password: credentials.password,
      });
      console.log("Sign up success! User:", user);
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "Something went wrong. Please try again.",
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container
      maxWidth="lg"
      disablePadding
      className="min-h-[calc(100vh-72px)] items-center justify-center px-4"
    >
      <div className="w-full max-w-4xl flex rounded-2xl overflow-hidden border border-gray-200/60 shadow-sm">
        {/* ── Left panel ── */}
        <div className="hidden md:flex flex-1 relative bg-green-800 flex-col items-center justify-center p-12 overflow-hidden">
          {/* Decorative blobs */}
          <div className="absolute -top-15 -right-15 w-64 h-64 rounded-full bg-green-700/50" />
          <div className="absolute -bottom-10 -left-10 w-48 h-48 rounded-full bg-amber-400/20" />
          <div className="absolute top-[40%] -left-5 w-24 h-24 rounded-full bg-green-600/40" />

          {/* Content */}
          <div className="relative z-10 text-center flex flex-col items-center gap-6">
            <div className="w-20 h-20 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center text-4xl">
              🍱
            </div>

            <div>
              <h2 className="text-white text-3xl font-semibold tracking-tight leading-snug">
                Start eating
                <br />
                <span className="text-amber-300 italic font-light">
                  better today.
                </span>
              </h2>
              <p className="text-green-200/80 text-sm font-light mt-3 max-w-xs leading-relaxed">
                Join thousands of people who trust freshmeals for nutritious,
                affordable meals every day.
              </p>
            </div>

            {/* Feature list */}
            <ul className="flex flex-col gap-3 w-full max-w-xs">
              {[
                { icon: "🌿", text: "Fresh, locally sourced ingredients" },
                { icon: "⚡", text: "Delivered in under 30 minutes" },
                { icon: "💚", text: "₹200 off your first order" },
              ].map((item) => (
                <li
                  key={item.text}
                  className="flex items-center gap-3 bg-white/10 border border-white/15 rounded-xl px-4 py-2.5"
                >
                  <span className="text-base">{item.icon}</span>
                  <span className="text-green-100 text-xs font-light">
                    {item.text}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* ── Right panel ── */}
        <div className="flex-1 bg-white flex flex-col justify-center px-8 py-10 md:px-12">
          {/* Logo */}
          <div className="flex items-center gap-2 mb-6">
            <span className="w-2 h-2 rounded-full bg-amber-400" />
            <span className="text-green-800 font-semibold text-base tracking-tight">
              freshmeals
            </span>
          </div>

          {/* Heading */}
          <div className="mb-6">
            <h1 className="text-2xl font-bold text-gray-900 tracking-tight">
              Create an account
            </h1>
            <p className="text-sm text-gray-400 font-light mt-1">
              Free to join. No credit card required.
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
              handleSignUp();
            }}
            noValidate
            className="flex flex-col gap-4"
          >
            {/* Username */}
            <div className="flex flex-col gap-1.5">
              <Label
                htmlFor="username"
                className="text-sm font-medium text-gray-700"
              >
                Username
              </Label>
              <Input
                id="username"
                name="username"
                type="text"
                autoComplete="username"
                placeholder="johndoe"
                value={credentials.username}
                onChange={onChange}
                required
                aria-required="true"
                className="h-11 rounded-lg border-gray-200 focus:border-green-600 focus:ring-green-600/20 text-sm"
              />
            </div>

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
                required
                aria-required="true"
                className="h-11 rounded-lg border-gray-200 focus:border-green-600 focus:ring-green-600/20 text-sm"
              />
            </div>

            {/* Password row — side by side */}
            <div className="grid grid-cols-2 gap-3">
              <div className="flex flex-col gap-1.5">
                <Label
                  htmlFor="password"
                  className="text-sm font-medium text-gray-700"
                >
                  Password
                </Label>
                <Input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="new-password"
                  placeholder="Min. 8 characters"
                  value={credentials.password}
                  onChange={onChange}
                  required
                  aria-required="true"
                  aria-describedby="password-hint"
                  className="h-11 rounded-lg border-gray-200 focus:border-green-600 focus:ring-green-600/20 text-sm"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <Label
                  htmlFor="confirmPassword"
                  className="text-sm font-medium text-gray-700"
                >
                  Confirm password
                </Label>
                <Input
                  id="confirmPassword"
                  name="confirmPassword"
                  type="password"
                  autoComplete="new-password"
                  placeholder="Repeat password"
                  value={credentials.confirmPassword}
                  onChange={onChange}
                  required
                  aria-required="true"
                  className="h-11 rounded-lg border-gray-200 focus:border-green-600 focus:ring-green-600/20 text-sm"
                />
              </div>
            </div>

            <p id="password-hint" className="text-xs text-gray-400 -mt-1">
              Must be at least 8 characters long.
            </p>

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
                  Creating account...
                </span>
              ) : (
                "Create account →"
              )}
            </Button>
          </form>

          {/* Log in link */}
          <p className="text-sm text-gray-400 text-center mt-6">
            Already have an account?{" "}
            <Link
              href="/login"
              className="text-green-700 font-medium hover:text-green-800 transition-colors"
            >
              Sign in →
            </Link>
          </p>
        </div>
      </div>
    </Container>
  );
}
