"use client";

import { Github, Linkedin } from "lucide-react";
import Link from "next/link";
import { TypeAnimation } from "react-type-animation";

export default function Page() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center p-8  bg-[#1e2235] text-white">
      <div className=" justify-center animate-pop-in">
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
            I am Ken Chan, an AI developer with approximately two years of
            experience. I specialize in full-stack development and data
            analytics, combining technical expertise with analytical skills to
            deliver innovative solutions.
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
    </div>
  );
}
