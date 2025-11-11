'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import Link from "next/link";
import Image from 'next/image';
import ProjectBadgeList from "../../ui/ProjectBadgeList";

const imgVariants = {
  initial: { scale: 1, transition: { duration: 0.4, ease: 'easeInOut' } },
  hover: { scale: 1.1, transition: { duration: 0.4, ease: 'easeInOut' } }
};

const MotionImage = motion(Image);

export default function LatestListItem({ project, i, GRID_CLASS, setCursorType, setIsHovered }) {

  function handleMouseEnter() {
    setIsHovered(true);
    setCursorType('hidden');
  }

  function handleMouseLeave() {
    setIsHovered(false);
    setCursorType('default');
  }

  return (
    <motion.li
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      key={project.id + i}
      className={`${GRID_CLASS} relative`}
    >
      <article className="w-full">
        <Link href={`/projects/${project.id}`} className='cursor-none'>
          <div className="relative aspect-[3/2] overflow-hidden rounded-2xl">
            <MotionImage
              variants={imgVariants}
              initial='initial'
              whileHover='hover'
              className="object-cover"
              src={project.thumbnail}
              alt={project.summary}
              fill
            />
          </div>
          <div className="w-full flex flex-col gap-2 lg:flex-row lg:justify-between lg:items-center py-2">
            <h3 className="text-xl">{project.title}</h3>
            <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-0.5">
              <ProjectBadgeList categories={project.categories} tools={project.tools} />
            </div>
          </div>
        </Link>
      </article>
    </motion.li>
  );
}
