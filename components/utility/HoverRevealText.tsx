
'use client';

import { motion } from 'framer-motion';

const transition = { type: 'spring', stiffness: 300, damping: 35, mass: 0.5 };

const variants = {
    // 텍스트 (children)
    textA: {
        rest: { y: "0%" }, 
        hover: { y: "-100%" }
    },
    // 텍스트 (hoverContent)
    textB: {
        rest: { y: "100%" },
        hover: { y: "0%" } 
    }
};


export default function HoverRevealText({ children, hoverContent }) {
    
    return (
        <motion.div
            initial="rest"
            whileHover="hover"
            className="overflow-hidden relative inline-block"
            style={{ lineHeight: 1.1 }}
        >
            {/* 기존 텍스트 */}
            <motion.div
                variants={variants.textA}
                transition={transition}
            >
                {children}
            </motion.div>

            {/* 새로운 텍스트 */}
            <motion.div
                variants={variants.textB}
                transition={transition}
                className="absolute top-0 left-0 w-full"
            >
                {hoverContent}
            </motion.div>
        </motion.div>
    );
}