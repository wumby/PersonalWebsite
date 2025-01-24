'use client';

import React from 'react'
import Image from 'next/image'
import { useTheme } from 'next-themes';
interface CustomImageProps {
    width: number;
    height: number;
}
const CustomImage = (props: CustomImageProps) => {
    const { theme } = useTheme();
    return (
        <Image src={theme === 'light' ? 'linkedInDark.svg' : 'linkedIn.svg'} alt={""} width={props.width} height={props.height} />
    )
}

export default CustomImage