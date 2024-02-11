import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Utilities/Navbar";

const raleway = Raleway({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Anime List",
  description: "Website Anime Indonesia",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${raleway.className} bg-color-dark`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
