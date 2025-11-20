'use client';

import { motion, TargetAndTransition } from 'framer-motion';
import { Dispatch, SetStateAction, useState } from 'react';
import { useCursorContext } from '@/context/CursorContext';
import { StackDataType } from './StackTool';

const dtDefaultColor = 'var(--color-primary-dark)'; 
const ddDefaultColor = 'var(--color-gray-500)';
const dimmedColor = 'var(--color-gray-200)';
const defaultOpacity = 1;
const dimmedOpacity = 0.6;

interface StackListHoverProps {
    stack: StackDataType;
    hoveredCategory: string | null;
    setHoveredCategory: Dispatch<SetStateAction<string | null>>;
}

export default function StackListHover({ stack, hoveredCategory, setHoveredCategory }: StackListHoverProps) {

    const { setCursorType, setHoverData } = useCursorContext();

    const [isBadgeVisible, setIsBadgeVisible] = useState(false);

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

    function handleMouseEnter(e: React.MouseEvent) {
        setHoveredCategory(stack.category);
        setCursorType('hidden');

        setHoverData({
            id: stack.category,
            x: e.clientX,
            y: e.clientY,
            badges: badgeGroups(stack.tools),
            type: 'stack',
        });
        setIsBadgeVisible(true);
    }

    function handleMouseLeave() {
        setHoveredCategory(null);
        setCursorType('default');
        setHoverData(null);
        setIsBadgeVisible(false);
    }

    function handleMouseMove(e: React.MouseEvent) {
        setHoverData((prev) => prev ? { ...prev, x: e.clientX, y: e.clientY } : null);
    }

    const isSelfHovered = hoveredCategory === stack.category;
    const isOtherHovered = hoveredCategory !== null && !isSelfHovered;


    const dtColorAnimate: TargetAndTransition = {
        color: isOtherHovered ? dimmedColor : dtDefaultColor,
        opacity: isOtherHovered ? dimmedOpacity : defaultOpacity,
        transition: { duration: 0.6, ease: "easeInOut" }
    }

    const ddColorAnimate: TargetAndTransition = {
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
                onMouseMove={ handleMouseMove }
                >
                    <motion.dt 
                        className="flex-2/5 text-[clamp(3rem,2.85rem+0.75vw,3.75rem)] leading-none"
                        animate={dtColorAnimate}
                    >
                        { stack.category }
                    </motion.dt>
                <motion.dd 
                    className="flex-3/5 text-[clamp(1rem,0.975rem+0.125vw,1.125rem)]"
                    animate={ddColorAnimate}
                >
                    {stack.description}
                </motion.dd>
            </dl>
        )
}