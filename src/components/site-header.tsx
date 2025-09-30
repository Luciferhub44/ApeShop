import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList } from "@/components/navigation-menu"
import { ModeToggle } from "@/components/mode-toggle"
import { ConnectButton } from "thirdweb/react"
import { client, supportedWallets } from "@/lib/thirdweb"
import { Link } from "@tanstack/react-router"

function SiteHeader() {
  return (
    <header className="border-b bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center gap-3">
          <div className="h-8 w-8 rounded-md bg-primary" aria-hidden />
          <span className="text-base font-semibold tracking-tight">ApeShop</span>
        </Link>

        <nav aria-label="Primary">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link to="/explore" className="px-4 py-2">Explore</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link to="/collections" className="px-4 py-2">Collections</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link to="/create" className="px-4 py-2">Create</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link to="/sell" className="px-4 py-2">Sell</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link to="/stats" className="px-4 py-2">Stats</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink asChild className="hidden md:inline-flex">
                  <Link to="/points" className="px-4 py-2">NANA Points</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </nav>

        <div className="flex items-center gap-2">
          <ModeToggle />
          <ConnectButton client={client} wallets={supportedWallets} />
        </div>
      </div>
    </header>
  )
}

export { SiteHeader }


