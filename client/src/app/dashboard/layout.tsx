"use client";

import { DashboardLayout } from "@/components/core/layout";
import { AuthGuard } from "@/sections/auth/auth-guard";
import { useAuth } from "@/sections/auth/auth-provider";

// -----------------------------------------------------------------------

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <AuthGuard>
      <DashboardLayout>{children}</DashboardLayout>
    </AuthGuard>
  );
}
