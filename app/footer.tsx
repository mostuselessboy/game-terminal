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
    <footer style={{background: 'linear-gradient(0deg, #35780a45, #000 20%)', borderImage: 'linear-gradient(45deg, #66b734, #000, #3a7516, #e3d1ff63, #000) 40', color: '#cecece', borderTop: '1px solid #f5f5f500'}} className="font-clash-display w-full bg-gradient-to-b  from-[#141414]  to-black text-white ">
      <div className="container mx-auto px-4 flex flex-col items-center">
        {/* Logo */}
        <div className="mb-4">
          <img src="./logo.svg" alt="Logo" className="h-10" />
        </div>

        {/* Tagline */}
        <div className="text-center mb-5 max-w-3xl">
          <h2 className="text-lg md:text-xl font-light bg-gradient-to-b from-white to-gray-400 text-transparent bg-clip-text">
            No Code, No Wait, From AI-Powered Creation To Telegram-Ready
          </h2>
          <h2 className="text-lg md:text-xl font-light bg-gradient-to-b from-gray-400 to-gray-600 text-transparent bg-clip-text">
            Playability...
          </h2>
        </div>

        {/* Navigation Links */}


        {/* Social Media Icons */}
        <div className="flex gap-6 mb-6">
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

          {/* TELEGRAM */}
          <Link href="#" className="text-white hover:text-[#8EFA48] transition-colors -translate-x-1">
            {/* Telegram icon matching the image */}
        <svg stroke="currentColor" fill="currentColor"  viewBox="0 0 448 512" width="26" height="26"  xmlns="http://www.w3.org/2000/svg"><path d="M446.7 98.6l-67.6 318.8c-5.1 22.5-18.4 28.1-37.3 17.5l-103-75.9-49.7 47.8c-5.5 5.5-10.1 10.1-20.7 10.1l7.4-104.9 190.9-172.5c8.3-7.4-1.8-11.5-12.9-4.1L117.8 284 16.2 252.2c-22.1-6.9-22.5-22.1 4.6-32.7L418.2 66.4c18.4-6.9 34.5 4.1 28.5 32.2z"></path></svg>
        </Link>
        </div>

        {/* Gradient Divider - Wider now */}
        <div className="w-full max-w-3xl mb-2 px-4">
          <div className="h-px bg-gradient-to-r from-transparent via-gray-500 to-transparent"></div>
        </div>

        {/* Copyright */}
        <div className="text-center">
          <p className="bg-gradient-to-b mb-3 p-2 pb-5  from-gray-400 to-gray-600 text-transparent bg-clip-text">
            © {new Date().getFullYear()} GameTerminal.com. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
