"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

export default function TextFillEffect() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Register ScrollTrigger plugin
    gsap.registerPlugin(ScrollTrigger)

    // Get all text elements
    const textElements = gsap.utils.toArray<HTMLHeadingElement>(".animate-fill")

    // Set initial state
    gsap.set(".animate-fill", {
      backgroundSize: "0%",
    })

    // Create animations for each text element
    textElements.forEach((text) => {
      gsap.fromTo(
        text,
        { backgroundSize: "0%" },
        {
          backgroundSize: "100%",
          ease: "none",
          scrollTrigger: {
            trigger: text,
            start: "center 100%",
            end: "center 50%",
            scrub: true,
          },
        },
      )
    })

    // Cleanup function
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
    }
  }, [])

  return (
    <>
      {/* Font import */}
      <style jsx global>{`
        @import url('https://api.fontshare.com/v2/css?f[]=clash-display@400,700&display=swap');
        
        body {
          background-color: #131313;
          color: #fafafa;
          margin: 0;
          padding: 0;
        }
        
        section {
          display: flex;
          align-items: center;
          justify-content: center;
        }
        
        .container {
          overflow: hidden;
          border: solid 0px black;
          padding-top: 3rem;
        }
        
        .white-fill {
          background: linear-gradient(
              to right,
              #ffffff,
              #ffffff
            )
            no-repeat;
          -webkit-background-clip: text;
          background-clip: text;
          background-size: 0%;
          color: rgba(255, 255, 255, 0.3);
        }

        .green-fill {
          background: linear-gradient(
              to right,
              #8EFE49,
              #8EFE49
            )
            no-repeat;
          -webkit-background-clip: text;
          background-clip: text;
          background-size: 0%;
          color: rgba(142, 254, 73, 0.3);
        }
      `}</style>

      <section>
        <div className="container" ref={containerRef}>
          <div className="space-y-2">
            <h2 className="text-2xl  md:text-4xl font-clash-display leading-tight animate-fill white-fill">
              No Code, No Wait,
              <br />
              From AI-Powered Creation
            </h2>
            <h2 className="text-2xl md:text-4xl font-clash-display leading-tight">
              <span className="animate-fill green-fill">To Telegram-Ready Playability...</span>
            </h2>
          </div>
        </div>
      </section>
    </>
  )
}
