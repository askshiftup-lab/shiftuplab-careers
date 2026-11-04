import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = { metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://careers.shiftuplab.com"), title: { default: "Careers | ShiftUp Lab", template: "%s | ShiftUp Lab" }, description: "Career opportunities at ShiftUp Lab." };
export default function RootLayout({children}: Readonly<{children: React.ReactNode}>) { return <html lang="en"><body>{children}</body></html>; }
