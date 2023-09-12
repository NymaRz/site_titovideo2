"use client";


import { ThemeProvider } from "next-themes";
import { SessionProvider } from "next-auth/react";

export const NextAuthProvider = ({ children }) => {
  return(
    <>
     <ThemeProvider attribute="class" enableSystem={false} defaultTheme="dark">
     <SessionProvider>{children}</SessionProvider>
     </ThemeProvider>
    </>
  )
};
