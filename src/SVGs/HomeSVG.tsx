import { SVGProps } from "react";
const HomeSVG = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={20}
    height={20}
    fill="none"
    {...props}
  >
    <g
      stroke="#999"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      clipPath="url(#a)"
    >
      <path d="M4.167 10H2.5L10 2.5l7.5 7.5h-1.667M4.167 10v5.833A1.666 1.666 0 0 0 5.833 17.5h8.334a1.667 1.667 0 0 0 1.666-1.667V10" />
      <path d="M7.5 17.5v-5a1.667 1.667 0 0 1 1.667-1.667h1.666A1.666 1.666 0 0 1 12.5 12.5v5" />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M0 0h20v20H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default HomeSVG;
