"use client"
import { Search,Minus , Plus, ChevronDown } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import PartnersCarousel from "./partner-corousel"
import TextFillEffect from "./text-fill-animation"
import RoadmapComponent from "./roadmap"
import ShiningText from "./shining-text"

import ReimaginedCombinedCards from "./ReimaginedSection/reimagine-combined"



interface FaqItem {
  question: string
  answer: string
}

function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled)
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [scrolled])

  // Close mobile menu when resizing to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768 && mobileMenuOpen) {
        setMobileMenuOpen(false)
      }
    }

    window.addEventListener("resize", handleResize)
    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [mobileMenuOpen])

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }

    return () => {
      document.body.style.overflow = ""
    }
  }, [mobileMenuOpen])

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen)
  }

  // Navigation links - defined once and reused
  const navLinks = [
    { href: "/", text: "Home", active: true },
    { href: "/games", text: "Games" },
    { href: "/marketplace", text: "Marketplace" },
    { href: "/tournament", text: "Tournament" },
    { href: "/nodes", text: "Nodes" },
    { href: "/kols-marketplace", text: "KOLs Marketplace" },
  ]

  // Get Started button - defined once and reused
  const GetStartedButton = () => (
    <button className="text-black font-normal px-6 py-2 h-auto relative overflow-hidden group">
      <span className="absolute inset-0 w-full h-full bg-gradient-to-b from-[#9dff5a] to-[#7de43a] rounded-xl border-2 border-[#a5ff6b]/50"></span>
      <span className="absolute inset-0 w-full h-full bg-gradient-to-b from-[#8EFE49]/50 to-[#7de43a]/90 opacity-0 group-hover:opacity-100 transition-opacity rounded-full"></span>
      <span className="absolute inset-0 w-full h-full shadow-[0_0_0_2px_rgba(0,0,0,0.15),0_4px_10px_rgba(0,0,0,0.25)] rounded-xl glow-effect-strong"></span>
      <span className="relative z-10">Get Started</span>
    </button>
  )

  return (
    <>
      <header
        className={`sticky-header bg-[#0d0d0d] mx-auto py-4 px-4 border-b border-white/10 ${
          scrolled ? "scrolled" : ""
        }`}
      >
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center z-20">
            <img src="/logo.svg" className="h-12 w-12 pointer-events-none select-none" alt="Logo" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center justify-center absolute left-1/2 transform -translate-x-1/2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`${
                  link.active ? "text-[#8EFE49]" : "text-gray-300"
                } hover:text-[#8EFE49]/90 transition-colors px-4 tracking-tight`}
              >
                {link.text}
              </Link>
            ))}
          </nav>

          {/* Hamburger Menu Button - Now inside the header but with higher visibility */}
          <button
            className="md:hidden z-50 w-10 h-10 flex flex-col justify-center items-center bg-[#1a1a1a] rounded-full"
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
          >
            <span className={`hamburger-line ${mobileMenuOpen ? "rotate-45 translate-y-1.5" : ""}`}></span>
            <span className={`hamburger-line ${mobileMenuOpen ? "opacity-0" : "opacity-100"}`}></span>
            <span className={`hamburger-line ${mobileMenuOpen ? "-rotate-45 -translate-y-1.5" : ""}`}></span>
          </button>

          {/* Get Started Button - Hidden on Mobile */}
          <div className="hidden md:block">
            <GetStartedButton />
          </div>
        </div>

        <style jsx>{`
          .sticky-header {
            position: sticky;
            top: 0;
            z-index: 40;
            backdrop-filter: blur(0px);
            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
            box-shadow: 0 0 0 rgba(0, 0, 0, 0);
            border-bottom: 1px solid rgba(255, 255, 255, 0.05);
          }

          .sticky-header.scrolled {
            backdrop-filter: blur(79px);
            box-shadow: 0 4px 20px rgba(0, 0, 0, 0.5);
            border-bottom: 1px solid rgba(142, 254, 73, 0.15);
            padding-top: 0.75rem;
            padding-bottom: 0.75rem;
          }

          .sticky-header::before {
            content: '';
            position: absolute;
            inset: 0;
            z-index: -1;
            opacity: 0;
            transition: opacity 0.3s ease;
          }

          .sticky-header.scrolled::before {
            opacity: 1;
          }

          .sticky-header .flex {
            transition: height 0.3s ease;
          }

          .sticky-header.scrolled .flex {
            height: 3.5rem;
          }

          .sticky-header img, 
          .sticky-header a {
            transition: transform 0.3s ease, opacity 0.3s ease;
          }

          .sticky-header.scrolled img {
            transform: scale(0.95);
          }

          .hamburger-line {
            width: 24px;
            height: 2px;
            background-color: #8EFE49;
            margin: 3px 0;
            transition: all 0.3s ease;
            display: block;
          }
        `}</style>
      </header>

      {/* Mobile Navigation Menu - Full Page Overlay */}
      <div
        className={`fixed inset-0 bg-[#0d0d0d]/95 backdrop-blur-lg z-40 md:hidden transition-transform duration-300 ease-in-out ${
          mobileMenuOpen ? "translate-y-0" : "translate-y-full"
        }`}
      >
        {/* Close button for mobile menu - Enhanced visibility */}
        <button
          className="absolute top-4 right-4 z-50 w-10 h-10 flex flex-col justify-center items-center bg-[#1a1a1a] rounded-full shadow-[0_0_10px_rgba(142,254,73,0.3)]"
          onClick={toggleMobileMenu}
          aria-label="Close menu"
        >
          <div className="relative w-6 h-6 flex items-center justify-center">
            <span className="absolute w-6 h-[2px] bg-[#8EFE49] rotate-45"></span>
            <span className="absolute w-6 h-[2px] bg-[#8EFE49] -rotate-45"></span>
          </div>
        </button>

        <div className="flex flex-col items-center justify-center h-full">
          <nav className="flex flex-col items-center justify-center space-y-6 text-xl">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`${
                  link.active ? "text-[#8EFE49]" : "text-gray-300"
                } hover:text-[#8EFE49]/90 transition-colors tracking-tight`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.text}
              </Link>
            ))}
            <div className="mt-4">
              <GetStartedButton />
            </div>
          </nav>
        </div>
      </div>
    </>
  )
}







