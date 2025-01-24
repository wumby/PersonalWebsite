'use client';
import React from 'react'
import { Typewriter } from './ui/TypeWriter';
import ShinyButton from './ui/ShinyButton';
import { FaLocationArrow } from 'react-icons/fa';
import { WordFlipper } from './ui/WordFlipper';
import { useTheme } from 'next-themes';
import { BackgroundLines } from './ui/BackgroundLines';
import { ColorfulText } from './ui/ColorfulText';
import { Spotlight } from './ui/Spotlight';

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
      className: "text-purple dark:text-purple"
    },
  ];
  const passionWords = ['learning', 'innovating', 'creating']
  const { theme } = useTheme();
  if (theme === 'light') {
    return (
      <BackgroundLines className="pt-36">
       <div className="h-screen w-full dark:bg-black-100 bg-white dark:bg-grid-purple/[0.13] bg-grid-purple/[0.08] flex items-center justify-center absolute top-0 left-0">
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      </div>
      <div className='flex justify-center relative my-20 z-30'>
        <div className='flex flex-col items-center justify-center'>
          <div className='text-3xl md:text-6xl xl:text-7xl font-bold'>
          Welcome to my <ColorfulText text='Website'></ColorfulText>
          </div>
          
          <div className='text-center text-xs md:text-lg xl:text-lg pt-8'>Hi, I am Jack, a software engineer with a passion for<WordFlipper words={passionWords} /></div>
          <div className='py-4'>
            <ShinyButton text='See My Work' icon={<FaLocationArrow />}></ShinyButton>
          </div>
        </div>
      </div>
      </BackgroundLines>
    )
  }
  return (
    <div className=' pt-36'>
      <div>
        <Spotlight />
      </div>
      <div className="h-screen w-full dark:bg-black-100 bg-white dark:bg-grid-purple/[0.13] bg-grid-purple/[0.08] flex items-center justify-center absolute top-0 left-0 z-10">
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      </div>
      <div className='flex justify-center relative my-20 z-10'>
        <div className='max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center'>
          <Typewriter words={titleWords} />
          <div className='text-center text-xs md:text-lg xl:text-lg'>Hi, I am Jack, a software engineer with a passion for<WordFlipper words={passionWords} /></div>
          <div className='py-4'>
            <ShinyButton text='See My Work' icon={<FaLocationArrow />}></ShinyButton>
          </div>
        </div>
      </div>
    </div>
  )
}


export default Hero