"use client";
import { useState } from "react";
import TypingText from "./TypingText";
import { motion } from "framer-motion";
import { staggerContainer } from "../utils/motion";
import TextTitle from "./TextTitle";
import ExploreCard from "./ExploreCard";
import { projects } from "../utils/constant";
const Explor = () => {
  const [active, setActive] = useState(1);
  return (
    <section className="px-3 md:px-8 py-4 md:py-8 relative z-10 max-w-7xl mx-auto">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        className="flex flex-col justify-center mx-auto"
      >
        <TypingText title="Portfolio" />
        <TextTitle title="Explor my project" />
        <div className="flex flex-col lg:flex-row min-h-[70vh] gap-5 mt-[50px]">
          {projects.map((project, index) => (
            <ExploreCard
              key={project.id}
              {...project}
              index={index}
              active={active}
              handleClick={setActive}
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Explor;
