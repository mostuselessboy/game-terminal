"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"

interface TeamMemberProps {
  name: string
  title: string
  imageSrc: string
  linkedinUrl: string

}

export default function TeamMemberCard({ name, title, imageSrc, linkedinUrl }: TeamMemberProps) {
  const [imagesLoaded, setImagesLoaded] = useState(false)

  // Simulate lazy loading behavior
  useEffect(() => {
    setImagesLoaded(true)
  }, [])

  return (
    <div className="team-main-card">
      <div className="team-image-container max-w-[9rem]">
        {imagesLoaded && (
          <Image className="w-full  grayscale rounded-none  min-w-[8rem] max-w-[8rem] mx-2 h-[90%] object-cover " src={imageSrc || "/placeholder.svg"} alt={name} width={128} height={224} />
        )}
      </div>
      <div className="team-info-card font-clash-display">
        <span className="text-[#324029]">◣</span>
        <h1 className="text-white text-3xl">{name}</h1>
        <h2 className="g-grey">{title}</h2>
        <div className="team-social-container">
          <Link href={linkedinUrl} target="_blank">
            <Image src="/linkedin.svg" width={20} height={20} alt="LinkedIn" style={{ width: "1.5rem" }} />
          </Link>

        </div>
      </div>

      <style jsx>{`
        .team-main-card {

            width: 23rem;
            display: flex;
            transition: .8s;
            height: 12rem;
            padding: 0 0.2rem;
            overflow: hidden;
            backdrop-filter: blur(6px);
            border: 1px solid;
            border-image: linear-gradient(45deg, #58d42b, transparent, #5bda61a7, #ffffff00, #ffffff00, #045d11) 29;
            
        }

        .team-main-card:hover {
        background-position-x: 28rem;
        z-index: 4 !important;
         box-shadow: 3px -2px 0px #0d5e20b0, 1px 1px 5rem #9773d216, -0.4px 1px 0rem white !important;
        }

        .team-image-container {
          display: flex;
          align-items: center;
        }


        .team-info-card {
          width: 8rem;
          height: 10rem;
          margin: auto;
          margin-left: 1rem;
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
        }

        .team-info-card h1 {
          font-size: 1rem;
          width: 100%;
        }

        .team-info-card h2 {
          font-size: 1rem;
          width: 100%;
        }

        .g-white {
          background: linear-gradient(45deg, #999999, #FFFFFF, #FFFFFF, #FFFFFF);
          width: max-content;
          -webkit-text-fill-color: transparent;
          -webkit-background-clip: text;
        }

        .g-grey {
          background: linear-gradient(45deg, #999999, #b5b5b5, #999999, #b5b5b5);
          width: max-content;
          -webkit-text-fill-color: transparent;
          -webkit-background-clip: text;
        }

        .team-social-container {
          display: flex;
          margin: 0rem 0;
          height: 2rem;
          width: 100%;
          gap: 0 1rem;
        }
      `}</style>
    </div>
  )
}
