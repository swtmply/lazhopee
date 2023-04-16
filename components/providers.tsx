"use client";

import { ThemeProvider } from "next-themes";
import React from "react";
import { Session } from "next-auth";
import { SessionProvider } from "next-auth/react";

export interface AuthContextProps {
  children: React.ReactNode;
  session: Session | null;
}

function Providers({ children, session }: AuthContextProps) {
  return (
    <ThemeProvider attribute="class">
      <SessionProvider session={session}>{children}</SessionProvider>
    </ThemeProvider>
  );
}

export default Providers;
