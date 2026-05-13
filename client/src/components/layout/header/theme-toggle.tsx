"use client";

import { useEffect, useState } from "react";

import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import { useColorScheme } from "@mui/material/styles";
import { MoonStar, SunMedium } from "lucide-react";

export function ThemeToggle() {
  const { mode, setMode } = useColorScheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const isDark = mode === "dark";

  return (
    <Tooltip title={isDark ? "Switch to light mode" : "Switch to dark mode"}>
      <IconButton
        onClick={() => setMode(isDark ? "light" : "dark")}
        size="small"
        sx={{ border: "1px solid", borderColor: "divider" }}
      >
        {isDark ? <SunMedium size={18} /> : <MoonStar size={18} />}
      </IconButton>
    </Tooltip>
  );
}
