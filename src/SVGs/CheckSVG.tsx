import * as React from "react";
import { SVGProps } from "react";
const CheckSVG = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={17}
    height={18}
    fill="none"
    stroke="#000"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth={2.5}
    className="icon icon-tabler icon-tabler-check"
    viewBox="0 0 24 24"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="m5 12 5 5L20 7" />
  </svg>
);
export default CheckSVG;
