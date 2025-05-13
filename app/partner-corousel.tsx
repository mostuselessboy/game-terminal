"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"

export default function InfiniteCarousel() {
  const scrollRef = useRef<HTMLDivElement>(null)

  const carouselImages = [
    '/partner-maven.png',
    '/partner-telos.png',
    '/partner-yay.png',
    '/partner-maven.png',
    '/partner-telos.png',
    '/partner-yay.png',
    '/partner-maven.png',
    '/partner-telos.png',
    '/partner-yay.png'
  ]

  useEffect(() => {
    const scrollContainer = scrollRef.current
    if (!scrollContainer) return

    // Clone the content for seamless looping
    const content = scrollContainer.querySelector(".carousel-content") as HTMLElement
    if (!content) return

    const clone = content.cloneNode(true) as HTMLElement
    scrollContainer.appendChild(clone)

    // Set animation
    const scrollWidth = content.offsetWidth
    const duration = scrollWidth * 20 // Adjust speed here (higher = slower)

    scrollContainer.style.setProperty("--scroll-width", `${scrollWidth}px`)
    scrollContainer.style.setProperty("--animation-duration", `${duration}ms`)

    // Force a reflow before adding the animation class
    void scrollContainer.offsetWidth

    scrollContainer.classList.add("carousel-animate")

    return () => {
      scrollContainer.classList.remove("carousel-animate")
    }
  }, [])

  return (
    <div className="carousel-container -translate-y-[5rem]">
      <div
        ref={scrollRef}
        className="carousel-scroll-container"

      >
        <div className="carousel-content">
          {carouselImages.map((imagePath, index) => (
            <div key={index} className="carousel-item">
              {/* Image */}
              <div className="carousel-image-container">
                <div className="carousel-image-wrapper">
                  <Image
                    src={imagePath || "/placeholder.svg"}
                    alt={`Carousel image ${index + 1}`}
                    fill
                    className="carousel-image"
                  />
                </div>
              </div>

              {/* Divider - only add between items, not after the last one */}
              {index < carouselImages.length - 1 && <div className="carousel-divider"></div>}
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .carousel-container {
          position: relative;
          width: 100%;
          border: 0.6px solid rgba(255, 255, 255, 0.2);
          overflow: hidden;
          border-radius: 0;
        }

        .carousel-scroll-container {
          --scroll-width: 0px;
          --animation-duration: 30000ms;
          display: flex;
          width: 100%;
        }

        .carousel-scroll-container.carousel-animate {
          animation: carouselScroll var(--animation-duration) linear infinite;
        }

        .carousel-content {
          display: flex;
          align-items: center;
        }

        .carousel-item {
          display: flex;
          align-items: center;
        }

        .carousel-image-container {
          display: flex;
          height: 3rem;
          align-items: center;
          padding-left: 2rem;
          padding-right: 4rem;
        }

        .carousel-image-wrapper {
          position: relative;
          height: 2.5rem;
          width: 8rem;
          filter: grayscale(100%);
          mix-blend-mode: luminosity;
        }

        .carousel-image {
          object-fit: contain;
        }

        .carousel-divider {
          height: 6rem;
          width: 1px;
          transform: rotate(15deg);
          background-color: rgba(255, 255, 255, 0.2);
        }

        @keyframes carouselScroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(calc(-1 * var(--scroll-width)));
          }
        }

        @media (min-width: 768px) {
          .carousel-image-container {
            padding-left: 3rem;
            padding-right: 3rem;
          }
        }
      `}</style>
    </div>
  )
}
