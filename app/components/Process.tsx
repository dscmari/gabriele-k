import { Brain, Handshake, LogOut, MessageSquare, Phone, Sailboat } from "lucide-react";
import React from "react";

type Props = {
  className?: string;
};

export default function Process({ className }: Props) {
  const hypnoseData = [
    {
      icon: <Phone className="shrink-0 text-custom-blue lg:h-8 lg:w-8" />,
      title: "Vorgespräch",
      description:
        "Zu Beginn besprechen wir Ihr Anliegen, Ihr Ziel für die Sitzungund alles, was für den Termin wichtig ist. So entsteht eine gute Grundlage, und Sie wissen, was Sie in der Hypnosesitzung erwartet.",
    },
    {
      icon: <MessageSquare className="shrink-0 text-custom-blue lg:h-8 lg:w-8" />,
      title: "Vorbereitung",
      description:
        "Ich erkläre Ihnen den Ablauf der Hypnose und beantworte offene Fragen. Dabei ist mir wichtig, dass Sie sich sicher fühlen und mit einem guten Gefühl in die Sitzung gehen.",
    },
    {
      icon: <Sailboat className="shrink-0 text-custom-blue lg:h-8 lg:w-8" />,
      title: "Einleitung der Hypnose",
      description:
        "Ich führe Sie Schritt für Schritt in einen entspannten und konzentrierten Zustand. Sie bleiben dabei nicht willenlos, sondern erleben die Hypnose in der Regel als einen Zustand innerer Ruhe und fokussierter Aufmerksamkeit.",
    },
    {
      icon: <Brain className="shrink-0 text-custom-blue lg:h-8 lg:w-8" />,
      title: "Therapeutische Arbeit in Hypnose",
      description:
        "In diesem Zustand arbeiten wir an Ihrem Anliegen. Je nach Thema kann es dabei zum Beispiel um innere Blockaden, belastende Gefühle, ungünstige Muster oder die Aktivierung hilfreicher innerer Ressourcen gehen.",
    },
    {
      icon: <LogOut className="shrink-0 text-custom-blue lg:h-8 lg:w-8" />,
      title: "Ausleitung",
      description:
        "Am Ende der Hypnose begleite ich Sie in Ruhe und behutsam zurück in den gegenwärtigen Moment. Dabei achten wir darauf, dass Sie sich wieder klar, wach und gut orientiert fühlen.",
    },
    {
      icon: <Handshake className="shrink-0 text-custom-blue lg:h-8 lg:w-8" />,
      title: "Nachgespräch",
      description:
        "Im Anschluss besprechen wir Ihre Erfahrungen in der Sitzung und ordnen das Erlebte gemeinsam ein. Dabei schauen wir auch darauf, was für Sie im Alltag oder für die weitere Begleitung hilfreich sein kann. Bei Bedarf können Sie zur Vertiefung zwischen den Sitzungen auch passende Audio-Hypnosen erhalten.",
    },
  ];

  return (
      <div className="bg-slate-100 dark:bg-custom-blue lg:rounded-2xl px-4 py-24 dark:py-0 md:p-8 text-custom-blue dark:text-darkmode-white">
      <p className="font-light">Wie läuft eine Hypnosesitzung ab?</p>
      <div className="relative mt-8">
        <div className="absolute left-6 lg:left-8 mt-8 -translate-x-1/2 top-0 bottom-0 w-[1px] bg-custom-beige border border-custom-blue border-dashed" />

        <div className="flex flex-col gap-12">
          {hypnoseData.map((e, index) => (
            <div key={index} className="flex gap-4 md:gap-12">
              <div className="bg-white rounded-full w-12 h-12 lg:w-16 lg:h-16 shrink-0 grow-0 flex items-center justify-center z-10">
                {e.icon}
              </div>
              <div>
                <h2>{e.title}</h2>
                <p className="dark:text-darkmode-white">{e.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
