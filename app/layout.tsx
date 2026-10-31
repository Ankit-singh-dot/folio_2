import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import { SiteNav } from "@/components/site-nav";
import { SmoothScroll } from "@/components/smooth-scroll";
import { person } from "@/content/site";
import "./globals.css";

const dmSans = DM_Sans({
  variable: "--font-dm",
  subsets: ["latin"],
});

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : "http://localhost:3000");

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: person.name, template: `%s | ${person.name}` },
  description: person.description,
  openGraph: {
    title: person.name,
    description: person.description,
    url: siteUrl,
    siteName: person.name,
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: person.name,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: person.name,
    description: person.description,
    images: ["/og-image.jpg"],
  },
};

// Runs before first paint, so a saved dark theme never flashes white.
const applyTheme = `try{var t=localStorage.getItem("theme");if(t==="dark"||(!t&&matchMedia("(prefers-color-scheme: dark)").matches))document.documentElement.classList.add("dark")}catch(e){}`;

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={dmSans.variable} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: applyTheme }} />
      </head>
      <body>
        <SmoothScroll />
        <div className="mx-auto max-w-[42rem] px-6 pt-10 pb-24 sm:pt-16">
          <SiteNav />
          <main className="mt-12">{children}</main>
        </div>
      </body>
    </html>
  );
}
