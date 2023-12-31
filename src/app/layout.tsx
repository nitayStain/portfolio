import Footer from '@/components/Footer'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Navbar from '@/components/Navbar'
import { ThemeProvider } from './../providers/theme.provider';
import { ThemeSwitcher } from '@/components/ToggleTheme'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Portfolio | Nitay Stain',
  description: '',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>
      {/* <div className="h-64"></div> */}
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Navbar />
          <div className="h-64"></div>
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
