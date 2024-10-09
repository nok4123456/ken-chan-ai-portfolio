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
      label: "AI and Machine Learning",
      description:
        "Advanced capabilities in developing machine learning models for predictive analytics in financial markets.",
    },
    {
      label: "Full Stack Web Development",
      description:
        "Proficient in front-end and back-end development, ensuring robust, scalable, and user-friendly applications.",
    },
    {
      label: "Big Data Analysis",
      description:
        "Expertise in handling large-scale data operations, from extraction and transformation to analysis and insights generation.",
    },
    {
      label: "Cloud Services (AWS)",
      description:
        " Skilled in integrating various AWS services to enhance application performance and scalability.",
    },
    {
      label: "Automated Trading Systems",
      description:
        "Deep understanding of the requirements and challenges of designing systems for automated trading, with a focus on reliability and efficiency.",
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
          Forex Forest
        </h1>
        <hr className="h-px w-full mb-8 text-white"></hr>
        <div className="space-y-8">
          <motion.h2 className="text-3xl font-bold mb-8" {...fadeIn}>
            Work Experience
          </motion.h2>

          <Card className="m-0 p-0 bg-[#1e2540] text-white border-none">
            <CardHeader>
              <CardTitle>Web / AI Developer at Forex Forest</CardTitle>
              <CardDescription className="text-gray-400 text-lg">
                Forex Forest stands as a leader in automated trading and AI
                solutions, committed to advancing the field of algorithmic
                trading through educational initiatives and innovative software
                development. The company&apos;s focus is on developing
                cutting-edge technology to empower traders with automated tools
                and comprehensive educational resources.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <h3 className="text-xl font-semibold mb-4">
                Key Responsibilities
              </h3>
              <ul className="list-disc pl-5 space-y-2 mb-6">
                <li>
                  <strong>AI Development and Software Engineering</strong> : Led
                  the design and implementation of advanced AI trading tools,
                  focusing on creating algorithms that can predict market trends
                  and execute trades with high accuracy. Developed educational
                  programs to help both novice and experienced traders
                  understand and utilize algorithmic trading effectively.
                </li>
                <li>
                  <strong>Data Analysis</strong>: Utilized statistical analysis
                  and machine learning techniques to analyze vast datasets,
                  improving the predictive accuracy of trading algorithms.
                  Regularly performed data cleansing, transformation, and
                  visualization to ensure data integrity and usability for
                  strategic decision-making.
                </li>
              </ul>

              <h3 className="text-xl font-semibold mb-4">Notable Projects</h3>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="gem4">
                  <AccordionTrigger className="text-lg">
                    Gem4.0 Web Application
                  </AccordionTrigger>
                  <AccordionContent className="text-lg">
                    <p className="mb-5">
                      <strong>Technologies Used:</strong> TypeScript, React,
                      NestJS
                    </p>
                    <p className="mb-5">
                      <strong>Project Overview:</strong> Developed a robust web
                      platform enabling users to manage Virtual Private Servers
                      (VPS) designed for algorithmic trading. Integrated AWS
                      services to allow users to deploy and control VPS
                      instances directly through the platform, using points
                      accrued on the website.
                    </p>
                    <p className="mb-5">
                      <strong>Key Features:</strong>
                      <ul className="list-disc pl-5 space-y-2 mb-6 mt-2">
                        <li>
                          <strong>User Authentication:</strong> Implemented
                          secure login and registration mechanisms using
                          industry-standard encryption algorithms.
                        </li>
                        <li>
                          <strong>VPS Management:</strong> Enabled users to
                          deploy, configure, and control VPS instances remotely
                          through a user-friendly interface.
                        </li>
                        <li>
                          <strong>
                            Point system implementation for VPS deployment and
                            management.:
                          </strong>
                          Implemented a points system for users to deploy and
                          manage VPS instances, with points accrued through
                          successful trades and other activities on the
                          platform.
                        </li>
                        <li>
                          <strong>Resource Monitoring:</strong> Provided
                          real-time monitoring and control over VPS resources,
                          including CPU, RAM, and disk space usage.
                        </li>
                      </ul>
                    </p>
                    <p>
                      <strong>Impact:</strong> Streamlined the process of VPS
                      management for users, significantly enhancing user
                      experience and operational efficiency for algorithmic
                      trading activities.
                    </p>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="trading-signal">
                  <AccordionTrigger className="text-lg">
                    Trading Signal Analysis Page
                  </AccordionTrigger>
                  <AccordionContent className="text-lg">
                    <p className="mb-5">
                      <strong>Technologies Used:</strong> AWS Glue, PySpark
                    </p>
                    <p className="mb-5">
                      <strong>Project Overview:</strong> Created a dynamic page
                      where users can input trading account details to access
                      real-time analytics on trading history and account
                      statistics. Implemented periodic scans and big data
                      analysis using PySpark within AWS Glue jobs to generate
                      detailed user statistics and trading insights.
                    </p>
                    <p className="mb-5">
                      <strong>Key Features:</strong>
                      <ul className="list-disc pl-5 space-y-2 mb-6 mt-2">
                        <li>
                          <strong>Real-Time Data Analysis:</strong> Utilized
                          PySpark within AWS Glue jobs to perform real-time data
                          analysis and generate detailed user statistics.
                        </li>
                        <li>
                          <strong>User-Friendly Interface:</strong>
                          Designed a user-friendly interface for users to input
                          their trading account details and access analytics.
                        </li>
                      </ul>
                    </p>
                    <p>
                      <strong>Impact:</strong> Provided users with critical
                      insights into their trading activities, fostering better
                      decision-making and strategy development in trading.
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
