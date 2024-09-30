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
    <div className="min-h-screen flex flex-col justify-center items-center p-8 bg-[#1e2540] text-white">
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
          Work
        </h1>
        <div className="h-px bg-white w-full mb-8"></div>
        <div className="space-y-6 mb-5 w-2/3 text-2xl text-slate-300">
          <p>
            Over the years, I have been very fortunate to have worked with some
            amazing people & companies on some interesting projects. Below are a
            few of the companies I have had the pleasure working with.
          </p>
        </div>
        <Project
          rightFirst={false}
          RightColumnProps={{
            title: "iASPEC",
            subtitle: "Enhancing Fintech and Cybersecurity Solutions at iASPEC",
            description:
              "During my time at iASPEC, I had the opportunity to work with a dedicated team focused on innovative solutions in fintech and cybersecurity. My role involved contributing to projects such as the Enterprise Fast Payment System and the Digital Signature for e-Cheque, where I gained valuable experience in developing efficient payment services and secure digital transaction technologies. This experience not only enhanced my technical skills but also deepened my understanding of the fintech industry's dynamic landscape.",
            rowNumber: 1,
          }}
          LeftColumnProps={{
            svg_icon: <img className="filter-white" src="/iASPEC.svg" />,
            iconTitle: "iASPEC",
          }}
        />
        {/* Second Project cards */}
        <Project
          rightFirst={true}
          RightColumnProps={{
            title: "Forex Forest",
            subtitle:
              "Pioneering Automated Trading and AI Solutions at Forex Forest",
            description:
              "At Forex Forest, I am part of a forward-thinking team dedicated to advancing algorithmic trading education and software development. My role as an AI developer, software engineer, and data analyst involves crafting sophisticated AI trading tools and educational programs. This experience has honed my skills in the design and implementation of automated trading systems, providing a deeper insight into the evolving landscape of AI-driven financial technologies.",
            rowNumber: 2,
          }}
          LeftColumnProps={{
            svg_icon: <img src="/FFlogo-icon-14.png" />,
            iconTitle: "Forex Forest",
          }}
        />
      </div>
    </div>
  );
}
