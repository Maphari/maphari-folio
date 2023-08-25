import "./sass/main.scss";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import LOGO from "./assets/favicon/logo.ico";

const poppins = Poppins({ weight: "400", preload: false });

const metadata: Metadata = {
  title: "Maphari | Personal portfolio",
  description: "Phumudzo maphari's portfolio. Here i showcase",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href={LOGO.src} />
        <title></title>
        <script
          src="https://kit.fontawesome.com/4441d92e7c.js"
          crossOrigin="anonymous"
          async
        />
      </head>
      <body className={poppins.className}>{children}</body>
    </html>
  );
}
