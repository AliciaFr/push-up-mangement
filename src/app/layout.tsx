import "./globals.css";
import type { Metadata } from "next";
import { textFont } from "./utils/fonts";

export const metadata: Metadata = {
  title: "Push Up Management",
  description: "Management für Musiker und Buchautoren",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de">
      <body className={textFont.className}>{children}</body>
    </html>
  );
}
