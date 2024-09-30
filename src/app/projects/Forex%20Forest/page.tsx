"use client";

import CircularLogo from "../../components/Icon";

import { useInView } from "framer-motion";
import { useRef } from "react";
import Project from "../../components/Project";
export default function Page() {
  const aboutRef = useRef(null);
  const personalRef = useRef(null);
  const isAboutInView = useInView(aboutRef);
  const isPersonalInView = useInView(personalRef);

  return (
    <div className="min-h-screen min-w-full flex flex-col justify-center items-center p-8 bg-[#1e2540] text-white">
      <CircularLogo
        link="/"
        outSideString="•Home •Home •Home •Home •Home•Home"
        inSideString="[KC]"
      />
      <div className="container mx-auto px-4 py-12">
        <h1
          ref={aboutRef}
          className="text-5xl font-bold mb-4"
          style={{
            transform: isAboutInView ? "none" : "translateX(-200px)",
            opacity: isAboutInView ? 1 : 0,
            transition: "transform 0.5s ease-out, opacity 0.5s ease-out",
          }}
        >
          Forex Forest
        </h1>
        <div className="h-px bg-white w-full mb-8"></div>
        <div className="space-y-6 mb-5 w-2/3 text-2xl text-slate-300">
          <p>
            Forex Forest is a company that specializes in automated trading and
            AI solutions. They are dedicated to advancing algorithmic trading
            education and software development. My role as an AI developer,
            software engineer, and data analyst involves crafting sophisticated
            AI trading tools and educational programs. This experience has honed
            my skills in the design and implementation of automated trading
            systems, providing a deeper insight into the evolving landscape of
            AI-driven financial technologies.
          </p>
        </div>
      </div>
    </div>
  );
}
