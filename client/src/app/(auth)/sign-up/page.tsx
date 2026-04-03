import type { Metadata } from "next";

import { CONFIG } from "@/config-global";
import { SignUpView } from "@/sections/auth/view";

// -----------------------------------------------------------------------

export const metadata: Metadata = {
  title: `Sign-up | ${CONFIG.site.name}`,
  description: "Sign-up into freshmeals to enjoy seamless experience",
};

// -----------------------------------------------------------------------

export default function Page() {
  return <SignUpView />;
}
