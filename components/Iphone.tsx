// 'use client';

// import React, { useState, useEffect } from "react";
// import TicTacToe from "./TicTacToe";

// export interface Iphone15ProProps extends React.SVGProps<SVGSVGElement> {
//   width?: number;
//   height?: number;
//   src?: string;
//   videoSrc?: string;
// }

// export function Iphone15Pro({
//   width = 433,
//   height = 200,
//   src,
//   videoSrc,
//   ...props
// }: Iphone15ProProps) {
//   return (
//     <svg
//       width={width}
//       height={height}
//       viewBox={`0 0 ${width} ${height}`}
//       fill="none"
//       xmlns="http://www.w3.org/2000/svg"
//       {...props}
//     >
//       <path
//         d="M2 73C2 32.6832 34.6832 0 75 0H357C397.317 0 430 32.6832 430 73V809C430 849.317 397.317 882 357 882H75C34.6832 882 2 849.317 2 809V73Z"
//         className="fill-[#E5E5E5] dark:fill-[#404040]"
//       />
//       <path
//         d="M6 74C6 35.3401 37.3401 4 76 4H356C394.66 4 426 35.3401 426 74V808C426 846.66 394.66 878 356 878H76C37.3401 878 6 846.66 6 808V74Z"
//         className="fill-white dark:fill-[#262626]"
//       />
//       <path
//         d="M21.25 75C21.25 44.2101 46.2101 19.25 77 19.25H355C385.79 19.25 410.75 44.2101 410.75 75V807C410.75 837.79 385.79 862.75 355 862.75H77C46.2101 862.75 21.25 837.79 21.25 807V75Z"
//         className="fill-[#E5E5E5] stroke-[#E5E5E5] stroke-[0.5] dark:fill-[#404040] dark:stroke-[#404040]"
//       />

//       {/* Image Background */}
//       {src && (
//         <image
//           href={src}
//           x="21.25"
//           y="19.25"
//           width="389.5"
//           height="843.5"
//           preserveAspectRatio="xMidYMid slice"
//           clipPath="url(#roundedCorners)"
//         />
//       )}

//       {/* Video Background */}
//       {videoSrc && (
//         <foreignObject x="21.25" y="19.25" width="389.5" height="843.5">
//           <video
//             className="size-full overflow-hidden rounded-[55.75px] object-cover"
//             src={videoSrc}
//             autoPlay
//             loop
//             muted
//             playsInline
//           />
//         </foreignObject>
//       )}

//       {/* Tic-Tac-Toe Game Inside iPhone */}
//       <foreignObject x="35" y="100" width="360" height="700">
//         <div className="w-full h-full flex items-center justify-center bg-black">
//           <TicTacToe />
//         </div>
//       </foreignObject>

//       <defs>
//         <clipPath id="roundedCorners">
//           <rect x="21.25" y="19.25" width="389.5" height="843.5"></rect>
//    </clipPath>
//    </defs>
//  </svg>
// );
// }
