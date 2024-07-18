import { Manrope, Bayon, DM_Sans } from 'next/font/google'

// If loading a variable font, you don't need to specify the font weight
export const display = Bayon({subsets: ['latin'], weight: '400' })
export const sans = Manrope({ subsets: ['latin'], display: 'swap'})
export const dmSans = DM_Sans({ subsets: ["latin"], variable: "--dm-sans", });
// export const serif = Noto_Serif_Display({ subsets: ['latin'], display: 'swap'})

