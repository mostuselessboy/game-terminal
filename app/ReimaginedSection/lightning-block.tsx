"use client"

import { useState } from "react"
import Image from "next/image"

export default function LightningBlock() {
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
    <div className="transform-container scale-[0.6] md:scale-100 xl:scale-[1.05] 2xl:scale-[1.3] 2xl:-translate-x-[8rem] 2xl:translate-y-[2rem] xl:-translate-x-2.5 h-full flex items-center justify-center">
      <div
        className="relative w-[504px] h-[320px] md:translate-y-[0.5rem] mx-auto overflow-hidden"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Container */}
        <div className="absolute inset-0 w-full h-full">
          <Image
            src="/reimaginesec-3-container.svg"
            alt="Container background"
            width={504}
            height={320}
            className="w-full h-full"
            priority
          />
        </div>

        {/* Green glow effect behind lightning bolt - only visible on hover - opacity reduced */}
        <div
          className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] rounded-full z-10 transition-opacity duration-700 ${
            isHovered ? "opacity-30" : "opacity-0"
          }`}
          style={{
            background:
              "radial-gradient(circle, rgba(142, 250, 72, 0.6) 0%, rgba(142, 250, 72, 0.2) 40%, rgba(142, 250, 72, 0) 70%)",
          }}
        ></div>

        {/* Pacman icon top-left corner - MOVES DOWN */}
        <div
          className={`absolute z-20 transition-all duration-700 ease-in-out ${
            isHovered ? "top-[120px] left-[70px]" : "top-[40px] left-[70px]"
          }`}
        >
          <Image src="/reimaginesec-3-pacman-icon.svg" alt="Pacman icon" width={48} height={48} />
        </div>

        {/* Pacman icon right side - MOVES UP */}
        <div
          className={`absolute z-20 transition-all duration-700 ease-in-out ${
            isHovered ? "top-[100px] right-[-5px]" : "top-[150px] right-[-5px]"
          }`}
        >
          <Image
            src="/reimaginesec-3-pacman-icon.svg"
            alt="Pacman icon"
            width={48}
            height={48}
            className="transform scale-x-[-1]"
          />
        </div>

        {/* Third Pacman icon - COMES FROM TOP */}
        <div
          className={`absolute z-20 transition-all duration-700 ease-in-out ${
            isHovered ? "top-[60px] left-[340px]" : "top-[-50px] left-[340px]"
          }`}
        >
          <Image src="/reimaginesec-3-pacman-icon.svg" alt="Pacman icon" width={48} height={48} />
        </div>

        {/* Center lightning icon that changes on hover with smooth fade */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
          <div className="relative w-[72px] h-[72px]">
            {/* Default icon (always present) */}
            <Image
              src="/reimaginesec-3-middle-bold-icon.svg"
              alt="Lightning icon"
              width={72}
              height={72}
              className={`absolute transition-opacity duration-500 ${isHovered ? "opacity-0" : "opacity-100"}`}
            />
            {/* Hover icon (fades in) */}
            <Image
              src="/reimaginesec-3-middle-bold-icon-hovered.svg"
              alt="Lightning icon hovered"
              width={72}
              height={72}
              className={`absolute transition-opacity duration-500 ${isHovered ? "opacity-100" : "opacity-0"}`}
            />
          </div>
        </div>

        {/* Text overlay - moved much lower */}
        <div className="absolute inset-0 z-10 flex flex-col justify-end items-start text-left p-8 pb-[40px]">
          <h2 className="text-[22px] font-normal mb-1 tracking-tighter" style={gradientStyle}>
            Lightning-Fast Game Creation
          </h2>
          <p className="text-[14px] font-light max-w-[300px] leading-[1.1]" style={gradientStyle}>
            Build And Launch In Seconds — Not Weeks.
          </p>
        </div>
      </div>
    </div>
  )
}
