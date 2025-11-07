
'use client';

import { motion, scale } from 'framer-motion';
import useMousePosition from '../hooks/useMousePosition';
import { useCursorContext } from '@/context/CursorContext'; // Context 훅 가져오기

export default function CircleCursor() {
    const { springX, springY } = useMousePosition();
    const { cursorType } = useCursorContext(); 

    const variants = {
        default: { 
            width: 16, 
            height: 16,
            backgroundColor: "#fff",
            mixBlendMode: "difference",
            opacity: 1,
        },

        hidden: {
            opacity: 0,
            scale: 0,
            transition: { duration: 0.8 }
        }
    };
    
    const currentAnimation = cursorType === 'default' ? 'default' : 'hidden';

    return (
        <motion.div
            className="fixed top-0 left-0 rounded-full pointer-events-none z-[9999] hidden md:block"
            style={{ 
                x: springX, 
                y: springY, 
                translateX: "-50%",
                translateY: "-50%",
            }}
            variants={variants}
            animate={currentAnimation} 
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
        />
    );
}