import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Explor from "../components/Explor";
import Message from "../components/Message";
const page = () => {
  return (
    <div className="bg-gradient-to-r from-sky-700 via-slate-600 to-indigo-900 overflow-x-hidden h-screen">
      <Navbar />
      <Hero />
      <About />
      <Explor />
      <Message />
    </div>
  );
};

export default page;
