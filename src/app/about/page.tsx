"use client";

import CircularLogo from "../components/Icon";
import WordFlow from "../components/Word-flow";
import { useInView } from "framer-motion";
import { useRef } from "react";

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
          About
        </h1>
        <div className="h-px bg-white w-full mb-8"></div>
        <div className="space-y-6 mb-5 w-2/3 text-2xl text-slate-300">
          <p>
            Hello, I'm Ken Chan. I'm an AI Developer specializing in full-stack
            development and data analytics. With two years of experience, I
            combine technical expertise with analytical skills to deliver
            innovative solutions. My toolkit includes TypeScript, JavaScript,
            Python, TensorFlow, Langchain, and Scikit-learn.
          </p>
          <p>
            You can find me crafting intelligent applications and diving deep
            into data insights. I'm passionate about harnessing the power of AI
            to solve complex problems and am always eager to learn new
            technologies and improve my skills. Currently, I'm exploring
            advanced machine learning techniques and expanding my knowledge in
            cloud-based AI solutions.
          </p>
        </div>
        <WordFlow />
        <h1
          ref={personalRef}
          className="text-5xl font-bold mb-4"
          style={{
            transform: isPersonalInView ? "none" : "translateX(-200px)",
            opacity: isPersonalInView ? 1 : 0,
            transition: "transform 0.5s ease-out, opacity 0.5s ease-out",
          }}
        >
          Personal
        </h1>
        <div className="h-px bg-white w-full mb-8"></div>
        <div className="space-y-6 mb-5 w-2/3 text-2xl text-slate-300">
          <p>
            I am a math enthusiast and a passionate programmer who loves to dive
            into the world of algorithms and code in my free time. My
            fascination with numbers and logic often leads me to explore new
            programming challenges, constantly pushing myself to learn and grow
            in the field of technology.
          </p>
          <p>
            Beyond the digital realm, I find joy in bouldering, a sport that not
            only tests my physical strength but also sharpens my problem-solving
            skills as I navigate intricate climbing routes. This love for
            challenges extends to my musical pursuits as well.
          </p>
          <p>
            Music has always been a significant part of my life, and I am
            currently on an exciting journey of learning to play the drums. The
            rhythmic beats and the coordination it demands are both exhilarating
            and rewarding. When I'm not engrossed in coding or climbing, you'll
            often find me immersed in music, either practicing the drums or
            exploring new genres and sounds. These activities collectively fuel
            my creativity and keep my mind engaged, allowing me to balance my
            intellectual pursuits with physical and artistic expression.
          </p>
        </div>
      </div>
    </div>
  );
}
