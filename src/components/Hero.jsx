import React from "react";
import { motion } from "framer-motion";
import { HERO_CONTENT } from "../constants";
import jason from "../assets/nnnn.jpg";
import cvFile from "../assets/abuzar01-Cv....pdf";

const textVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const containerVariants = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const imageVariants = {
  hidden: { clipPath: "inset(0 50% 0 50%)" },
  visible: {
    clipPath: "inset(0 0% 0 0%)",
    transition: { duration: 1.2, ease: "easeInOut" },
  },
};

const Hero = () => {
  return (
    <section>
      <div className="relative z-0 min-h-screen flex flex-wrap flex-col md:flex-row items-center justify-center text-white">
        <motion.div
          className="w-full md:w-1/2 p-8 pt-24" // Adjust padding-top for spacing below navbar
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <motion.h1
            className="text-3xl md:text-5xl lg:text-6xl font-semibold my-14"
            variants={textVariants}
          >
            {HERO_CONTENT.greeting}
          </motion.h1>

          <motion.p
            className="text-lg md:text-xl lg:text-2xl mb-4"
            variants={textVariants}
          >
            {HERO_CONTENT.introduction}
          </motion.p>

          <motion.p
            className="text-lg md:text-xl lg:text-2xl"
            variants={textVariants}
          >
            {HERO_CONTENT.description}
          </motion.p>

          <motion.a
            className="bg-stone-50 text-stone-900 p-3 lg:p-4 mt-8 inline-block rounded-2xl"
            href={cvFile}
            download="AbuzarCV.pdf"
            rel="noopener noreferrer"
            target="_blank"
            variants={textVariants}
          >
            Download My CV
          </motion.a>
        </motion.div>

        <motion.div
          className="w-full md:w-1/2 p-8 mt-10" // Added margin-top to push image down
          initial="hidden"
          animate="visible"
          variants={imageVariants}
        >
          <img
            src={jason}
            alt="Abuzar"
            width={650}
            height={650}
            className="rounded-3xl"
          />
        </motion.div>
      </div>

      <style jsx>{`
        @media (max-width: 768px) {
          .w-full.md\\:w-1\\/2.p-8 {
            margin-top: -40px; /* Adjust this value to move the image up */
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;
