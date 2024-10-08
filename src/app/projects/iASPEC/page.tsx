"use client";

import CircularLogo from "../../components/Icon";
import { useState } from "react";
import { useInView } from "framer-motion";
import { useRef } from "react";
import BackButton from "../../components/BackButton";
import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function Page() {
  const aboutRef = useRef(null);
  const personalRef = useRef(null);
  const isAboutInView = useInView(aboutRef);
  const isPersonalInView = useInView(personalRef);
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };

  const skills = [
    {
      label: "Java and JavaScript Development",
      description:
        "Proficient in using Java and JavaScript for developing robust financial software solutions.",
    },
    {
      label: "Spring Framework",
      description:
        "Experienced in using Spring, Spring MVC, and Spring Boot for building scalable backend services.",
    },
    {
      label: "Hibernate and jQuery",
      description:
        "Skilled in using Hibernate for ORM and jQuery for dynamic web applications.",
    },
  ];

  return (
    <div className="min-h-screen min-w-full flex flex-col justify-center items-center p-8 bg-[#1e2540] text-white">
      <CircularLogo
        link="/"
        outSideString="•Home •Home •Home •Home •Home•Home"
        inSideString="[KC]"
      />
      <div className="container mx-auto px-4 py-12">
        <BackButton />
        <h1
          ref={aboutRef}
          className="text-5xl font-bold mb-4 pt-3"
          style={{
            transform: isAboutInView ? "none" : "translateX(-200px)",
            opacity: isAboutInView ? 1 : 0,
            transition: "transform 0.5s ease-out, opacity 0.5s ease-out",
          }}
        >
          iASPEC Software Co., Ltd
        </h1>
        <hr className="h-px w-full mb-8 text-white"></hr>
        <div className="space-y-8">
          <motion.h2 className="text-3xl font-bold mb-8" {...fadeIn}>
            Work Experience
          </motion.h2>

          <Card className="m-0 p-0 bg-[#1e2540] text-white border-none">
            <CardHeader>
              <CardTitle>Backend Developer at iASPEC</CardTitle>
              <CardDescription className="text-gray-400 text-lg">
                iASPEC is a leader in software development, specializing in
                cloud services and enterprise solutions. The company is
                committed to delivering innovative software products and
                services.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <h3 className="text-xl font-semibold mb-4">
                Key Responsibilities
              </h3>
              <ul className="list-disc pl-5 space-y-2 mb-6">
                <li>
                  <strong>Software Design and Development</strong>: Engaged in
                  the design and development of software products in the finance
                  sector using Java and JavaScript, ensuring robust and
                  efficient solutions.
                </li>
                <li>
                  <strong>EnterpriseConnect FPS Maintenance</strong>:
                  Contributed to the development and maintenance of cross-border
                  EnterpriseConnect FPS for Mizuho Bank, one of Japan's largest
                  banks.
                </li>
              </ul>

              <h3 className="text-xl font-semibold mb-4">Notable Projects</h3>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="project1">
                  <AccordionTrigger className="text-lg">
                    Cross-Border Payment System
                  </AccordionTrigger>
                  <AccordionContent className="text-lg">
                    <p className="mb-5">
                      <strong>Technologies Used:</strong> Spring, Spring MVC,
                      Spring Boot, Hibernate, jQuery
                    </p>
                    <p className="mb-5">
                      <strong>Project Overview:</strong> Developed and
                      maintained a cross-border payment system for Mizuho Bank,
                      enhancing international transaction capabilities and
                      compliance.
                    </p>
                    <p className="mb-5">
                      <strong>Key Features:</strong>
                      <ul className="list-disc pl-5 space-y-2 mb-6 mt-2">
                        <li>
                          <strong>Secure Transactions:</strong> Implemented
                          secure transaction protocols to ensure data integrity
                          and compliance with international standards.
                        </li>
                        <li>
                          <strong>Real-Time Processing:</strong> Enabled
                          real-time processing of cross-border payments,
                          improving efficiency and customer satisfaction.
                        </li>
                      </ul>
                    </p>
                    <p>
                      <strong>Impact:</strong> Enhanced the bank's ability to
                      process international payments, leading to increased
                      customer trust and satisfaction.
                    </p>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>

              <h3 className="text-xl font-semibold mt-6 mb-4">
                Skills Enhanced
              </h3>
              <div className="flex flex-wrap gap-2 relative">
                {skills.map((skill) => (
                  <div
                    key={skill.label}
                    onMouseEnter={() => setHoveredSkill(skill.description)}
                    onMouseLeave={() => setHoveredSkill(null)}
                  >
                    <Badge variant="secondary">{skill.label}</Badge>
                  </div>
                ))}
              </div>
              {hoveredSkill && (
                <div className="absolute bg-white text-black p-2 border rounded shadow-lg mt-2">
                  {hoveredSkill}
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
