import { Manrope, Bayon } from 'next/font/google'

// If loading a variable font, you don't need to specify the font weight
export const display = Bayon({subsets: ['latin'], weight: '400' })
export const sans = Manrope({ subsets: ['latin'], display: 'swap'})
// export const serif = Noto_Serif_Display({ subsets: ['latin'], display: 'swap'})
 
