import type { Metadata } from 'next';
// Removed Geist font imports, will rely on system fonts defined in globals.css
import './globals.css';
import { Toaster } from "@/components/ui/toaster";

// If you have specific IPL-themed fonts to use, they can be imported here
// e.g. import { SomeSportyFont } from 'next/font/google';
// const sportyFont = SomeSportyFont({ subsets: ['latin'], variable: '--font-sporty' });

export const metadata: Metadata = {
  title: 'IPL Stats Hub',
  description: 'Socio-Economic Analysis of IPL Team Regions',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body 
        // className={`${sportyFont.variable} antialiased h-full bg-background text-foreground`} // Example if using a custom font
        className={`antialiased h-full bg-background text-foreground`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