function ReimaginedSection() {
  // References to measure natural dimensions of SVGs
  const timeRef = useRef<HTMLImageElement>(null)
  const cubeRef = useRef<HTMLImageElement>(null)
  const pacmanRef = useRef<HTMLImageElement>(null)
  const telegramRef = useRef<HTMLImageElement>(null)

  // State to store calculated widths
  const [cardWidths, setCardWidths] = useState({
    time: 0,
    cube: 0,
    pacman: 0,
    telegram: 0,
  })

  // Calculate width ratios based on natural dimensions
  useEffect(() => {
    const calculateWidths = () => {
      // Get natural dimensions
      const timeRatio = timeRef.current ? timeRef.current.naturalWidth / timeRef.current.naturalHeight : 1
      const cubeRatio = cubeRef.current ? cubeRef.current.naturalWidth / cubeRef.current.naturalHeight : 1
      const pacmanRatio = pacmanRef.current ? pacmanRef.current.naturalWidth / pacmanRef.current.naturalHeight : 1
      const telegramRatio = telegramRef.current
        ? telegramRef.current.naturalWidth / telegramRef.current.naturalHeight
        : 1

      // Set widths proportionally
      setCardWidths({
        time: timeRatio * 300, // Base height of 300px
        cube: cubeRatio * 300,
        pacman: pacmanRatio * 300,
        telegram: telegramRatio * 300,
      })
    }

    // Wait for images to load
    const timer = setTimeout(calculateWidths, 500)
    return () => clearTimeout(timer)
  }, [])

  // Calculate scale factor based on container width

  return (
    <section className="text-white py-24 pt-0 md:pb-10 relative overflow-hidden">
      <div className="container mx-auto px-4 ">
        {/* Section Header */}
        <div className="md:mb-16 p-4 md:p-0">
          {/* Reimagined label with enhanced shine effect */}
          <div className="inline-flex items-center gap-2 px-6 py-1 -translate-x-2 bg-[#111111] rounded-full mb-6 relative overflow-hidden shine-button">
            <div className="relative z-10 flex items-center gap-2">
              <h3 className="text-xl font-clash-display">Reimagined</h3>
              <span className="text-2xl">👌</span>
            </div>

            {/* Multiple shine layers for enhanced effect */}
            <div className="absolute inset-0 shine-effect-primary"></div>
            <div className="absolute inset-0 shine-effect-secondary"></div>
            <div className="absolute inset-0 glow-effect"></div>
          </div>

          <TextFillEffect />
        </div>


      <ReimaginedCombinedCards />
      </div>
      {/* Enhanced CSS for shine effects */}
      <style jsx>{`
        .shine-button {
          border: 1px solid rgba(255, 255, 255, 0.1);
          box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
        }
        
        .shine-effect-primary {
          background: linear-gradient(
            to right,
            rgba(255, 255, 255, 0) 0%,
            rgba(255, 255, 255, 0.4) 50%,
            rgba(255, 255, 255, 0) 100%
          );
          animation: shine 2.5s infinite;
          transform: skewX(-20deg);
        }
        
        .shine-effect-secondary {
          background: linear-gradient(
            to right,
            rgba(255, 255, 255, 0) 0%,
            rgba(142, 254, 73, 0.2) 50%,
            rgba(255, 255, 255, 0) 100%
          );
          animation: shine 2.5s infinite 1.25s;
          transform: skewX(-20deg);
        }
        
        .glow-effect {
          background: radial-gradient(
            circle at center,
            rgba(142, 254, 73, 0.15) 0%,
            rgba(0, 0, 0, 0) 70%
          );
          animation: pulse 4s infinite;
        }

        @keyframes shine {
          0% {
            left: -150%;
          }
          100% {
            left: 250%;
          }
        }
        
        @keyframes pulse {
          0%, 100% {
            opacity: 0.5;
          }
          50% {
            opacity: 0.8;
          }
        }

        .glow-button {
          filter: drop-shadow(0 0 10px rgba(142, 254, 73, 0.5));
          transition: filter 0.3s ease;
        }

        .glow-button:hover {
          filter: drop-shadow(0 0 15px rgba(142, 254, 73, 0.7));
        }

        .glow-effect-strong {
          box-shadow: 0 0 15px 5px rgba(142, 254, 73, 0.6), 
                      0 0 30px 10px rgba(142, 254, 73, 0.4), 
                      0 0 45px 15px rgba(142, 254, 73, 0.2);
          animation: pulse-glow 2s infinite;
        }

        @keyframes pulse-glow {
          0%, 100% {
            box-shadow: 0 0 15px 5px rgba(142, 254, 73, 0.6), 
                        0 0 30px 10px rgba(142, 254, 73, 0.4), 
                        0 0 45px 15px rgba(142, 254, 73, 0.2);
          }
          50% {
            box-shadow: 0 0 20px 8px rgba(142, 254, 73, 0.8), 
                        0 0 40px 15px rgba(142, 254, 73, 0.6), 
                        0 0 60px 20px rgba(142, 254, 73, 0.3);
          }
        }

        .search-shadow {
          position: absolute;
          bottom: -10px;
          left: 50%;
          transform: translateX(-50%);
          width: 80%;
          height: 10px;
          background: radial-gradient(ellipse at center, rgba(142, 254, 73, 0.3) 0%, rgba(0, 0, 0, 0) 70%);
          border-radius: 50%;
          z-index: -1;
          animation: shadow-pulse 4s ease-in-out infinite;
        }

        @keyframes shadow-pulse {
          0%, 100% {
            opacity: 0.5;
            transform: translateX(-50%) scale(1);
          }
          50% {
            opacity: 0.2;
            transform: translateX(-50%) scale(0.7);
          }
        }
      `}</style>
    </section>
  )
}

