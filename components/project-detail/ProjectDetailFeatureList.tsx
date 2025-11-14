
'use client'

import Image from 'next/image';
import Badge from "@/components/ui/Badge";
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useEffect, useRef } from 'react';
import SectionTitle from '../ui/SectionTitle';


gsap.registerPlugin(ScrollTrigger);

export default function ProjectDetailFeatureList({ project }) {

    const imgRefs = useRef<HTMLElement[]>([])
    const contentRefs = useRef<HTMLElement[]>([])
    const badgeRefs = useRef<HTMLElement[]>([])

    useEffect(() => {

        project.details.keyFeatures.forEach((_, i) => {
            const img = imgRefs.current[i];
            const content = contentRefs.current[i];
            const isOdd = i % 2 !== 0; 

            const badgeContainer = badgeRefs.current[i]; 
            const triggerElement = img.closest('.grid');

            gsap.fromTo(img, 
                {
                    opacity: 0,
                    xPercent: isOdd ? 50 : -50, 
                    scale: 0.95,
                }, 
                {
                    opacity: 1,
                    xPercent: 0,
                    scale: 1,
                    duration: 1.2,
                    ease: 'power3.out',
                    scrollTrigger: {
                        trigger: triggerElement,
                        start: 'top 80%',
                        toggleActions: 'play none none reverse',
                        scrub: 1,
                    }
                }
            );

            gsap.fromTo(content, 
                {
                    opacity: 0,
                    y: 50,
                }, 
                {
                    opacity: 1,
                    y: 0,
                    duration: 1.2,
                    delay: 0.2,
                    ease: 'power3.out',
                    scrollTrigger: {
                        trigger: triggerElement,
                        start: 'top 80%',
                        toggleActions: 'play none none reverse',
                        scrub: 1,
                    }
                }
            );

            if (badgeContainer) {
            const badges = badgeContainer.querySelectorAll('li');

            gsap.fromTo(badges, 
                { scale: 0,},
                {
                    scale: 1,
                    stagger: 0.1,
                    ease: 'bounce.inOut',
                    scrollTrigger: {
                        trigger: triggerElement,
                        start: 'top top',
                        toggleActions: 'play none none reverse',
                    }
                });
            }
        });
        // ----------------------------------------------------
    }, [project.details.keyFeatures]);


    return (
        <div className="flex flex-col md:gap-60">
            {
                project.details.keyFeatures.map((feat, i) => {
                    
                    const isOdd = i % 2 !== 0;

                    const ImageClasses = isOdd 
                        ? "md:col-start-8 md:col-span-5 md:order-2" // 홀수: 오른쪽 배치
                        : "md:col-start-1 md:col-span-5 md:order-1" // 짝수: 왼쪽 배치

                    const ContentClasses = isOdd
                        ? "md:col-start-3 md:col-span-4 md:order-1" // 홀수: 왼쪽 배치
                        : "md:col-start-7 md:col-span-4 md:order-2" // 짝수: 오른쪽 배치

                    
                    const ContentBlock = ( 
                        <div 
                            className={`${ContentClasses} order-2`} 
                            ref={el => {if (el) contentRefs.current[i] = el}}>
                            <div className="flex flex-col gap-8">
                                <ul className="flex gap-0.5" ref={el => {if (el) badgeRefs.current[i] = el}}>
                                    {
                                        feat.toolsUsed.map((tool, i) =>
                                            <li key={tool + i}>
                                                <Badge content={tool} size="xs" color="white"/>
                                            </li>
                                        )
                                    }
                                </ul>
                                <dl className="flex flex-col gap-4">
                                    <dt className="text-[clamp(2.5rem,2.212rem+1.282vw,3.75rem)] font-bold tracking-tight leading-none">
                                        <SectionTitle text={ feat.featureTitle } />
                                    </dt>
                                    <dd className="lg:text-lg font-(family-name:--font-pretendard) text-[var(--color-gray-700)]">
                                        { feat.content }
                                    </dd>
                                </dl>
                                {
                                    feat.problemSolving &&
                                    <>
                                        <div className="border-b"></div>
                                        {
                                            feat.problemSolving.map((problem, i) => 
                                                <dl key={problem.title + i} className="flex flex-col gap-1">
                                                    <dt className="font-bold text-lg lg:text-xl">{problem.title}</dt>
                                                    <dd className="lg:text-lg font-(family-name:--font-pretendard) text-[var(--color-gray-700)]">
                                                        {problem.content}
                                                    </dd>
                                                </dl>
                                            )
                                        }
                                    </>
                                }
                            </div>
                        </div>
                    );

                    const ImageBlock = (
                        <figure 
                            className={`${ImageClasses} aspect-[10/12] relative order-1`}   
                            ref={el => {if (el) imgRefs.current[i] = el}}>
                            <Image className="object-cover rounded-2xl" src={feat.featureImage.src} alt={feat.featureImage.caption} fill/>
                        </figure>
                    );

                    return (
                        <div key={feat.id + i} className="grid grid-cols-1 md:grid-cols-12 items-center px-6 gap-y-8 py-[5vh]">
                            {ImageBlock}
                            {ContentBlock}
                        </div>
                    )
                })
            }


        </div>
    )
}