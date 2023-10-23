import { Inter } from 'next/font/google'
import './globals.css'
import Home from './page'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Rotas dinâmicas',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body className={inter.className}>
        <Home/>
        {children}
      </body>
    </html>
  )
}