function HeroSection() {
  return (
    <div className="text-white overflow-x-hidden">
      <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none z-0 select-none"></div>

      {/* Hero Content */}
      <div className="w-full h-fit md:min-h-[100vh] overflow-hidden mx-auto px-4 pt-16 pb-10 relative">
        <div>
          <img
            src="./mainherobg.svg"
            className="absolute opacity-90 inset-0 hidden md:block w-full scale-[1.1] h-full object-cover translate-y-[15px] mix-blend-screen select-none pointer-events-none"
            alt=""
          />
        </div>

        <div className="max-w-4xl mx-auto text-center mb-12 px-10 md:px-0 mt-5 2xl:mt-5">
          <p className="text-gray-400 uppercase tracking-wider mb-6 text-sm font-clash-display">
            REVOLUTIONARY PRODUCT
          </p>
          <h1 className="text-3xl md:text-5xl lg:text-5xl leading-[1] mb-6 font-clash-display tracking-tight">
            <span className="bg-gradient-to-br from-gray-500 via-gray-300 to-white bg-clip-text text-transparent">
              Launch AI-Powered Games With
              <br />
              A{" "}
              <span className="relative inline-block px-4 bg-gradient-to-r from-gray-100 via-gray-50 to-white bg-clip-text text-transparent">
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="absolute left-0 top-0"
                >
                  <path
                    opacity="0.5"
                    d="M13 1H7C4.17157 1 2.75736 1 1.87868 1.87868C1 2.75736 1 4.17157 1 7V13"
                    stroke="white"
                    strokeWidth="0.5"
                    strokeLinecap="round"
                  />
                </svg>
                Single Prompt
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="absolute right-0 bottom-0"
                >
                  <path
                    opacity="0.5"
                    d="M1 13H7C9.82843 13 11.2426 13 12.1213 12.1213C13 11.2426 13 9.82843 13 7V1"
                    stroke="white"
                    strokeWidth="0.5"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </span>
          </h1>
          <p className="text-gray-300 text-sm md:text-lg max-w-2xl mx-auto">
            GameTerminal turns your ideas into live games with deploy-ready tokens, AI agents, and instant Telegram
            export - all from one command.
          </p>
        </div>

        <img
          src="./herobg-mobile.png"
          className="object-cover md:hidden select-none pointer-events-none"
          alt=""
        />

        {/* Game Input (non-input version) with rotating text */}
        <motion.div
          className="max-w-3xl mx-auto mt-[3vh] md:mt-[40vh] lg:mt-[44vh] xl:mt-[45vh] 2xl:mt-[48vh] p-3 bg-[#151A15] flex flex-row items-center gap-4   backdrop-blur-sm  rounded-2xl  relative z-10 "
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.5, ease: "easeOut" }}
        >
          <div className="w-full p-[1px] bg-gradient-to-br from-[#293728] via-[#101710] to-[#101710] rounded-xl">
          <div className="flex items-center justify-between w-full bg-gradient-to-b p-2 from-[#101710] to-[#101410] rounded-xl">
          <div className="flex-1 px-4 py-3 text-white text-md md:text-xl h-14 flex items-center overflow-hidden pointer-events-none select-none">
            <AnimatePresence mode="wait">
              <ShiningText />
            </AnimatePresence>
          </div>
          <motion.button
            className="text-black font-normal px-2 py-1 md:px-6 md:py-3 rounded h-auto text-md md:text-lg whitespace-nowrap relative overflow-hidden group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="absolute inset-0 w-full h-full bg-gradient-to-b from-[#9dff5a] to-[#7de43a] rounded-lg border-2 border-[#a5ff6b]/50"></span>
            <span className="absolute inset-0 w-full h-full bg-gradient-to-b from-[#8EFE49]/50 to-[#7de43a]/90 opacity-0 group-hover:opacity-100 transition-opacity rounded-full"></span>
            <span className="absolute inset-0 w-full h-full shadow-[0_0_0_2px_rgba(0,0,0,0.15),0_4px_10px_rgba(0,0,0,0.25)] rounded-xl glow-effect-strong"></span>
            <span className="relative z-10 font-semibold tracking-tight text-sm md:text-lg">Get Started</span>
          </motion.button>
          </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
function SolutionSection() {
  return (
    <motion.div
      className="flex flex-col items-center mx-auto mw-full bg-gradient-to-b from-transparent to-[#0d0d0d]"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ margin: "-100px" }}
      transition={{ duration: 0.4, ease: "easeOut" }}
    >
      <motion.img
        src={"./heading-design1.png"}
        className="w-full"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ margin: "-100px" }}
        transition={{ duration: 0.4, delay: 0.1 }}
      />
      <motion.h1
        className="md:text-3xl text-2xl -translate-y-[5rem] md:-translate-y-[10rem] font-clash-display leading-[1] mb-0 tracking-tight text-center w-full"
        initial={{ opacity: 0, filter: "blur(8px)" }}
        whileInView={{ opacity: 1, filter: "blur(0px)" }}
        viewport={{ margin: "-100px" }}
        transition={{ duration: 0.5, delay: 0.15 }}
      >
        <span className="bg-gradient-to-br from-gray-500 via-gray-300 to-white bg-clip-text text-transparent">
          See What Problems We <br /> Solved Together!
        </span>
      </motion.h1>
      <motion.img
        src="./solution-content.svg"
        className="object-center hidden md:flex w-6xl "
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ margin: "-100px" }}
        transition={{ duration: 0.4, delay: 0.2 }}
      />
      <motion.img
        src="./solution-content-mobile.svg"
        className="object-center md:hidden  px-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ margin: "-100px" }}
        transition={{ duration: 0.4, delay: 0.2 }}
      />
    </motion.div>
  )
}

