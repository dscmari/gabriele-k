import { ChevronDown } from "lucide-react";

type FAQ = {
  id: string;
  question: string;
  answer: string;
};

type Props = {
  className?: string;
  faqs?: FAQ[];
};

export default function Accordeon({ className }: Props) {
  const faqs = [
    {
      id: "faq-1",
      question: "Was genau macht eine Heilpraktikerin für Psychotherapie?",
      answer:
        "Als Heilpraktikerin für Psychotherapie verfüge ich über die Heilerlaubnis nach dem Heilpraktikergesetz und darf psychische Beschwerden und Erkrankungen diagnostizieren und behandeln. In meiner Praxis arbeite ich mit wissenschaftlich fundierten Methoden, unter anderem mit Interventionen aus der Verhaltenstherapie, Hypnose und EMDR. Mein Ziel ist es, belastende Denk und Verhaltensmuster zu verändern und Sie dabei zu unterstützen, wieder mehr Stabilität, Klarheit und Handlungsspielraum in Ihrem Leben zu gewinnen.",
    },
    {
      id: "faq-2",
      question: "Für welche Krankheitsbilder bieten Sie Unterstützung an?",
      answer:
        "Ich unterstütze Sie vor allem bei Ängsten und Panik, Stressbelastung, Schlafproblemen, beim Abnehmen sowie bei der Rauchentwöhnung.",
    },
    {
      id: "faq-3",
      question:
        "Nehmen Sie nur Patienten aus Kaufering oder aus der gesamten Region auf?",
      answer:
        "Ich begleite Patientinnen und Patienten aus Kaufering und der gesamten Region. Auf Wunsch können Termine auch online stattfinden.",
    },
    {
      id: "faq-4",
      question: "Wie läuft ein erstes Kennenlerngespräch bei Ihnen ab?",
      answer:
        "Das erste Kennenlerngespräch findet telefonisch statt, dauert etwa 20 Minuten und ist für Sie kostenlos. In dieser Zeit klären wir Ihr Anliegen, Ihre aktuelle Situation und schauen gemeinsam, ob die Zusammenarbeit für Sie stimmig ist. Bitte vereinbaren Sie Ihren Termin online über meine Webseite.",
    },
    {
      id: "faq-5",
      question: "Bieten Sie Termine vor Ort in Kaufering oder auch online an?",
      answer:
        "Ich biete Termine sowohl in meiner Praxis in Kaufering als auch online an. Der erste Termin, das Anamnesegespräch, findet nach Möglichkeit in der Praxis statt.",
    },
    {
      id: "faq-6",
      question:
        "Wie kurzfristig kann ich einen Termin in Ihrer Praxis bekommen?",
      answer:
        "Ich plane bewusst etwas Spielraum für dringende Anliegen ein. Deshalb ist in der Regel ein Termin innerhalb von zwei bis drei Wochen möglich, wenn Sie bei der Terminwahl ein wenig flexibel sind.",
    },
    {
      id: "faq-7",
      question:
        "Was ist der Unterschied zwischen einer Heilpraktikerin für Psychotherapie und einem psychologischen Psychotherapeuten?",
      answer:
        "Psychologische Psychotherapeuten sind approbierte Behandler und an die Vorgaben des Kassensystems gebunden. Als Heilpraktikerin für Psychotherapie kann ich meine Begleitung freier und individueller auf Ihre persönliche Situation abstimmen. Zudem ist es oft möglich, zeitnah einen Termin zu vereinbaren.",
    },
    {
      id: "faq-8",
      question: "Was sind die Vorteile für mich als Selbstzahler?",
      answer:
        "Als Selbstzahler genießen Sie mehr Diskretion, da Ihre Behandlung nicht über die Krankenkasse abgerechnet wird. Termine sind zeitnah möglich. Gerade bei seelischen Belastungen kann das ein großer Vorteil sein kann, weil Unterstützung dann beginnt, wenn sie gebraucht wird.",
    },
    {
      id: "faq-9",
      question: "Arbeiten Sie mit bestimmten Methoden?",
      answer:
        "Ich arbeite mit verschiedenen anerkannten psychotherapeutischen Methoden, die ich individuell auf Ihre persönliche Situation abstimme. Dazu gehören unter anderem verhaltenstherapeutische Ansätze, Hypnose und EMDR, die ich flexibel und passend zu Ihrem Anliegen auch miteinander kombiniere.",
    },
    {
      id: "faq-10",
      question: "Unterliegen die Gespräche der Schweigepflicht?",
      answer:
        "Ja, selbstverständlich. Alles, was Sie mir anvertrauen, behandle ich vertraulich und mit großer Sorgfalt. Für Ihre Daten gelten dabei strenge Verschwiegenheits- und Datenschutzpflichten.",
    },
    {
      id: "faq-11",
      question: "Wie lange dauert eine einzelne Sitzung?",
      answer:
        "Eine einzelne Sitzung dauert in der Regel 60 Minuten. Die erste Sitzung mit ausführlicher Anamnese dauert meist etwa 90 bis 120 Minuten. Nach Absprache ist auch eine individuelle Sitzungsdauer möglich.",
    },
    {
      id: "faq-12",
      question: "Wie kann ich mich auf die erste Sitzung vorbereiten?",
      answer:
        "Sie müssen sich nicht besonders vorbereiten. Im telefonischen Kennenlerngespräch schauen wir bereits gemeinsam, was für Ihre Situation sinnvoll ist. Alles Weitere besprechen wir dann in Ruhe in der ersten Sitzung.",
    },
  ];

  return (
    <div className={`max-w-5xl mx-auto ${className}`}>
      <div className="flex flex-col gap-4">
        {faqs.map((faq) => (
          <div
            key={faq.id}
            className="group border border-slate-200 dark:border-none rounded-xl overflow-hidden bg-white"
          >
            <input type="checkbox" id={faq.id} className="peer hidden" />
            <label
              htmlFor={faq.id}
              className="flex justify-between items-center p-4 cursor-pointer font-semibold select-none"
            >
              <span className="pointer-events-none">{faq.question}</span>
             <ChevronDown className="shrink-0 transition-transform duration-300 group-has-[:checked]:scale-y-[-1] group-has-[:checked]:text-custom-red" />
            </label>
            <div className="grid grid-rows-[0fr] transition-[grid-template-rows] duration-500 ease-in-out group-has-[:checked]:grid-rows-[1fr]">
              <div className="overflow-hidden">
                <div className="p-4 dark:bg-darkmode-blue">
                  <p className="whitespace-pre-line">{faq.answer}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
