import { useEffect, useMemo, useRef, useState } from "react"
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react"
import { cn } from "@/lib/utils"

type HeroSlide = {
  id: string
  imageUrl: string
  title?: string
  subtitle?: string
  ctaText?: string
  ctaHref?: string
}

type HeroCarouselProps = {
  slides: ReadonlyArray<HeroSlide>
  autoPlayMs?: number
  className?: string
}

export function HeroCarousel({ slides, autoPlayMs = 5500, className }: HeroCarouselProps) {
  const [index, setIndex] = useState<number>(0)
  const timerRef = useRef<number | null>(null)
  const isHoveringRef = useRef(false)

  const safeSlides = useMemo(() => slides.filter(Boolean), [slides])

  useEffect(() => {
    if (safeSlides.length <= 1) return

    const start = () => {
      stop()
      timerRef.current = window.setInterval(() => {
        if (!isHoveringRef.current) {
          setIndex((i) => (i + 1) % safeSlides.length)
        }
      }, autoPlayMs)
    }
    const stop = () => {
      if (timerRef.current) {
        window.clearInterval(timerRef.current)
        timerRef.current = null
      }
    }

    start()
    return stop
  }, [autoPlayMs, safeSlides])

  const goTo = (i: number) => {
    setIndex((i % safeSlides.length + safeSlides.length) % safeSlides.length)
  }

  const goPrev = () => goTo(index - 1)
  const goNext = () => goTo(index + 1)

  if (safeSlides.length === 0) return null

  return (
    <section
      className={cn("relative overflow-hidden rounded-xl border", className)}
      onMouseEnter={() => (isHoveringRef.current = true)}
      onMouseLeave={() => (isHoveringRef.current = false)}
      aria-roledescription="carousel"
    >
      {/* Slides */}
      <div className="relative h-[360px] w-full sm:h-[420px] lg:h-[520px]">
        {safeSlides.map((slide, i) => (
          <div
            key={slide.id}
            className={cn(
              "absolute inset-0 transition-opacity duration-700",
              i === index ? "opacity-100" : "opacity-0"
            )}
            role="group"
            aria-roledescription="slide"
            aria-label={`${i + 1} of ${safeSlides.length}`}
          >
            <img
              src={slide.imageUrl}
              alt={slide.title ?? "Featured NFT"}
              className="h-full w-full object-cover"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/80 via-background/20 to-background/0" />
            {(slide.title || slide.subtitle || slide.ctaText) && (
              <div className="absolute bottom-6 left-6 right-6 flex max-w-2xl flex-col gap-3 sm:bottom-10 sm:left-10">
                {slide.title && (
                  <h2 className="text-balance text-2xl font-semibold tracking-tight sm:text-3xl lg:text-4xl">
                    {slide.title}
                  </h2>
                )}
                {slide.subtitle && (
                  <p className="text-pretty text-sm text-muted-foreground sm:text-base">
                    {slide.subtitle}
                  </p>
                )}
                {slide.ctaText && slide.ctaHref && (
                  <a
                    href={slide.ctaHref}
                    className="inline-flex w-fit items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90"
                  >
                    {slide.ctaText}
                  </a>
                )}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Controls */}
      {safeSlides.length > 1 && (
        <div className="pointer-events-none absolute inset-0 flex items-center justify-between p-2">
          <button
            type="button"
            aria-label="Previous slide"
            onClick={goPrev}
            className="pointer-events-auto inline-flex items-center justify-center rounded-full border bg-background/80 p-2 text-foreground shadow backdrop-blur transition hover:bg-background"
          >
            <ChevronLeftIcon className="size-5" />
          </button>
          <button
            type="button"
            aria-label="Next slide"
            onClick={goNext}
            className="pointer-events-auto inline-flex items-center justify-center rounded-full border bg-background/80 p-2 text-foreground shadow backdrop-blur transition hover:bg-background"
          >
            <ChevronRightIcon className="size-5" />
          </button>
        </div>
      )}

      {/* Dots */}
      {safeSlides.length > 1 && (
        <div className="absolute bottom-3 left-0 right-0 flex items-center justify-center gap-2 sm:bottom-4">
          {safeSlides.map((s, i) => (
            <button
              key={s.id}
              type="button"
              aria-label={`Go to slide ${i + 1}`}
              aria-current={i === index}
              onClick={() => goTo(i)}
              className={cn(
                "h-2.5 w-2.5 rounded-full border transition",
                i === index ? "bg-foreground" : "bg-muted"
              )}
            />
          ))}
        </div>
      )}
    </section>
  )
}


