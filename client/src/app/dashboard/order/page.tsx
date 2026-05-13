import { Metadata } from "next";

import { CONFIG } from "@/config-global";
import { OrderListView } from "@/sections/dashboard/app/order-list-view";

// -----------------------------------------------------------------------

export const metadata: Metadata = {
  title: `Order list | ${CONFIG.site.name}`,
};

// -----------------------------------------------------------------------

export default function Page() {
  return <OrderListView />;
}