function ArchitectureSection() {
  return (
    <motion.div
      className="flex flex-col items-center mx-auto w-full bg-[#0d0d0d]"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ margin: "-100px" }}
      transition={{ duration: 0.4, ease: "easeOut" }}
    >
      <motion.h1
        className="md:text-4xl text-2xl translate-y-[12rem] lg:translate-y-[15rem] leading-[1] mb-6 tracking-tight text-center w-full"
        initial={{ opacity: 0, filter: "blur(8px)" }}
        whileInView={{ opacity: 1, filter: "blur(0px)" }}
        viewport={{ margin: "-100px" }}
        transition={{ duration: 0.5, delay: 0.15 }}
      >
        <span className="bg-gradient-to-br from-gray-200 font-clash-display via-gray-400 to-white bg-clip-text text-transparent">
          Architecture of how it works? <br />{" "}
          <span className="font-normal text-lg lg:text-2xl text-gray-500">See Step by Step</span>
        </span>
      </motion.h1>
      <motion.img
        src="./robotarch.png"
        className="w-full hidden md:flex select-none pointer-events-none"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ margin: "-100px" }}
        transition={{ duration: 0.4, delay: 0.2 }}
      />
      <motion.img
        src="./arch-mobile.svg"
        className="w-full md:hidden select-none pointer-events-none "
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ margin: "-100px" }}
        transition={{ duration: 0.4, delay: 0.2 }}
      />
    </motion.div>
  )
}

