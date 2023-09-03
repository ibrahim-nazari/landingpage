"use client";
import { motion } from "framer-motion";
import { textVariant2 } from "utils/motion";
const TextTitle = ({ title }) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      variants={textVariant2}
      className="mt-[8px]  font-bold md:text-[64px] text-[40px] text-white text-center"
    >
      {title}
    </motion.div>
  );
};

export default TextTitle;
