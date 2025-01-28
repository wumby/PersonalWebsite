'use client';

import { ColorfulText } from '@/components/ColorfulText';
import { useTheme } from 'next-themes';
import React from 'react'

interface SectionHeaderProps {
    text1?: string;
    text2?: string;
}
const SectionHeader = (props: SectionHeaderProps) => {
    const { theme } = useTheme();
    const renderDarkHeading = () =>
    (
        <h1 className="heading">
            {props.text1} <span className="text-purple">{props.text2}</span>
        </h1>
    )
    const renderLightHeading = () =>
    (
        <h1 className="heading">
            {props.text1} <ColorfulText text={props.text2 ?? ''}></ColorfulText>
        </h1>
    )
    return theme === 'light' ? renderLightHeading() : renderDarkHeading();
}

export default SectionHeader