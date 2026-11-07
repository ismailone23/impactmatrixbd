import type { Metadata } from "next";
import "./globals.css";
import { siteDescription, siteName, siteUrl } from "@/lib/site";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: "Impact Matrix | Creating impact in Bangladesh", template: "%s | Impact Matrix" },
  description: siteDescription,
  applicationName: siteName,
  keywords: ["Bangladesh", "social responsibility", "CSR", "community projects", "education", "health", "climate", "disaster response", "livelihood"],
  authors: [{ name: "Gryffindor Lab" }],
  alternates: { canonical: "/" },
  openGraph: { type: "website", siteName, locale: "en_US", title: "Impact Matrix | Creating impact in Bangladesh", description: siteDescription, url: "/" },
  twitter: { card: "summary_large_image", title: "Impact Matrix | Creating impact in Bangladesh", description: siteDescription },
  robots: { index: true, follow: true },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: siteName,
  url: siteUrl,
  logo: `${siteUrl}/apple-icon.png`,
  email: "info@gryffindorlab.com",
  description: siteDescription,
  areaServed: "BD",
  parentOrganization: { "@type": "Organization", name: "Gryffindor Lab" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="antialiased" data-scroll-behavior="smooth">
      <head>
        <link rel="preconnect" href="https://api.fontshare.com" />
        <link rel="preconnect" href="https://cdn.fontshare.com" crossOrigin="" />
        <link href="https://api.fontshare.com/v2/css?f[]=general-sans@400,500,600&display=swap" rel="stylesheet" />
      </head>
      <body className="min-h-screen bg-white font-sans text-ink">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }} />
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
