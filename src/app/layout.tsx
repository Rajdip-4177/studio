import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google'; // Using Geist as specified in original layout
import './globals.css';
import { Toaster } from "@/components/ui/toaster";


const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

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
        className={`${geistSans.variable} ${geistMono.variable} antialiased h-full bg-gradient-to-br from-background via-primary/10 to-secondary/15 text-foreground`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
