"use client"
import { Search,Minus , Plus, ChevronDown } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import PartnersCarousel from "./partner-corousel"
import TextFillEffect from "./text-fill-animation-reimagine"
import RoadmapComponent from "./roadmap"
import ShiningText from "./shining-text"

import ReimaginedCombinedCards from "./ReimaginedSection/reimagine-combined"
import Navbar from "./header"
import Footer from "./footer"
import TeamMemberCard from "./team-member-card"
import complexToen from "./SupportSection/complex-toen.json";
import slowGameDev from "./SupportSection/slow-game-dev.json";
import archAnim from "./Architecture.json";
import sustain from "./SupportSection/sustain.json";
import broken from "./SupportSection/broken.json";
import dynamic from "next/dynamic";
import TextFillEffectSolutions from "./text-fill-animation-solutions"

const LottiePlayer = dynamic(() => import("./lottie-player"), {
  ssr: false,
});

interface FaqItem {
  question: string
  answer: string
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
    <section className="text-white py-24 pt-0 mt-20 md:pb-4 relative mb-20 bg-[#0F0F0F]">
      <div className="w-full mx-auto px-4 lg:max-w-7xl md:max-w-6xl xl:max-w-7xl 2xl:max-w-[1500px] ">
        {/* Section Header */}
        <div className="md:mb-2 p-4 md:pb-10 max-w-8xl md:max-w-6xl lg:max-w-[1400px] mx-auto  ">
          {/* Reimagined label with enhanced shine effect */}
          <div className="inline-flex items-center gap-2 px-6 py-1  bg-[#111111] rounded-full mb-6 relative overflow-hidden shine-button">
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
    <div className="text-white overflow-x-hidden bg-[#0F0F0F] relative">
      {/* Background container - lowest z-index */}
      <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none z-0 select-none">
        <img
          src="./mainherobg.svg"
          className="absolute opacity-90 inset-0 hidden md:block w-full scale-[1] h-full object-cover object-left translate-y-[40px] select-none pointer-events-none"
          alt=""
        />
      </div>

      {/* Hero Content - highest z-index */}
      <div className="w-full h-fit md:min-h-[100vh] overflow-hidden mx-auto px-4 pt-10 pb-10 relative z-[5]">
        <div className="max-w-4xl mx-auto text-center mb-12 px-10 md:px-0 pt-20 2xl:mt-5 relative z-[5]">
          <p className="text-gray-400 uppercase tracking-wider mb-6 text-sm font-clash-display">
            REVOLUTIONARY PRODUCT
          </p>
          <h1 className="text-3xl md:text-5xl lg:text-5xl leading-[1] mb-6 font-clash-display tracking-tight">
            <span className="bg-gradient-to-br from-gray-500 via-gray-300 to-white bg-clip-text text-transparent">
              Launch AI-Powered Games With
              <br />A{" "}
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

        <img src="./herobg-mobile.png" className="object-cover md:hidden select-none pointer-events-none" alt="" />

        {/* Game Input with video directly attached */}
        <div className="relative max-w-3xl mx-auto">
          {/* Video positioned between text and input box with more space */}
          <div className="hidden md:block absolute w-full left-0 right-0 bottom-[calc(100%+40px)] pointer-events-none z-[1]">
            <div className="relative w-full h-[18.75rem] mx-auto overflow-visible">
              {/* Video with no clip path */}
              <video
                src="./herosection5.webm"
                autoPlay
                muted
                loop
                playsInline
                className="max-w-fit object-cover h-[25rem] mix-blend-color-burn absolute left-1/2 -translate-x-1/2 bottom-0"
              />

              {/* Separate overlay div to create the cropping effect */}
              <div className="absolute inset-0 bg-[#0F0F0F] top-[18.75rem]"></div>

              {/* Even wider gradient border with concentrated center */}
              <div className="absolute left-1/2 -translate-x-1/2 bottom-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#4a9319] to-transparent z-[2]"></div>

              {/* Even dimmer green shadows below the line */}
              <div className="absolute left-1/2 -translate-x-1/2 bottom-[-15px] w-[120px] h-[15px] bg-gradient-to-b from-[#9dff5a]/10 to-transparent rounded-t-lg blur-[8px] z-[1]"></div>
              <div className="absolute left-[calc(50%-80px)] bottom-[-12px] w-[40px] h-[10px] bg-gradient-to-b from-[#9dff5a]/8 to-transparent rounded-t-lg blur-[7px] z-[1]"></div>
              <div className="absolute left-[calc(50%+40px)] bottom-[-12px] w-[40px] h-[10px] bg-gradient-to-b from-[#9dff5a]/8 to-transparent rounded-t-lg blur-[7px] z-[1]"></div>
            </div>
          </div>

