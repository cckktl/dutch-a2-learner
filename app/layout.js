import { Nunito, Noto_Sans_TC } from 'next/font/google';
import './globals.css';

const nunito = Nunito({
  subsets: ['latin'],
  weight: ['400', '600', '700', '800'],
  variable: '--font-nunito',
  display: 'swap',
});

const notoSansTC = Noto_Sans_TC({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-noto-sans-tc',
  display: 'swap',
});

export const metadata = {
  title: 'Dutch A2 Learner',
  description: 'Interactive Dutch A2 learning app',
};

export default function RootLayout({ children }) {
  return (
    <html lang="nl" className={`${nunito.variable} ${notoSansTC.variable}`}>
      <body>{children}</body>
    </html>
  );
}
