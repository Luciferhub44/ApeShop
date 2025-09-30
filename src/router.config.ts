import { createRouter } from "@tanstack/react-router"
import type { AnyRoute } from "@tanstack/react-router"

export const createAppRouter = (routeTree: AnyRoute) =>
  createRouter({ routeTree })

declare module "@tanstack/react-router" {
  interface Register {
    router: ReturnType<typeof createAppRouter>
  }
}


