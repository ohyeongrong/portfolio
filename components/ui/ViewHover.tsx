'use client';
import { motion, AnimatePresence, useMotionValueEvent } from 'framer-motion';
import { useCursorContext } from '@/context/CursorContext';
import Badge from '@/components/ui/Badge';
import { useState } from 'react';

export default function ViewHover() {
    const { cursorType, hoverPosition } = useCursorContext();
    const [isView, setIsView] = useState(false);

    const badgeVariants = {
        initial: { opacity: 0, scale: 0, transition: { duration: 0.4 }},
        visible: { opacity: 1, scale: 1, transition: { duration: 0.4 }},
        exit: { opacity: 0, scale: 0.2, transition: { duration: 0.4 }},
    };

    // motionValue 변화 감지
    useMotionValueEvent(cursorType, 'change', (v) => {
        setIsView(v === 'view');
    });

    return (
        <AnimatePresence>
        {isView && (
            <motion.div
            variants={badgeVariants}
            initial='initial'
            animate='visible'
            exit='exit'
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="fixed top-0 left-0 z-[9999] pointer-events-none"
            style={{
                x: hoverPosition.x,
                y: hoverPosition.y,
                translateX: '-50%',
                translateY: '-50%',
            }}
            >
            <Badge content="View" size="sm" iconName="arrowOutward" iconSize={20} />
            </motion.div>
        )}
        </AnimatePresence>
    );
}
