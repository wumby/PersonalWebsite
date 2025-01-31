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
      <div className='text-center text-sm md:text-lg xl:text-xl pt-8'>Reach Out and Connect – I’m Always Open to New Ideas!</div>
      <div className='flex justify-evenly'>
        <Button
          //   random duration will be fun , I think , may be not
          duration={Math.floor(Math.random() * 10000) + 10000}
          borderRadius="1.75rem"
          style={{
            //   add these two
            //   you can generate the color from here https://cssgradient.io/
            background: "rgb(4,7,29)",
            backgroundColor:
              "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
            // add this border radius to make it more rounded so that the moving border is more realistic
            borderRadius: `calc(1.75rem* 0.96)`,
          }}
          // remove bg-white dark:bg-slate-900
          className="flex-1 text-black dark:text-white border-neutral-200 dark:border-slate-800"
        >
          <div className="flex lg:flex-row flex-col lg:items-center p-3 py-6 md:p-5 lg:p-10 gap-2">
            <Image
            width={100}
            height={100}
              src={'/git.svg'}
              alt={'card.thumbnail'}
              className="lg:w-32 md:w-20 w-16"
            />
          </div>
        </Button>
        <LinkPreview url={'https://www.linkedin.com/in/jack-ziegler-350447176/'} imageSrc={'/jack.png'} isStatic><Button
          //   random duration will be fun , I think , may be not
          duration={Math.floor(Math.random() * 10000) + 10000}
          borderRadius="1.75rem"
          style={{
            //   add these two
            //   you can generate the color from here https://cssgradient.io/
            background: "rgb(4,7,29)",
            backgroundColor:
              "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
            // add this border radius to make it more rounded so that the moving border is more realistic
            borderRadius: `calc(1.75rem* 0.96)`,
          }}
          // remove bg-white dark:bg-slate-900
          className="flex-1 text-black dark:text-white border-neutral-200 dark:border-slate-800"
        >
          <div className="flex lg:flex-row flex-col lg:items-center p-3 py-6 md:p-5 lg:p-10 gap-2">
            <Image
            width={100}
            height={100}
              src={'/linkedIn.svg'}
              alt={'card.thumbnail'}
              className="lg:w-32 md:w-20 w-16"
            />
          </div>
        </Button></LinkPreview>

      </div>
      <div className='flex justify-center'>
        <ShinyButton
          text={copied ? "Email is Copied!" : "Copy my email address"}
          icon={<FaCopy />}
          handleClick={handleCopy}
        ></ShinyButton>
      </div>
      <div>
        <GlobeDemo></GlobeDemo>
      </div>
      <p className="text-center text-gray-500 text-sm absolute bottom-0 left-0 ml-[5vh] mb-[5vh]">
  © {new Date().getFullYear()} Jack Ziegler. All rights reserved.
</p>

    </div>
  )
}

export default Contact