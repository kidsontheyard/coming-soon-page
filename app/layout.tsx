import { Component } from "react";
import GoogleTagManager from "../components/GoogleTagManager/GoogleTagManager";

import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import TagManager from "@/components/GoogleTagManager/GoogleTagManager";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Kids on the Yard",
  description: "Comming Soon",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <TagManager />
        {children}
      </body>
    </html>
  );
}
