"use client"

import { useState, useEffect } from "react"
import Image from "next/image"

export default function SequenceAnimation() {
  const [isHovered, setIsHovered] = useState(false)
  const [step, setStep] = useState(0)

  // Handle the animation sequence when hovering
  useEffect(() => {
    if (isHovered) {
      // Start with step 0, then progress through the steps
      const timer1 = setTimeout(() => setStep(1), 400) // Reveal second image
      const timer2 = setTimeout(() => setStep(2), 800) // Reveal third image

      return () => {
        clearTimeout(timer1)
        clearTimeout(timer2)
      }
    } else {
      // Reset when not hovering
      setStep(0)
    }
  }, [isHovered])

  // Define gradient style directly for any text
  const gradientStyle = {
    background: "linear-gradient(to bottom, #f9fafb, #6b7280)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    backgroundClip: "text",
    color: "transparent",
    display: "inline-block",
  }

  // Helper function to get shield position based on step
  const getShieldPosition = (direction, step) => {
    // Default positions - updated with exact coordinates
    const positions = {
      topLeft: { top: "-10px", left: "-32px" },
      topRight: { top: "-19px", right: "-34px" },
      bottomLeft: { bottom: "29px", left: "-31px" },
      bottomRight: { bottom: "28px", right: "-32px" },
    }

    // Mid positions (step 1) - brought closer as requested
    if (step === 1) {
      switch (direction) {
        case "topLeft":
          return { top: "-40px", left: "-70px" }
        case "topRight":
          return { top: "-40px", right: "-70px" }
        case "bottomLeft":
          return { bottom: "-40px", left: "-70px" }
        case "bottomRight":
          return { bottom: "-40px", right: "-70px" }
        default:
          return positions[direction]
      }
    }

    // Full positions (step 2)
    if (step === 2) {
      switch (direction) {
        case "topLeft":
          return { top: "-120px", left: "-200px" }
        case "topRight":
          return { top: "-120px", right: "-200px" }
        case "bottomLeft":
          return { bottom: "-120px", left: "-200px" }
        case "bottomRight":
          return { bottom: "-120px", right: "-200px" }
        default:
          return positions[direction]
      }
    }

    // Default position (step 0)
    return positions[direction]
  }

  return (
    <div className="transform-container scale-[0.55] md:scale-100 xl:scale-[1.1] 2xl:scale-[1.3]  h-full flex items-center justify-center">
      <div
        className="relative w-[504px] h-[320px] scale-[1.1] md:translate-x-[1.5rem] md:translate-y-[-0.5rem] 2xl:translate-x-[-5rem] mx-auto overflow-hidden rounded-xl"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* First Container - always visible */}
        <div className="absolute inset-0 w-full h-full">
          <Image
            src="/reimaginesec-1-container-1.svg"
            alt="Container 1"
            width={504}
            height={320}
            className="w-full h-full"
          />
        </div>

        {/* Second Container - revealed from center */}
        <div
          className="absolute inset-0 w-full h-full transition-all duration-500 ease-out"
          style={{
            clipPath: step >= 1 ? "circle(150% at center)" : "circle(0% at center)",
          }}
        >
          <Image
            src="/reimaginesec-1-container-2.svg"
            alt="Container 2"
            width={504}
            height={320}
            className="w-full h-full"
          />
        </div>

        {/* Third Container - revealed from center */}
        <div
          className="absolute inset-0 w-full h-full transition-all duration-500 ease-out"
          style={{
            clipPath: step >= 2 ? "circle(150% at center)" : "circle(0% at center)",
          }}
        >
          <Image
            src="/reimaginesec-1-container-3.svg"
            alt="Container 3"
            width={504}
            height={320}
            className="w-full h-full"
          />
        </div>

        {/* Shield container with overflow hidden */}
        <div
          className="absolute inset-0 overflow-hidden rounded-xl"
          style={{
            maxHeight: "20rem",
            borderRadius: "1rem",
            overflow: "hidden",
            translate: "0 1.4rem",
            marginTop: "0rem",
          }}
        >
          {/* Shield - Top Left */}
          <div
            className="absolute z-20 transition-all duration-500 ease-out"
            style={getShieldPosition("topLeft", step)}
          >
            <Image
              src="/reimaginesec-1-shield-top-left.svg"
              alt="Shield Top Left"
              width={283}
              height={200}
              className="w-[283px] h-[200px]"
            />
          </div>

          {/* Shield - Top Right */}
          <div
            className="absolute z-20 transition-all duration-500 ease-out"
            style={getShieldPosition("topRight", step)}
          >
            <Image
              src="/reimaginesec-1-shield-top-right.svg"
              alt="Shield Top Right"
              width={306}
              height={159}
              className="w-[306px] h-[159px]"
            />
          </div>

          {/* Shield - Bottom Left */}
          <div
            className="absolute z-20 transition-all duration-500 ease-out"
            style={getShieldPosition("bottomLeft", step)}
          >
            <Image
              src="/reimaginesec-1-shield-bottom-left.svg"
              alt="Shield Bottom Left"
              width={304}
              height={149}
              className="w-[304px] h-[149px]"
            />
          </div>

          {/* Shield - Bottom Right */}
          <div
            className="absolute z-20 transition-all duration-500 ease-out"
            style={getShieldPosition("bottomRight", step)}
          >
            <Image
              src="/reimaginesec-1-shield-bottom-right.svg"
              alt="Shield Bottom Right"
              width={283}
              height={200}
              className="w-[283px] h-[200px]"
            />
          </div>
        </div>

        {/* "Built With AI" text - only appears in stage 3 */}
        <div
          className={`absolute bottom-8 right-8 z-30 transition-opacity duration-500 ${
            step === 2 ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="text-right flex flex-col">
            <span className="text-[22px] font-normal tracking-tighter block" style={gradientStyle}>
              Built With AI
            </span>
            <span className="text-[14px] font-light leading-[1.1] block" style={gradientStyle}>
              Powered By You
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}
