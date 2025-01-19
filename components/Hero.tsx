'use client';
import React from 'react'
import { Spotlight } from './ui/Spotlight'
import { Typewriter } from './ui/TypeWriter';
import ShinyButton from './ui/ShinyButton';
import { FaLocationArrow } from 'react-icons/fa';
import { WordFlipper } from './ui/WordFlipper';

const Hero = () => {
  const titleWords = [
    {
      text: "Welcome",
    },
    {
      text: "to",
    },
    {
      text: "my",
    },
    {
      text: "Website.",
      className: "text-blue-500 dark:text-blue-500"
    },
  ];
  const passionWords = ['learning', 'innovating', 'creating']
  return (

    <div className='pb-20 pt-36'>

      <div>
        <Spotlight className='-top-4- -left-10 md:-left-32 md:-top-20 h-screen ' fill='blue' />
        <Spotlight className='top-10 left-full h-[80vh] w-50' fill='purple' />
        <Spotlight className='top-28 left-80 h-[80vh] w-[50vw]' fill="purple" />
      </div>
      <div className="h-screen w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.03] bg-grid-black/[0.03] flex items-center justify-center absolute top-0 left-0">
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      </div>
      <div className='flex justify-center relative my-20 z-10'>
        <div className='max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center'>
          <Typewriter words={titleWords} />
          <div className='text-center text-xs md:text-lg xl:text-lg'>Hi, I am Jack, a software engineer with a passion for<WordFlipper words={passionWords}/></div>
          <div className='py-4'>
            <ShinyButton text='See My Work' icon={<FaLocationArrow />}></ShinyButton>
          </div>
        </div>
      </div>
    </div>

  )
}

export default Hero