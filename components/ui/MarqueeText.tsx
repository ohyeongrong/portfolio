'use client'

import styles from './MarqueeText.module.css';

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useEffect, useRef } from 'react';
gsap.registerPlugin(ScrollTrigger);

export default function MarqueeText({ textContent }) {

    const marqueeTextRef = useRef(null);
    const marqueeContentRef = useRef(null); // ➡️ 마키 콘텐츠를 위한 ref 추가

    useEffect(() => {
        // 1. 등장 애니메이션 (오른쪽에서 나타남) 정의
        if (!marqueeTextRef.current || !marqueeContentRef.current) {
            // ref가 null이면 애니메이션 로직을 실행하지 않고 종료합니다.
            return; 
        }
        const fadeIn = gsap.fromTo(
            marqueeTextRef.current, // 텍스트 컨테이너
            { 
                opacity: 0,
                y: 100, // 오른쪽에서 시작
            },
            {
                opacity: 1,
                y: 0, 
                duration: 1, 
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: marqueeTextRef.current,
                    start: 'top 90%',
                },
            }
        );

        // 2. 등장 애니메이션이 끝난 후, 무한 마키 애니메이션 실행
        fadeIn.eventCallback('onComplete', () => {
            
            // marqueeContent 요소의 너비를 계산하여 이동 거리를 설정합니다.
            const contentWidth = marqueeContentRef.current.offsetWidth;
            
            gsap.to(marqueeContentRef.current, {
                x: -contentWidth / 2, // ➡️ content의 절반 너치만큼 이동 (-50% 효과)
                duration: 10, // CSS에서 설정했던 50s와 동일하게 설정
                ease: 'linear',
                repeat: -1, // 무한 반복
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
            </div>
        </div>
    )
}