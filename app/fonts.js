import { Source_Sans_Pro, IBM_Plex_Sans } from 'next/font/google';

export const source_sans_pro = Source_Sans_Pro({
  weight: ['400', '600', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-source',
});

export const ibm_plex_sans = IBM_Plex_Sans({
  weight: ['400', '600', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-ibm',
});
