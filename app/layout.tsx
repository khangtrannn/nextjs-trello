import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Modal from '@/components/Modal'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Trello 2.0 Clone',
  description: 'Generated by khangtrann',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className='bg-[#F5F6F8]'>
        {children}

        <Modal />
      </body>
    </html>
  )
}
