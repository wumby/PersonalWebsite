'use client';
import { BackgroundLines } from '@/components/BackgroundLines';
import { ColorfulText } from '@/components/ColorfulText';
import ShinyButton from '@/components/ShinyButton';
import Spotlight from '@/components/Spotlight';
import { Typewriter } from '@/components/TypeWriter';
import { WordFlipper } from '@/components/WordFlipper';
import { useTheme } from 'next-themes';
import React from 'react'
import { FaLocationArrow } from 'react-icons/fa';
import { passionWords, titleWords, titleWords1 } from './Data';
import classes from './Hero.module.css'

const Hero = () => {

  const { theme } = useTheme();
  if (theme === 'light') {
    return (
      <BackgroundLines className="pt-36">
        <div className="h-screen w-full dark:bg-black-100 bg-white dark:bg-grid-purple/[0.13] bg-grid-purple/[0.08] flex items-center justify-center absolute top-0 left-0">
          <div className={`${classes.shade}`} />
        </div>
        <div className='flex justify-center relative my-20 z-30'>
          <div className='flex flex-col items-center justify-center'>
            <div className='text-3xl sm:text-5xl md:text-6xl xl:text-7xl font-bold max-sm:hidden block'>
              Welcome to my <ColorfulText text='Website'></ColorfulText>
            </div>
            <div className='text-6xl font-bold sm:hidden block pb-2'>
              <ColorfulText text='Welcome' />
            </div>
            <div className='text-3xl  sm:hidden block'>
              To My Website
            </div>
            <div className='text-center text-xs md:text-lg xl:text-lg pt-8'>Hi, I am Jack, an experienced software engineer with a focus on the users. 
              I design and build systems that solve real problems, ensuring every solution is easy to use, efficient, and<WordFlipper words={passionWords} /></div>
            <div className='py-4'>
              <ShinyButton text='See My Work' icon={<FaLocationArrow />}></ShinyButton>
            </div>
          </div>
        </div>
      </BackgroundLines>
    )
  }
  return (
    <div className='pt-36'>
      <div>
        <Spotlight />
      </div>
      <div className={`${classes.grid} dark:bg-black-100 dark:bg-grid-purple/[0.13]`}>
        <div className={`${classes.shade} dark:bg-black-100`} />
      </div>
      <div className='flex justify-center relative my-20 z-30'>
        <div className='flex flex-col items-center justify-center'>
          <div className=' max-sm:hidden block'>
            <Typewriter words={titleWords} />
          </div>
          <div className=' sm:hidden block'>
            <Typewriter words={titleWords1} />
          </div>
          <div className='text-3xl  sm:hidden block pb-7'>
            To My Website
          </div>
          <div className='text-center text-xs md:text-lg xl:text-lg'>Hi, I am Jack, an experienced software engineer with a focus on the users. 
          I design and build apps while ensuring every solution is easy to use, efficient, and<WordFlipper words={passionWords} /></div>
          <div className='py-4'>
            <ShinyButton text='See My Work' icon={<FaLocationArrow />}></ShinyButton>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero