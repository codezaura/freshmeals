import { CenteredLayout } from "@/components/core/layout";

// -----------------------------------------------------------------------

export function AuthLayout({ children }: { children: React.ReactNode }) {
  return <CenteredLayout>{children}</CenteredLayout>;
}
