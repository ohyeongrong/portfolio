'use client';

import React, { useEffect, useRef } from 'react';
import { useLoading } from '@/context/LoadingContext';
import { gsap } from 'gsap';
import MarqueeText from '../ui/MarqueeText';

export default function Preloader() {
    const { isLoading, finishLoading } = useLoading();
    const preloaderRef = useRef<HTMLDivElement | null>(null);

useEffect(() => {
    if (isLoading) {
        // 로딩 시작 시: Preloader가 다시 보이도록 초기화
        if (preloaderRef.current) {
                preloaderRef.current.style.display = 'flex';
                gsap.set(preloaderRef.current, { 
                    clipPath: 'circle(150% at 50% 50%)', 
                    opacity: 1 
                });
        }
    } else {
        // 로딩 종료 시: 퇴장 애니메이션
        gsap.to(preloaderRef.current, {
            clipPath: 'circle(0% at 50% 50%)',
            opacity: 1, 
            duration: 1.2,
            ease: 'power3.inOut',
            onComplete: () => {
                if(preloaderRef.current) {
                    preloaderRef.current.style.display = 'none';
                }
            },
        });
    }
}, [isLoading]);

    return (
        <div
            ref={preloaderRef}
            className="
                fixed inset-0 z-[9999] 
                text-white
                bg-[var(--color-primary-dark)]
                flex flex-col items-center justify-center 
                overflow-hidden"
            style={{ clipPath: 'circle(150% at 50% 50%)' }}
        >
            <MarqueeText textContent={
                <>
                    <span>Oh!</span>
                    <span className="text-transparent [-webkit-text-stroke:1px_white]">Oh!</span>
                </>
            }/>
        </div>
    );
}