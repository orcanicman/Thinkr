import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "YOOOOO",
  description: "Yoooo",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-ownCream dark:bg-ownBlue text-ownLightBlue dark:text-ownWhite`}
      >
        {children}
      </body>
    </html>
  );
}
