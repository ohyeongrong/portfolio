'use client';

import { useState } from 'react';
import StackListHover from './StackListHover';

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useEffect, useRef } from 'react';
gsap.registerPlugin(ScrollTrigger);


export default function StackList({ stack }) {

    const [hoveredCategory, setHoveredCategory] = useState(null)

    const stackListRef = useRef(null);

    useEffect(() => {

        const stakItems = gsap.utils.toArray(stackListRef.current.children);

        stakItems.forEach((item, i) => {
            gsap.fromTo(
            item,
            { opacity: 0 },
            {
                opacity: 1,
                duration: 0.6,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: item,
                    start: "top 80%",
                    // markers: true,
                },
            }
            );
        });

    }, []);


    return (
        <div ref={stackListRef} className="w-full lg:w-1/2 tracking-tight px-6">
            {
                stack.map((stack, i) => 
                    <StackListHover key={stack.category + i} stack={stack} hoveredCategory={hoveredCategory} setHoveredCategory={setHoveredCategory} />
                )
            }
        </div>
    )
}