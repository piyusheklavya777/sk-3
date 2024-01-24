import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Play to redeem rewards",
  description: "ScoreKount is a platform for gamers to play and earn rewards.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
      <link rel="icon" href="/sk-logo.png" sizes="any" />
        <meta charSet="utf-8" />
        <meta
          name="description"
          content="ScoreKount is a platform for gamers to play and earn rewards."
        />
        <meta property="og:image" content="/sk-logo.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#c2bdff" />
        <meta name="robots" content="index, follow" />
        <meta name="googlebot" content="index, follow" />
        <meta name="google" content="notranslate" />
        <meta name="google" content="nositelinkssearchbox" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
