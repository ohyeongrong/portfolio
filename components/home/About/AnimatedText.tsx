'use client'

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import React, { useRef, useEffect, useLayoutEffect } from 'react';

// Next.js 환경을 위한 useIsomorphicLayoutEffect (안정성 향상)
const useIsomorphicLayoutEffect = 
  typeof window !== 'undefined' ? useLayoutEffect : useEffect;

gsap.registerPlugin(ScrollTrigger);

const TEXT_LINES = [
    '다양한 프로젝트를 통해',
    '쌓아온 감각과 개발을',
    '결합하여 시각적 완성도와',
    '사용자 경험을 높힌',
    '결과물을 개발합니다.',
];

export default function AnimatedText() {

    const textRef = useRef(null);
    const ctx = useRef(null); // GSAP Context 참조

    useIsomorphicLayoutEffect(() => {
        ctx.current = gsap.context(() => {
            
            const filledTextSpans = gsap.utils.toArray(textRef.current.querySelectorAll('.filled-text'));
            
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: textRef.current,
                    start: 'top 10%',
                    end: '+=300%',
                    pin: true,          
                    scrub: 0.5,   
                },
            });

            tl.fromTo(
                filledTextSpans,
                { clipPath: 'inset(0% 100% 0% 0%)' }, 
                {
                    clipPath: 'inset(0% 0% 0% 0%)',
                    stagger: 0.15,
                    ease: 'none', 
                }
            );

            ScrollTrigger.refresh();
            
        }, textRef); 

        ScrollTrigger.addEventListener("refreshInit", () => {
        });

        return () => {
            ScrollTrigger.removeEventListener("refreshInit"); // 정리
            ctx.current?.revert();
        };
        
    }, []);


    return (
            <div 
                ref={textRef}
                className="
                    z-10
                    w-full
                    text-[clamp(2rem,0.333rem+7.407vw,7rem)] tracking-tight leading-none text-center font-semibold
                    flex flex-col gap-4 sm:gap-6 md:gap-7 lg:gap-8 py-16 md:py-24 lg:py-32 
                    items-center justify-center
                "
            >
                {/* ... (텍스트 렌더링 부분은 동일) ... */}
                {
                    TEXT_LINES.map((text, index) => (
                        <div key={index} className="relative">
                            {/* 1. 배경 텍스트 (회색) */}
                            <span className="text-[var(--color-gray-900)]">
                                {text}
                            </span>

                            {/* 2. 전경 텍스트 (흰색) — clipPath 애니메이션 대상 */}
                            <span
                            className="filled-text absolute top-0 left-0 right-0 text-white"
                            style={{
                                clipPath: 'inset(0 100% 0 0)',
                                willChange: 'clip-path',
                            }}
                            >
                                {text}
                            </span>
                        </div>
                    ))
                }
            </div>
    )
}