'use client';
import React, { useRef, useEffect, useLayoutEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollSmoother } from 'gsap/ScrollSmoother';

const useIsomorphicLayoutEffect = 
  typeof window !== 'undefined' ? useLayoutEffect : useEffect;

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

const SmoothScrollWrapper = ({ children }) => {
  const smoother = useRef(null);
  const ctx = useRef(null);


  useIsomorphicLayoutEffect(() => {

    ctx.current = gsap.context(() => {
      
      ScrollTrigger.normalizeScroll(true);
      ScrollTrigger.clearScrollMemory();

      smoother.current = ScrollSmoother.create({
        wrapper: '#smooth-wrapper',
        content: '#smooth-content',
        smooth: 5,
        effects: false,
        smoothTouch: 0.4,
        normalizeScroll: true
      });
      
    }, smoother); 
    
    return () => {
      ctx.current.revert(); 
    };
  }, []); 

  return (
    <div id="smooth-wrapper" ref={smoother}>
      <div id="smooth-content">
        {children}
      </div>
    </div>
  );
};

export default SmoothScrollWrapper;