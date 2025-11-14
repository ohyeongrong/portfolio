'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { useCursorContext } from '@/context/CursorContext';
import Badge from '@/components/ui/Badge';

const containerVariants = {
    visible: {
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.1,
      },
    },
    exit: {
      transition: {
        staggerChildren: 0.05,
        staggerDirection: -1, // 역순으로 사라지게 합니다.
      },
    },
};

const badgeItemVariants = {
  initial: { opacity: 0, scale: 0, y: 10 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { type: 'spring', stiffness: 300, damping: 20 },
  },
  exit: { opacity: 0, scale: 0.8 },
};

export default function StackHoverDisplay() {
  const { hoverData } = useCursorContext();

  return (
    <AnimatePresence mode="wait">
      {hoverData && hoverData.type === 'stack' && (
        <motion.div
          key={hoverData.id || 'stack-badges'}
          variants={containerVariants}
          initial="initial"
          animate="visible"
          exit="exit"
          style={{
            x: hoverData.x,
            y: hoverData.y,
            translateX: '-50%',
            translateY: '-50%',
          }}
          className="fixed top-0 left-0 z-50 flex flex-col pointer-events-none"
        >
        {hoverData.badges.map((badge, i) => {
          const badgeClass = i === 0
            ? 'rotate-5 translate-x-5'
            : '-rotate-15';

          const badgeColor = i === 0 ? 'gray' : 'white';

          return (
            <motion.div
              key={badge.id}
              variants={badgeItemVariants}
              style={{ zIndex: hoverData.badges.length - i }} // 🔹 중요
            >
              <Badge
                content={badge.content}
                color={badgeColor}
                size="sm"
                className={badgeClass}
              />
            </motion.div>
          );
        })}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
