"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"

export default function ShiningText() {
  const text = "A game about hide and seek"
  const words = text.split(" ")
  const [animationPhase, setAnimationPhase] = useState(0)
  const [isPaused, setIsPaused] = useState(false)

  useEffect(() => {
    let interval: NodeJS.Timeout

    if (!isPaused) {
      // Fast animation when not paused
      interval = setInterval(() => {
        setAnimationPhase((prev) => {
          const next = prev + 0.3 // Faster movement (was 0.2)

          // Check if we've completed a full cycle
          if (next >= words.length) {
            // Pause for 1 second before next cycle
            setIsPaused(true)
            setTimeout(() => setIsPaused(false), 1000)
            return 0 // Reset to beginning
          }

          return next
        })
      }, 30) // Update more frequently for smoother animation
    }

    return () => {
      if (interval) clearInterval(interval)
    }
  }, [isPaused, words.length])

  // Calculate wave position
  const getWavePosition = (index: number) => {
    if (isPaused) return 0 // No movement during pause

    // Create a wave that moves across the words
    const distanceFromCenter = Math.abs(index - animationPhase)

    // Create a sharper falloff for faster animation
    const falloff = Math.max(0, 1.2 - distanceFromCenter)

    // Calculate y position - only lift upward (negative values)
    return -10 * falloff // Increased lift for more dramatic effect
  }

  // Calculate gradient intensity
  const getGradientOpacity = (index: number) => {
    if (isPaused) return 0 // No gradient during pause

    const distanceFromCenter = Math.abs(index - animationPhase)
    return Math.max(0, 1 - distanceFromCenter)
  }

  return (
    <div className="flex-1 text-white text-md md:text-xl h-14 flex items-center overflow-hidden rounded-lg">
      <div className="flex space-x-0.5">
        {words.map((word, index) => {
          const yPosition = getWavePosition(index)
          const gradientOpacity = getGradientOpacity(index)

          return (
            <motion.div
              key={index}
              animate={{
                y: yPosition,
              }}
              transition={{
                duration: 0.1, // Faster transition
                ease: "easeOut",
              }}
              className="relative"
            >
              {/* Base word (dim when not active) */}
              <span className="text-white/20">{word}</span>

              {/* Gradient overlay with variable opacity */}
              <motion.span
                animate={{
                  opacity: gradientOpacity,
                }}
                transition={{
                  duration: 0.1, // Faster transition
                }}
                className="absolute inset-0 bg-clip-text text-transparent bg-gradient-to-r from-gray-100 via-gray-300 to-gray-400 font-medium"
              >
                {word}
              </motion.span>
            </motion.div>
          )
        })}
      </div>
    </div>
  )
}
