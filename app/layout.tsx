import type { Metadata } from "next";
import "./globals.css";
import { siteUrl } from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: "辽宁联盛 | Industrial Scale Prevention", template: "%s" },
  description: "Chemical-free industrial scale prevention for boilers, pipelines and heat exchangers.",
  keywords: ["Industrial water treatment", "Scale prevention system", "Boiler water treatment", "Heat exchanger protection", "Защита от накипи", "Водоподготовка", "Промышленные котельные", "Теплообменники"],
  robots: { index: true, follow: true },
  openGraph: { type: "website", siteName: "辽宁联盛", images: [{ url: "/og.webp", width: 1536, height: 1024, alt: "Liaoning Liansheng industrial scale prevention" }] },
  twitter: { card: "summary_large_image", images: ["/og.webp"] },
};
export default function RootLayout({ children }: Readonly<{children:React.ReactNode}>) { return <html lang="en"><body>{children}</body></html>; }
