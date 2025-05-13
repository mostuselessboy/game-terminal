"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"

export default function ShiningText() {
const textList = [
  "A game about whispers",
  "A game about hide and seek",
  "A game about chambers",
  "A game about vanishing",
  "A game about mirror world",
  "A game about secret rooms",
  "A game about looping time"
]

  const [textIndex, setTextIndex] = useState(0)
  const [words, setWords] = useState(textList[0].split(" "))
  const [animationPhase, setAnimationPhase] = useState(0)
  const [isPaused, setIsPaused] = useState(false)

  useEffect(() => {
    let interval: NodeJS.Timeout

    if (!isPaused) {
      interval = setInterval(() => {
        setAnimationPhase((prev) => {
          const next = prev + 0.3
          if (next >= words.length) {
            setIsPaused(true)
            setTimeout(() => {
              const nextIndex = (textIndex + 1) % textList.length
              setTextIndex(nextIndex)
              setWords(textList[nextIndex].split(" "))
              setAnimationPhase(0)
              setIsPaused(false)
            }, 1000)
            return 0
          }
          return next
        })
      }, 30)
    }

    return () => {
      if (interval) clearInterval(interval)
    }
  }, [isPaused, words.length, textIndex])

  const getWavePosition = (index: number) => {
    if (isPaused) return 0
    const distanceFromCenter = Math.abs(index - animationPhase)
    const falloff = Math.max(0, 1.2 - distanceFromCenter)
    return -10 * falloff
  }

  const getGradientOpacity = (index: number) => {
    if (isPaused) return 0
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
              animate={{ y: yPosition }}
              transition={{ duration: 0.1, ease: "easeOut" }}
              className="relative"
            >
              <span className="text-white/20">{word}</span>
              <motion.span
                animate={{ opacity: gradientOpacity }}
                transition={{ duration: 0.1 }}
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