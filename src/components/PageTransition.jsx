import { motion } from 'framer-motion';

const variants = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
};

const transition = {
  duration: 1,
  ease: 'easeInOut',
};

export default function PageTransition({ children }) {
  return (
    <motion.div
      variants={variants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={transition}
      className="w-full min-h-screen absolute top-0 left-0"
    >
      {children}
    </motion.div>
  );
}
