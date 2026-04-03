import { NavLink } from "./nav-link";
import { Logo } from "@/components/logo";
import { navItems, type NavItem } from "./config-nav";

// -----------------------------------------------------------------------

function NavUl({ navData }: { navData: NavItem[] }) {
  return (
    <ul className="flex items-center gap-6">
      {navData.map((navItem) => (
        <li key={navItem.path}>
          <NavLink href={navItem.path} value={navItem.value} />
        </li>
      ))}
    </ul>
  );
}

// -----------------------------------------------------------------------

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full bg-[#FAFAF7]/90 backdrop-blur-md border-b border-gray-200/60">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Logo />
        <NavUl navData={navItems} />
      </div>
    </header>
  );
}