          <motion.div
            className="mt-[2vh] md:mt-[39vh] lg:mt-[40vh] xl:mt-[42vh] 2xl:mt-[44vh] p-1 bg-[#151A15] flex flex-row items-center gap-4 backdrop-blur-sm rounded-2xl relative z-10"
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
    </div>
  )
}


























function SolutionSection() {
  return (
    <div
      className="flex flex-col items-center mx-auto mw-full bg-gradient-to-b from-[#0F0F0F] via-black to-black"
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
        className="md:text-3xl text-2xl -translate-y-[5rem] md:-translate-y-[20rem] font-clash-display leading-[1] mb-0 tracking-tight text-center w-full"
        initial={{ opacity: 0, filter: "blur(8px)" }}
        whileInView={{ opacity: 1, filter: "blur(0px)" }}
        viewport={{ margin: "-100px" }}
        transition={{ duration: 0.5, delay: 0.15 }}
      >


        <TextFillEffectSolutions />
      </motion.h1>

      <div className="translate-y-[-2rem] md:translate-y-[-10rem] flex flex-col items-center max-w-[99vw] overflow-hidden">
      <div className="flex gap-3 md:flex-row flex-col  ">
      <LottiePlayer animationJson={slowGameDev} className="w-xs lg:w-sm 2xl:w-md 3xl:w-md"/>
      <LottiePlayer animationJson={complexToen} className="w-xs lg:w-sm 2xl:w-md 3xl:w-md"/>
      <LottiePlayer animationJson={broken} className="w-xs lg:w-sm 2xl:w-md 3xl:w-md"/>
      </div>
      <LottiePlayer animationJson={sustain} className="w-2xl lg:w-xl 2xl:w-3xl 3xl:w-5xl"/>
</div>
      {/* <motion.img
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
      /> */}
    </div>
  )
}

function ArchitectureSection() {
  return (
    <div className="flex flex-col items-center mx-auto w-full translate-y-[-2rem] bg-gradient-to-b from-[#000] to-[#0D0D0D]">
      <motion.h1
        className="md:text-4xl z-[2] text-2xl translate-y-[12rem] lg:translate-y-[12rem] leading-[1] mb-6 tracking-tight text-center w-full"
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

      {/* Wrapper to overlay LottiePlayer on robotarch.svg */}
      <div className="relative w-full hidden md:flex justify-center items-center">
        {/* Robot Architecture Background */}
        <motion.img
          src="./robotarch.svg"
          className="w-full select-none pointer-events-none"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ margin: "-100px" }}
          transition={{ duration: 0.4, delay: 0.2 }}
        />

        {/* Overlayed Lottie Animation */}
        <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center">
          <LottiePlayer
            animationJson={archAnim}
            className="w-[95%] translate-y-[4rem]"
          />
        </div>
      </div>

      {/* Mobile Version — just show the mobile image and animation separately */}
      <div className="w-full md:hidden flex flex-col items-center">
        <motion.img
          src="./arch-mobile.svg"
          className="w-full select-none pointer-events-none mt-[-1rem]"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ margin: "-100px" }}
          transition={{ duration: 0.4, delay: 0.2 }}
        />
      </div>
    </div>
  );
}

function RoadmapSection() {
  return (
    <motion.div
      className="flex flex-col pt-[0rem] bg-gradient-to-t from-transparent to-[#0d0d0d] relative"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
    >
      <img src="/roadmap-design-elem-1.svg" className="hidden lg:block absolute bottom-[30rem] left-0 w-fit" />
      <img src="/roadmap-design-elem-2.svg" className="hidden lg:block absolute top-[20rem] right-0 w-fit" />
      <motion.h1
        className="md:text-4xl font-semibold text-2xl leading-[1] md:p-0 px-10 mb-20   tracking-tight text-center w-full"
        initial={{ opacity: 0, filter: "blur(8px)" }}
        whileInView={{ opacity: 1, filter: "blur(0px)" }}
        viewport={{ margin: "-100px" }}
        transition={{ duration: 0.5, delay: 0.15 }}
      >
        <span className="bg-gradient-to-br from-gray-500 via-gray-300 to-white bg-clip-text font-normal text-transparent font-clash-display">
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



{/* 

      <motion.img
        src="./backers-photo.svg"
        className="object-center hidden md:flex mb-32"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ margin: "-100px" }}
        transition={{ duration: 0.4, delay: 0.2 }}
      />


      <div className="flex flex-col gap-6 md:hidden mb-32 items-center">
        {backerImages.map((src, idx) => (
          <motion.img
            key={idx}
            src={src}
            className="w-[100%] max-w-md"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ margin: "-100px" }}
             transition={{ duration: 0.4, delay: 0.1 * idx }}
          />
        ))}
      </div> */}
  <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3  gap-4 mb-10">
      <TeamMemberCard name="Enigma Fund" title="Enigma Fund VC" imageSrc="/backers/enigma.jpeg" linkedinUrl="https://www.linkedin.com/in/akashsinha26?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" />
      <TeamMemberCard name="Siddarth Menon" title="COO WazirX" imageSrc="/backers/siddarth.jpeg" linkedinUrl="https://www.linkedin.com/in/siddharthmenon/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" />
      <TeamMemberCard name="Rudy Koch" title="Co-founder Mythical Games" imageSrc="/backers/rudy.jpeg" linkedinUrl="https://www.linkedin.com/in/rudykoch?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" />
      <TeamMemberCard name="Akash Sinha" title="COO Kryptos" imageSrc="/backers/akash.jpeg" linkedinUrl="https://www.linkedin.com/in/akashsinha26?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" />
      <TeamMemberCard name="Evan" title="Angel Investor" imageSrc="/backers/evan.jpeg" linkedinUrl="https://www.linkedin.com/in/evanluthra?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" />
      <TeamMemberCard name="Justin Edwards" title="Ex-COO Decentraland" imageSrc="/backers/justin.jpeg" linkedinUrl="https://www.linkedin.com/in/justin-edwards-876a193?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" />
      <TeamMemberCard name="Sky Wee" title="Strategic Investor" imageSrc="/backers/sky-wee.jpeg" linkedinUrl="https://www.linkedin.com/in/skywee97?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" />
      <TeamMemberCard name="Jeff Nowak" title="Maven Capital" imageSrc="/backers/jeff.jpeg" linkedinUrl="https://www.linkedin.com/in/jeffmnowak/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" />
      </div>
    </motion.div>
  )
}

