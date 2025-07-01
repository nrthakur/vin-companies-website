import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Vin Group of Companies | Engineering & Construction Services',
  description: 'Professional engineering and construction services. Vin Engineering Inc. and Vin General Contracting Inc. provide comprehensive solutions for residential, commercial, and industrial projects.',
  keywords: 'engineering, construction, structural engineering, civil engineering, general contracting, renovation, building design, Toronto, GTA',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
