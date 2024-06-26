import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'
import './globals.css'
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false

const inter = Roboto({weight: '400', subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Zerowave Validator',
  description: 'Zerowave is small group of Validator and Node Runner',
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width,heigth=device-heigth, initial-scale=1.0" />
        <link rel="icon" href="/Zerowave-Crop.png" />
      </head>
      <body className={inter.className}>
        <div className="flex flex-col min-h-screen text-center">
          {/* <Navbar /> */}
          {children}
          {/* <Footer /> */}
        </div>
      </body>
    </html>
  )
}
