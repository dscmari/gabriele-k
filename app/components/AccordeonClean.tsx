"use client";
import { Cpu, LineChart, Target, Wrench } from "lucide-react";
import { data } from "motion/react-client";

type Props = {
  className?: string;
};

export default function AccordeonClean({ className }: Props) {
  const home = [
    {
      id: "impact-1",
      icon: <Target />,
      bullet: "Hypnose",
      text: "text-1",
    },
    {
      id: "impact-2",
      icon: <Wrench />,
      bullet: "Hypnose",
      text: "text-1",
    },
    {
      id: "impact-3",
      icon: <Cpu />,
      bullet: "Hypnose",
      text: "text-1",
    },
    {
      id: "impact-4",
      icon: <LineChart />,
      bullet: "Hypnose",
      text: "text-1",
    },
  ];

  return (
    <div className={`flex flex-col gap-4 ${className}`}>
      {home.map((e, index) => (
        <div key={e.id} className="group border-b border-slate-300">
          <input
            type="checkbox"
            id={e.id}
            className="peer hidden"
            defaultChecked={index === 0}
          />
          <label
            htmlFor={e.id}
            className="flex items-center gap-4 p-4 cursor-pointer font-semibold select-none"
          >
            {e.icon}
            <h2 className="pointer-events-none !text-base lg:!text-xl !m-0">
              {e.bullet}
            </h2>
          </label>
          <div className="grid grid-rows-[0fr] transition-[grid-template-rows] duration-500 ease-in-out group-has-[:checked]:grid-rows-[1fr]">
            <div className="overflow-hidden">
              <div className="p-4 lg:pl-12 dark:bg-darkmode-blue">
                <p className="whitespace-pre-line font-light">{e.text}</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
