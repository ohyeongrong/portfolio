'use client'

import styles from './MarqueeText.module.css';

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useEffect, useRef } from 'react';
gsap.registerPlugin(ScrollTrigger);

export default function MarqueeText({ textContent }) {

    const marqueeTextRef = useRef(null);
    const marqueeContentRef = useRef(null);

    useEffect(() => {

        if (!marqueeTextRef.current || !marqueeContentRef.current) {
            return; 
        }
        // 마키 등장 애니메이션
        const fadeIn = gsap.fromTo(
            marqueeTextRef.current,
            { 
                opacity: 0,
                y: 100, 
            },
            {
                opacity: 1,
                y: 0,
                duration: 1,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: marqueeTextRef.current,
                    start: 'top bottom',
                },
            }
        );

        // 무한 마키 애니메이션
        fadeIn.eventCallback('onComplete', () => {
            
            const contentWidth = marqueeContentRef.current.offsetWidth;
            
            gsap.to(marqueeContentRef.current, {
                x: -contentWidth / 2, 
                duration: 50,
                ease: 'linear',
                repeat: -1,
            });
        });
        
    }, []);

    return (
        <div ref={marqueeTextRef} className={styles.marqueeContainer}>
            <div 
                ref={marqueeContentRef}
                className={`${styles.marqueeContent} text-[clamp(6rem,3.4rem+13vw,19rem)] tracking-tighter leading-none`}
            >
                {textContent}
                {textContent}
                {textContent}
                {textContent}
                {textContent}
            </div>
        </div>
    )
}