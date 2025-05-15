import type { Metadata } from "next/types";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import "./styles.css";  
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});



export const metadata: Metadata = {
  title: 'Game Terminal - Launch AI-powered Games with a single prompt',
  description: 'GameTerminal turns your ideas into live games with deploy-ready tokens, AI agents, and instant Telegram export - all from one command.',
  icons: {
    icon: '/logo.svg', // path to your favicon file in public/
  },
  openGraph: {
    title: 'Game Terminal - Launch AI-powered Games with a single prompt',
    description: 'GameTerminal turns your ideas into live games with deploy-ready tokens, AI agents, and instant Telegram export - all from one command.',
    siteName: 'GameTerminal',
    images: [
      {
        url: '/thumbnail.png', // BIG image for social
        width: 1200,
        height: 630,
        alt: 'Game Terminal',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Game Terminal',
    description: 'GameTerminal turns your ideas into live games with deploy-ready tokens, AI agents, and instant Telegram export - all from one command.',
    images: ['/thumbnail.png'],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
