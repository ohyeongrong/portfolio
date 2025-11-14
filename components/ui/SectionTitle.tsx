'use client'

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useEffect, useRef } from 'react';
gsap.registerPlugin(ScrollTrigger);

export default function SectionTitle({ text }) {

    const textRef = useRef(null);

    useEffect(() => {

        const filledTextSpans = gsap.utils.toArray(textRef.current.querySelectorAll('.section-text'));

        gsap.fromTo(
            filledTextSpans,
            { clipPath: 'inset(0% 100% 0% 0%)' }, 
            {
                clipPath: 'inset(0% 0% 0% 0%)',
                duration: 0.8,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: textRef.current,
                    start: 'top 90%',
                    toggleActions: "play reverse play reverse",
                    
                },
            }
        );
    }, []);


    return (
            <div 
                ref={textRef}
                className="relative text-[clamp(2.25rem,2.1rem+0.75vw,3rem)] tracking-tight leading-none inline-block">
                    {/* 배경 텍스트 (회색) */}
                    <span className="text-[var(--color-gray-200)]">
                        {text}
                    </span>

                    {/* 전경 텍스트 (흰색) */}
                    <span
                    className="section-text absolute inline-block top-0 left-0 right-0 text-[var(--color-primary-dark) inline-block]"
                    style={{
                        clipPath: 'inset(0 100% 0 0)',
                        willChange: 'clip-path',
                    }}
                    >
                        {text}
                    </span>
            </div>
    )
}