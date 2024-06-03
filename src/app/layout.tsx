import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import StoreProvider from './StoreProvider';
import { Toaster } from '@/components/ui/toaster';
import RequireAuth from '@/components/RequireAuth';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <StoreProvider>
          <RequireAuth>
            {children}
            <Toaster />
          </RequireAuth>
        </StoreProvider>
      </body>
    </html>
  );
}
