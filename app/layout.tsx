import { Analytics } from "@vercel/analytics/react"
import { Inter as FontSans } from "next/font/google"
import './globals.css'
import { cn } from "@/lib/utils"
import { Metadata } from "next"
import { ClerkProvider } from "@clerk/nextjs"
import { dark } from "@clerk/themes"
import Provider from "./Provider"

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

export const metadata: Metadata = {
  title: 'SnapDocs, Your Live Documents App',
  description: "SnapDocs, documents live and ready."
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <ClerkProvider
      appearance={{
        baseTheme: dark,
        variables: { 
          colorPrimary: '#4273e5', 
          fontSize: '16px',
        },
      }}
    
    >
      <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen font-sans antialiased",
          fontSans.variable
        )}
      >
        <Provider>
          {children}
        </Provider>
        <Analytics />
      </body>
    </html>
    </ClerkProvider>
  )
}
