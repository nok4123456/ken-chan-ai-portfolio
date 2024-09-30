import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const words = [
  "CSS",
  "Tailwind CSS",
  "JavaScript",
  "HTML",
  "React",
  "NestJS",
  "Next",
  "Typescript",
  "Java",
  "Spring Boot",
  "Spring MVC",
  "Node.js",
  "Express",
  "SQL",
  "Python",
  "Git",
  "AWS",
  "TensorFlow",
  "Langchain",
  "Scikit-learn",
  "Keras",
  "Hugging Face",
  "Docker",
  "Github Actions",
  "MongoDB",
];

type Position = {
  x: number;
  y: number;
  fontSize: number;
  color: string;
};

export default function WordFlow() {
  const [positions, setPositions] = useState<Position[]>([]);

  useEffect(() => {
    // Generate random positions and styles once
    const initialPositions = words.map(() => ({
      x: Math.random() * 80,
      y: Math.random() * 80,
      fontSize: Math.random() * 2 + 1,
      color: `rgba(${Math.random() * 155 + 100}, ${
        Math.random() * 155 + 100
      }, ${Math.random() * 155 + 100}, 0.8)`,
    }));
    setPositions(initialPositions);
  }, []);

  return (
    <div className="relative w-full min-h-[calc(100vh-256px)] overflow-hidden">
      {words.map((word, index) => (
        <motion.div
          key={word}
          className="absolute text-white text-2xl font-bold whitespace-nowrap"
          initial={{ x: "0%", y: "0%" }}
          animate={{
            x: `${positions[index]?.x}%`,
            y: `${positions[index]?.y}%`,
          }}
          transition={{
            duration: 5 + Math.random() * 5,
            repeat: Infinity,
            repeatType: "reverse",
            ease: `${Math.random() > 0.5 ? "easeInOut" : "linear"}`,
          }}
          style={{
            left: `${(index / words.length) * 80}%`,
            top: `${positions[index]?.y}%`,
            fontSize: `${positions[index]?.fontSize}rem`,
            color: positions[index]?.color,
          }}
        >
          {word}
        </motion.div>
      ))}
    </div>
  );
}
