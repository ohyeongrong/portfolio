'use client';
import { motion, Variants } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import Icon from './Icon';

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

import { IconName } from './Icon'; 
interface HoverFillBtnProps {
    content: string;
    sizeClassName: string;
    iconName?: IconName;          
    iconSize?: number;
    iconClassName?: string;
    initialTextColor: string;
    hoverTextColor: string;
    initialBgColor: string;
    hoverBgColor: string;
}


export default function HoverFillBtn({ content, sizeClassName, iconName, iconSize, iconClassName, initialTextColor, hoverTextColor, initialBgColor, hoverBgColor }: HoverFillBtnProps) {
    const [isHovered, setIsHovered] = useState(false);

    const fillVariants: Variants = {
        initial: { y: '100%' },
        animate: {
            y: '0%',
            transition: { duration: 0.4, ease: 'easeInOut' }
        }
    }

    const contentVariants: Variants = {
        initial: {
            backgroundColor: 'rgba(0,0,0,0)',
            color: initialTextColor,
            transition: { duration: 0.2 },
        },
        hover: {
            color: hoverTextColor,
            transition: { delay: 0.1, duration: 0.2 }
        }
    }

    const showIcon = !!iconName;
    const hasTextAndIcon = content && showIcon;

    const buttonRef = useRef(null);

    useEffect(() => {
        gsap.from(buttonRef.current, { opacity: 0, duration: 0.5 });
    }, []);

    return (
        <motion.div
            ref={buttonRef}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className={`relative inline-block overflow-hidden rounded-full bg-[${initialBgColor}]`}
        >
                <motion.div 
                    variants={fillVariants}
                    initial='initial'
                    animate={isHovered ? "animate" : "initial"}
                    className="absolute inset-0 z-0"
                    style={{ 
                        backgroundColor: hoverBgColor,
                    }}
                    
                />

                <motion.div 
                    variants={contentVariants}
                    initial="initial"
                    animate={isHovered ? "hover" : "initial"}
                    className={`
                    relative z-10
                    flex items-center w-fit h-fit 
                    ${hasTextAndIcon ? 'gap-1' : ''}
                    ${sizeClassName}`}>

                    { content && <span>{ content }</span> }
                    { showIcon && (
                        <Icon 
                            name={iconName} 
                            size={iconSize} 
                            className={iconClassName} 
                        />
                    )}
                </motion.div>
        </motion.div>
    );
}