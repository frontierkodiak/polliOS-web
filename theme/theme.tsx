import {MantineThemeOverride, rem} from '@mantine/core';
import { ibmPlexMono, ibmPlexSans, ibmPlexSansCondensed, oswald } from 'components/loadFonts/loadFonts';






export const theme: MantineThemeOverride = {
    // primaryColor: 'blue',
    // colors: {
    //   'ocean-blue': ['#7AD1DD', '#5FCCDB', '#44CADC', '#2AC9DE', '#1AC2D9', '#11B7CD', '#09ADC3', '#0E99AC', '#128797', '#147885'],
    //   'sea-green': ["#f0faf4", "#e0f2e8", "#bce4cd", "#95d7b1", "#75cb99", "#60c48a", "#54c081", "#45aa6f", "#3a9661", "#2b8252"],
    //   'sky-blue': ["#e1f9ff", "#ccedff", "#9ad7ff", "#64c1ff", "#3baefe", "#20a2fe", "#099cff", "#0088e4", "#0078cd", "#0069b6"],
    //   'bright-green': ["#effee7", "#e0f8d4", "#c2efab", "#a2e67e", "#87de57", "#75d940", "#6bd731", "#59be23", "#4da91b", "#3d920c"],
    //   'magenta': ["#ffe9f6", "#ffd1e6", "#faa1c9", "#f66eab", "#f24391", "#f02881", "#f01879", "#d60867", "#c0005c", "#a9004f"],
    //   'bright-pink': ['#F0BBDD', '#ED9BCF', '#EC7CC3', '#ED5DB8', '#F13EAF', '#F71FA7', '#FF00A1', '#E00890', '#C50E82', '#AD1374'],
    // },
    // defaultGradient: {
    //   from: 'indigo',
    //   to: 'lime',
    //   deg: 45,
    // },
    // fontFamily: `var(${ibmPlexSansCondensed.variable}), var(${ibmPlexSans.variable}), -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji`,
    fontFamilyMonospace: 'var(${ibmPlexMono.variable}), ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, Liberation Mono, Courier New, monospace',
    fontSizes: {
      xs: rem(10),
      sm: rem(14),
      md: rem(16),
      lg: rem(18),
      xl: rem(20),
      xxl: rem(22),
      xxxl: rem(26),
      xxxxl: rem(34),
      xxxxxl: rem(36),
    },
    headings: { 
      fontFamily: `var(${oswald.variable}), var(${ibmPlexSans.variable}), var(${ibmPlexSansCondensed.variable}), Inter, Greycliff CF, sans-serif`,
      sizes: {
        h1:  { fontSize: rem(36) },
        h2:  { fontSize: rem(30) },
        h3:  { fontSize: rem(24) },
        h4:  { fontSize: rem(20) },
        h5:  { fontSize: rem(16) },
        h6:  { fontSize: rem(12) },
      },
    },

    };