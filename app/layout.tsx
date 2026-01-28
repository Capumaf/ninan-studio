// app/layout.tsx
import "./globals.css";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import Header from "@/components/nav/Header";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Ninan Studio",
    template: "%s · Ninan Studio",
  },
  description: "Digital studio for high-impact products.",
  openGraph: {
    title: "Ninan Studio",
    description: "Digital studio for high-impact products.",
    type: "website",
    siteName: "Ninan Studio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ninan Studio",
    description: "Digital studio for high-impact products.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={poppins.variable}>
      <body className="font-sans bg-[hsl(var(--bg))] text-[hsl(var(--fg))]">

        {/* Global shell */}
        <Header />

        {/* Page */}
        <div id="content">{children}</div>

        {/* Global footer */}
        <footer className="pb-12">
          <div className="container">
            <div className="rule mb-8" />
            <p className="p-muted">
              © {new Date().getFullYear()} Ninan Studio. All rights reserved.
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
