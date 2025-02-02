import Link from 'next/link';
import React from 'react'

interface ShinyButtonProps {
    text?: string;
    icon?: React.ReactNode;
    href?: string;
    handleClick?: () => void;
    classes?: string;
}
const ShinyButton = (props: ShinyButtonProps) => {
    return (
      <>
      {!!props.href && (
        <Link href={props.href}>
        <button className={`relative inline-flex  h-12 overflow-hidden rounded-lg p-[2px] focus:outline-none md:w-60 cursor-pointer ${props.classes}`} onClick={props.handleClick}>
        <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
        <span className="inline-flex py-2 h-full w-full cursor-pointer items-center justify-center rounded-lg dark:bg-slate-950 bg-white px-7 text-sm font-medium dark:text-white text-black backdrop-blur-3xl gap-2">
          {props.text}
          {props.icon}
        </span>
      </button>
      </Link>
      )}
      {!props.href && (
        <button className={`relative inline-flex  h-12 overflow-hidden rounded-lg p-[2px] focus:outline-none md:w-60 cursor-pointer ${props.classes}`} onClick={props.handleClick}>
        <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
        <span className="inline-flex py-2 h-full w-full cursor-pointer items-center justify-center rounded-lg dark:bg-slate-950 bg-white px-7 text-sm font-medium dark:text-white text-black backdrop-blur-3xl gap-2">
          {props.text}
          {props.icon}
        </span>
      </button>
      )}
      </>
    )
}

export default ShinyButton;