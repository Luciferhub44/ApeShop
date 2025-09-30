import { HeroCarousel } from "@/components/hero-carousel"

export default function Home() {
  return (
    <div className="space-y-8">
      <HeroCarousel
        slides={[
          {
            id: "s1",
            imageUrl: "/Oak1.png",
            title: "Own iconic digital collectibles",
            subtitle: "Discover rare Stories from top legends and emerging artists.",
            ctaText: "Explore",
            ctaHref: "/Home",
          },
          {
            id: "s2",
            imageUrl: "/Oak2.png",
            title: "The Other Side of the Flame",
            subtitle: "Explore the hidden truths of the Tribe Odyssey.",
            ctaText: "Create Your Story",
            ctaHref: "/Home",
          },
          {
            id: "s3",
            imageUrl: "/sailor_ape.png",
            title: "Across the Chrimsons Tide",
            subtitle: "Follow the journey of the Ape as he navigates the Chrimsons Tide.",
            ctaText: "View Journey",
            ctaHref: "/Home",
          },
        ]}
        className="w-full"
      />

      <section className="space-y-2">
        <h2 className="text-xl font-semibold tracking-tight">Featured Drops</h2>
        <p className="text-muted-foreground">Curated highlights from the marketplace.</p>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} className="rounded-lg border p-4">
              <div className="aspect-video w-full rounded-md bg-muted" />
              <div className="mt-3 text-sm font-medium">Featured Collection #{i}</div>
              <div className="text-xs text-muted-foreground">Floor 0.{i} ETH</div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}


