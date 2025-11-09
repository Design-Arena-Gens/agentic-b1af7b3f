import type { Metadata } from "next";
import { Inter, Noto_Serif_Devanagari } from "next/font/google";
import "./globals.css";

const bodyFont = Inter({ subsets: ["latin"], variable: "--font-body" });
const displayFont = Noto_Serif_Devanagari({
  subsets: ["devanagari"],
  variable: "--font-display"
});

export const metadata: Metadata = {
  metadataBase: new URL("https://agentic-b1af7b3f.vercel.app"),
  title: "भगवद्गीता | प्रथम अध्याय प्रथम श्लोक",
  description:
    "धृतराष्ट्र उवाच धर्मक्षेत्रे कुरुक्षेत्रे समवेता युयुत्सवः ... स्लोक का भावार्थ और प्रसंग"
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="hi" className={`${bodyFont.variable} ${displayFont.variable}`}>
      <body>{children}</body>
    </html>
  );
}
