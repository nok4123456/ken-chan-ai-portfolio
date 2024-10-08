import React from "react";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

function BackButton() {
  return (
    <div className="relative inline-block ">
      <Link
        href="/projects"
        className="flex items-center text-white hover:text-white text-sm font-medium group"
      >
        <ArrowLeft className="w-4 h-4 mr-2" />
        Back to all work
        <span className="absolute bottom-0 left-0 w-full h-0.5 bg-white transform scale-x-0 origin-left transition-transform duration-300 ease-out group-hover:scale-x-100"></span>
      </Link>
    </div>
  );
}

export default BackButton;
