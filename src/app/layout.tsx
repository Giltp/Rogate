import Header from "@/components/Header"
import Footer from "@/components/Footer"
import "@/styles/globals.css"

export const metadata = {
  title: "Rogate",
  description: "Rogate Official Brand Website",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-background text-primary font-sans antialiased">
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
