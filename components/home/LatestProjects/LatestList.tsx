'use client';

import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

import Link from "next/link";
import Image from 'next/image';
import ProjectBadgeList from "../../ui/ProjectBadgeList";

import { useCursorContext } from '@/context/CursorContext';

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useLoading } from '@/context/LoadingContext';
import { ProjectDataType } from '@/constants/PROJECT_DATA';
gsap.registerPlugin(ScrollTrigger);


const GRID_CLASSES = [
    "lg:col-span-5 md:col-span-4 sm:col-span-3 sm:col-start-1", 
    
    "lg:col-span-4 md:col-span-3 sm:col-span-2 lg:col-end-13 md:col-end-9 sm:col-end-7", 
    
    "lg:col-span-5 md:col-span-4 sm:col-span-3 lg:col-start-5 md:col-start-4 sm:col-start-3", 
    
    "lg:col-span-4 md:col-span-3 sm:col-span-2 sm:col-start-1", 
    
    "lg:col-span-5 md:col-span-4 sm:col-span-3 lg:col-end-13 md:col-end-9 sm:col-end-7"
];


const imgVariants = {
    initial: { scale: 1, transition: { duration: 0.4, ease: 'easeInOut' } },
    hover: { scale: 1.1, transition: { duration: 0.4, ease: 'easeInOut' } }
}

const MotionImage = motion(Image);

interface LatestListProps {
    latestProjects: ProjectDataType[];
}

export default function LatestList({ latestProjects }: LatestListProps) {

    const { setCursorType, setHoverPosition } = useCursorContext();

    function handleMouseEnter() {
        setCursorType('view');
    }

    function handleMouseLeave() {
        setCursorType('default');
    }

    function handleMouseMove(e: React.MouseEvent<HTMLLIElement, MouseEvent>) {
        setHoverPosition({ x: e.clientX, y: e.clientY });
    }

    function handleLinkClick() {
        setCursorType('default'); 
        startLoading();
    }

    const latestListRef = useRef<HTMLUListElement>(null);

    useEffect(() => {

        if (!latestListRef.current) return;

        const LatestItems = gsap.utils.toArray(latestListRef.current.children);

        LatestItems.forEach(item => {
            gsap.fromTo(
            item,
            { y: 50, scale: 0.9 },
            {
                y: 0,
                scale: 1,
                duration: 1,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: item,
                    start: "top 80%",
                    toggleActions: "play reverse play reverse",
                    // markers: true,
                },
            }
            );
        });

    }, []);

    const { startLoading } = useLoading();

    return (
        <ul 
        ref={latestListRef}
        className="grid grid-cols-1 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-12 gap-y-[clamp(4rem,2.4rem+8vw,12rem)] sm:items-end">
            {
                latestProjects.map((project, i) => {
                    return(
                        <motion.li
                            onMouseEnter={handleMouseEnter}
                            onMouseLeave={handleMouseLeave}
                            onMouseMove={handleMouseMove}
                            key={project.id + i} 
                            className={GRID_CLASSES[i]}
                        >
                            <article className="w-full">
                                <Link href={`/projects/${project.id}`} className='cursor-none' onClick={handleLinkClick}>
                                    <figure className="relative aspect-[3/2] overflow-hidden rounded-2xl">
                                        <MotionImage 
                                            variants={imgVariants}
                                            initial='initial' 
                                            whileHover='hover'
                                            className="object-cover" 
                                            src={project.thumbnail} 
                                            alt={project.summary} 
                                            fill/>
                                    </figure>
                                    <div className="w-full flex flex-col gap-2 lg:flex-row lg:justify-between lg:items-center py-2">
                                        <h3 className="text-xl">{project.title}</h3>
                                        {/* 카테고리 및 사용 툴 뱃지 */}
                                        <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-0.5">
                                            <ProjectBadgeList categories={project.categories} tools={project.tools}/>
                                        </div>
                                    </div>
                                </Link>
                            </article>
                        </motion.li>
                    )
                })
            }
        </ul>
    )
}