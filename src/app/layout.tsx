import Providers from '@/providers';
import { Geist, Geist_Mono } from "next/font/google";
import NextTopLoader from 'nextjs-toploader';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/ReactToastify.css';
import "./globals.css";
import Head from './Head';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <Head />
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <NextTopLoader
          color="#63D391"
          initialPosition={0.08}
          crawlSpeed={200}
          height={5}
          crawl={true}
          showSpinner={true}
          easing="ease"
          speed={200}
          shadow="0 0 10px #205266,0 0 5px #205266"
        />
        <ToastContainer />
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
