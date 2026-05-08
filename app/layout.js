import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "EracodeX | Global Digital Agency",
  description: "Global agency delivering high-performance Web, SaaS, FinTech, and AI solutions to clients worldwide.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <head>
        <link rel="preconnect" href="https://app.cal.com" />
        <link rel="dns-prefetch" href="https://app.cal.com" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              "name": "EracodeX Agency",
              "image": "/logo.png",
              "description": "EracodeX Agency specializes in High-performance Web Development, SaaS, FinTech solutions, and AI-driven Automation.",
              "url": "https://eracodex.com",
              "address": {
                "@type": "PostalAddress",
                "addressCountry": "Global"
              },
              "serviceType": [
                "UI/UX Design",
                "Web Development",
                "SaaS & FinTech Solutions",
                "AI & Automation Workflows",
                "Social Media Strategy",
                "Logo & Branding"
              ],
              "offers": {
                "@type": "Offer",
                "description": "Premium Digital Transformation & AI Solutions"
              }
            })
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
