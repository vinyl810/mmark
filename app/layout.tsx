import './global.css';
import type { Metadata } from 'next';
import Image from 'next/image';
import { Inter, Libre_Barcode_128_Text as LibreBarcode } from 'next/font/google';
import React from 'react';
import FloatingHeader from '@/components/client/FloatingHeader';
import Link from 'next/link';
import style from '@/components/client/FloatingHeader/style.module.css';

const inter = Inter({ subsets: ['latin'] });
const libreBarcode = LibreBarcode({ subsets: ['latin'], weight: ['400'] });

export const metadata: Metadata = {
  title: 'Mmark',
  description: 'mmark, the easiest way to learn music.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {' '}
        {children}
      </body>
    </html>
  );
}
