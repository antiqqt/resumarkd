import { cn } from '@/lib/cn';
import { Inter, Roboto_Mono } from 'next/font/google';
import './globals.css';
import Providers from './providers';

const fontSans = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

const fontMono = Roboto_Mono({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-roboto-mono',
});

export const metadata = {
  title: 'Resumarkd',
  description: 'Markdown-to-resume generator',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={cn(
          'bg-background font-sans',
          fontSans.variable,
          fontMono.variable
        )}
      >
        <Providers> {children} </Providers>
      </body>
    </html>
  );
}
