"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useAuth } from "../auth/auth-provider";

// -----------------------------------------------------------------------

export function HomeHero() {
  const { user } = useAuth();

  return (
    <section className="relative min-h-[calc(100vh-72px)] flex items-center justify-center overflow-hidden ">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-[-10%] right-[-5%] w-125 h-125 rounded-full bg-green-100/60 blur-3xl" />
        <div className="absolute bottom-[-10%] left-[-5%] w-100 h-100 rounded-full bg-amber-100/50 blur-3xl" />
      </div>

      <div className="max-w-4xl mx-auto px-6 text-center flex flex-col items-center gap-6">
        {/* Badge */}
        <span className="inline-flex items-center gap-2 bg-green-50 border border-green-200 text-green-700 text-xs font-medium px-4 py-1.5 rounded-full">
          <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
          Fresh meals, delivered daily
        </span>

        {/* Heading */}
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-gray-900 leading-[1.08]">
          Fresh. Healthy.{" "}
          <span className="text-green-700 italic font-light">Affordable.</span>
          <br />
          <span className="text-gray-500 font-light text-4xl md:text-6xl">
            Meals at your doorstep.
          </span>
        </h1>

        {/* Subtext */}
        <p className="text-gray-500 text-lg font-light max-w-xl leading-relaxed">
          freshmeals provides healthy meals at your doorstep at an affordable
          price.{" "}
          <Link
            href="/login"
            className="text-green-700 underline underline-offset-4 hover:text-green-800 transition-colors"
          >
            Order now →
          </Link>
        </p>

        {/* Buttons */}
        <div className="flex items-center gap-3 mt-2">
          <Button
            asChild
            variant="outline"
            className="rounded-full px-7 py-5 text-sm font-medium border-gray-300 hover:border-gray-400 hover:bg-white"
          >
            <Link href={user ? "/dashboard" : "/login"}>
              {user ? "Get in" : "Log in"}
            </Link>
          </Button>

          <Button
            asChild
            className="rounded-full px-7 py-5 text-sm font-medium bg-green-700 hover:bg-green-800 text-white shadow-none"
          >
            <Link href="/sign-up">Sign up free →</Link>
          </Button>
        </div>

        {/* Social proof */}
        <div className="flex items-center gap-3 mt-4 text-sm text-gray-400">
          <div className="flex -space-x-2">
            {["AN", "MK", "RS"].map((initials) => (
              <div
                key={initials}
                className="w-7 h-7 rounded-full bg-green-100 border-2 border-white flex items-center justify-center text-[10px] font-medium text-green-700"
              >
                {initials}
              </div>
            ))}
          </div>
          <span>
            Trusted by{" "}
            <span className="text-gray-600 font-medium">10,000+</span> customers
          </span>
        </div>
      </div>
    </section>
  );
}
