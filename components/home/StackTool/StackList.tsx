'use client';

import { useState } from 'react';
import StackListHover from './StackListHover';

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useEffect, useRef } from 'react';
import { StackDataType } from './StackTool';
gsap.registerPlugin(ScrollTrigger);


interface StackListProps {
    stack: StackDataType[];
}


export default function StackList({ stack }: StackListProps) {

    const [hoveredCategory, setHoveredCategory] = useState(null)

    const stackListRef = useRef<HTMLDivElement>(null);

    useEffect(() => {

        if (!stackListRef.current) return;

        const stakItems = gsap.utils.toArray(stackListRef.current.children);

        stakItems.forEach(item => {
            gsap.fromTo(
            item as HTMLDivElement,
            { opacity: 0 },
            {
                opacity: 1,
                duration: 0.6,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: item as HTMLDivElement,
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