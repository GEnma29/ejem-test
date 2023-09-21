import React, {SVGProps } from 'react'
import { useMediaQuery } from "@uidotdev/usehooks";

const FooterLock : React.FC = (props: SVGProps<SVGSVGElement>) => {
    const isSmallDevice = useMediaQuery("only screen and (max-width : 768px)");

   if(!isSmallDevice) return ( <svg
    xmlns="http://www.w3.org/2000/svg"
    width={16}
    height={16}
    fill="none"
    {...props}
  >
    <g
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.333}
    >
      <path d="M12.167 7.332H2.833c-.736 0-1.333.597-1.333 1.333v4.667c0 .736.597 1.333 1.333 1.333h9.334c.736 0 1.333-.597 1.333-1.333V8.665c0-.736-.597-1.333-1.333-1.333Z" />
      <path d="M4.168 7.332V4.665a3.333 3.333 0 0 1 6.667 0v2.667" />
    </g>
  </svg>)
  return (<svg
    xmlns="http://www.w3.org/2000/svg"
    width={13}
    height={13}
    fill="none"
    {...props}
  >
    <g
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.333}
    >
      <path d="M12.167 7.332H2.833c-.736 0-1.333.597-1.333 1.333v4.667c0 .736.597 1.333 1.333 1.333h9.334c.736 0 1.333-.597 1.333-1.333V8.665c0-.736-.597-1.333-1.333-1.333Z" />
      <path d="M4.168 7.332V4.665a3.333 3.333 0 0 1 6.667 0v2.667" />
    </g>
  </svg>)

}

export default FooterLock