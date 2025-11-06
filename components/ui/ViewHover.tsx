'use client';

import useMousePosition from '@/components/hooks/useMousePosition';
import Badge from '@/components/ui/Badge';
import { motion, AnimatePresence, scale} from 'framer-motion';

const badgeVariants = {
    initial: { opacity: 0, transition: { duration: 0.3, ease: 'easeInOut' } },
    visible: { opacity: 1, transition: { duration: 0.3, ease: 'easeInOut' } },
    exit: { opacity: 0, transition: { duration: 0.3, ease: 'easeInOut' } },
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
                            style={{ 
                                x: springX, 
                                y: springY,
                            }}
                            className="fixed inset-0 z-50 pointer-events-none"
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