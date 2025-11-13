'use client';

import React, { useEffect, useRef } from 'react';
import { useLoading } from '@/context/LoadingContext';
import { gsap } from 'gsap';
import MarqueeText from '../ui/MarqueeText';

export default function Preloader() {
    const { isLoading, finishLoading } = useLoading();
    const preloaderRef = useRef(null);

useEffect(() => {
    if (isLoading) {
        // 🚀 로딩 시작 시: Preloader가 다시 보이도록 초기화
        if (preloaderRef.current) {
             preloaderRef.current.style.display = 'flex'; // 혹은 block 등으로 재설정
             // GSAP을 사용하여 clipPath도 초기 상태로 되돌릴 수 있습니다.
             gsap.set(preloaderRef.current, { 
                 clipPath: 'circle(150% at 50% 50%)', 
                 opacity: 1 
             });
        }
    } else {
        // 🌙 로딩 종료 시: GSAP 퇴장 애니메이션
        gsap.to(preloaderRef.current, {
            clipPath: 'circle(0% at 50% 50%)',
            opacity: 1, 
            duration: 1.5,
            ease: 'power3.inOut',
            onComplete: () => {
                preloaderRef.current.style.display = 'none';
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
                overflow-hidden
                // 💡 초기 clip-path를 전체를 덮는 원으로 설정합니다.
                // 이 스타일이 있어야 'circle(0% at 50% 50%)'으로 애니메이션될 수 있습니다.
                // Tailwind CSS에는 clip-path 유틸리티가 기본으로 없으므로 직접 style 속성에 넣거나,
                // postcss 플러그인을 통해 확장해야 합니다.
            "
            style={{ clipPath: 'circle(150% at 50% 50%)' }} // 💡 초기 상태: 전체를 덮는 큰 원
        >
            <MarqueeText textContent={
                <>
                    <span>Oh!</span>
                    <span className="text-transparent [-webkit-text-stroke:1px_white]">Oh!</span>
                    <span>Oh!</span>
                    <span className="text-transparent [-webkit-text-stroke:1px_white]">Oh!</span>
                    <span>Oh!</span>
                    <span className="text-transparent [-webkit-text-stroke:1px_white]">Oh!</span>
                    <span>Oh!</span>
                    <span className="text-transparent [-webkit-text-stroke:1px_white]">Oh!</span>
                    <span>Oh!</span>
                    <span className="text-transparent [-webkit-text-stroke:1px_white]">Oh!</span>
                    <span>Oh!</span>
                    <span className="text-transparent [-webkit-text-stroke:1px_white]">Oh!</span>
                    <span>Oh!</span>
                    <span className="text-transparent [-webkit-text-stroke:1px_white]">Oh!</span>
                    <span>Oh!</span>
                    <span className="text-transparent [-webkit-text-stroke:1px_white]">Oh!</span>
                </>
            }/>
        </div>
    );
}