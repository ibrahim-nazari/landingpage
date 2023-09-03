"use client";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "utils/motion";
import TypingText from "./TypingText";
import { ArrowDownIcon } from "@heroicons/react/24/solid";
const About = () => {
  return (
    <motion.div
      variants={staggerContainer}
      whileInView="show"
      initial="hidden"
      viewport={{ once: false, amount: 0.25 }}
      className="px-3 md:px-8 py-4 md:py-8 relative z-10 max-w-5xl mx-auto"
    >
      <div className="flex flex-col justify-center">
        <TypingText title="About section" />
      </div>
      <div className="flex flex-col justify-center relative">
        <motion.div
          variants={fadeIn("up", "tween", 0.2, 1)}
          className="my-10  font-normal sm:text-[32px] text-[20px] text-center text-white"
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque omnis
          ab voluptatem, nisi labore explicabo veniam, autem quam officiis,
          neque dolorum illum ex perspiciatis sint fugit unde repellendus velit
          ea!
        </motion.div>
      </div>
      <div className="flex flex-col justify-center">
        <motion.div
          variants={fadeIn("up", "tween", 0.5, 1)}
          className="text-center flex justify-center"
        >
          <ArrowDownIcon className="h-6 w-6 text-white " />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default About;
