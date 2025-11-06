'use client';

import useMousePosition from '@/components/hooks/useMousePosition';
import { motion } from 'framer-motion';
import { useState } from 'react';

import Link from "next/link";
import Image from 'next/image';
import { PROJECT_DATA } from "@/constants/PROJECT_DATA";
import ProjectBadgeList from "../../ui/ProjectBadgeList";
import ViewHover from '@/components/ui/ViewHover';


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

export default function LatestList() {

    const latestCount = 5;
    const latestProjects = PROJECT_DATA.filter(p => p.isLatest).slice(0, latestCount);

    const [isHovered, setIsHovered] = useState(false);

    return (
        <ul className="grid grid-cols-1 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-12 gap-y-[clamp(4rem,2.4rem+8vw,12rem)] sm:items-end">
            {
                latestProjects.map((project, i) => {
                    return(
                        <motion.li
                            onMouseEnter={() => setIsHovered(true)}
                            onMouseLeave={() => setIsHovered(false)}
                            key={project.id + i} 
                            className={GRID_CLASSES[i]}
                        >
                            <article className="w-full">
                                <Link href={project.id} className='cursor-none'>
                                    <div  className="relative aspect-[3/2] overflow-hidden rounded-2xl">
                                        <MotionImage 
                                            variants={imgVariants}
                                            initial='initial' 
                                            whileHover='hover'
                                            className="object-cover" 
                                            src={project.thumbnail} 
                                            alt={project.summary} 
                                            fill/>
                                    </div>
                                    <div className="w-full flex flex-col gap-2 lg:flex-row lg:justify-between lg:items-center py-2">
                                        <h3 className="text-xl">{project.title}</h3>
                                        {/* 카테고리 및 사용 툴 뱃지 */}
                                        <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-0.5">
                                            <ProjectBadgeList categories={project.categories} tools={project.tools}/>
                                        </div>
                                    </div>
                                </Link>
                            </article>
                            <ViewHover isHovered={isHovered}/>
                        </motion.li>
                    )
                })
            }
        </ul>
    )
}