function RoadmapSection() {
  return (
    <motion.div
      className="flex flex-col pt-[5rem] bg-gradient-to-t from-transparent to-[#0d0d0d]"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
    >
      <motion.h1
        className="md:text-4xl font-semibold text-2xl leading-[1] md:p-0 px-10 mb-20   tracking-tight text-center w-full"
        initial={{ opacity: 0, filter: "blur(8px)" }}
        whileInView={{ opacity: 1, filter: "blur(0px)" }}
        viewport={{ margin: "-100px" }}
        transition={{ duration: 0.5, delay: 0.15 }}
      >
        <span className="bg-gradient-to-br from-gray-500 via-gray-300 to-white bg-clip-text text-transparent">
          Our 2025 roadmap, one step ahead
        </span>
      </motion.h1>


      <RoadmapComponent />
    </motion.div>
  )
}

function BackerSection() {
  const backerImages = [
    "./backer1.svg",
    "./backer2.svg",
    "./backer3.svg",
    "./backer4.svg",
    "./backer5.svg",
  ]

  return (
    <motion.div
      className="flex flex-col items-center mx-auto max-w-8xl mt-10"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ margin: "-100px" }}
      transition={{ duration: 0.4, ease: "easeOut" }}
    >
      <motion.img
        src="./backer-header-bg.svg"
        className="object-center mb-32"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ margin: "-100px" }}
        transition={{ duration: 0.4, delay: 0.1 }}
      />
      <motion.h1
        className="md:text-4xl text-2xl -translate-y-[10rem] font-clash-display leading-[1]  tracking-tight font-[400] text-center w-full"
        initial={{ opacity: 0, filter: "blur(8px)" }}
        whileInView={{ opacity: 1, filter: "blur(0px)" }}
        viewport={{ margin: "-100px" }}
        transition={{ duration: 0.5, delay: 0.15 }}
      >
        <span className="bg-gradient-to-br from-gray-200 via-gray-400 to-white bg-clip-text text-transparent">
          Backers
        </span>
      </motion.h1>

      <PartnersCarousel />




      {/* Desktop image */}
      <motion.img
        src="./backers-photo.svg"
        className="object-center hidden md:flex mb-32"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ margin: "-100px" }}
        transition={{ duration: 0.4, delay: 0.2 }}
      />

      {/* Mobile stacked images */}
      <div className="flex flex-col gap-6 md:hidden mb-32 items-center">
        {backerImages.map((src, idx) => (
          <motion.img
            key={idx}
            src={src}
            className="w-4/5 max-w-xs"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ margin: "-100px" }}
            transition={{ duration: 0.4, delay: 0.1 * idx }}
          />
        ))}
      </div>
    </motion.div>
  )
}

