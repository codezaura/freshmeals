import "@/globals.css";
import { AuthProvider } from "@/sections/auth/auth-provider";
import { ThemeProvider } from "@/theme/theme-provider";

import { Outfit, Nunito_Sans } from "next/font/google";

const fontSans = Outfit({ subsets: ["latin"], variable: "--font-sans" });

const fontHeading = Nunito_Sans({
  subsets: ["latin"],
  variable: "--font-heading",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={fontSans.variable + " " + fontHeading.variable}
    >
      <body className="antialiased">
        <AuthProvider>
          <ThemeProvider>{children}</ThemeProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
