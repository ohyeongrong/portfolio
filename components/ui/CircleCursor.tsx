'use client';

import { motion, useMotionValueEvent } from 'framer-motion';
import useMousePosition from '../hooks/useMousePosition';
import { useCursorContext } from '@/context/CursorContext';
import { useState } from 'react';

export default function CircleCursor() {
    const { springX, springY } = useMousePosition();
    const { cursorType } = useCursorContext();
    const [type, setType] = useState('default');

    // motionValue 값이 바뀔 때만 반응
    useMotionValueEvent(cursorType, 'change', (latest) => {
        setType(latest);
    });

    const variants = {
        default: {
            width: 16,
            height: 16,
            backgroundColor: '#fff',
            mixBlendMode: 'difference',
            opacity: 1,
            scale: 1,
        },
        hovered: {
            width: 48,
            height: 48,
            backgroundColor: '#fff',
            mixBlendMode: 'difference',
            opacity: 0.8,
            scale: 1.5,
        },
        hidden: {
            opacity: 0,
            scale: 0,
        },
    };

    return (
        <motion.div
        className="fixed top-0 left-0 rounded-full pointer-events-none z-[9999] hidden md:block cursor"
        style={{
            x: springX,
            y: springY,
            translateX: '-50%',
            translateY: '-50%',
        }}
        animate={type}
        variants={variants}
        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
        />
    );
}
