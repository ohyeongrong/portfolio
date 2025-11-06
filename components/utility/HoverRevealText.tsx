
'use client';

import { motion } from 'framer-motion';

const transition = { type: 'spring', stiffness: 300, damping: 35, mass: 0.5 };

const variants = {
    // 텍스트 A (children)
    textA: {
        rest: { y: "0%" },      // 평소: 보임
        hover: { y: "-100%" }   // 호버 시: 위로 사라짐
    },
    // 텍스트 B (hoverContent)
    textB: {
        rest: { y: "100%" },    // 평소: 아래에 숨어 있음
        hover: { y: "0%" }      // 호버 시: 제자리에 나타남
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
            {/* Layer A (기존 텍스트) */}
            <motion.div
                variants={variants.textA}
                transition={transition}
            >
                {children}
            </motion.div>

            {/* Layer B (새로운 텍스트) - Layer A 위에 절대 위치 */}
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