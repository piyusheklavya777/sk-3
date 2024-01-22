import { useEffect, useRef } from "react"

interface UseAutoScrollProps {
  scrollInterval: number
  totalItems: number
  scrollDistance: number
  scrollDirection?: "horizontal" | "vertical"
}

export const useAutoScroll = ({
  scrollInterval,
  totalItems,
  scrollDistance,
  scrollDirection = "horizontal",
}: UseAutoScrollProps) => {
  const containerRef = useRef<HTMLDivElement>(null)
  let scrollIndex = 0

  const scrollNext = () => {
    if (containerRef.current) {
      scrollIndex = (scrollIndex + 1) % totalItems
      containerRef.current.scrollTo({
        top: scrollDirection === "vertical" ? scrollDistance * scrollIndex : 0,
        left: scrollDirection === "horizontal" ? scrollDistance * scrollIndex : 0,
        behavior: "smooth",
      })
    }
  }

  useEffect(() => {
    const interval = setInterval(() => {
      scrollNext()
    }, scrollInterval)

    return () => {
      clearInterval(interval)
    }
  }, [])

  return { scrollContainerRef: containerRef }
}
