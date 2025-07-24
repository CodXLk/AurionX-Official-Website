import type { Metadata } from 'next';
import { Inter, Space_Grotesk, Ubuntu } from 'next/font/google';
import localFont from 'next/font/local'

import './globals.css';
import Header from '@/components/header';
import Footer from '@/components/footer';
import Chatbot from '@/components/chatbot';
import { Toaster } from '@/components/ui/toaster';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });


const ubuntu500 = Ubuntu({
  subsets: ['latin'], variable: '--font-ubuntu-500',
  weight: '500'
});

const ubuntu700 = Ubuntu({
  subsets: ['latin'], variable: '--font-ubuntu-700',
  weight: '700'
});
const gaveto = localFont({
  src: [{ path: "../../public/fonts/gaveto.ttf", weight: "100" }],
  variable: "--font-gaveto",
});
const spaceGrotesk = Space_Grotesk({ subsets: ['latin'], variable: '--font-space-grotesk' });

export const metadata: Metadata = {
  title: 'AurionX Solutions | Smart Software Solutions',
  description: 'Empowering Businesses Through Smart Software Solutions: POS Systems, Management Platforms, and Web & Desktop Applications.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body className={`${inter.variable} ${spaceGrotesk.variable}  ${ubuntu500.variable} ${ubuntu700.variable}  font-body antialiased`}>
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <Chatbot />
        <Toaster />
      </body>
    </html>
  );
}
