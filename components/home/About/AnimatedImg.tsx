'use client'

import Image from 'next/image';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useEffect, useRef } from 'react';
gsap.registerPlugin(ScrollTrigger);

const WORK_IMAGES_DATA = [
    { 
        id: 1, 
        src: "/images/about-design-img-1.webp", 
        alt: "첫 번째 디자인 작업물", 
        aspect: "aspect-[3/2]",
        span: "md:col-span-3 sm:col-span-2", 
        start: "lg:col-start-2 sm:col-strat-1",
        self: "self-center" 
    },
    { 
        id: 2, 
        src: "/images/about-design-img-2.webp", 
        alt: "두 번째 디자인 작업물", 
        aspect: "aspect-[3/2] sm:aspect-[2/3]", 
        span: "md:col-span-3 sm:col-span-2", 
        end: "lg:col-end-12 md:col-end-9 sm:col-end-7",
        self: "self-center" 
    },
    { 
        id: 3, 
        src: "/images/about-design-img-3.webp", 
        alt: "세 번째 디자인 작업물", 
        aspect: "aspect-[3/2]", 
        span: "md:col-span-4 sm:col-span-3", 
        start: "lg:col-start-6 md:col-start-4 sm:col-start-3" ,
    },
    { 
        id: 4, 
        src: "/images/about-design-img-4.webp", 
        alt: "네 번째 디자인 작업물", 
        aspect: "aspect-[3/2]", 
        span: "md:col-span-4 sm:col-span-3", 
        start: "lg:col-start-1 sm:col-start-1",
        self: "self-end" 
    },
    { 
        id: 5, 
        src: "/images/about-design-img-5.webp", 
        alt: "다섯 번째 디자인 작업물", 
        aspect: "aspect-[3/2]", 
        span: "md:col-span-3 sm:col-span-2", 
        end: "lg:col-end-13 md:col-end-9 sm:col-end-7",
        self: "self-end" 
    },
    { 
        id: 6, 
        src: "/images/about-design-img-6.webp", 
        alt: "여섯 번째 디자인 작업물", 
        aspect: "aspect-[3/2] sm:aspect-[2/3]", 
        span: "md:col-span-4 sm:col-span-3", 
        start: "lg:col-start-6 md:col-start-4 sm:col-start-3"
    },
];


export default function AnimatedImg() {

   const workImgGridRef = useRef(null);

    useEffect(() => {

        const workImgItems = gsap.utils.toArray(workImgGridRef.current.children);

        workImgItems.forEach((item, i) => {
            gsap.fromTo(
            item,
            { opacity: 0, y: 100 },
            {
                y: 0,
                opacity: 1,
                duration: 1,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: item,
                    start: "top 90%",
                    toggleActions: "play reverse play reverse",
                    // markers: true,
                },
            }
            );
        });

    }, []);


    return (
            <div 
                ref={workImgGridRef}
                className="w-full h-full grid grid-cols-1 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-12 gap-y-12 sm:gap-y-24 md:gap-y-32 lg:gap-y-48 pb-32"
            >
                {
                    WORK_IMAGES_DATA.map(work => 
                        <div key={work.id} className={`${work.span} ${work.aspect} relative ${work.start || ''} ${work.end || ''} ${work.self || ''}`}>
                            <Image 
                                className="object-cover rounded-2xl"
                                src={work.src} 
                                alt={work.alt} 
                                fill 
                            />
                        </div>
                    )
                }
            </div>
    )
}