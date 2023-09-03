"use client";
import { motion } from "framer-motion";
import { fadeIn } from "utils/motion";
import { HandRaisedIcon } from "@heroicons/react/24/solid";
const ExploreCard = ({ id, name, image, index, active, handleClick }) => {
  return (
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className={`relative ${
        active === id ? " lg:flex-[3.5] flex-10 " : "lg:flex-[0.5] flex-[2]"
      } flex items-center justify-center min-w-[170px] h-[700px] transition-[flex] duration-[0.75s] ease-out-flex cursor-pointer`}
      onClick={() => handleClick(id)}
    >
      <img
        src={image}
        className="absolute w-full h-full object-cover rounded-[24px]"
      />
      {active != id ? (
        <h3 className="font-semibold sm:text-[26px] text-[18px] text-white absolute z-1 lg:bottom-20 lg:rotate-[-90deg] lg:origin-[0,0]">
          {name}
        </h3>
      ) : (
        <div className="absolute bottom-0 p-8 justify-start w-full flex-col bg-[rgba(0,0,0,0.5)] rounded-b-[24px]">
          <div className="w-[60px] h-[60px] rounded-[24px] mb-[25px] glassmorphism ">
            <HandRaisedIcon className="text-white h-20 w-20 " />
          </div>
          <p className="font-normal text-[16px] leading-[20px] text-white uppercase">
            Open the Project
          </p>
          <h2 className="mt-[24px] font-semibold sm:text-[32px] text-[24px] text-white">
            {name}
          </h2>
        </div>
      )}
    </motion.div>
  );
};

export default ExploreCard;
