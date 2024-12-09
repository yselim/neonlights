import type { Metadata } from "next";
import "./globals.css";
import AppBar from "@/components/appbar";
import { Container } from "@mui/material";

export const metadata: Metadata = {
  title: "ChitChat App",
  description: "A simple social news app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="flex flex-col justify-between">
        <Container maxWidth="xl" className="flex flex-col justify-between h-full">
          <AppBar />

          <div className="flex border flex-1">
            <div className="border">Sidebar</div>
            {children}
          </div>
          <div className="border">FOOTER</div>
        </Container>
      </body>
    </html>
  );
}
