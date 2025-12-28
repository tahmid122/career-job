"use client";
import { motion } from "motion/react";
import { FaPlus } from "react-icons/fa6";

const AnimationsDiv = () => {
  return (
    <div>
      <motion.div
        animate={{
          translateY: ["-100px", "0px", "-100px"],
          translateX: ["500px", "0px", "500px"],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="h-8 w-8 rounded-full border-2 border-likeGreen absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%]"
      ></motion.div>
      <motion.div
        animate={{
          translateY: ["-50px", "0px", "-50px"],
          translateX: ["-200px", "0px", "-200px"],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="h-8 w-8 flex items-center justify-center rounded-full border-2 border-likeOrange absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%]"
      >
        <FaPlus className="text-white" />
      </motion.div>
    </div>
  );
};

export default AnimationsDiv;
