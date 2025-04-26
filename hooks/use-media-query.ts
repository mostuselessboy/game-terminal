"use client"

import { useState, useEffect } from "react"

export function useMediaQuery(query: string): boolean {
  const [matches, setMatches] = useState(false)

  useEffect(() => {
    // Set initial value on mount
    const media = window.matchMedia(query)
    setMatches(media.matches)

    const listener = () => {
      setMatches(media.matches)
    }

    // Add listener for subsequent changes
    media.addEventListener("change", listener)

    // Clean up listener on unmount
    return () => {
      media.removeEventListener("change", listener)
    }
  }, [query]) // Only depend on query changes

  return matches
}
