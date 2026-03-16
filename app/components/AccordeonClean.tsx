"use client";
import { Frown, OctagonAlert, Shell, Sun } from "lucide-react";

type Props = {
  className?: string;
};

export default function AccordeonClean({ className }: Props) {
  const home = [
    {
      id: "1",
      icon: <OctagonAlert />,
      bullet: "Höheres gesundheitliches Risiko",
      text: "Die Konzentration leidet und das Risiko für Herz-Kreislauf-Erkrankungen und Diabetes steigt. Dazu kommen vermehrt psychische Erkrankungen wie Burnout und Depressionen.",
    },

    {
      id: "2",
      icon: <Frown />,
      bullet: "Vermehrt emotionale Probleme",
      text: "Emotionale Auswirkungen wie Reizbarkeit und Angstzustände wirken sich auf die Familie, die Partnerschaft und das Arbeitsleben aus.",
    },
        {
      id: "3",
      icon: <Sun />,
      bullet: "Lebensqualität zurückgewinnen",
      text: "Zusammen finden wir heraus, welche neuen Gedanken oder Verhaltensweisen hilfreich für Sie sind – damit Sie wieder himmlisch schlafen und einer anhaltenden Schlafstörung entgegenwirken können.",
    },
        {
      id: "4",
      icon: <Shell />,
      bullet: "Hypnose kann bei Schlafproblemen helfen",
      text: "Durch Suggestionen kann u.a. das Unterbewusstsein neu konditioniert werden, sodass das Einschlafen nicht länger mit Stress, sondern mit Ruhe und Sicherheit verbunden wird",
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
