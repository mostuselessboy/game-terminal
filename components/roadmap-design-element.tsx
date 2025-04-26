import type React from "react"

interface RoadmapDesignElementProps {
  isFlipped?: boolean
}

const RoadmapDesignElement: React.FC<RoadmapDesignElementProps> = ({ isFlipped = false }) => (
  <svg
    width="149"
    height="98"
    viewBox="0 0 149 98"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={{ transform: isFlipped ? "scaleX(-1)" : "none" }}
  >
    <g filter="url(#filter0_di_0_1)">
      <rect x="4" y="4" width="40" height="40" rx="8" fill="#0D0D0D" />
      <rect x="4" y="4" width="40" height="40" rx="8" fill="url(#paint0_linear_0_1)" fillOpacity="0.1" />
      <rect
        x="4.56061"
        y="4.56061"
        width="38.8788"
        height="38.8788"
        rx="7.43939"
        stroke="url(#paint1_linear_0_1)"
        strokeOpacity="0.2"
        strokeWidth="1.12121"
      />
    </g>
    <g opacity="0.1">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M148 36L148 66L118 66L118 36L148 36ZM149 67L117 67L117 35L149 35L149 67Z"
        fill="url(#paint2_radial_0_1)"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M148 67L148 97L118 97L118 67L148 67ZM149 98L117 98L117 66L149 66L149 98Z"
        fill="url(#paint3_radial_0_1)"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M117 36L117 66L87 66L87 36L117 36ZM118 67L86 67L86 35L118 35L118 67Z"
        fill="url(#paint4_radial_0_1)"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M117 67L117 97L87 97L87 67L117 67ZM118 98L86 98L86 66L118 66L118 98Z"
        fill="url(#paint5_radial_0_1)"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M86 36L86 66L56 66L56 36L86 36ZM87 67L55 67L55 35L87 35L87 67Z"
        fill="url(#paint6_radial_0_1)"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M86 67L86 97L56 97L56 67L86 67ZM87 98L55 98L55 66L87 66L87 98Z"
        fill="url(#paint7_radial_0_1)"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M55 36L55 66L25 66L25 36L55 36ZM56 67L24 67L24 35L56 35L56 67Z"
        fill="url(#paint8_radial_0_1)"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M55 67L55 97L25 97L25 67L55 67ZM56 98L24 98L24 66L56 66L56 98Z"
        fill="url(#paint9_radial_0_1)"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M148 5L148 35L118 35L118 5L148 5ZM149 36L117 36L117 4L149 4L149 36Z"
        fill="url(#paint10_radial_0_1)"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M117 5L117 35L87 35L87 5L117 5ZM118 36L86 36L86 4L118 4L118 36Z"
        fill="url(#paint11_radial_0_1)"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M86 5L86 35L56 35L56 5L86 5ZM87 36L55 36L55 4L87 4L87 36Z"
        fill="url(#paint12_radial_0_1)"
      />
    </g>
    <defs>
      <filter
        id="filter0_di_0_1"
        x="0.636364"
        y="0.636364"
        width="46.7273"
        height="46.7273"
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity="0" result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feMorphology radius="3.36364" operator="dilate" in="SourceAlpha" result="effect1_dropShadow_0_1" />
        <feOffset />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0" />
        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_0_1" />
        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_0_1" result="shape" />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dy="3.36364" />
        <feGaussianBlur stdDeviation="2.57879" />
        <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
        <feBlend mode="normal" in2="shape" result="effect2_innerShadow_0_1" />
      </filter>
      <linearGradient id="paint0_linear_0_1" x1="24" y1="4" x2="24" y2="44" gradientUnits="userSpaceOnUse">
        <stop stopColor="#6C6C6C" />
        <stop offset="1" stopColor="white" stopOpacity="0" />
      </linearGradient>
      <linearGradient id="paint1_linear_0_1" x1="24" y1="4" x2="24" y2="44" gradientUnits="userSpaceOnUse">
        <stop stopColor="white" stopOpacity="0.56" />
        <stop offset="1" stopColor="white" stopOpacity="0" />
      </linearGradient>
      <radialGradient
        id="paint2_radial_0_1"
        cx="0"
        cy="0"
        r="1"
        gradientUnits="userSpaceOnUse"
        gradientTransform="translate(86.5 4.5) rotate(-126.254) scale(65.1038 97.3952)"
      >
        <stop stopColor="#8EFE49" />
        <stop offset="1" stopColor="#0E110E" stopOpacity="0" />
      </radialGradient>
      <radialGradient
        id="paint3_radial_0_1"
        cx="0"
        cy="0"
        r="1"
        gradientUnits="userSpaceOnUse"
        gradientTransform="translate(86.5 4.5) rotate(-126.254) scale(65.1038 97.3952)"
      >
        <stop stopColor="#8EFE49" />
        <stop offset="1" stopColor="#0E110E" stopOpacity="0" />
      </radialGradient>
      <radialGradient
        id="paint4_radial_0_1"
        cx="0"
        cy="0"
        r="1"
        gradientUnits="userSpaceOnUse"
        gradientTransform="translate(86.5 4.5) rotate(-126.254) scale(65.1038 97.3952)"
      >
        <stop stopColor="#8EFE49" />
        <stop offset="1" stopColor="#0E110E" stopOpacity="0" />
      </radialGradient>
      <radialGradient
        id="paint5_radial_0_1"
        cx="0"
        cy="0"
        r="1"
        gradientUnits="userSpaceOnUse"
        gradientTransform="translate(86.5 4.5) rotate(-126.254) scale(65.1038 97.3952)"
      >
        <stop stopColor="#8EFE49" />
        <stop offset="1" stopColor="#0E110E" stopOpacity="0" />
      </radialGradient>
      <radialGradient
        id="paint6_radial_0_1"
        cx="0"
        cy="0"
        r="1"
        gradientUnits="userSpaceOnUse"
        gradientTransform="translate(86.5 4.5) rotate(-126.254) scale(65.1038 97.3952)"
      >
        <stop stopColor="#8EFE49" />
        <stop offset="1" stopColor="#0E110E" stopOpacity="0" />
      </radialGradient>
      <radialGradient
        id="paint7_radial_0_1"
        cx="0"
        cy="0"
        r="1"
        gradientUnits="userSpaceOnUse"
        gradientTransform="translate(86.5 4.5) rotate(-126.254) scale(65.1038 97.3952)"
      >
        <stop stopColor="#8EFE49" />
        <stop offset="1" stopColor="#0E110E" stopOpacity="0" />
      </radialGradient>
      <radialGradient
        id="paint8_radial_0_1"
        cx="0"
        cy="0"
        r="1"
        gradientUnits="userSpaceOnUse"
        gradientTransform="translate(86.5 4.5) rotate(-126.254) scale(65.1038 97.3952)"
      >
        <stop stopColor="#8EFE49" />
        <stop offset="1" stopColor="#0E110E" stopOpacity="0" />
      </radialGradient>
      <radialGradient
        id="paint9_radial_0_1"
        cx="0"
        cy="0"
        r="1"
        gradientUnits="userSpaceOnUse"
        gradientTransform="translate(86.5 4.5) rotate(-126.254) scale(65.1038 97.3952)"
      >
        <stop stopColor="#8EFE49" />
        <stop offset="1" stopColor="#0E110E" stopOpacity="0" />
      </radialGradient>
      <radialGradient
        id="paint10_radial_0_1"
        cx="0"
        cy="0"
        r="1"
        gradientUnits="userSpaceOnUse"
        gradientTransform="translate(86.5 4.5) rotate(-126.254) scale(65.1038 97.3952)"
      >
        <stop stopColor="#8EFE49" />
        <stop offset="1" stopColor="#0E110E" stopOpacity="0" />
      </radialGradient>
      <radialGradient
        id="paint11_radial_0_1"
        cx="0"
        cy="0"
        r="1"
        gradientUnits="userSpaceOnUse"
        gradientTransform="translate(86.5 4.5) rotate(-126.254) scale(65.1038 97.3952)"
      >
        <stop stopColor="#8EFE49" />
        <stop offset="1" stopColor="#0E110E" stopOpacity="0" />
      </radialGradient>
      <radialGradient
        id="paint12_radial_0_1"
        cx="0"
        cy="0"
        r="1"
        gradientUnits="userSpaceOnUse"
        gradientTransform="translate(86.5 4.5) rotate(-126.254) scale(65.1038 97.3952)"
      >
        <stop stopColor="#8EFE49" />
        <stop offset="1" stopColor="#0E110E" stopOpacity="0" />
      </radialGradient>
    </defs>
  </svg>
)

export default RoadmapDesignElement
