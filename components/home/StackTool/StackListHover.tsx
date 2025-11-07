'use client';

import useMousePosition from '@/components/hooks/useMousePosition';
import Badge from '@/components/ui/Badge';
import { motion, AnimatePresence} from 'framer-motion';
import { useState } from 'react';
import { useCursorContext } from '@/context/CursorContext';

const containerVariants = {
    visible: {
        transition: {
            staggerChildren: 0.08,
            delayChildren: 0.1, 
        },
    },
};

const badgeItemVariants = {
    initial: { opacity: 0, scale: 0, x: -40, rotate: 0 },
    visible: { opacity: 1, scale: 1, x: 0, rotate: 2 },
    exit: { opacity: 0, scale: 0,  x: 40 },
};

const dtDefaultColor = 'var(--color-primary-dark)'; 
const ddDefaultColor = 'var(--color-gray-500)';
const dimmedColor = 'var(--color-gray-200)';
const defaultOpacity = 1;
const dimmedOpacity = 0.6;

export default function StackListHover({ stack, hoveredCategory, setHoveredCategory }) {

    const { springX, springY } = useMousePosition();

    const [isBadgeVisible, setIsBadgeVisible] = useState(false);

    const { setCursorType } = useCursorContext();

    const badgeGroups = (tools) => {
        const groups = [];

        const dispalyTools = tools.slice(0, 4);

        for(let i = 0; i < dispalyTools.length; i += 2){
            const tool1 = dispalyTools[i]
            const tool2 = dispalyTools[i + 1]

            if (tool1 && tool2) {
                groups.push({
                    id: `${tool1.id}-${tool2.id}`, 
                    content: `${tool1.content} & ${tool2.content}`, 
                });
            } 
            else if (tool1) {
                groups.push({
                    id: `${tool1.id}`, 
                    content: `${tool1.content}`,
                });
            }
        }
        return groups;
    }

    function handleMouseEnter() {
        setIsBadgeVisible(true)
        setHoveredCategory(stack.category)
        setCursorType('hidden');
    }

    function handleMouseLeave() {
        setIsBadgeVisible(false)
        setHoveredCategory(null)
        setCursorType('default');
    }

    const isSelfHovered = hoveredCategory === stack.category;
    const isOtherHovered = hoveredCategory !== null && !isSelfHovered;


    const dtColorAnimate = {
        color: isOtherHovered ? dimmedColor : dtDefaultColor,
        opacity: isOtherHovered ? dimmedOpacity : defaultOpacity,
        transition: { duration: 0.6, ease: "easeInOut" }
    }

    const ddColorAnimate = {
        color: isOtherHovered ? dimmedColor : ddDefaultColor,
        opacity: isOtherHovered ? dimmedOpacity : defaultOpacity,
        transition: { duration: 0.6, ease: "easeInOut" }
    }


    return (
            <dl 
                key={stack.category} 
                className="cursor-none flex flex-col xl:flex-row xl:items-center gap-[clamp(0.5rem,0.3rem+1vw,1.5rem)] border-b border-[var(--color-gray-200)] py-[clamp(2rem,1.8rem+1vw,3rem)] relative"
                onMouseEnter={ handleMouseEnter }
                onMouseLeave={ handleMouseLeave }
                >
                    <motion.dt 
                        className="flex-2/5 text-[clamp(3rem,2.85rem+0.75vw,3.75rem)] leading-none"
                        animate={dtColorAnimate}
                    >
                        { stack.category }
                    </motion.dt>
                <AnimatePresence>
                    {
                        isBadgeVisible && (
                            <motion.div 
                                variants={containerVariants}
                                initial='initial'
                                animate='visible'
                                exit='exit'
                                transition={{ type: "spring", stiffness: 600, damping: 20 }}
                                style={{ 
                                    x: springX, 
                                    y: springY,
                                    translateX: "-50%",
                                    translateY: "-50%",
                                }}
                                className="fixed top-0 left-0 z-50 flex flex-col pointer-events-none"
                            >
                                {
                                    badgeGroups(stack.tools).map((tool, i)=>{
                                        const first = i === 0;
                                        const badgeClass = first
                                        ? 'relative z-10 rotate-5 translate-x-5'
                                        : '-rotate-15'
                                        const badgeColor = first
                                        ? 'gray'
                                        : 'white'
                                        
                                        return(
                                            <motion.div
                                                key={tool.id}
                                                variants={badgeItemVariants}
                                            >
                                                <Badge
                                                content={tool.content}
                                                color={badgeColor} 
                                                size="sm" 
                                                className={badgeClass}/>
                                            </motion.div>
                                        )
                                    })
                                }
                            </motion.div>
                        )
                    }
                </AnimatePresence>
                <motion.dd 
                    className="flex-3/5 text-[clamp(1rem,0.975rem+0.125vw,1.125rem)]"
                    animate={ddColorAnimate}
                >
                    {stack.description}
                </motion.dd>
            </dl>
        )
}