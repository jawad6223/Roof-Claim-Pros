import './globals.css';
import type { Metadata } from 'next';
import localFont from 'next/font/local';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Loader from '@/components/ui/Loader';
import GTM from '@/components/layout/GTM';

const inter = localFont({
  src: [
    {
      path: '../public/fonts/Inter-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../public/fonts/Inter-Medium.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../public/fonts/Inter-SemiBold.woff2',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../public/fonts/Inter-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Free Roof Quotes | Storm Damage Roof Replacement',
  description: 'Get fast, free roof replacement quotes after storm damage. Licensed and insured contractors ready to help.',
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <GTM gtmId="GTM-KH98QBKQ" />
      </head>
      <body className={inter.className}>
        <Loader />
        {children}
      </body>
      <ToastContainer position="top-right" autoClose={3000} theme="colored" />
    </html>
  );
}
