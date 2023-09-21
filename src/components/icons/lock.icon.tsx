import React, { SVGProps } from "react"

const LockIcon : React.FC<SVGProps<SVGSVGElement>> = (props: SVGProps<SVGSVGElement>) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={12}
      height={13}
      fill="none"
      {...props}
    >
      <g
        stroke="#696969"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.333}
        clipPath="url(#a)"
      >
        <path d="M9.125 5.999h-7a1 1 0 0 0-1 1v3.5a1 1 0 0 0 1 1h7a1 1 0 0 0 1-1v-3.5a1 1 0 0 0-1-1Z" />
        <path d="M3.126 5.999v-2a2.5 2.5 0 1 1 5 0v2" />
      </g>
      <defs>
        <clipPath id="a">
          <path fill="#fff" d="M0 .5h12v12H0z" />
        </clipPath>
      </defs>
    </svg>
  )
export default LockIcon
