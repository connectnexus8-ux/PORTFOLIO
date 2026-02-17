import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import { personalInfo } from '@/lib/data';
import FullScreenAnimation from '@/components/effects/full-screen-animation';

export const metadata: Metadata = {
  title: `${personalInfo.name} | Software Developer`,
  description: `Portfolio of ${personalInfo.name}, Software Developer`,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="!scroll-smooth dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&family=Space+Grotesk:wght@400;500;700&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased">
        <FullScreenAnimation />
        {children}
        <Toaster />
      </body>
    </html>
  );
}