function FaqSection() {
  return (
    <motion.div
      className="w-full"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ margin: "-100px" }}
      transition={{ duration: 0.4, ease: "easeOut" }}
    >
      <motion.img
        src="./footer-bg.svg"
        className="object-center w-full"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ margin: "-100px" }}
        transition={{ duration: 0.4, delay: 0.1 }}
      />
      <motion.h1
        className="md:text-4xl text-2xl md:-translate-y-[10rem] -translate-y-[5rem] leading-[1] mb-0 tracking-tight font-[400] text-center w-full"
        initial={{ opacity: 0, filter: "blur(8px)" }}
        whileInView={{ opacity: 1, filter: "blur(0px)" }}
        viewport={{ margin: "-100px" }}
        transition={{ duration: 0.5, delay: 0.15 }}
      >
        <span className="bg-gradient-to-br from-gray-200 font-clash-display via-gray-400 to-white bg-clip-text text-transparent">
          Frequently Asked Questions <br /> <span className="font-normal md:text-2xl text-lg text-gray-500">Most asked questions</span>
        </span>
      </motion.h1>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ margin: "-100px" }}
        transition={{ duration: 0.4, delay: 0.2 }}
      >
        <EnhancedGradientFaq />
      </motion.div>
    </motion.div>
  )
}

