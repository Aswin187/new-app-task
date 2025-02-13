import "./globals.css"
import { Inter } from "next/font/google"
import Link from "next/link"
import type React from "react" // Added import for React

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "News App",
  description: "Stay updated with the latest news",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <nav className="bg-gray-800 text-white p-4">
          <div className="container mx-auto flex justify-between items-center">
            <Link href="/" className="text-xl font-bold">
              News App
            </Link>
            <div className="space-x-4">
              <Link href="/">Home</Link>
              <Link href="/category">Categories</Link>
              <Link href="/search">Search</Link>
            </div>
          </div>
        </nav>
        <main className="px-3 container mx-auto mt-8">{children}</main>
      </body>
    </html>
  )
}

