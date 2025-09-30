function SiteFooter() {
  return (
    <footer className="border-t bg-background">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-3">
            <div className="h-6 w-6 rounded-md bg-primary" aria-hidden />
            <span className="text-sm font-medium">ApeShop • Tribe Odyssey Marketplace</span>
          </div>
          <nav aria-label="Footer" className="text-sm text-muted-foreground">
            <ul className="flex flex-wrap items-center gap-4">
              <li><a className="hover:text-foreground" href="#">About</a></li>
              <li><a className="hover:text-foreground" href="#">Careers</a></li>
              <li><a className="hover:text-foreground" href="#">Docs</a></li>
              <li><a className="hover:text-foreground" href="#">Terms</a></li>
              <li><a className="hover:text-foreground" href="#">Privacy</a></li>
              <li><a className="hover:text-foreground" href="#">Support</a></li>
            </ul>
          </nav>
        </div>
        <div className="mt-6 text-xs text-muted-foreground">© {new Date().getFullYear()} ApeShop. All rights reserved.</div>
      </div>
    </footer>
  )
}

export { SiteFooter }


