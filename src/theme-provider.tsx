"use client";
import { ThemeProvider as NextThemeProvider } from "next-themes";
import type { ReactNode } from "react";

export function ThemeProvider({ children }: { children: ReactNode }) {
  return (
    <NextThemeProvider
      attribute="class"          // usa className dark
      defaultTheme="system"      // segue sistema na 1ª visita
      enableSystem
    >
      {children}
    </NextThemeProvider>
  );
}