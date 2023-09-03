"use client";
import { motion } from "framer-motion";
import { slideIn, staggerContainer, textVariant } from "../utils/motion";
const Hero = () => {
  return (
    <section className="px-3 md:px-8 py-4 md:py-8 overflow-visible sm:h-[500px] h-[350px]">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className="mx-auto flex flex-col w-[1200px] "
      >
        <div className="flex gap-1 justify-center">
          <motion.h2
            variants={textVariant(1.1)}
            className="text-3xl font-bold text-white text-center uppercase"
          >
            Awesome
          </motion.h2>
          <motion.h2
            variants={textVariant(1.2)}
            className="text-3xl font-bold text-white text-center uppercase"
          >
            Design
          </motion.h2>
        </div>
        <motion.div
          variants={slideIn("right", "tween", 0.2, 1)}
          className="relative w-full md:-mt-[20px] -mt-[12px]"
        >
          <div className="absolute w-full h-[300px] rounded-top-[140px] z-[0] -top-[30px]">
            <img
              alt="hero bg"
              className="w-full sm:h-[500px] h-[350px] object-cover rounded-tl-[140px] z-10 relative"
              src="heroBg.jpg"
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
