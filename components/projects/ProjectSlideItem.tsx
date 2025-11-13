'use client'

import Link from "next/link";
import Image from 'next/image';
import ProjectBadgeList from "@/components/ui/ProjectBadgeList";
import { motion } from 'framer-motion';
import { useCursorContext } from '@/context/CursorContext';

const titleBadgeVariants = {
    initial: { opacity: 0, transition: { duration: 0.6, ease: 'easeInOut' } },
    hover: { opacity: 1, transition: { duration: 0.6, ease: 'easeInOut' } },
};

const imgVariants = {
    initial: { scale: 1, transition: { duration: 0.6, ease: 'easeInOut' } },
    hover: { scale: 1.1, transition: { duration: 0.6, ease: 'easeInOut' } }
    
}

const MotionImage = motion(Image);

export default function ProjectSlideItem({ project, i }){

        const { setCursorType, setHoverPosition } = useCursorContext();
    
        function handleMouseEnter() {
            setCursorType('view');
        }
    
        function handleMouseLeave() {
            setCursorType('default');
        }
    
        function handleMouseMove(e) {
            setHoverPosition({ x: e.clientX, y: e.clientY });
        }

        function handleLinkClick() {
            setCursorType('default'); 
            startLoading();
        }


    return (
            <motion.article 
                initial='initial' 
                whileHover='hover' 
                className="relative w-full"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                onMouseMove={handleMouseMove}
            >
                <Link href={`/projects/${project.id}`} className="cursor-none" onClick={handleLinkClick}>
                    <div className={`relative max-h-[80vh] aspect-[5/8] ${i % 2 === 0 ? 'w-full' : 'w-4/5'} mx-auto overflow-hidden rounded-2xl`}>
                        <MotionImage
                            variants={imgVariants}
                            initial='initial' 
                            whileHover='hover'
                            className="object-cover"
                            src={project.thumbnail}
                            alt={`${project.title} 썸네일`}
                            fill
                        />
                        <motion.div
                            variants={titleBadgeVariants}
                            className="absolute bottom-4 left-0 right-0 px-4 z-20 flex flex-col gap-1"
                        >
                            <ProjectBadgeList categories={project.categories} tools={project.tools} />
                        </motion.div>
                    </div>
                    <motion.div
                        variants={titleBadgeVariants} 
                        className="absolute z-10 top-2 mix-blend-difference text-center w-full"
                    >
                        <h3 className={`${i % 2 === 0 ? 'text-[clamp(1.125rem,1.038rem+0.385vw,1.5rem)]' : 'text-[clamp(1rem,0.885rem+0.513vw,1.5rem)]'} text-white`}>
                            {project.title}
                        </h3>
                    </motion.div>
                </Link>
            </motion.article>
    )
}