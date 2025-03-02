import { motion } from "framer-motion";
import React from "react";

const BlurBackground = () => {
  const circleVariants = {
    animate1: {
      scale: [1, 1.05, 1],
      x: [0, 60, 0],
      y: [0, 30, 0],
      rotateZ: [0, 12, 0],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
    animate2: {
      scale: [1, 1.05, 1],
      x: [0, 80, 0],
      y: [0, -40, 0],
      rotateZ: [0, -12, 0],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
    animate3: {
      scale: [1, 1.1, 1],
      x: [0, 100, 0],
      y: [0, 50, 0],
      rotateZ: [0, 15, 0],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
    animate4: {
      scale: [1, 1.1, 1],
      x: [0, 120, 0],
      y: [0, -60, 0],
      rotateZ: [0, -15, 0],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
    animate5: {
      scale: [1, 1.12, 1],
      x: [0, 140, 0],
      y: [0, 70, 0],
      rotateZ: [0, 20, 0],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
    animate6: {
      scale: [1, 1.15, 1],
      x: [0, 160, 0],
      y: [0, -80, 0],
      rotateZ: [0, -20, 0],
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
       bg-gradient-to-br from-[#1c1c2b] via-[#2b2d42] to-[#8d99ae] filter blur-[70px] opacity-60"
    >
      <motion.div
        className="bg-gradient-to-r from-[#e3e4e8] to-[#d5e1df] w-[350px] h-[250px] rounded-full absolute shadow-lg"
        variants={circleVariants}
        animate="animate1"
      />
      <motion.div
        className="bg-gradient-to-r from-[#f3a847] to-[#f1d84d] w-[360px] h-[260px] rounded-full absolute shadow-xl"
        variants={circleVariants}
        animate="animate2"
      />
      <motion.div
        className="bg-gradient-to-r from-[#1e80b5] to-[#2bced4] w-[370px] h-[270px] rounded-full absolute shadow-2xl"
        variants={circleVariants}
        animate="animate3"
      />
      <motion.div
        className="bg-gradient-to-r from-[#9e4e97] to-[#c74b84] w-[380px] h-[280px] rounded-full absolute shadow-2xl"
        variants={circleVariants}
        animate="animate4"
      />
      <motion.div
        className="bg-gradient-to-r from-[#ff64d4] to-[#8b3ff2] w-[390px] h-[290px] rounded-full absolute shadow-3xl"
        variants={circleVariants}
        animate="animate5"
      />
      <motion.div
        className="bg-gradient-to-r from-[#37a2c2] to-[#4c9fb2] w-[400px] h-[300px] rounded-full absolute shadow-3xl"
        variants={circleVariants}
        animate="animate6"
      />
    </div>
  );
};

export default BlurBackground;
