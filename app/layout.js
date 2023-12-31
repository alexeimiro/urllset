import { AuthProvider } from "./Providers";
import { Pixelify_Sans } from "next/font/google";
import './globals.css'

const pixel = Pixelify_Sans({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="bg-indigo-950 text-white">
      <body className={pixel.className}>
      <AuthProvider>{children}</AuthProvider>
      </body>
    </html>
  )
}
