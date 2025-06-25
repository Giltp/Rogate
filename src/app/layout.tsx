import type { Metadata } from "next"
import "@/styles/globals.css"
import "@fontsource/inter/variable.css"
import "@fontsource/playfair-display/variable.css"

export const metadata: Metadata = {
  title: "Rogate — Handmade Brand",
  description: "Professional handmade fashion and jewelry by Rogate.",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="bg-cream text-primary font-body">
      <body>
        <div className="min-h-screen flex flex-col">
          {/* TODO: Add <Header /> later */}
          <main className="flex-grow">{children}</main>
          {/* TODO: Add <Footer /> later */}
        </div>
      </body>
    </html>
  )
}
