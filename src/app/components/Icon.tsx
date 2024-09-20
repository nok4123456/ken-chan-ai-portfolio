import React from "react";
import Link from "next/link";

type CircularLogoProps = {
  link: string;
  outSideString: string;
  inSideString: string;
};

const CircularLogo: React.FC<CircularLogoProps> = ({
  link,
  outSideString,
  inSideString,
}) => {
  return (
    <div className="w-40 h-40 relative">
      <Link href={link}>
        <svg
          className="w-full h-full"
          viewBox="0 0 100 100"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <path
              id="circle"
              d="M50,50 m-30,0 a30,30 0 1,1 60,0 a30,30 0 1,1 -60,0"
            />
          </defs>
          <circle
            cx="50"
            cy="50"
            r="45"
            fill="none"
            stroke="#ffffff"
            strokeWidth="0.5"
          />
          <g className="rotating-text">
            <text fill="#ffffff" fontSize="8.8">
              <textPath xlinkHref="#circle">{outSideString}</textPath>
            </text>
          </g>
          <text
            x="50"
            y="54"
            textAnchor="middle"
            fill="#ffffff"
            fontSize="16"
            fontWeight="bold"
          >
            {inSideString}
          </text>
        </svg>
      </Link>
    </div>
  );
};

export default CircularLogo;
