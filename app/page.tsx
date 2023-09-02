import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
const page = () => {
  return (
    <div className="bg-gradient-to-r from-sky-700 via-slate-600 to-indigo-900 overflow-hidden h-screen">
      <Navbar />
      <Hero />
    </div>
  );
};

export default page;
