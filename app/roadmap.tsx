"use client"
import { useEffect, useRef, useState, useCallback } from "react"
import { motion, useInView, useAnimation } from "framer-motion"
import RoadmapDesignElement from "@/components/roadmap-design-element"
import Image from "next/image"

// Pre-calculate opacity values to avoid hydration mismatches
const generateDashOpacities = (count: number) => {
  return Array.from({ length: count }, (_, i) => {
    // Calculate opacity and fix to 3 decimal places
    const opacity = (Math.sin((i / count) * Math.PI) * 0.4 + 0.2).toFixed(3)
    return Number(opacity) // Convert back to number for consistency
  })
}

// Pre-calculated opacities for timeline dashes
const DASH_OPACITIES = generateDashOpacities(100)

// Roadmap data
const roadmapData = [
  {
    quarter: "Q1 2025",
    items: [
      "Beta Release Of AI Game + Token Builder.",
      "Game Creation From AI Prompts.",
      "Token Integration For Game Ecosystems.",
      "Deployment To Viral Channels.",
      "Launch Compatible Studio For Mobile Games.",
    ],
    align: "right",
    isEven: false,
  },
  {
    quarter: "Q2 2025",
    items: [
      "Execute Token Generation Event (TGE).",
      "Conduct Initial DEX Offering (IDO).",
      "List Tokens On Major Exchanges.",
      "Launch Multiplayer SDK And APIs.",
      "Rollout NFT Marketplace.",
    ],
    align: "left",
    isEven: true,
  },
  {
    quarter: "Q3 2025",
    items: [
      "Partner With 100+ Games For Ecosystem Expansion.",
      "Launch Platform-Wide Competitive Tournaments.",
      "Onboard 500+ Gaming Influencers (Degens).",
      "Expand Game Library To 200+ Titles.",
    ],
    align: "right",
    isEven: false,
  },
  {
    quarter: "Q4 2025",
    items: [
      "Achieve 1M+ Active Users.",
      "Debut Proprietary In-House Games.",
      "Expand Game Library To 300+ Titles.",
      "Announce 2026 Roadmap.",
    ],
    align: "left",
    isEven: true,
  },
]

