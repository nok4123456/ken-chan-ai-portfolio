"use client";

import { Github, Linkedin } from "lucide-react";
import Link from "next/link";
import { TypeAnimation } from "react-type-animation";
import Project from "./components/Project";
import CircularLogo from "./components/Icon";

export default function Page() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center p-8 bg-[#1e2540] text-white">
      <CircularLogo
        link="/projects"
        outSideString=" MYPROJECT• MYPROJECT• MYPROJECT•"
        inSideString="[KC]"
      />
      <div className=" flex flex-col items-center justify-center min-h-[calc(100vh-256px)]  animate-pop-in">
        <h1 className="text-8xl font-bold mb-2">
          Ken Chan<span className="text-purple-500">.</span>
        </h1>
        <h2 className="text-4xl text-purple-400 mb-4">
          <TypeAnimation
            sequence={[
              "AI developer 🤖",
              2000,
              "Data scientist 🧑‍💻",
              2000,
              "Software engineer 🧑‍🔧",
              2000,
              "Full-stack developer 💻",
              2000,
            ]}
            cursor={true}
            repeat={Infinity}
            wrapper="p"
          />
        </h2>
        <div className="flex space-x-4 mb-8">
          <Link
            href="https://github.com/nok4123456"
            className="text-white hover:text-purple-400"
          >
            <Github size={24} />
            <span className="sr-only">GitHub</span>
          </Link>
          <Link
            href="https://www.linkedin.com/in/chan-ken-863348236/"
            className="text-white hover:text-purple-400"
          >
            <Linkedin size={24} />
            <span className="sr-only">LinkedIn</span>
          </Link>
          <Link
            href="https://leetcode.com/u/nok4123456/"
            className="text-white hover:text-purple-400"
          >
            <img
              src="/leetcode-svgrepo-com.svg"
              className="w-6 svg-hover-effect"
            />
            <span className="sr-only">LeetCode</span>
          </Link>
        </div>
        <div className="space-y-4 max-w-2xl">
          <h3 className="text-4xl font-semibold">Hello</h3>
          <p className="text-2xl text-gray-300">
            I am Ken Chan, an AI developer with two years of experience. I
            specialize in full-stack development and data analytics, combining
            technical expertise with analytical skills to deliver innovative
            solutions.
          </p>
          <p className="text-xl text-gray-300">
            You can connect with me on{" "}
            <Link
              href="https://www.linkedin.com/in/chan-ken-863348236/"
              className="text-purple-400 hover:underline"
            >
              LinkedIn
            </Link>{" "}
            , and find out more about{" "}
            <Link href="/projects" className="text-purple-400 hover:underline">
              my work
            </Link>
            .
          </p>
        </div>
      </div>
      {/* The working experience */}
      <div className="mt-16 flex flex-col items-center justify-center min-w-full">
        <h1 className="text-4xl font-bold mb-12">Working experience</h1>
        {/* First Project cards */}
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
