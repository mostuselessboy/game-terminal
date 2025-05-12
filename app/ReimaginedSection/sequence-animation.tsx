"use client"

import { useState, useEffect } from "react"
import Image from "next/image"

type Direction = "topLeft" | "topRight" | "bottomLeft" | "bottomRight"
type PositionStyle = React.CSSProperties

export default function SequenceAnimation() {
  const [isHovered, setIsHovered] = useState(false)
  const [step, setStep] = useState(0)

  useEffect(() => {
    if (isHovered) {
      const timer1 = setTimeout(() => setStep(1), 400)
      const timer2 = setTimeout(() => setStep(2), 800)

      return () => {
        clearTimeout(timer1)
        clearTimeout(timer2)
      }
    } else {
      setStep(0)
    }
  }, [isHovered])

  const gradientStyle: React.CSSProperties = {
    background: "linear-gradient(to bottom, #f9fafb, #6b7280)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    backgroundClip: "text",
    color: "transparent",
    display: "inline-block",
  }

  const getShieldPosition = (direction: Direction, step: number): PositionStyle => {
    const positions: Record<Direction, PositionStyle> = {
      topLeft: { top: "-13px", left: "-32px" },
      topRight: { top: "-24px", right: "-34px" },
      bottomLeft: { bottom: "26px", left: "-31px" },
      bottomRight: { bottom: "24px", right: "-32px" },
    }

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
      }
    }

    if (step === 2) {
      switch (direction) {
        case "topLeft":
          return { top: "-100px", left: "-100px" }
        case "topRight":
          return { top: "-100px", right: "-100px" }
        case "bottomLeft":
          return { bottom: "-80px", left: "-100px" }
        case "bottomRight":
          return { bottom: "-80px", right: "-100px" }
      }
    }

    return positions[direction]
  }

  return (
    <div className="transform-container scale-[0.67] md:scale-100 xl:scale-[1.1] 2xl:scale-[1.3] h-full flex items-center justify-center">
      <div
        className="relative w-[504px] h-[317px] scale-[1.1] md:translate-x-[1.5rem] md:translate-y-[-0.5rem] 2xl:translate-x-[-3rem] mx-auto overflow-hidden rounded-xl"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="absolute inset-0 w-full h-full">
          <Image
            src="/reimaginesec-1-container-1.svg"
            alt="Container 1"
            width={504}
            height={320}
            className="w-full h-full"
          />
        </div>

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
          <div className="absolute z-20 transition-all duration-500 ease-out" style={getShieldPosition("topLeft", step)}>
            <Image
              src="/reimaginesec-1-shield-top-left.svg"
              alt="Shield Top Left"
              width={283}
              height={200}
              className="w-[283px] h-[200px]"
            />
          </div>

          <div className="absolute z-20 transition-all duration-500 ease-out" style={getShieldPosition("topRight", step)}>
            <Image
              src="/reimaginesec-1-shield-top-right.svg"
              alt="Shield Top Right"
              width={306}
              height={159}
              className="w-[306px] h-[159px]"
            />
          </div>

          <div className="absolute z-20 transition-all duration-500 ease-out" style={getShieldPosition("bottomLeft", step)}>
            <Image
              src="/reimaginesec-1-shield-bottom-left.svg"
              alt="Shield Bottom Left"
              width={304}
              height={149}
              className="w-[304px] h-[155px]"
            />
          </div>

          <div className="absolute z-20 transition-all duration-500 ease-out" style={getShieldPosition("bottomRight", step)}>
            <Image
              src="/reimaginesec-1-shield-bottom-right.svg"
              alt="Shield Bottom Right"
              width={283}
              height={200}
              className="w-[283px] h-[210px]"
            />
          </div>
        </div>

        <div
          className={`absolute bottom-[3.4rem] right-[3.4rem] z-30 transition-opacity duration-500 ${
            step === 2 ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="text-left flex flex-col">
            <span className="text-[20px] font-normal tracking-tighter block" style={gradientStyle}>
              Built With AI
            </span>
            <span className="text-[20px]  translate-y-[-0.5rem] leading-[1.1] block" style={gradientStyle}>
              Powered By You
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}