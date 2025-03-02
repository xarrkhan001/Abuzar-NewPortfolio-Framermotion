import { motion } from "framer-motion";
import React from "react";

const BlurBackground = () => {
  const circleVariants = {
    animate1: {
      scale: [1, 1.1, 1],
      x: [0, 60, 0],
      y: [0, 30, 0],
      rotateZ: [0, 10, 0],
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
      rotateZ: [0, -10, 0],
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
      rotateZ: [0, 20, 0],
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
      rotateZ: [0, -20, 0],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
    animate5: {
      scale: [1, 1.15, 1],
      x: [0, 140, 0],
      y: [0, 70, 0],
      rotateZ: [0, 30, 0],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
    animate6: {
      scale: [1, 1.2, 1],
      x: [0, 160, 0],
      y: [0, -80, 0],
      rotateZ: [0, -30, 0],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  return (
    <div
      className="fixed top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none flex
       justify-center items-center filter blur-[60px] opacity-50 bg-gradient-to-br from-blue-200 via-indigo-300 to-purple-400"
    >
      <motion.div
        className="bg-gradient-to-r from-teal-300 to-lime-300 w-[350px] h-[250px] rounded-full absolute shadow-sm"
        variants={circleVariants}
        animate="animate1"
      />
      <motion.div
        className="bg-gradient-to-r from-pink-300 to-yellow-300 w-[360px] h-[260px] rounded-full absolute shadow-sm"
        variants={circleVariants}
        animate="animate2"
      />
      <motion.div
        className="bg-gradient-to-r from-orange-200 to-green-300 w-[370px] h-[270px] rounded-full absolute shadow-sm"
        variants={circleVariants}
        animate="animate3"
      />
      <motion.div
        className="bg-gradient-to-r from-indigo-200 to-teal-400 w-[380px] h-[280px] rounded-full absolute shadow-sm"
        variants={circleVariants}
        animate="animate4"
      />
      <motion.div
        className="bg-gradient-to-r from-lime-200 to-pink-400 w-[390px] h-[290px] rounded-full absolute shadow-sm"
        variants={circleVariants}
        animate="animate5"
      />
      <motion.div
        className="bg-gradient-to-r from-purple-300 to-blue-400 w-[400px] h-[300px] rounded-full absolute shadow-sm"
        variants={circleVariants}
        animate="animate6"
      />
    </div>
  );
};

export default BlurBackground;
