'use client';

import { useState } from 'react';
import StackListHover from './StackListHover';

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useEffect, useRef } from 'react';
gsap.registerPlugin(ScrollTrigger);

export const STACK_DATA = [
    { 
        category: 'Language', 
        description: '웹 구조와 스타일을 정의하고, 핵심 로직 및 타입 안전성을 구현합니다.',
        tools: [
            { id: 'html', content: 'HTML', color: 'black'},
            { id: 'css', content: 'CSS', color: 'black'},
            { id: 'js', content: 'JavaScript', color: 'black'},
            { id: 'ts', content: 'TypeScript', color: 'black'},
        ]
    },
    { 
        category: 'Frameworks', 
        description: '컴포넌트 기반 UI 구축 및 서버 렌더링으로 고성능 웹 앱을 개발합니다.',
        tools: [
            { id: 'react', content: 'React', color: 'black' },
            { id: 'next', content: 'Next.js', color: 'black' },
            { id: 'tailwind', content: 'Tailwind CSS', color: 'white' },
        ]
    },
    { 
        category: 'UI & Utils', 
        description: '빠른 스타일링, 상태/애니메이션 관리 및 효율적 빌드로 생산성과 사용자 경험을 향상합니다.',
        tools: [
            { id: 'gsap', content: 'GSAP', color: 'white' }, 
            { id: 'vite', content: 'Vite', color: 'white' }, 
            { id: 'zustand', content: 'Zustand', color: 'white' },
        ]
    },
    { 
        category: 'Design Tool', 
        description: 'UI/UX 디자인 및 그래픽 리소스 제작을 통해 필요한 모든 시각적 요소를 직접 처리합니다.',
        tools: [
            { id: 'figma', content: 'Figma', color: 'gray' },
            { id: 'xd', content: 'XD', color: 'gray' },
            { id: 'illustrator', content: 'Illustrator', color: 'gray' },
            { id: 'photoshop', content: 'Photoshop', color: 'gray' },
        ]
    },
    { 
        category: 'Git', 
        description: '코드 이력 관리와 안전한 협업을 통해 개발 프로세스의 신뢰성을 유지합니다.',
        tools: [
            { id: 'git', content: 'Git', color: 'white' },
            { id: 'github', content: 'GitHub', color: 'white' },
        ]
    },
];


export default function StackList() {

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
                STACK_DATA.map((stack, i) => 
                    <StackListHover key={stack.category + i} stack={stack} hoveredCategory={hoveredCategory} setHoveredCategory={setHoveredCategory} />
                )
            }
        </div>
    )
}