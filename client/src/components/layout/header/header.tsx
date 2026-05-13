"use client";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { alpha } from "@mui/material/styles";
import Container from "@mui/material/Container";

import { Logo } from "@/components/logo";

import { RouterLink } from "@/routes";

import { NavLink } from "./nav-link";
import { ThemeToggle } from "./theme-toggle";
import { navItems, type NavItem } from "./config-nav";

function NavUl({ navData }: { navData: NavItem[] }) {
  return (
    <Box component="ul" sx={{ display: { xs: "none", md: "flex" }, alignItems: "center", gap: 3 }}>
      {navData.map((navItem) => (
        <Box component="li" key={navItem.path}>
          <NavLink href={navItem.path} value={navItem.value} />
        </Box>
      ))}
    </Box>
  );
}

export function Header() {
  return (
    <Box
      component="header"
      sx={{
        position: "sticky",
        top: 0,
        zIndex: (theme) => theme.zIndex.appBar,
        width: "100%",
        bgcolor: (theme) =>
          theme.palette.mode === "dark"
            ? alpha(theme.palette.grey[900], 0.76)
            : alpha(theme.palette.common.white, 0.82),
        backdropFilter: "blur(12px)",
        borderBottom: "1px solid",
        borderColor: (theme) => alpha(theme.palette.divider, theme.palette.mode === "dark" ? 0.5 : 1),
        boxShadow: (theme) =>
          theme.palette.mode === "dark"
            ? "0 8px 24px rgba(0,0,0,0.28)"
            : "0 8px 24px rgba(31,31,28,0.08)",
      }}
    >
      <Container
        maxWidth="lg"
        sx={{ px: 3, height: 68, display: "flex", alignItems: "center", justifyContent: "space-between", gap: 2 }}
      >
        <Logo />
        <NavUl navData={navItems} />
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <ThemeToggle />
          <Button component={RouterLink} href="/login" variant="contained" size="small">
            Login
          </Button>
        </Box>
      </Container>
    </Box>
  );
}