function EnhancedGradientFaq() {
  // Changed to open the first item (index 0) by default
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const faqItems: FaqItem[] = [
    {
      question: "Which payment methods do you accept?",
      answer:
        "We accept credit cards (Visa, Mastercard, American Express), PayPal, bank transfers, and cryptocurrency payments including Bitcoin and Ethereum.",
    },
    {
      question: "Do you offer discounts for long-term commitments ?",
      answer:
        "DePIN, or Decentralized Physical Infrastructure Networks, leverages blockchains, IoT and the greater Web3 ecosystem to create, operate and maintain real-world physical infrastructure. These networks leverage token incentives to coordinate, reward and safeguard members of the network. io.net is the first and only GPU DePIN. We are optimized for machine learning but suitable for all GPU use cases as we connect computing power providers with users to offer accessibility and profit for everyone involved.",
    },
    {
      question: "Which payment methods do you accept?",
      answer:
        "We accept all major credit cards, PayPal, bank transfers, and various cryptocurrencies including Bitcoin, Ethereum, and USDC.",
    },
    {
      question: "How does the pricing and billing system work?",
      answer:
        "Our pricing is based on usage with transparent billing cycles. You'll only pay for the resources you consume, with detailed invoices provided at the end of each billing period. Volume discounts are available for enterprise customers.",
    },
  ]

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.4 } },
  }

  return (
    <div className="flex items-center justify-center md:p-4 p-6 max-w-6xl mx-auto pt-0">
      <div className="w-full">
        <motion.div
          className="space-y-4"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ margin: "-100px" }}
        >
          {faqItems.map((item, index) => (
            <motion.div
              key={index}
              className={`rounded-xl overflow-hidden relative ${openIndex === index ? "faq-gradient-border" : ""}`}
              style={{
                background:
                  openIndex === index
                    ? "linear-gradient(to bottom, rgba(20, 20, 20, 0.8), rgba(10, 10, 10, 0.6))"
                    : "linear-gradient(to bottom, rgba(15, 15, 15, 0.5), rgba(8, 8, 8, 0.3))",
              }}
            >
              <motion.button
                className="w-full flex justify-between items-center py-5 px-6 text-left focus:outline-none"
                onClick={() => toggleFaq(index)}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 500, damping: 30 }}
              >
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-100 via-gray-300 to-gray-100 md:text-lg text-md font-medium">
                  {item.question}
                </span>
                <div className="relative">
                  {/* Circle background behind the plus button */}
                  <div
                    className={`absolute inset-0 rounded-full bg-gradient-to-br from-gray-800 to-gray-900`}
                    style={{
                      width: "28px",
                      height: "28px",
                      transform: "translate(-2px, -2px)",
                      opacity: 0.8,
                    }}
                  ></div>

                  {/* Subtle glow effect behind the plus icon */}
                  <div
                    className={`absolute inset-0 rounded-full ${
                      openIndex === index ? "bg-gradient-to-br from-gray-600/20 via-gray-700/10 to-transparent" : ""
                    }`}
                    style={{ filter: "blur(6px)", transform: "scale(1.2)" }}
                  ></div>

                  <motion.div
                    animate={{
                      rotate: openIndex === index ? 45 : 0,
                    }}
                    transition={{
                      duration: 0.3,
                      ease: [0.25, 0.1, 0.25, 1.0],
                    }}
                    className="relative text-white p-1"
                  >
                    <Plus className="h-5 w-5" />
                  </motion.div>
                </div>
              </motion.button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{
                      height: "auto",
                      opacity: 1,
                      transition: {
                        height: { duration: 0.3, ease: [0.04, 0.62, 0.23, 0.98] },
                        opacity: { duration: 0.3, delay: 0.05 },
                      },
                    }}
                    exit={{
                      height: 0,
                      opacity: 0,
                      transition: {
                        opacity: { duration: 0.2 },
                        height: { duration: 0.2, delay: 0.05 },
                      },
                    }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 relative">
                      {/* Gradient divider line */}
                      <div className="h-px w-full bg-gradient-to-r from-transparent via-gray-700 to-transparent"></div>
                    </div>
                    <motion.div
                      className="px-6 pb-5 pt-4 text-gray-300"
                      initial={{ y: -10 }}
                      animate={{ y: 0 }}
                      transition={{ duration: 0.2, ease: "easeOut" }}
                    >
                      <p>{item.answer}</p>
                    </motion.div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  )
}


