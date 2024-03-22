import { SVGProps } from "react";
const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
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
      <path d="M18.333 7.5 10 4.167 1.667 7.5 10 10.833 18.333 7.5Zm0 0v5" />
      <path d="M5 8.833v4.5c0 .663.527 1.3 1.464 1.768.938.469 2.21.732 3.536.732s2.598-.263 3.536-.732c.937-.469 1.464-1.105 1.464-1.768v-4.5" />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M0 0h20v20H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgComponent;
