import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Toaster } from 'react-hot-toast'

const inter = Inter({ 
  subsets: ['latin', 'cyrillic'],
  variable: '--font-inter',
  display: 'swap',
})

const playfair = Playfair_Display({ 
  subsets: ['latin', 'cyrillic'],
  variable: '--font-playfair',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'ООО Дело - Финансовый аудит премиум класса',
  description: 'Профессиональные услуги по проведению финансового аудита. ООО Дело - ваш надежный партнер в области финансового консультирования и аудита.',
  keywords: 'финансовый аудит, аудит, консалтинг, финансы, ООО Дело',
  authors: [{ name: 'ООО Дело' }],
  openGraph: {
    title: 'ООО Дело - Финансовый аудит премиум класса',
    description: 'Профессиональные услуги по проведению финансового аудита',
    type: 'website',
    locale: 'ru_RU',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ru" className={`${inter.variable} ${playfair.variable}`}>
      <body className={`${inter.className} antialiased`}>
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
        <Toaster 
          position="top-right"
          toastOptions={{
            duration: 4000,
            style: {
              background: '#1e293b',
              color: '#fff',
            },
          }}
        />
      </body>
    </html>
  )
}
