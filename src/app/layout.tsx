import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { MobileActionBar } from "@/components/layout/MobileActionBar";
import { JsonLd } from "@/components/seo/JsonLd";
import { SITE_URL, company } from "@/data/site";
import { localBusinessJsonLd } from "@/lib/structured-data";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Apar Dynamics — Engineering Solutions & Fabrication, Pune",
    template: "%s | Apar Dynamics",
  },
  description: company.description,
  applicationName: company.name,
  keywords: [
    "industrial automation Pune",
    "material handling equipment",
    "assembly fixtures",
    "robotic welding",
    "MS SS fabrication Pune",
    "portable cabins Pune",
    "Just Porta",
  ],
  formatDetection: { telephone: false },
};

export const viewport: Viewport = {
  themeColor: "#0B2D5C",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-IN">
      <body className="flex min-h-screen flex-col antialiased">
        <JsonLd data={localBusinessJsonLd()} />
        <Header />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <Footer />
        <MobileActionBar />
      </body>
    </html>
  );
}
