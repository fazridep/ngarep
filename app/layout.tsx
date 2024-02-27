import './globals.css';
import { Providers } from './providers';

const inter = Inter({ subsets: ['latin'] });
import { Inter } from 'next/font/google';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Voorkant Admin',
  description: 'Voorkant Admin Application',
};

export default function RootLayout({ children }: { children: React.ReactNode }): JSX.Element {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