function Footer() {
  const [openSection, setOpenSection] = useState<string | null>("PRODUCT")

  const toggleSection = (section: string) => {
    if (openSection === section) {
      setOpenSection(null)
    } else {
      setOpenSection(section)
    }
  }

  const sections = [
    {
      title: "PRODUCT",
      links: ["GAMES", "NFT MARKETPLACE", "LEADERBOARD", "UGC MARKETPLACE"],
    },
    {
      title: "COMPANY",
      links: ["ABOUT US", "TEAM", "ADVISORS", "PARTNERS", "BACKERS"],
    },
    {
      title: "LEGAL",
      links: ["PRIVACY POLICY", "TERMS OF SERVICE", "FAQs", "LEARN MORE"],
    },
    {
      title: "COMMUNITY",
      links: ["TWITTER", "TELEGRAM", "DISCORD", "YOUTUBE", "MEDIUM", "LINKEDIN"],
    },
  ]

  return (
    <footer className="w-full text-gray-400 py-12 mt-20">
      <div className="container mx-auto px-4">
        {/* Desktop View */}
        <div className="hidden md:grid md:grid-cols-5 gap-8">
          {/* Logo Column */}
          <div className="flex items-start">
            <div className="w-16 h-16">
              <img src="./logo.svg" alt="Logo" className="w-full h-full" />
              {/* Space for logo */}
              <div className="w-16 h-16 bg-transparent"></div>
            </div>
          </div>

          {/* Content Columns */}
          {sections.map((section) => (
            <div key={section.title}>
              <h3 className="text-white text-xl font-medium mb-6">{section.title}</h3>
              <ul className="space-y-4">
                {section.links.map((link) => (
                  <li key={link}>
                    <Link href="#" className="hover:text-white transition-colors">
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Mobile View - Accordion */}
        <div className="md:hidden mx-4 rounded-lg overflow-hidden">
          {sections.map((section, index) => (
            <div key={section.title} className="bg-[#111111] mb-4 rounded-lg overflow-hidden">
              <div
                className="py-5 px-4 flex justify-between items-center cursor-pointer"
                onClick={() => toggleSection(section.title)}
              >
                <h3 className="text-white text-xl font-medium">{section.title}</h3>
                <motion.button
                  className={`w-8 h-8 rounded-full flex items-center justify-center ${
                    openSection === section.title ? "bg-[#8EFA48]" : "bg-gray-700"
                  }`}
                  whileTap={{ scale: 0.95 }}
                >
                  {openSection === section.title ? (
                    <Minus className="w-5 h-5 text-black" />
                  ) : (
                    <Plus className="w-5 h-5 text-black" />
                  )}
                </motion.button>
              </div>

              <AnimatePresence>
                {openSection === section.title && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <ul className="space-y-4 py-4 px-4">
                      {section.links.map((link) => (
                        <li key={link}>
                          <Link href="#" className="hover:text-white transition-colors">
                            {link}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

        {/* Fading separator */}
        <div className="mt-16 relative">
          <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent"></div>
        </div>

        <div className="mt-8 text-center">
          <p>© {new Date().getFullYear()} GameTerminal.com. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default function Page() {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="max-w-8xl mx-auto"
      variants={{
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { duration: 0.6, ease: "easeOut" } },
      }}
    >
      <Header />

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 0.4 }}>
        <HeroSection />
      </motion.div>

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 0.8 }}>
        <ReimaginedSection />
      </motion.div>

      

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 1.2 }}>
        <SolutionSection />
      </motion.div>

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 1.6 }}>
        <ArchitectureSection />
      </motion.div>

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 2 }}>
        <RoadmapSection />
      </motion.div>

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 2 }}>
        <BackerSection/>
      </motion.div>

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 2 }}>
        <FaqSection />
      </motion.div>

      <Footer />

    </motion.div>
  )
}
