import type { Metadata } from "next";

import { ThemeProvider } from "@/theme/theme-provider";
import { AuthProvider } from "@/sections/auth/auth-provider";
import { MainLayout } from "@/components/core/layout";
import { GuestGuard } from "@/sections/auth/guest-guard";

// -----------------------------------------------------------------------

export const metadata: Metadata = {
  title: "freshmeals",
  description:
    "freshmeals - get your favourite meals at your doorstep | order now",
};

// -----------------------------------------------------------------------

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <GuestGuard>
      <MainLayout>{children}</MainLayout>;
    </GuestGuard>
  );
}
