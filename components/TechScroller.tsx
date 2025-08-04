'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react'

interface TechScrollerProps {
  fast?: boolean
  techStack: { src: string[]; name: string }[]
}

export default function TechScroller(props: TechScrollerProps) {
  const [isLargeScreen, setIsLargeScreen] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth > 800)
    }

    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const size = isLargeScreen ? 50 : 35
  const speed = props.fast ? 'animate-scroll' : 'animate-scroll-slow'

  return (
    <div className="w-full overflow-hidden my-[5vh]">
      <div className={`flex w-max ${speed}`}>
        {[...props.techStack, ...props.techStack].map((tech, index) => (
          <div key={index} className="flex justify-center items-center">
            <div className="flex justify-center items-center mx-[2vh] ">
              <Image
                src={tech.src[0]}
                alt={tech.name}
                width={size}
                height={size}
                className="dark:block hidden"
              />
              <Image
                src={tech.src[1]}
                alt={tech.name}
                width={size}
                height={size}
                className="dark:hidden block"
              />
              <span className="text-lg md:text-2xl text-black dark:text-white ml-2">
                {tech.name}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
