import { motion, useScroll } from "framer-motion";

const ScrollProgressBar = () => {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      className="fixed top-0 left-0 h-1 bg-primary z-50"
      style={{
        width: "100%",
        scaleX: scrollYProgress,
        transformOrigin: "0%",
      }}
    />
  );
};

export default ScrollProgressBar;
