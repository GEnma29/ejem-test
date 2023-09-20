import * as React from "react"
import { SVGProps } from "react"
const ArrowIconRight: React.FC<SVGProps<SVGSVGElement>> = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={20}
    height={20}
    fill="none"
    {...props}
  >
    <path
      fill="#fff"
      d="m6.25 4.508.809-.758L13.75 10l-6.691 6.25-.809-.754L12.129 10 6.25 4.508Z"
    />
  </svg>
)
export default ArrowIconRight
