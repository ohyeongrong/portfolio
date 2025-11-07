'use client';

import useMousePosition from '@/components/hooks/useMousePosition';
import Badge from '@/components/ui/Badge';
import { motion, AnimatePresence, scale} from 'framer-motion';

const badgeVariants = {
    initial: { opacity: 0, scale: 0},
    visible: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0 },
};


export default function ViewHover({ isHovered }) {

    const { springX, springY } = useMousePosition();

    return (
            <AnimatePresence>
                {
                    isHovered && (
                        <motion.div 
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
                            className="fixed top-0 left-0 z-50 pointer-events-none"
                        >
                            <motion.div variants={badgeVariants}>
                                <Badge content='View' size='sm' iconName='arrowOutward' iconSize={20}/>
                            </motion.div>
                        </motion.div>
                    )
                }
            </AnimatePresence>
    )
}