export default function RoadmapPage() {
  // Force client-side rendering to avoid hydration mismatches
  const [isClient, setIsClient] = useState(false)
  const [lastScrollY, setLastScrollY] = useState(0)
  const [direction, setDirection] = useState(0) // 0 = neutral, 1 = down, -1 = up
  const [activeIndex, setActiveIndex] = useState(0) // Start with the first phase active

  const sectionRefs = useRef<Array<HTMLDivElement | null>>([])

  useEffect(() => {
    setIsClient(true)
  }, [])

  // Track scroll direction and active section
  const handleScroll = useCallback(() => {
    const currentScrollY = window.scrollY
    const viewportHeight = window.innerHeight

    // Determine scroll direction
    if (currentScrollY > lastScrollY + 10) {
      setDirection(1) // scrolling down
    } else if (currentScrollY < lastScrollY - 10) {
      setDirection(-1) // scrolling up
    }

    // Determine which section is active based on scroll position
    sectionRefs.current.forEach((ref, index) => {
      if (!ref) return

      const rect = ref.getBoundingClientRect()
      // If the section is in the top half of the viewport
      if (rect.top < viewportHeight * 0.5 && rect.bottom > 0) {
        setActiveIndex(index)
      }
    })

    setLastScrollY(currentScrollY)
  }, [lastScrollY])

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [handleScroll])

  // Don't render anything during SSR to avoid hydration mismatches
  if (!isClient) {
    return (
      <div className="min-h-screen flex items-center justify-center py-20" style={{ backgroundColor: "#141414" }}>
        <div className="text-white text-center">Loading roadmap...</div>
      </div>
    )
  }

  // Function to set the ref for each section
  const setSectionRef = (el: HTMLDivElement | null, index: number) => {
    sectionRefs.current[index] = el
  }

  return (
    <div className="min-h-screen flex items-center justify-center py-20">
      <div className="mx-auto w-full px-5">
        <div className="relative">
          {/* Vertical timeline with dashes instead of dots - desktop only */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2 z-0 hidden md:block">
            {DASH_OPACITIES.map((opacity, i) => (
              <div
                key={i}
                className="absolute left-0 w-px h-1.5 bg-gray-400"
                style={{
                  top: `${i}%`,
                  opacity: opacity,
                }}
              />
            ))}
          </div>

          {/* Mobile timeline - left aligned but pushed right - mobile only */}
          <div className="absolute left-[80px] top-0 bottom-0 w-px z-0 block md:hidden">
            {DASH_OPACITIES.map((opacity, i) => (
              <div
                key={i}
                className="absolute left-0 w-px h-1.5 bg-gray-400"
                style={{
                  top: `${i}%`,
                  opacity: opacity,
                }}
              />
            ))}
          </div>

          <div className="space-y-40 md:space-y-48">
            {roadmapData.map((quarter, index) => (
              <div key={quarter.quarter} ref={(el) => setSectionRef(el, index)}>
                <RoadmapSection quarter={quarter} direction={direction} isActive={index === activeIndex} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

interface RoadmapSectionProps {
  quarter: {
    quarter: string
    items: string[]
    align: string
    isEven: boolean
  }
  direction: number
  isActive: boolean
}

function RoadmapSection({ quarter, direction, isActive }: RoadmapSectionProps) {
  const sectionRef = useRef(null)

  // Check if section is in view - use a small threshold so it starts animating early
  const isInView = useInView(sectionRef, {
    once: false,
    amount: 0.1, // Only need 10% of the element to be visible
  })

  return (
    <div ref={sectionRef}>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{
          opacity: isInView ? 1 : 0,
          y: isInView ? 0 : direction >= 0 ? 50 : -50,
        }}
        transition={{
          duration: 0.5,
          ease: "easeOut",
        }}
      >
        <RoadmapQuarter
          quarter={quarter.quarter}
          items={quarter.items}
          align={quarter.align as "left" | "right"}
          isActive={isActive}
          isEven={quarter.isEven}
          isVisible={isInView}
        />
      </motion.div>
    </div>
  )
}

// Pre-calculate horizontal dash opacities
const generateHorizontalDashOpacities = (count: number, isRight: boolean) => {
  return Array.from({ length: count }, (_, i) => {
    const opacity = isRight
      ? ((1 - (i / count) * 0.8) * 0.6).toFixed(3) // Fade from left to right
      : (((i / count) * 0.8 + 0.2) * 0.6).toFixed(3) // Fade from right to left
    return Number(opacity)
  })
}

const RIGHT_DASH_OPACITIES = generateHorizontalDashOpacities(10, true)
const LEFT_DASH_OPACITIES = generateHorizontalDashOpacities(10, false)

interface RoadmapQuarterProps {
  quarter: string
  items: string[]
  align: "left" | "right"
  isActive: boolean
  isEven: boolean
  isVisible: boolean
}

function RoadmapQuarter({ quarter, items, align, isActive, isEven, isVisible }: RoadmapQuarterProps) {
  const ref = useRef(null)
  const [hasAnimated, setHasAnimated] = useState(false)
  const [viewportChanged, setViewportChanged] = useState(false)
  const controls = useAnimation()
  const isMobile = typeof window !== "undefined" && window.innerWidth < 768

  // Effect to handle initial animation when in view
  useEffect(() => {
    if (isVisible && !hasAnimated) {
      controls.start("visible")
      setHasAnimated(true)
    }
  }, [isVisible, hasAnimated, controls])

  // Effect to handle viewport size changes
  useEffect(() => {
    const handleResize = () => {
      if (hasAnimated) {
        setViewportChanged(true)
      }
    }

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [hasAnimated])

  // Effect to re-trigger animations when viewport changes significantly
  useEffect(() => {
    if (viewportChanged) {
      controls.start("hidden").then(() => {
        controls.start("visible")
      })
      setViewportChanged(false)
    }
  }, [viewportChanged, controls])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
      },
    },
  }

  // Line length for the horizontal dotted line
  const lineLength = 80

  // Calculate opacity values for gradient text effect - REVERSED
  const getOpacity = (index: number, total: number) => {
    // Start at 0.7 (brightest) and go to 0.3 (dimmest) - made dimmer
    const maxOpacity = 0.7
    const minOpacity = 0.3
    const step = (maxOpacity - minOpacity) / (total - 1)
    return Number((maxOpacity - step * index).toFixed(3))
  }

  // Create an array of dashes for the horizontal line
  const dashes = Array.from({ length: 10 }, (_, i) => i)

  // Active dot color
  const dotColor = isActive ? "#8EFA48" : "white"

  // Background and pulse colors
  const bgColor = isActive ? "rgba(142, 250, 72, 0.2)" : "rgb(31, 41, 55)" // bg-gray-800 equivalent
  const pulseColor = isActive ? "rgba(142, 250, 72, 0.2)" : "rgb(31, 41, 55)" // bg-gray-800 equivalent

  return (
    <div ref={ref} className="relative z-10 min-h-[200px]">
      {/* Timeline dot with pulse effect, glow animation, and dark circular background */}
      <div
        className={`absolute rounded-full z-10 flex items-center justify-center
            md:left-1/2 
            left-[80px] -translate-x-1/3 md:-translate-x-3
            ${isActive ? "md:w-6 md:h-6 w-2 h-2" : "w-5 h-5"}`}
        style={{
          backgroundColor: bgColor,
          top: isMobile && isActive ? "6px" : "auto", // Adjust position for mobile active state
        }}
      >
        {/* Outer glow animation that appears when section becomes active */}
        <motion.div
          className="absolute rounded-full"
          initial={{ width: 0, height: 0, opacity: 0 }}
          animate={
            isActive
              ? {
                  width: ["0px", "60px", "40px"],
                  height: ["0px", "60px", "40px"],
                  opacity: [0, 0.6, 0],
                }
              : { width: 0, height: 0, opacity: 0 }
          }
          transition={{
            duration: 1.5,
            ease: "easeOut",
            times: [0, 0.4, 1],
          }}
          style={{
            backgroundColor: "transparent",
            boxShadow: "0 0 20px 10px rgba(142, 250, 72, 0.6)",
            zIndex: 5,
          }}
        />

        {/* Regular pulse effect */}
        <motion.div
          className={`absolute rounded-full opacity-70
            ${isActive ? "md:w-6 md:h-6 w-3 h-3" : "w-6 h-6"}`}
          style={{ backgroundColor: pulseColor }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.7, 0.4, 0.7],
          }}
          transition={{
            duration: 2,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "loop",
          }}
        />

        {/* Center dot with pop animation */}
        <motion.div
          className={`rounded-full z-20 ${isActive ? "md:w-2 md:h-2 w-1 h-1" : "w-2 h-2"}`}
          style={{ backgroundColor: dotColor }}
          initial={{ scale: 0 }}
          animate={
            hasAnimated
              ? {
                  scale: isActive ? [0.5, 1.5, 1] : 1,
                  boxShadow: isActive
                    ? [
                        "0 0 0px rgba(142, 250, 72, 0)",
                        "0 0 10px rgba(142, 250, 72, 0.8)",
                        "0 0 5px rgba(142, 250, 72, 0.5)",
                      ]
                    : "none",
                }
              : { scale: 0 }
          }
          transition={{
            duration: isActive ? 0.7 : 0.5,
            ease: "easeOut",
          }}
        />
      </div>

      {/* Horizontal dashed line with gradient - desktop */}
      <div
        className="absolute top-3 h-px z-10 hidden md:block"
        style={{
          width: `${lineLength}px`,
          ...(align === "right" ? { left: "calc(50% + 3px)" } : { right: "calc(50% + 3px)" }),
        }}
      >
        <motion.div
          className="relative w-full h-full"
          initial={{ scaleX: 0 }}
          animate={hasAnimated ? { scaleX: 1 } : { scaleX: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          style={{
            transformOrigin: align === "right" ? "left" : "right",
          }}
        >
          {dashes.map((dash, i) => (
            <div
              key={i}
              className="absolute top-0 h-px rounded-full"
              style={{
                left: `${(i / dashes.length) * 100}%`,
                width: "4px", // Width of each dash
                backgroundColor: "rgb(156, 163, 175)", // gray-400 instead of white
                opacity: align === "right" ? RIGHT_DASH_OPACITIES[i] : LEFT_DASH_OPACITIES[i],
              }}
            />
          ))}
        </motion.div>
      </div>

      {/* Horizontal dashed line for mobile - only on the right side */}
      <div
        className="absolute top-3 h-px z-10 block md:hidden"
        style={{
          width: `${lineLength}px`,
          left: isActive ? "calc(80px + 2px)" : "calc(80px + 3px)", // Adjust for smaller active dot
        }}
      >
        <motion.div
          className="relative w-full h-full"
          initial={{ scaleX: 0 }}
          animate={hasAnimated ? { scaleX: 1 } : { scaleX: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          style={{
            transformOrigin: "left", // Animate from left to right
          }}
        >
          {dashes.map((dash, i) => (
            <div
              key={i}
              className="absolute top-0 h-px rounded-full"
              style={{
                left: `${(i / dashes.length) * 100}%`,
                width: "4px", // Width of each dash
                backgroundColor: "rgb(156, 163, 175)", // gray-400 instead of white
                opacity: RIGHT_DASH_OPACITIES[i],
              }}
            />
          ))}
        </motion.div>
      </div>

      {/* Content container - desktop */}
      <div
        className={`absolute hidden md:block ${align === "right" ? "left-[calc(50%+80px)]" : "right-[calc(50%+80px)]"}`}
        style={{
          width: "350px",
          top: "-7px",
        }}
      >
        {/* Design element positioned above the heading - flipped horizontally for even quarters */}
        <div className={`absolute ${align === "left" ? "right-0" : "left-0"} -top-20 pointer-events-none -z-[1] `}>
          <RoadmapDesignElement isFlipped={isEven} />
        </div>

        {/* Quarter heading - aligned based on the quarter position */}
        <motion.h2
          className={`text-2xl font-medium z-[200] mb-8 ${align === "left" ? "text-right" : "text-left"} text-white`}
          initial={{ opacity: 0, y: 20 }}
          animate={hasAnimated ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          {quarter}
        </motion.h2>

        {/* List items - positioned below the heading with reduced spacing */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className={`space-y-3 ${align === "left" ? "text-right" : "text-left"}`}
        >
          {items.map((item, idx) => (
            <motion.p
              key={idx}
              variants={itemVariants}
              custom={idx} // Pass index to custom prop for staggered animations
              className="leading-tight font-light"
              style={{
                opacity: getOpacity(idx, items.length),
                // Dimmer color gradient: brighter to dimmer
                color: `rgb(${160 - idx * 10}, ${160 - idx * 10}, ${160 - idx * 10})`,
              }}
            >
              {item}
            </motion.p>
          ))}
        </motion.div>
      </div>

      {/* Mobile content container - pushed right */}
      <div
        className="absolute left-[160px] right-4 top-0 block md:hidden"
        style={{
          top: "-12px",
        }}
      >
        {/* Design element positioned above the heading for mobile */}
        <div className="absolute left-6 -top-10 pointer-events-none scale-150 z-[10]">
          <img src="./roadmap-design-element.png" className="w-32 scale-x-[-1]" alt="" />
        </div>

        {/* Quarter heading - left aligned */}
        <motion.h2
          className="text-xl z-[10] font-medium mb-6 text-white relative"
          initial={{ opacity: 0, y: 20 }}
          animate={hasAnimated ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          {quarter}
        </motion.h2>

        {/* List items - left aligned */}
        <motion.div variants={containerVariants} initial="hidden" animate={controls} className="space-y-2">
          {items.map((item, idx) => (
            <motion.p
              key={idx}
              variants={itemVariants}
              custom={idx}
              className="leading-tight font-light text-xs"
              style={{
                opacity: getOpacity(idx, items.length),
                color: `rgb(${160 - idx * 10}, ${160 - idx * 10}, ${160 - idx * 10})`,
              }}
            >
              {item}
            </motion.p>
          ))}
        </motion.div>
      </div>

      {/* Circuit image on the opposite side of the content - only for active quarter on desktop */}
      {isActive && (
        <div
          className={`absolute hidden md:block ${align === "right" ? "right-[calc(50%+20px)]" : "left-[calc(50%+20px)]"}`}
          style={{
            width: "350px",
            top: "15px",
          }}
        >
          <motion.div
            className={`absolute ${align === "right" ? "right-0" : "left-0"} top-0 opacity-100 pointer-events-none`}
            initial={{ opacity: 0 }}
            animate={hasAnimated ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            style={{
              transform: "translateY(-25px)",
              opacity: 1,
              willChange: "opacity",
            }}
          >
            <motion.div
              style={{ transform: isEven ? "scaleX(1)" : "scaleX(-1)" }}
              animate={
                isActive
                  ? {
                      filter: [
                        "drop-shadow(0 0 0px rgba(142, 250, 72, 0))",
                        "drop-shadow(0 0 8px rgba(142, 250, 72, 0.7))",
                        "drop-shadow(0 0 5px rgba(142, 250, 72, 0.3))",
                      ],
                    }
                  : { filter: "none" }
              }
              transition={{ duration: 1.2, ease: "easeOut" }}
            >
              <Image src="/circuit.png" alt="Circuit design" width={140} height={89} className="object-contain" />
            </motion.div>
          </motion.div>
        </div>
      )}

      {/* Mobile circuit image - shown ONLY for active quarters on mobile */}
      {isActive && (
        <div
          className="absolute left-0 top-3 block md:hidden"
          style={{
            width: "80px",
            zIndex: 5, // Ensure it's above other elements
          }}
        >
          <motion.div
            className="absolute right-0 top-0 opacity-100 pointer-events-none"
            initial={{ opacity: 0 }}
            animate={hasAnimated ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            style={{
              opacity: 1,
              willChange: "opacity",
              transform: "translateY(-15px) translateX(-5px)",
            }}
          >
            <motion.div
              style={{ transform: "scaleX(-1)" }}
              animate={
                isActive
                  ? {
                      filter: [
                        "drop-shadow(0 0 0px rgba(142, 250, 72, 0))",
                        "drop-shadow(0 0 8px rgba(142, 250, 72, 0.7))",
                        "drop-shadow(0 0 5px rgba(142, 250, 72, 0.3))",
                      ],
                    }
                  : { filter: "none" }
              }
              transition={{ duration: 1.2, ease: "easeOut" }}
            >
              <Image src="/circuit.png" alt="Circuit design" width={140} height={89} className="object-contain" />
            </motion.div>
          </motion.div>
        </div>
      )}
    </div>
  )
}
