'use client';

import React, { useRef, useEffect, useLayoutEffect, ReactNode } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollSmoother } from 'gsap/ScrollSmoother';
import { usePathname } from 'next/navigation';

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

const useIsomorphicLayoutEffect = typeof window !== 'undefined' ? useLayoutEffect : useEffect;

interface SmoothScrollWrapperProps {
  children: ReactNode
}

export default function SmoothScrollWrapper({ children }: SmoothScrollWrapperProps) {
  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const contentRef = useRef<HTMLDivElement | null>(null);
  const smootherRef = useRef<ScrollSmoother | null>(null);
  const ctx = useRef<gsap.Context | null>(null);
  const pathname = usePathname();

  // 1) 한 번만: 브라우저의 자동 스크롤 복원을 끄기
  useEffect(() => {
    if (typeof window !== 'undefined' && 'scrollRestoration' in history) {
      const prev = history.scrollRestoration;
      history.scrollRestoration = 'manual';
      return () => {
        history.scrollRestoration = prev; // 컴포넌트 언마운트 시 원상복구
      };
    }
  }, []);

  // 2) ScrollSmoother 초기화 (layout effect)
  useIsomorphicLayoutEffect(() => {
    ctx.current = gsap.context(() => {
      ScrollTrigger.normalizeScroll(true);
      ScrollTrigger.clearScrollMemory();

      smootherRef.current = ScrollSmoother.create({
        wrapper: wrapperRef.current,
        content: contentRef.current,
        smooth: 3,
        effects: false,
        smoothTouch: 0.3,
        normalizeScroll: true
      });

      // 스크롤 초기 위치
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          smootherRef.current?.scrollTo(0, true);
        });
      });
    }, wrapperRef);

return () => {
    ctx.current?.revert(); 

    if (smootherRef.current) {
        try { smootherRef.current.kill(); } 
        catch {} 
        smootherRef.current = null;
    }
};
  }, []);

  // pathname(경로) 변경 시 항상 즉시 스크롤 탑으로 이동
  //    — 상세페이지로 라우트 됐을 때도 안전하게 작동
  useEffect(() => {
    if (!smootherRef.current) return;

    ScrollTrigger.clearScrollMemory();
    ScrollTrigger.refresh();

    // 즉시 0으로 점프 (true: preventSmooth / 즉시)
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        smootherRef.current?.scrollTo(0, true);
      });
    });
  }, [pathname]);

  return (
    <div ref={wrapperRef} id="smooth-wrapper">
      <div ref={contentRef} id="smooth-content">
        {children}
      </div>
    </div>
  );
}
