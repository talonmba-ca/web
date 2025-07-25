import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'
import { I18nProvider } from '@/providers/I18nProvider'
import GoToTop from '@/components/global/GoToTop'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin']
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin']
})

export const metadata: Metadata = {
  title: 'Talonmba',
  description: 'Talonmba Group'
}

export default async function RootLayout({
  children,
  params
}: Readonly<{
  children: React.ReactNode
  params: Promise<{ locale: string }>
}>) {
  const { locale } = await params
  return (
    <html lang={locale} suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-black`}>
        <I18nProvider locale={locale}>
          {/* <main> */}
          {children}

          {/* </main> */}
          <GoToTop />
        </I18nProvider>
      </body>
    </html>
  )
}
