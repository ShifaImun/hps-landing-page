import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: "HPSMUN 2026 — Be Vigilant",
  description:
    "Hyderabad Public School Model United Nations 2026. 25–26 July, Warangal. Strategic diplomacy, policy, and global governance.",
  authors: [{ name: "HPSMUN 2026" }],
  openGraph: {
    title: "HPSMUN 2026 — Be Vigilant",
    description:
      "Hyderabad Public School Model United Nations 2026. 25–26 July, Warangal. Strategic diplomacy, policy, and global governance.",
    type: "website",
    images: [
      "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/a7ea7aba-d5e4-4490-b51c-56853cefb200/id-preview-ddc07d22--9346457b-3011-4ac3-bb7a-4d194e4f71b3.lovable.app-1781529059320.png",
    ],
  },
  twitter: {
    card: "summary",
    site: "@Lovable",
    title: "HPSMUN 2026 — Be Vigilant",
    description:
      "Hyderabad Public School Model United Nations 2026. 25–26 July, Warangal. Strategic diplomacy, policy, and global governance.",
    images: [
      "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/a7ea7aba-d5e4-4490-b51c-56853cefb200/id-preview-ddc07d22--9346457b-3011-4ac3-bb7a-4d194e4f71b3.lovable.app-1781529059320.png",
    ],
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500&family=Inter:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
