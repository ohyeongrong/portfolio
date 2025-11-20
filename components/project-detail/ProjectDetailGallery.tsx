
'use client'

import Image from 'next/image';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useEffect, useRef } from 'react';
import { ProjectDataType } from '@/constants/PROJECT_DATA';

gsap.registerPlugin(ScrollTrigger);

interface ProjectDetailGalleryProps {
    project: ProjectDataType
}

export default function ProjectDetailGallery({ project }: ProjectDetailGalleryProps) {

    const imageWidths = ["w-[20vw]", "w-[30vw]", "w-[40vw]", "w-[20vw]"];
    
    const galleryData = project.details.detailImages.gallery || []; 

    const firstRow = galleryData.slice(0, 4);
    const secondRow = galleryData.slice(4, 8);

    const firstRowRef = useRef(null);
    const secondRowRef = useRef(null);

    useEffect(() => {

        gsap.fromTo(firstRowRef.current,
            { xPercent: -3 },
            { 
                xPercent: 3,
                ease: 'none',
                scrollTrigger: {
                    trigger: firstRowRef.current,
                    start: 'top bottom',
                    end: 'bottom top', 
                    scrub: 1, 
                },
            }
        )

        gsap.fromTo(secondRowRef.current,
            { xPercent: 3 },
            { 
                xPercent: -3,
                ease: 'none',
                scrollTrigger: {
                    trigger: secondRowRef.current,
                    start: 'top bottom',
                    end: 'bottom top', 
                    scrub: 1, 
                },
            }
        )

    }, []);


    return (
        <div className='w-full h-fit'>
            <div className="flex flex-col items-center justify-center gap-2 md:gap-4 lg:gap-6">
                {/* 첫째 줄 */}
                <div 
                    ref={firstRowRef}
                    className="w-full flex flex-nowrap justify-center items-end gap-2 md:gap-4 lg:gap-6"
                >
                    {
                        firstRow.map((image, i) => (
                            <figure 
                                key={i} 
                                className={`${imageWidths[i]} aspect-[3/2] relative flex-shrink-0`}
                            >
                                <Image 
                                    className=" object-cover rounded-lg md:rounded-xl lg:rounded-2xl" 
                                    src={image.src} 
                                    alt={image.caption} 
                                    fill
                                />
                            </figure>
                        ))
                    }
                </div>
                {/* 둘째 줄 */}
                <div 
                    ref={secondRowRef}
                    className="w-full flex flex-nowrap justify-end items-start gap-2 md:gap-4 lg:gap-6 ">
                    {
                        secondRow.map((image, i) => (
                            <figure 
                                key={i + 4}
                                className={`${imageWidths[i]} aspect-[3/2] relative flex-shrink-0`}
                            >
                                <Image 
                                    className=" object-cover rounded-lg md:rounded-xl lg:rounded-2xl" 
                                    src={image.src} 
                                    alt={image.caption} 
                                    fill
                                />
                            </figure>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}