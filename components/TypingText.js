"use client";
import { motion } from "framer-motion";
import { textContainer, textVariant2 } from "../utils/motion";
const TypingText = ({ title }) => {
  return (
    <motion.p
      variants={textContainer}
      className="font-normal text-[14px] text-white text-center my-20"
    >
      {Array.from(title).map((letter, index) => (
        <motion.span variants={textVariant2} key={index}>
          {letter == " " ? "\u00A0" : letter}
        </motion.span>
      ))}
    </motion.p>
  );
};

export default TypingText;
