import { AuthLayout } from "@/sections/auth/auth-layout";
import { GuestGuard } from "@/sections/auth/guest-guard";

// -----------------------------------------------------------------------

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <GuestGuard>
      <AuthLayout>{children}</AuthLayout>;
    </GuestGuard>
  );
}
