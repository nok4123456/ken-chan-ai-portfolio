import React from "react";

type LeftColumnProps = {
  pathData: string;
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
const LeftColumn: React.FC<LeftColumnProps> = ({ pathData }) => (
  <div className="lg:w-1/3 flex flex-col items-center justify-center">
    <div className="w-32 h-32 mb-4">
      <svg viewBox="0 0 100 100" className="w-full h-full fill-current">
        <path d={pathData} />
      </svg>
    </div>
    <h2 className="text-4xl font-bold tracking-wider">Testing</h2>
  </div>
);

// Right Column Component
const RightColumn: React.FC<RightColumnProps> = ({
  title,
  subtitle,
  description,
  rowNumber,
}) => (
  <div className="lg:w-2/3 bg-[#000000] p-8 relative">
    <span className="text-[#4a5568] text-sm">
      {String(rowNumber).padStart(2, "0")}_
    </span>
    <h3 className="text-[#4a5568] text-lg mb-4">{title}</h3>
    <h2 className="text-4xl font-bold mb-4">{subtitle}</h2>
    <p className="text-[#a0aec0] mb-8">{description}</p>
  </div>
);

// Project Component
const Project: React.FC<ProjectProps> = ({
  rightFirst,
  RightColumnProps: { title, subtitle, description, rowNumber },
  LeftColumnProps: { pathData },
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
        <LeftColumn pathData={pathData} />
      </>
    ) : (
      <>
        <LeftColumn pathData={pathData} />
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
