"use client"

import { useState } from "react"
import Image from "next/image"

export default function TelegramBlock() {
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
    <div className="transform-container scale-[0.70] md:scale-100 xl:scale-[1.05] 2xl:scale-[1.25] 2xl:translate-y-[2.5rem] 2xl:translate-x-[3.1rem] h-full flex items-center justify-center">
      <div
        className="relative w-[520px] h-[336px] mx-auto"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Container */}
        <div className="absolute inset-0 w-full h-full overflow-hidden">
          <Image
            src="/reimaginesec-4-container.svg"
            alt="Container background"
            width={520}
            height={336}
            className="w-full h-full"
            priority
          />
        </div>

        {/* Telegram watermark - bigger and lighter */}
        <div className="absolute inset-0 overflow-hidden">
          <div
            className={`absolute left-1/2 -translate-x-1/2 transition-all duration-500 ease-in-out ${
              isHovered ? "bottom-[40px] scale-[1.8]" : "bottom-[20px] scale-[1.4]"
            }`}
          >
            <Image
              src="/reimaginesec-4-telegram-watermark.svg"
              alt="Telegram watermark"
              width={435}
              height={217}
              className="w-[350px] h-auto "
            />
          </div>
        </div>

        {/* Top triangle - moved down and right, grayscale by default */}
        <div className="absolute top-4 left-4 z-20">
          <div className={`transition-all duration-500 ${isHovered ? "grayscale-0" : "grayscale"}`}>
            <Image src="/reimaginesec-4-top-triangle.svg" alt="Top triangle" width={47} height={47} />
          </div>
        </div>

        {/* Text overlay */}
        <div className="absolute inset-0 z-10 flex flex-col justify-center items-center text-center">
          <div className="mb-4">
            <div className={`transition-all duration-500 ${isHovered ? "grayscale-0" : "grayscale"}`}>
              <Image
                src="/reimaginesec-4-telegram-small-icon.svg"
                alt="Telegram icon"
                width={18}
                height={16}
                className={`transition-all duration-500 ${isHovered ? "scale-125" : "scale-100"}`}
              />
            </div>
          </div>
          <h2 className="text-[22px] font-normal mb-1 tracking-tighter px-1" style={gradientStyle}>
            Telegram-Ready
          </h2>
          <p className="text-[14px] font-light max-w-[300px] leading-[1.1] px-1" style={gradientStyle}>
            Your Game Is Instantly Playable Inside Telegram Mini Apps.
          </p>
        </div>
      </div>
    </div>
  )
}
