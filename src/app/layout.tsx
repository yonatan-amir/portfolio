import type { Metadata } from "next";
import Script from "next/script";
import { Gochi_Hand, Instrument_Sans } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme/theme-provider";

const sans = Instrument_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
});

const doodle = Gochi_Hand({
  variable: "--font-doodle",
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://example.com"),
  title: {
    default: "Creative Developer Portfolio",
    template: "%s | Creative Developer Portfolio",
  },
  description:
    "Portfolio website for a web developer showcasing frontend craft, technical range, selected work, and recruiter-friendly contact paths.",
  openGraph: {
    title: "Creative Developer Portfolio",
    description:
      "A playful portfolio with clean engineering, soft visuals, and recruiter-focused storytelling.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Creative Developer Portfolio",
    description:
      "A playful portfolio with clean engineering, soft visuals, and recruiter-focused storytelling.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${sans.variable} ${doodle.variable}`} suppressHydrationWarning>
      <body>
        <Script id="theme-init" strategy="beforeInteractive">
          {`(() => {
            try {
              const key = 'yonatan-theme-v2';
              const stored = localStorage.getItem(key);
              const theme = stored === 'light' || stored === 'dark' || stored === 'system' ? stored : 'system';
              const system = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
              const resolved = theme === 'system' ? system : theme;
              document.documentElement.dataset.themePreference = theme;
              document.documentElement.dataset.theme = resolved;
              document.documentElement.style.colorScheme = resolved;
            } catch (error) {}
          })();`}
        </Script>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
