"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [hoveredLink, setHoveredLink] = useState<string | null>(null)
  const pathname = usePathname()

  // Close mobile menu when resizing to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024 && mobileMenuOpen) {
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
    { href: "/", text: "Home" },
    { href: "/games", text: "Games" },
    { href: "/marketplace", text: "Marketplace" },
    { href: "/tournament", text: "Tournament" },
    { href: "/nodes", text: "Nodes" },
    { href: "/kols-marketplace", text: "KOLs Marketplace" },
  ]

  // Get Started button - defined once and reused
  const GetStartedButton = () => (
    <button className="text-black font-medium px-6 py-3 h-auto relative overflow-hidden group rounded-xl">
      <span className="absolute inset-0 w-full h-full bg-gradient-to-b from-[#66B734] to-[#8DFA48] rounded-2xl"></span>
      <span className="absolute inset-0 w-full h-full bg-gradient-to-b from-[#66B734]/80 to-[#8DFA48]/90 opacity-0 group-hover:opacity-100 transition-opacity rounded-full"></span>
      <span className="absolute inset-0 w-full h-full shadow-[0_0_10px_rgba(141,250,72,0.5)] rounded-full"></span>
      <span className="relative z-10 text-lg">Get Started</span>
    </button>
  )

  return (
    <>
      <header className="fixed-header bg-[#0d0d0d]/70 backdrop-blur-xl mx-auto pt-4 pb-0 px-0">
        <div className="container-full mx-auto">
          <div className="flex items-center justify-between relative">
            {/* Logo Section */}
            <Link href="/" className="flex items-center justify-center z-20 pl-4 pr-8 w-[180px]">
              <img src="/logo.svg" className="h-12 w-12 pointer-events-none select-none" alt="Logo" />
            </Link>

            {/* Desktop Navigation - Full Width with max-width constraint */}
            <div className="hidden lg:block flex-1 z-10">
              <nav className="w-full flex justify-center">
                <div className="relative nav-container flex max-w-7xl mx-auto">
                  {/* Top gradient border */}
                  <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#2b2b2b] to-transparent"></div>

                  {/* Navigation links - COMPLETELY REDESIGNED */}
                  <div className="flex w-full">
                    {navLinks.map((link, index) => (
                      <div key={link.href} className="nav-item-wrapper flex-1 relative">
                        {/* Vertical divider before first item */}
                        {index === 0 && (
                          <div className="absolute left-0 top-[-32px] bottom-0 w-[1px] h-[calc(100%+32px)] bg-gradient-to-b from-transparent via-white/30 to-transparent"></div>
                        )}

                        {/* Vertical divider after each item (except last) */}
                        {index < navLinks.length - 1 && (
                          <div className="absolute right-0 top-0 bottom-0 w-[1px] h-full bg-gradient-to-b from-[#2b2b2b] via-[hsla(0,0%,100%,.02)] to-[#2b2b2b] z-10"></div>
                        )}

                        {/* Active indicator container - separate from link */}
                        <div className="relative h-full w-full">
                          {/* Active indicator and glow */}
                          {(pathname === link.href || hoveredLink === link.href) && (
                            <div className="absolute inset-x-0 top-0 z-0">
                              {/* Green line with gradient */}
                              <div
                                className={`h-[2px] green-active-bar ${
                                  hoveredLink === link.href && pathname !== link.href ? "animate-fadeIn" : ""
                                }`}
                              ></div>
                              {/* Glow effect */}
                              <div className="h-[30px] bg-gradient-to-b from-[rgba(107,186,61,0.3)] via-[rgba(107,186,61,0.05)] to-transparent"></div>
                            </div>
                          )}

                          {/* Link element */}
                          <Link
                            href={link.href}
                            className="flex items-center justify-center h-[70px] w-full px-8 py-4 relative z-10"
                            onMouseEnter={() => setHoveredLink(link.href)}
                            onMouseLeave={() => setHoveredLink(null)}
                          >
                            <span className="nav-text-gradient">{link.text}</span>
                          </Link>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Bottom gradient border */}
                  <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#2b2b2b] to-transparent"></div>
                </div>
              </nav>
            </div>

            {/* Vertical divider between KOLs and Get Started */}
            <div className="hidden lg:block vertical-end-divider absolute"></div>

            {/* Hamburger Menu Button */}
            <button
              className="lg:hidden z-50 w-10 h-10 flex flex-col justify-center items-center bg-[#1a1a1a] rounded-full"
              onClick={toggleMobileMenu}
              aria-label="Toggle menu"
            >
              <span className={`hamburger-line ${mobileMenuOpen ? "rotate-45 translate-y-1.5" : ""}`}></span>
              <span className={`hamburger-line ${mobileMenuOpen ? "opacity-0" : "opacity-100"}`}></span>
              <span className={`hamburger-line ${mobileMenuOpen ? "-rotate-45 -translate-y-1.5" : ""}`}></span>
            </button>

            {/* Get Started Button - Hidden on Mobile */}
            <div className="hidden lg:block w-[180px] flex justify-end pr-4">
              <GetStartedButton />
            </div>
          </div>
        </div>

        <style jsx>{`
          .container-full {
            width: 100%;
            max-width: 100%;
          }

          .fixed-header {
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            width: 100%;
            z-index: 40;
            box-shadow: 0 0 15px rgba(0, 0, 0, 0.3);
          }

          .hamburger-line {
            width: 24px;
            height: 2px;
            background-color: #8EFE49;
            margin: 3px 0;
            transition: all 0.3s ease;
            display: block;
          }

          .nav-container {
            padding-top: 1px;
            padding-bottom: 1px;
            width: 100%;
          }

          .vertical-end-divider {
            position: absolute;
            right: 180px;
            top: 0;
            bottom: 0;
            width: 1px;
            background: linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(255, 255, 255, 0.1), rgba(0, 0, 0, 0));
            height: 100%;
            z-index: 20;
          }

          @media (max-width: 1280px) {
            .vertical-end-divider {
              right: 200px;
            }
          }

          .nav-text-gradient {
            background: linear-gradient(to bottom, #ffffff, #e0e0e0);
            -webkit-background-clip: text;
            background-clip: text;
            color: transparent;
            font-weight: 400;
          }

          /* Green active bar with gradient */
          .green-active-bar {
            background: linear-gradient(to right, #4F852E, #66B734, #8DFA48, #66B734, #4F852E);
            box-shadow: 0 0 10px rgba(107, 186, 61, 0.5);
          }

          @keyframes fadeIn {
            0% {
              opacity: 0;
              transform: scaleX(0.7);
            }
            100% {
              opacity: 1;
              transform: scaleX(1);
            }
          }

          .animate-fadeIn {
            animation: fadeIn 0.3s ease forwards;
          }
        `}</style>
      </header>

      {/* Add padding to the top of the page to account for fixed header */}
      <div className="pt-[110px]"></div>

      {/* Mobile Navigation Menu - Full Page Overlay */}
      <div
        className={`fixed inset-0 bg-[#0d0d0d]/95 backdrop-blur-lg z-40 lg:hidden transition-transform duration-300 ease-in-out ${
          mobileMenuOpen ? "translate-y-0" : "translate-y-full"
        }`}
      >
        {/* Close button for mobile menu */}
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
                className={`nav-text-gradient hover:opacity-90 transition-opacity tracking-tight ${
                  pathname === link.href ? "text-shadow-active" : ""
                }`}
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
