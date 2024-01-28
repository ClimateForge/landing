import { AppProps } from 'next/app'
import { sans } from './fonts'

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <main className={sans.className}>
      <Component {...pageProps} />
    </main>
  )
}