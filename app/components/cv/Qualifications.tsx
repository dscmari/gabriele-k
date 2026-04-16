import { div } from "motion/react-client";
import React from "react";

type Props = {
  className?: string;
};

export default function Qualifications({ className }: Props) {
  const qualifications = [
    {
      date: "ab 2021",
      title: "Virtual Reality Brille",
      description:
        "Masterclass für Einsatz bei Psychotherapie & Coaching – Carola Epple, Lab E GmbH, Essslingen",
    },
    {
      date: "ab 2020",
      title: "Psychotherapeutische Fachausbildungen für Heilpraktiker (TMI)",
      description:
        "EMDR, EMDR bei Ängsten & Phobien Verhaltenstherapie Therapeutische Meditation",
    },
    {
      date: "ab 2018",
      title: "Hypnose (TMI)",
      description:
        "Grundkurs & Advanced Level, Medizinische Heilhypnose, Hypnose-Coaching",
    },
    {
      date: "2013 - 2014",
      title: "Organisationsentwicklung / Change Management",
      description:
        "Beraterin für Organisationsentwicklung und Change Management – Steinbeis-Hochschule Berlin",
    },
    {
      date: "2012 - 2013",
      title: "Wirtschaftsmediation",
      description: "Wirtschaftsmediatorin – Steinbeis-Hochschule Berlin",
    },
  ];

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
      <div className={`hidden lg:block flex flex-col gap-4 ${className}`}>
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