function FaqSection() {
  return (
    <motion.div
      className="w-full bg-gradient-to-b from-[#0F0F0F] to-black pb-[5rem] pt-[3rem]"
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
      <div className="">
        <EnhancedGradientFaq />
      </div>
    </motion.div>
  )
}

function EnhancedGradientFaq() {
  // Changed to open the first item (index 0) by default
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const faqItems: FaqItem[] = [
    {
      question: "What is GameTerminal?",
      answer:
        "GameTerminal is an AI-powered platform where users can create on-chain games just by writing text prompts. Our platform allows you to generate games instantly, launch tokens associated with them, and even deploy them as Telegram mini-apps. Whether you want to create betting games, hyper-casual games, or AI-powered strategy games, GameTerminal has you covered.",
    },
    {
      question: "How do I create a game on GameTerminal?",
      answer:
        "Creating a game is simple. Connect your wallet, write your game idea as a text prompt, and click the \"Magic\" button to refine it. Our AI will then build your game, and you can launch it directly with an associated token. You can also deploy your game as a Telegram mini-app with a single click.",
    },
    {
      question: "What are the benefits of launching a game with a token on GameTerminal?",
      answer:
        "Launching a game with a token adds a financial layer to your game, creating a play-to-earn experience. Tokens generated can have locked liquidity, and users can earn rewards by participating in the game. This creates a vibrant economy around your game and provides additional incentives for players.",
    },
    {
      question: "Is GameTerminal only for developers?",
      answer:
        "No, GameTerminal is designed for everyone. Whether you are a game developer, a creator, or just someone with a creative idea, you can use GameTerminal to turn your ideas into real, playable games without any coding skills.",
    },
  ];
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
    <div className="flex items-center justify-center md:p-4 p-6 max-w-6xl mx-auto pt-0 ">
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
                    background: openIndex === index
                        ? "linear-gradient(#404a534d, #000000)"
                        : "linear-gradient(to bottom, rgba(15, 15, 15, 0.5), rgba(8, 8, 8, 0.3))",
                    border: openIndex === index
                        ? "0.1px solid rgba(128, 128, 128, 0.3)"
                        : "none",
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
                    className={`absolute inset-0 rounded-full bg-white/10`}
                    style={{
                      width: "32px",
                      height: "32px",
                      transform: "translate(-2px, -2px)",
                      opacity: 0.8,
                    }}
                  ></div>

                  {/* Subtle glow effect behind the plus icon */}
                  <div
                    className={`absolute inset-0 rounded-full ${
                      openIndex === index ? "bg-gradient-to-br from-gray-600/20 via-gray-700/10 to-transparent" : ""
                    }`}

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




export default function Page() {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="max-w-8xl mx-auto mt-[-1rem] bg-[#0F0F0F]"
      variants={{
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { duration: 0.6, ease: "easeOut" } },
      }}
    >
      <Navbar />

      <div id="home">
        <HeroSection />
      </div>

      <div id="features">
        <ReimaginedSection />
      </div>

      

      <div id="solutions">
        <SolutionSection />
      </div>

      <div id="architecture">
        <ArchitectureSection />
      </div>

      <div id="roadmap"> 
        <RoadmapSection />
      </div>

      <div id="backers">
        <BackerSection/>
      </div>

      <div id="faq">
        <FaqSection />
      </div>

      <Footer />

    </motion.div>
  )
}
