"use client";
import { motion } from "framer-motion";
import { navVariants } from "../utils/motion";
import {
  MagnifyingGlassIcon,
  Bars3BottomRightIcon,
} from "@heroicons/react/24/solid";
const Navbar = () => {
  return (
    <motion.div
      variants={navVariants}
      initial="hidden"
      whileInView="show"
      className="py-8 relative px-3 md:px-8"
    >
      <div className="flex justify-between items-center text-white">
        <button>
          <MagnifyingGlassIcon className="h-6 w-6" />
        </button>
        <h3 className="font-bold text-2xl text-white ">Landing page design</h3>
        <button>
          <Bars3BottomRightIcon className="h-6 w-6 text-white" />
        </button>
      </div>
    </motion.div>
  );
};

export default Navbar;
