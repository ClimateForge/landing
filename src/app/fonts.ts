import { Noto_Sans, Noto_Serif_Display } from 'next/font/google'

// If loading a variable font, you don't need to specify the font weight
export const sans = Noto_Sans({ subsets: ['latin'], display: 'swap'})
export const serif = Noto_Serif_Display({ subsets: ['latin'], display: 'swap'})
 
