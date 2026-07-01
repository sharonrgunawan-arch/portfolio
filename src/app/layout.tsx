import type { Metadata } from "next";
import { Sora, Inter, Instrument_Sans, Sacramento } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";

// Fallbacks for proprietary Samsung Sharp Sans / SamsungOne.
// Swap to next/font/local if you have the licensed font files.
const display = Sora({ subsets: ["latin"], variable: "--font-display-src" });
const body = Inter({ subsets: ["latin"], variable: "--font-body-src" });
const label = Instrument_Sans({ subsets: ["latin"], variable: "--font-label-src" });
const script = Sacramento({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-script-src",
});

export const metadata: Metadata = {
  title: "Sharon Gunawan — Senior UX Designer",
  description:
    "Organizing complexity into experiences people love. Crafting clear, intuitive experiences across big tech, startups, and nonprofits.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${display.variable} ${body.variable} ${label.variable} ${script.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-paper text-ink">
        <Nav />
        <main className="flex-1">{children}</main>
      </body>
    </html>
  );
}
