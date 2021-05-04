import React, { useState } from "react";

export interface Props {
  type: "dashboard" | "portfolio" | "companies" | "achievement";
  color?: string;
  hoverColor?: string;
}

export const NavbarIcon: React.FC<Props> = ({
  type,
  color = "#1D1D1D",
  hoverColor = "#D70C17",
}) => {
  return <></>;
  // const [currentColor, serColor] = useState(color);
  // switch (type) {
  //   case "portfolio":
  //     return (
  //       <svg
  //         width="32px"
  //         height="32px"
  //         viewBox="0 0 32 32"
  //         version="1.1"
  //         xmlns="http://www.w3.org/2000/svg"
  //         xmlnsXlink="http://www.w3.org/1999/xlink"
  //         onMouseEnter={() => serColor(hoverColor)}
  //         onMouseLeave={() => serColor(color)}
  //       >
  //         <title>Group 12</title>
  //         <g
  //           id="Page-1"
  //           stroke="none"
  //           stroke-width="1"
  //           fill="none"
  //           fill-rule="evenodd"
  //         >
  //           <g
  //             id="Dashboard"
  //             transform="translate(-66.000000, -337.000000)"
  //             stroke={currentColor}
  //             stroke-width="2"
  //           >
  //             <g id="List" transform="translate(66.000000, 240.000000)">
  //               <g id="Group-12" transform="translate(0.000000, 97.000000)">
  //                 <rect
  //                   id="Rectangle"
  //                   x="1"
  //                   y="10"
  //                   width="30"
  //                   height="21"
  //                   rx="3"
  //                 ></rect>
  //                 <path
  //                   d="M21,1 C22.3807119,1 23.6307119,1.55964406 24.5355339,2.46446609 C25.4403559,3.36928813 26,4.61928813 26,6 L26,6 L26,10 L6,10 L6,6 C6,4.61928813 6.55964406,3.36928813 7.46446609,2.46446609 C8.36928813,1.55964406 9.61928813,1 11,1 L11,1 Z"
  //                   id="Rectangle"
  //                 ></path>
  //               </g>
  //             </g>
  //           </g>
  //         </g>
  //       </svg>
  //     );
  //   default:
  //     return <></>;
  // }
};
