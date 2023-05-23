'use client';

import './globals.css'
import { Nunito } from 'next/font/google'
import NavBar from './components/NavBar/NavBar'
import RegisterModal from './components/modals/RegisterModal';

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
        <RegisterModal isOpen title="Airbnb" onClose={() => {}} onSubmit={() => {}} actionLabel='Submit' secondaryAction={() => {}} secondaryActionLabel='Cancel' />
        <NavBar />
        {children}
        </body>
    </html>
  )
}
