import { Outlet, RouterProvider, createRootRoute, createRoute, createRouter } from "@tanstack/react-router"
import Home from "@/pages/Home"
import Explore from "@/pages/Explore"
import Collections from "@/pages/Collections"
import Create from "@/pages/Create"
import Sell from "@/pages/Sell"
import Stats from "@/pages/Stats"
import Points from "@/pages/Points"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"

function RootLayout() {
  return (
    <div className="flex min-h-svh flex-col">
      <SiteHeader />
      <main className="container mx-auto flex-1 px-4 py-8 sm:px-6 lg:px-8">
        <Outlet />
      </main>
      <SiteFooter />
    </div>
  )
}

const rootRoute = createRootRoute({
  component: RootLayout,
})

const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: Home,
})

const exploreRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/explore",
  component: Explore,
})

const collectionsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/collections",
  component: Collections,
})

const createRoutePage = createRoute({
  getParentRoute: () => rootRoute,
  path: "/create",
  component: Create,
})

const sellRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/sell",
  component: Sell,
})

const statsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/stats",
  component: Stats,
})

const pointsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/points",
  component: Points,
})

const routeTree = rootRoute.addChildren([
  indexRoute,
  exploreRoute,
  collectionsRoute,
  createRoutePage,
  sellRoute,
  statsRoute,
  pointsRoute,
])

export const router = createRouter({
  routeTree,
})

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router
  }
}

export function AppRouter() {
  return <RouterProvider router={router} />
}


