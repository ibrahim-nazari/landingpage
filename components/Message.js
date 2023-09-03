"use client";
import { motion } from "framer-motion";
import { staggerContainer, fadeIn, planetVariants } from "../utils/motion";
const Message = () => {
  return (
    <section className="relative z-10">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className="mx-auto flex lg:flex-row flex-col ga-8 w-[400px] h-[400px]"
      >
        <motion.div
          variants={planetVariants("left")}
          className="flex-1 flex justify-center items-center"
        >
          <img
            src="planet.png"
            alt="worl glob"
            className="w-[90%] h-[90%] object-cover rounded-full"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Message;
