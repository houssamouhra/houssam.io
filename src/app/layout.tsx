import type { Metadata } from 'next';
import { JetBrains_Mono } from 'next/font/google';
import { cn } from '@/lib/utils';
import { cookies } from 'next/headers';
import Navbar from '@/components/Navbar';
import { Toaster } from '@/components/ui/sonner';
import { ThemeProvider, type Theme } from '@/components/ThemeProvider';
import Script from 'next/script';
import LoadingBar from '@/components/loading-bar/LoadingBar';
import { WEBSITE_NAME } from '@/constants/website-name';
import { reloadLoadingBarBootstrap } from '@/components/loading-bar/LoadingBar-bootstrap';
import './globals.css';

const jetBrainsMono = JetBrains_Mono({
  variable: '--font-jetbrains-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://houssam.io'),
  title: WEBSITE_NAME,
  description: 'Houssam Ouhra — Full-stack developer',
  authors: [{ name: 'Houssam Ouhra', url: WEBSITE_NAME }],
  icons: {
    icon: '/favicon.ico',
  },
  openGraph: {
    title: WEBSITE_NAME,
    siteName: WEBSITE_NAME,
    description: 'Houssam Ouhra — Full-stack developer',
  },
};

function resolveInitialTheme(theme: Theme): 'light' | 'dark' {
  if (theme === 'light') return 'light';
  return 'dark';
}

export default async function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const cookieStore = await cookies();
  const storedTheme = cookieStore.get('theme')?.value;
  const initialTheme: Theme =
    storedTheme === 'light' || storedTheme === 'dark' || storedTheme === 'system'
      ? storedTheme
      : 'dark';
  const initialResolvedTheme = resolveInitialTheme(initialTheme);

  return (
    <html
      lang='en'
      suppressHydrationWarning
      className={cn('h-full', 'antialiased', jetBrainsMono.variable, 'font-mono')}
      style={{ colorScheme: initialResolvedTheme }}
    >
      <body className='min-h-full flex flex-col'>
        <Script id='reload-loading-bar-bootstrap' strategy='beforeInteractive'>
          {reloadLoadingBarBootstrap}
        </Script>
        <ThemeProvider initialTheme={initialTheme} initialResolvedTheme={initialResolvedTheme}>
          <LoadingBar />
          <Navbar />
          {children}
          <Toaster position='top-center' />
        </ThemeProvider>
      </body>
    </html>
  );
}
