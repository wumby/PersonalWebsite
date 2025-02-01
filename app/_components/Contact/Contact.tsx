'use client';

import { Button } from '@/components/Button';
import { GlobeDemo } from '@/components/GlobeDemo';
import { LinkPreview } from '@/components/LinkPreview';
import SectionHeader from '@/components/SectionHeader'
import ShinyButton from '@/components/ShinyButton';
import Image from 'next/image';
import React, { useState } from 'react'
import { FaCopy } from 'react-icons/fa';

const Contact = () => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    const text = "jackzieg@gmail.com";
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 10000);
  };
  return (
    <div className="w-full">
      <SectionHeader text1='Contact' text2='Me' />
      <div className='text-center text-sm md:text-lg xl:text-xl pt-8 mb-8'>Reach Out and Connect – I’m Always Open to New Ideas!</div>
      <div className='w-full h-[40vh] flex justify-center'>
        <GlobeDemo></GlobeDemo>
      </div>
      <div className='flex justify-center items-center overflow-visible'>
      <LinkPreview url={'https://github.com/wumby'} imageSrc={'/github.png'} isStatic><Button
          duration={Math.floor(Math.random() * 10000) + 10000}
          borderRadius="1.75rem"
          style={{
            background: "rgb(4,7,29) dark:rgb(25,4,29,0.3)",
            backgroundColor:
              "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
            borderRadius: `calc(1.75rem* 0.96)`,
          }}
          className="flex-1 text-black dark:text-white border-neutral-200 dark:border-slate-800"
        >
          <div className="flex justify-center p-4 gap-2 w-[7vh] h-[7vh]">
            <Image
            width={100}
            height={100}
              src={'/git.svg'}
              alt={'card.thumbnail'}
               className="lg:w-32 md:w-20 w-16 dark:block hidden"
            />
             <Image
            width={100}
            height={100}
              src={'/gitDark.svg'}
              alt={'card.thumbnail'}
               className="lg:w-32 md:w-20 w-16 dark:hidden block"
            />
          </div>
        </Button></LinkPreview>

        <div className='mx-10 flex justify-center items-center h-[7vh]'>
        <ShinyButton
          text={copied ? "Email is Copied!" : "Copy my email address"}
          icon={<FaCopy />}
          handleClick={handleCopy}
          classes='h-[5vh]'
        ></ShinyButton>
        </div>
       
        <LinkPreview url={'https://www.linkedin.com/in/jack-ziegler-350447176/'} imageSrc={'/jack.png'} isStatic><Button
          duration={Math.floor(Math.random() * 10000) + 10000}
          borderRadius="1.75rem"
          style={{
            background: "rgb(4,7,29) dark:rgb(25,4,29,0.3)",
            backgroundColor:
              "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
            borderRadius: `calc(1.75rem* 0.96)`,
          }}
          className="flex-1 text-black dark:text-white border-neutral-200 dark:border-slate-800"
        >
          <div className="flex justify-center p-4 gap-2 w-[7vh] h-[7vh]">
            <Image
            width={100}
            height={100}
              src={'/linkedIn.svg'}
              alt={'card.thumbnail'}
               className="lg:w-32 md:w-20 w-16 dark:block hidden"
            />
             <Image
            width={100}
            height={100}
              src={'/linkedInDark.svg'}
              alt={'card.thumbnail'}
               className="lg:w-32 md:w-20 w-16 dark:hidden block"
            />
          </div>
        </Button></LinkPreview>

      </div>
      
      
      <p className="text-center text-gray-500 text-sm absolute bottom-0 left-0 ml-[5vh] mb-[5vh]">
  © {new Date().getFullYear()} Jack Ziegler. All rights reserved.
</p>

    </div>
  )
}

export default Contact