import type { Metadata } from "next";

import { CONFIG } from "@/config-global";
import { LogInView } from "@/sections/auth/view";

// -----------------------------------------------------------------------

export const metadata: Metadata = {
  title: `Login | ${CONFIG.site.name}`,
  description: "Login into freshmeals to enjoy seamless experience",
};

// -----------------------------------------------------------------------

export default function Page() {
  return <LogInView />;
}
