"use client";

import CircularLogo from "../components/Icon";
import WordFlow from "../components/Word-flow";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { motion } from "framer-motion";

interface EnhancedParagraphsProps {
  paragraphs: string[];
}

export default function Page() {
  const aboutRef = useRef(null);
  const personalRef = useRef(null);
  const isAboutInView = useInView(aboutRef);
  const isPersonalInView = useInView(personalRef);
  const personal_paragraphs = [
    "Programming captivates me as a math enthusiast and passionate coder who delves into algorithms in my spare time. My love for numbers and logic drives me to continuously engage with new coding challenges, enhancing my knowledge and skills in the ever-evolving tech landscape.",
    "Bouldering brings joy into my life beyond the digital world. This sport not only tests my physical strength but also hones my problem-solving skills as I tackle complex climbing routes. My affinity for overcoming challenges is mirrored in my musical endeavors as well.",
    "Drumming is a thrilling part of my musical journey. The rhythmic beats and required coordination are both exhilarating and rewarding. When I'm not coding or climbing, I'm often found immersed in music, practicing the drums or exploring new genres and sounds. These diverse activities nurture my creativity and maintain a balance between my intellectual, physical, and artistic expressions.",
  ];

  const wordVariants = {
    initial: { opacity: 0, y: 20 },
    animate: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
    hover: { scale: 1.1, color: "#3b82f6", transition: { duration: 0.2 } },
  };
  function EnhancedParagraphs(paragraphs: EnhancedParagraphsProps) {
    return (
      <div className="mx-auto p-6">
        {paragraphs.paragraphs.map((paragraph, index) => {
          const words = paragraph.split(" ");
          const firstWord = words[0];
          const restOfParagraph = words.slice(1).join(" ");

          return (
            <p key={index} className="mb-6 leading-relaxed">
              <motion.span
                className="inline-block font-bold text-2xl bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent"
                variants={wordVariants}
                initial="initial"
                animate="animate"
                whileHover="hover"
              >
                {firstWord}
              </motion.span>
              <span className="ml-2">{restOfParagraph}</span>
            </p>
          );
        })}
      </div>
    );
  }

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
          <EnhancedParagraphs paragraphs={personal_paragraphs} />
        </div>
      </div>
    </div>
  );
}
