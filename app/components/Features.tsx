import { BadgeEuro, CigaretteOff, SearchCheck, ShieldCheck } from "lucide-react";
import ContactBtn from "./buttons/ContactBtn";

type Props = {
  classname?: string;
};

export default function Features({ classname }: Props) {
  const smoke = {
    headline: "Rauchfrei werden",
    subheader: "Jetzt den Schalter umlegen",
    intro:
      "Sie wollen sich von Ihren Zigaretten trennen und endlich Nichtraucher werden? Lassen Sie sich von mir auf Ihrem Weg zum Nichtraucher mit einer praxiserprobten Behandlungsstrategie begleiten.",
    bullets: [
      {
        icon: <CigaretteOff className="shrink-0" />,
        header: "Gesünder leben",
        text: "Bereits kurz nach der letzten Zigarette beginnt Ihr Körper sich zu erholen – Durchblutung, Lungenfunktion und Herzgesundheit verbessern sich spürbar und das Risiko für schwere Erkrankungen sinkt dauerhaft.",
      },
      {
        icon: <ShieldCheck className="shrink-0" />,
        header: "Abhängigkeit überkommen",
        text: "Vielleicht haben Sie ja schon einen oder sogar mehrere Anläufe genommen und sind rückfällig geworden? Es ist schwer, geliebte Gewohnheiten zu lassen. ",
      },
      {
        icon: <BadgeEuro className="shrink-0" />,
        header: "Geld sparen",
        text: "Ein Raucher gibt im Schnitt über 2.000€ pro Jahr für Zigaretten aus – Geld, das Sie künftig für schönere Dinge nutzen können.",
      },
      {
        icon: <SearchCheck className="shrink-0" />,
        header: "Vorbild sein",
        text: "Nichtraucher zu werden schützt nicht nur Sie selbst, sondern auch Ihre Familie und Kinder vor den Folgen des Passivrauchens.",
      },
    ],
  };

  const { headline, subheader, intro, bullets } = smoke;

  return (
    <div
      className={`flex flex-col xl:flex-row xl:items-start gap-12 lg:gap-32 ${classname}`}
    >
      <div className="flex-1 flex flex-col items-center lg:items-start gap-4">
        <span className="font-light text-sm">{subheader}</span>
        <h1 className="mb-8 lg:!text-3xl/12 xl:!text-5xl/14 !font-bold tracking-wide">
          {headline}
        </h1>
        <p className="lg:text-base/8 text-center lg:text-start">{intro}</p>
        <ContactBtn className="mx-auto lg:mx-0 bg-custom-bronce mt-8" />
      </div>
      <div className="flex-2 grid grid-cols-1 xl:grid-cols-2 gap-16 mt-4">
        {bullets.map((bullet, index) => {
          return (
            <div key={index} className="flex flex-col gap-4">
              <div className="flex gap-4 lg:flex-col">
                {bullet.icon}
                <h2>{bullet.header}</h2>
              </div>
              <p className="lg:text-base/8">{bullet.text}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
