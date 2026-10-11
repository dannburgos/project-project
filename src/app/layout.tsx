import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';

import { SmoothScroll } from '@/components/atoms/smooth-scroll';
import { SiteHeader } from '@/components/organisms/site-header';
import { siteContent } from '@/content/site';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin']
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin']
});

export const metadata: Metadata = {
  title: siteContent.brand,
  description: siteContent.prototypeNotice
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <SmoothScroll />
        <SiteHeader />
        <main className="page">{children}</main>
      </body>
    </html>
  );
}
