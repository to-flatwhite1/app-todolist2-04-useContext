"use client"

import { createContext, useContext } from "react";
import "./globals.css";
import { Providers } from "@/contexts";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
