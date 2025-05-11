import Link from "next/link"

export default function Footer() {
  // Navigation links based on the new design
  const navLinks = [
    { title: "Campaigns", href: "#" },
    { title: "Email Marketing", href: "#" },
    { title: "Branding", href: "#" },
    { title: "Offline", href: "#" },
    { title: "Contact", href: "#" },
    { title: "FAQs", href: "#" },
  ]

  return (
    <footer className="font-clash-display w-full bg-gradient-to-b pt-[10rem] from-[#141414] to-black text-white py-16">
      <div className="container mx-auto px-4 flex flex-col items-center">
        {/* Logo */}
        <div className="mb-8">
          <img src="./logo.svg" alt="Logo" className="h-10" />
        </div>

        {/* Tagline */}
        <div className="text-center mb-16 max-w-3xl">
          <h2 className="text-xl md:text-2xl font-light bg-gradient-to-b from-white to-gray-400 text-transparent bg-clip-text">
            No Code, No Wait, From AI-Powered Creation To Telegram-Ready
          </h2>
          <h2 className="text-xl md:text-2xl font-light bg-gradient-to-b from-gray-400 to-gray-600 text-transparent bg-clip-text">
            Playability...
          </h2>
        </div>

        {/* Navigation Links */}
        <nav className="flex flex-wrap justify-center gap-8 md:gap-12 mb-16">
          {navLinks.map((link) => (
            <Link
              key={link.title}
              href={link.href}
              className="bg-gradient-to-b from-[#8EFA48] to-[#4CAF50] hover:from-white hover:to-gray-300 text-transparent bg-clip-text transition-all duration-300 text-lg"
            >
              {link.title}
            </Link>
          ))}
        </nav>

        {/* Social Media Icons */}
        <div className="flex gap-6 mb-16">
          <Link href="#" className="text-white hover:text-[#8EFA48] transition-colors">
            {/* LinkedIn icon matching the image */}
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.454C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
            </svg>
            <span className="sr-only">LinkedIn</span>
          </Link>
          <Link href="#" className="text-white hover:text-[#8EFA48] transition-colors">
            {/* Twitter/X icon matching the image */}
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932L18.901 1.153ZM17.61 20.644h2.039L6.486 3.24H4.298L17.61 20.644Z" />
            </svg>
            <span className="sr-only">Twitter</span>
          </Link>
        </div>

        {/* Gradient Divider - Wider now */}
        <div className="w-full max-w-3xl mb-8 px-4">
          <div className="h-px bg-gradient-to-r from-transparent via-gray-500 to-transparent"></div>
        </div>

        {/* Copyright */}
        <div className="text-center">
          <p className="bg-gradient-to-b from-gray-400 to-gray-600 text-transparent bg-clip-text">
            © {new Date().getFullYear()} GameTerminal.com. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
