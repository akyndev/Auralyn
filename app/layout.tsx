import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Auralyn | AI that listens better",
  description:
    "Auralyn captures meetings, calls, and voice notes, then turns them into summaries, action items, searchable transcripts, and useful insights.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="">{children}</body>
    </html>
  );
}
