import { ThemeProvider } from "@/components/theme-provider"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { AppRouter } from "@/router"

import './index.css'

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className="flex min-h-svh flex-col">
        <SiteHeader />
        <main className="container mx-auto flex-1 px-4 py-8 sm:px-6 lg:px-8">
          <AppRouter />
        </main>
        <SiteFooter />
      </div>
    </ThemeProvider>
  )
}

export default App
