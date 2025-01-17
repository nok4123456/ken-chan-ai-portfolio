import React from "react";
import { useInView } from "../hooks/useInView";
import CircularLogo from "./Icon";

type LeftColumnProps = {
  iconTitle: string;
  svg_icon: React.ReactNode;
};

type RightColumnProps = {
  title: string;
  subtitle: string;
  description: string;
  rowNumber: number;
};

type ProjectProps = {
  rightFirst: boolean;
  RightColumnProps: RightColumnProps;
  LeftColumnProps: LeftColumnProps;
};

// Left Column Component
const LeftColumn: React.FC<LeftColumnProps> = ({ iconTitle, svg_icon }) => (
  <div className="lg:w-1/3 flex flex-col items-center justify-center">
    <div className="w-32 h-32 mb-4">{svg_icon}</div>
    <h2 className="text-4xl font-bold tracking-wider">{iconTitle}</h2>
  </div>
);

// Right Column Component
const RightColumn: React.FC<RightColumnProps> = ({
  title,
  subtitle,
  description,
  rowNumber,
}) => {
  const [ref, isInView] = useInView({ threshold: 0.1 });

  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      className="lg:w-2/3 bg-[#000000] p-8 relative rounded-lg"
    >
      <span className="text-[#4a5568] text-sm">
        {String(rowNumber).padStart(2, "0")}_
      </span>
      <h3 className="text-[#4a5568] text-lg mb-4">{title}</h3>
      <h2
        className={`text-4xl font-bold mb-4 ${
          isInView ? "fade-in" : "opacity-0"
        }`}
      >
        {subtitle}
      </h2>
      <p
        className={`text-[#a0aec0] mb-8 text-xl ${
          isInView ? "slide-in" : "opacity-0"
        }`}
      >
        {description}
      </p>
      <div
        className={`relative pt-12 flex justify-center items-center  ${
          isInView ? "fade-in" : "opacity-0"
        }`}
      >
        <CircularLogo
          link={`/projects/${title}`}
          outSideString="MY PROJECT DETAIL•MY PROJECT DETAIL•"
          inSideString="😎"
        />
      </div>
    </div>
  );
};

// Project Component
const Project: React.FC<ProjectProps> = ({
  rightFirst,
  RightColumnProps: { title, subtitle, description, rowNumber },
  LeftColumnProps: { iconTitle, svg_icon },
}) => (
  <div className="min-w-full min-h-[calc(100vh-256px)] flex flex-col lg:flex-row gap-8 p-8">
    {rightFirst ? (
      <>
        <RightColumn
          title={title}
          subtitle={subtitle}
          description={description}
          rowNumber={rowNumber}
        />
        <LeftColumn svg_icon={svg_icon} iconTitle={iconTitle} />
      </>
    ) : (
      <>
        <LeftColumn svg_icon={svg_icon} iconTitle={iconTitle} />
        <RightColumn
          title={title}
          subtitle={subtitle}
          description={description}
          rowNumber={rowNumber}
        />
      </>
    )}
  </div>
);

export default Project;
