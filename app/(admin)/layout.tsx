import React from "react";
import "../globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

import { Toaster } from "sonner";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Vastra Wears | Damak, Jhapa, Nepal",
  description: "Vastra Wears | Damak, Jhapa, Nepal",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${inter.className} min-h-screen`}>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
