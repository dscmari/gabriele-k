import { div } from "motion/react-client";
import React from "react";

type Qualification = {
    date: string
    title: string
    description: string
}

type Props = {
  className?: string
  qualifications:  Qualification []
};

export default function Qualifications({ className, qualifications }: Props) {


  return (
    <div>
      {/* mobile */}
      <div className="lg:hidden flex flex-col gap-4 mt-8">
        {qualifications.map((e, index) => (
          <div key={index} className="flex flex-col">
            <span className="font-semibold text-custom-blue">{e.title}</span>
            <span className="font-semibold text-custom-blue">{e.date}</span>
            <p className="pt-2">{e.description}</p>
          </div>
        ))}
      </div>
      {/* desktop */}
      <div className={`hidden lg:flex flex-col gap-4 ${className}`}>
        {qualifications.map((e, index) => (
          <div key={index} className="flex flex-col gap-2">
            <div className="flex items-center justify-between text-custom-blue font-bold text-lg">
              <span>{e.title}</span>
              <span>{e.date}</span>
            </div>
            <p className="max-w-lg font-light">{e.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
