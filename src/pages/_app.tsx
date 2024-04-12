import { Inter } from 'next/font/google';

import type { AppProps } from 'next/app';

import '@unocss/reset/tailwind.css';
import '@/styles/globals.scss';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
});

const App = ({ Component, pageProps }: AppProps) => (
  <div className={inter.className}>
    <Component {...pageProps} />
  </div>
);

export default App;
