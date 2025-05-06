"use client"

import { useState } from "react"
import Image from "next/image"

export default function AnimatedCube() {
  const [isHovered, setIsHovered] = useState(false)

  // Define gradient style directly
  const gradientStyle = {
    background: "linear-gradient(to bottom, #f9fafb, #6b7280)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    backgroundClip: "text",
    color: "transparent",
    display: "inline-block",
  }

  return (
    <div className="transform-container scale-[0.7] md:scale-100 xl:scale-[1.1] 2xl:scale-[1.3] h-full flex items-center justify-center">
      <div
        className="relative w-[448px] h-[327px] mx-auto md:translate-x-[1rem] xl:translate-x-[2rem] 2xl:translate-x-[1rem]"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Text overlay */}
        <div className="absolute inset-0 z-10 flex flex-col justify-start items-start p-8 text-left">
          <h2 className="text-[22px] font-normal mb-1 tracking-tighter px-1" style={gradientStyle}>
            Onchain By Default
          </h2>
          <p className="text-[14px] font-light max-w-[300px] leading-[1.1] px-1" style={gradientStyle}>
            Every Game Includes Deploy-Ready Contracts And Tokens.
          </p>
        </div>

        {/* Container */}
        <div className="absolute inset-0 w-full h-full overflow-hidden">
          <Image
            src="/reimaginesec-2-container.svg"
            alt="Container background"
            width={448}
            height={456}
            className="w-full h-full"
            priority
          />
        </div>

        {/* Wrapper with overflow hidden */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Cube that animates on hover */}
          <div
            className={`absolute left-1/2 -translate-x-1/2 transition-all duration-500 ease-in-out w-[25rem] ${
              isHovered ? "bottom-[-180px]" : "bottom-[-250px]"
            }`}
          >
            <Image
              src="/reimaginesec-2-greencirclecube.svg"
              alt="Green circle cube"
              width={400}
              height={400}
              className="w-[400px] h-[400px]"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
