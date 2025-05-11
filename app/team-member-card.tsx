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
      <div className="team-image-container max-w-[10rem] mr-4">
        {imagesLoaded && (
          <Image className="w-full rounded-3xl mx-2 h-[90%] object-cover " src={imageSrc || "/placeholder.svg"} alt={name} width={128} height={224} />
        )}
      </div>
      <div className="team-info-card font-clash-display">
        <h1 className="text-white text-3xl">{name}</h1>
        <h2 className="g-grey">{title}</h2>
        <div className="team-social-container">
          <Link href={linkedinUrl} target="_blank">
            <Image src="/linkedin.svg" width={32} height={32} alt="LinkedIn" style={{ width: "2rem" }} />
          </Link>

        </div>
      </div>

      <style jsx>{`
        .team-main-card {
            backdrop-filter: blur(16px);
            z-index: 2;
            background: linear-gradient(90deg,#21212100,#0f0f0f96,#fff1f112,#0000004d,#0000002e);
            border: .1px solid #aeaeae8a;
            border-radius: 2rem;
            width: 25rem;
            height: 15rem;
            margin: 0rem -0.1rem;
            transition: all .8s;
            display: flex;
            overflow: hidden;
            box-shadow: 0 2px #7d7d7d, 1px 1px 5rem black, -.4px 0 0 #fff;
        }

        .team-main-card:hover {
          background-position-x: 28rem;
          transform: scaleX(1.05) !important;
          rotate: -2deg;
          box-shadow: 3px -2px 0px white, 1px 1px 5rem #9773d216, -0.4px 1px 0rem white !important;
        }

        .team-image-container {
          display: flex;
          align-items: center;
        }

        .team-image {
          width: 8rem;
          object-fit: cover;
          filter: grayscale(0.9);
          height: 14rem;
          margin: auto;
          border-radius: 1rem;
        }

        .team-info-card {
          width: 15rem;
          height: 12rem;
          margin: auto;
          margin-left: 1rem;
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
        }

        .team-info-card h1 {
          font-size: 1.3rem;
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
          margin: 1rem 0;
          height: 2rem;
          width: 100%;
          gap: 0 1rem;
        }
      `}</style>
    </div>
  )
}
