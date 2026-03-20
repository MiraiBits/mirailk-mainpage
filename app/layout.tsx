import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ThemeProvider from "@/components/ThemeProvider";

export const metadata: Metadata = {
  title: "MiraiBits – Services & Projects",
  description:
    "Custom software, cloud infrastructure, electronics engineering, and portfolio projects by MiraiBits – Sri Lanka.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        suppressHydrationWarning
        className="min-h-screen antialiased flex flex-col bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-100"
        style={{ fontFamily: "Inter, ui-sans-serif, system-ui, -apple-system, sans-serif" }}
      >
        <ThemeProvider>
          <Navbar />
          <div className="flex-1">{children}</div>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
