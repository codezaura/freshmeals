"use client";

import { DashboardContent } from "@/components/core";
import { useAuth } from "@/sections/auth/auth-provider";

// -----------------------------------------------------------------------

export function DashboardAppView() {
  const { user } = useAuth();

  return <DashboardContent>Hey: {user?.username}</DashboardContent>;
}
