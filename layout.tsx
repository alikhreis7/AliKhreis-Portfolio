import { Poppins } from 'next/font/google'
import './globals.css'

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
        <title>Ali Khries - New Grad Software Engineer</title>
      </head>
      <body className={poppins.className}>{children}</body>
    </html>
  )
}

