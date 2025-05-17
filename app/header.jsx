"use client"
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import { Menu, X } from "lucide-react"
import { useEffect, useState } from "react"

const Navbar = () => {
  const pathname = usePathname()
  const router = useRouter()
  const [isNavOpen, setIsNavOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState("home")

  const toggleNavbar = () => {
    setIsNavOpen(!isNavOpen)
    document.body.style.overflow = !isNavOpen ? "hidden" : "auto"
  }

  const checkUrlHash = () => {
    const hash = window.location.hash.replace("#", "")
    if (hash) {
      setActiveSection(hash)
    } else {
      setActiveSection("home")
    }
  }

  useEffect(() => {
  const sectionIds = [
    "home",
    "features",
    "solutions",
    "architecture",
    "roadmap",
    "backers",
    "advisors",
    "faq",
  ]

  const observers = []

  sectionIds.forEach((id) => {
    const section = document.getElementById(id)
    if (!section) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActiveSection(id)
        }
      },
      {
        root: null,
        threshold: 0.3,
        rootMargin: "0px 0px -30% 0px", // triggers slightly before top
      }
    )

    observer.observe(section)
    observers.push(observer)
  })

  return () => {
    observers.forEach((observer) => observer.disconnect())
  }
}, [])

  const handleNavClick = (section) => {
    setActiveSection(section)
    setIsNavOpen(false)
    document.body.style.overflow = "auto"
  }

  const menuItems = [
    { name: "Home", path: "/#home", section: "home" },
    { name: "Features", path: "/#features", section: "features" },
    { name: "Solutions", path: "/#solutions", section: "solutions" },
    { name: "Architecture", path: "/#architecture", section: "architecture" },
    { name: "Roadmap", path: "/#roadmap", section: "roadmap" },
    { name: "Backers", path: "/#backers", section: "backers" },
    { name: "Advisors", path: "/#advisors", section: "advisors" },
    { name: "FAQ", path: "/#faq", section: "faq" },
  ]

  return (
    <>
      <div className={`navbar ${scrolled ? "scrolled" : ""}`}>
        <div className="navbar-container">
          <div className="logo-container">
            <Link href="/" onClick={() => handleNavClick("home")}>
              <img src="https://game-terminal-kappa.vercel.app/logo.svg" alt="Game Terminal Logo" className="logo" />
            </Link>
          </div>

          <div className="hamburger" onClick={toggleNavbar}>
            {!isNavOpen ? <Menu size={32} strokeWidth={2} /> : <X size={32} strokeWidth={2} />}
          </div>

          <div className="desktop-menu">
            {menuItems.map((item) => (
              <div key={item.section} className={`menu-item ${activeSection === item.section ? "active" : ""}`}>
                <div className="glow-bar"></div>
                <Link href={item.path} onClick={() => handleNavClick(item.section)}>
                  <p className="font-clash-display">{item.name}</p>
                </Link>
              </div>
            ))}
          </div>

          <div className="get-started-container">
            <Link href="https://dev.game-terminal.buildverse.app/" className="get-started-link">
              <div className="get-started-button">
                <div className="get-started-gradient-1">
                  <div className="get-started-gradient-2">
                    <button className="get-started-text">Get Started</button>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>

      {isNavOpen && (
        <div className="mobile-menu">
          <div className="mobile-menu-header">
            <Link href="/" onClick={() => handleNavClick("home")}>
              <img src="https://game-terminal-kappa.vercel.app/logo.svg" alt="Game Terminal Logo" className="logo" />
            </Link>
            <button onClick={toggleNavbar} className="close-button">
              <X size={32} strokeWidth={2} />
            </button>
          </div>

          <div className="mobile-menu-items max-h-[85vh] overflow-scroll">
            {menuItems.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                onClick={() => handleNavClick(item.section)}
                className={`mobile-menu-item font-clash-display ${activeSection === item.section ? "active" : ""}`}
              >
                {item.name}
              </Link>
            ))}

            <div className="mobile-get-started">
              <Link href="https://dev.game-terminal.buildverse.app/" onClick={() => handleNavClick("")} className="get-started-link">
                <div className="get-started-button">
                  <div className="get-started-gradient-1">
                    <div className="get-started-gradient-2">
                      <button className="get-started-text mobile">Get Started</button>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default Navbar
