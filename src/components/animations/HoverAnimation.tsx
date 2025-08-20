import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface HoverAnimationProps {
  children: ReactNode;
  className?: string;
  scale?: number;
  rotate?: number;
  y?: number;
}

const HoverAnimation = ({ 
  children, 
  className = '', 
  scale = 1.05,
  rotate = 0,
  y = -5 
}: HoverAnimationProps) => {
  return (
    <motion.div
      className={className}
      whileHover={{ 
        scale, 
        rotate, 
        y,
        transition: { 
          type: 'spring' as const, 
          stiffness: 300, 
          damping: 10 
        }
      }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: 'spring' as const, stiffness: 300, damping: 10 }}
    >
      {children}
    </motion.div>
  );
};

export default HoverAnimation;
