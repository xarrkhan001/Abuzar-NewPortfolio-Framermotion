import { motion } from "framer-motion";
import React from "react";

const BlurBackground = () => {
  const circleVariants = {
    animate1: {
      scale: [1, 1.2, 1],
      x: [0, 100, 0],
      y: [0, 50, 0],
      rotateZ: [0, 45, 0],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
    animate2: {
      scale: [1, 1.1, 1],
      x: [0, 120, 0],
      y: [0, -60, 0],
      rotateZ: [0, -45, 0],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
    animate3: {
      scale: [1, 1.3, 1],
      x: [0, 140, 0],
      y: [0, 70, 0],
      rotateZ: [0, 90, 0],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
    animate4: {
      scale: [1, 1.4, 1],
      x: [0, 160, 0],
      y: [0, -80, 0],
      rotateZ: [0, -90, 0],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
    animate5: {
      scale: [1, 1.5, 1],
      x: [0, 180, 0],
      y: [0, 90, 0],
      rotateZ: [0, 135, 0],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
    animate6: {
      scale: [1, 1.6, 1],
      x: [0, 200, 0],
      y: [0, -100, 0],
      rotateZ: [0, -135, 0],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  return (
    <div
      className="fixed top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none flex
       justify-center items-center filter blur-[100px] opacity-70 bg-gradient-to-br from-purple-500 via-indigo-600 to-pink-600"
    >
      <motion.div
        className="bg-gradient-to-r from-blue-500 to-green-400 w-[350px] h-[250px] rounded-full absolute shadow-lg"
        variants={circleVariants}
        animate="animate1"
      />
      <motion.div
        className="bg-gradient-to-r from-red-500 to-yellow-500 w-[360px] h-[260px] rounded-full absolute shadow-xl"
        variants={circleVariants}
        animate="animate2"
      />
      <motion.div
        className="bg-gradient-to-r from-teal-500 to-cyan-600 w-[370px] h-[270px] rounded-full absolute shadow-2xl"
        variants={circleVariants}
        animate="animate3"
      />
      <motion.div
        className="bg-gradient-to-r from-orange-500 to-pink-600 w-[380px] h-[280px] rounded-full absolute shadow-3xl"
        variants={circleVariants}
        animate="animate4"
      />
      <motion.div
        className="bg-gradient-to-r from-yellow-600 to-red-600 w-[390px] h-[290px] rounded-full absolute shadow-4xl"
        variants={circleVariants}
        animate="animate5"
      />
      <motion.div
        className="bg-gradient-to-r from-purple-700 to-blue-800 w-[400px] h-[300px] rounded-full absolute shadow-5xl"
        variants={circleVariants}
        animate="animate6"
      />
    </div>
  );
};

export default BlurBackground;
