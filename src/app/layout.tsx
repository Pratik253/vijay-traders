import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Vijay Traders — Premium Building Materials & Hardware | Yawal, Maharashtra",
  description:
    "Your one-stop destination for premium building materials, hardware, plumbing, paints & construction supplies. Vijay Traders, Yawal — trusted since 1992. Call 9422773072.",
  keywords: [
    "Vijay Traders Yawal",
    "building materials Yawal",
    "hardware shop Yawal",
    "cement dealer Yawal",
    "TMT steel Yawal",
    "plumbing supplies Yawal",
    "sanitary ware Yawal",
    "construction materials Maharashtra",
    "Ambuja cement dealer",
    "ACC cement dealer",
    "pipes fittings Yawal",
  ].join(", "),
  openGraph: {
    title: "Vijay Traders — Premium Building Materials & Hardware",
    description:
      "Trusted since 1992. Cement, Steel, Pipes, Tiles, Sanitary Ware & more. Vijay Traders, Yawal, Maharashtra.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=Outfit:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
