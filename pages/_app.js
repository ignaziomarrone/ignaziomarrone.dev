import '@/styles/globals.css'
import { MuseoModerno } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react'
import { Ubuntu } from 'next/font/google'

const museomoderno = Ubuntu({
  subsets: ['latin'],
  weight: '400',
})

export default function App({ Component, pageProps }) {
  return (
  <main className={museomoderno.className}>
    <Component {...pageProps} />
    <Analytics/>
  </main>
  )
}
