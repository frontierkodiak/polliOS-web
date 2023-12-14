// components/loadFonts/loadFonts.tsx

import { IBM_Plex_Mono, IBM_Plex_Sans, Oswald, IBM_Plex_Sans_Condensed } from 'next/font/google';

export const ibmPlexMono = IBM_Plex_Mono({
    subsets: ['latin'],
    weight: '400',
    variable: '--font-ibm-plex-mono',
});

export const ibmPlexSans = IBM_Plex_Sans({
    subsets: ['latin'],
    weight: ['200', '300', '400', '500', '600', '700'],
    style: ['normal', 'italic'],
    variable: '--font-ibm-plex-sans',
});

export const ibmPlexSansCondensed = IBM_Plex_Sans_Condensed({
    subsets: ['latin'],
    weight: ['200', '300', '400', '500', '600', '700'],
    style: ['normal', 'italic'],
    variable: '--font-ibm-plex-sans-condensed',
});

export const oswald = Oswald({
  subsets: ['latin'],
  variable: '--font-oswald',
});