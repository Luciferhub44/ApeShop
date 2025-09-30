import { ThemeProvider } from "@/components/theme-provider"
import { AppRouter } from "@/router"

import './index.css'

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <AppRouter />
    </ThemeProvider>
  )
}

export default App
