'use client';

import './globals.css'
import { Nunito } from 'next/font/google'
import NavBar from './components/NavBar/NavBar'
import RegisterModal from './components/modals/RegisterModal';
import ToastProvider from './providers/ToastProvider';

const nunito = Nunito({ subsets: ['latin'] })

export const metadata = {
  title: 'Airbnb Clone',
  description: 'Made By Tejas Kanji',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={nunito.className}>
        <ToastProvider />
        <RegisterModal />
        <NavBar />
        {children}
        </body>
    </html>
  )
}
