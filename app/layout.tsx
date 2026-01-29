import { Poppins } from 'next/font/google'
import './globals.css'
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Analytics } from "@vercel/analytics/next"

const poppins = Poppins({ 
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <title>Ali Khreis - BASc, MEng (Applied AI/ML)</title>
      </head>
      <body className={poppins.className}>
        {children}
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  )
}

