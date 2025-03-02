import { motion } from "framer-motion";
import React from "react";

const BlurBackground = () => {
  const circleVariants = {
    animate1: {
      scale: [1, 1.08, 1],
      x: [0, 80, 0],
      y: [0, 40, 0],
      rotateX: [0, 15, 0],
      rotateY: [0, 10, 0],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
    animate2: {
      scale: [1, 1.05, 1],
      x: [0, 100, 0],
      y: [0, -50, 0],
      rotateX: [0, -12, 0],
      rotateY: [0, 8, 0],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
    animate3: {
      scale: [1, 1.1, 1],
      x: [0, 120, 0],
      y: [0, 60, 0],
      rotateX: [0, 10, 0],
      rotateY: [0, -15, 0],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
    animate4: {
      scale: [1, 1.12, 1],
      x: [0, 140, 0],
      y: [0, -70, 0],
      rotateX: [0, -18, 0],
      rotateY: [0, 20, 0],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
    animate5: {
      scale: [1, 1.15, 1],
      x: [0, 160, 0],
      y: [0, 80, 0],
      rotateX: [0, 5, 0],
      rotateY: [0, -25, 0],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
    animate6: {
      scale: [1, 1.18, 1],
      x: [0, 180, 0],
      y: [0, -90, 0],
      rotateX: [0, 20, 0],
      rotateY: [0, 15, 0],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  return (
    <div
      className="fixed top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none flex justify-center items-center 
       bg-gradient-to-br from-[#2b2b2b] via-[#3e3e3e] to-[#5f5f5f] filter blur-[60px] opacity-50"
      style={{ perspective: "800px" }}
    >
      <motion.div
        className="bg-gradient-to-r from-[#4e82d2] to-[#5a6eb5] w-[350px] h-[250px] rounded-full absolute shadow-2xl"
        variants={circleVariants}
        animate="animate1"
      />
      <motion.div
        className="bg-gradient-to-r from-[#6f52e5] to-[#ad8fff] w-[360px] h-[260px] rounded-full absolute shadow-3xl"
        variants={circleVariants}
        animate="animate2"
      />
      <motion.div
        className="bg-gradient-to-r from-[#3b8ad9] to-[#67a4ff] w-[370px] h-[270px] rounded-full absolute shadow-3xl"
        variants={circleVariants}
        animate="animate3"
      />
      <motion.div
        className="bg-gradient-to-r from-[#f35b73] to-[#f8b6b0] w-[380px] h-[280px] rounded-full absolute shadow-4xl"
        variants={circleVariants}
        animate="animate4"
      />
      <motion.div
        className="bg-gradient-to-r from-[#8e44ad] to-[#d084fc] w-[390px] h-[290px] rounded-full absolute shadow-5xl"
        variants={circleVariants}
        animate="animate5"
      />
      <motion.div
        className="bg-gradient-to-r from-[#7c3d91] to-[#9f77ba] w-[400px] h-[300px] rounded-full absolute shadow-5xl"
        variants={circleVariants}
        animate="animate6"
      />
    </div>
  );
};

export default BlurBackground;
