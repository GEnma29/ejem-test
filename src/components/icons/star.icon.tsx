import * as React from "react"
import { SVGProps } from "react"

const StarIcon : React.FC<SVGProps<SVGSVGElement>> = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={13}
    height={13}
    fill="none"
    {...props}
  >
    <path
      fill="#FBBC04"
      d="m2.826 12.297 1.388-4.539L.541 5.13h4.54L6.514.352 7.948 5.13h4.539L8.814 7.758l1.388 4.54L6.514 9.49l-3.688 2.807Z"
    />
  </svg>
)
export default StarIcon
