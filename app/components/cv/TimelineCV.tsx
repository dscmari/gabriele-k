type Props = {
  className?: string;
};

export default function TimelineCV({ className }: Props) {
  const items = [
    {
      date: "2019 bis heute",
      title: "Heilpraktikerin für Psychotherapie",
      description:
        "Seit 2019 biete ich als Heilpraktikerin für Psychotherapie Unterstützung bei psychischen und emotionalen Herausforderungen in Kaufering",
    },
    {
      date: "2018 - 2019",
      title: "Heilpraktikerin für Psychotherapie",
      description:
        "Ausbildung zur Heilpraktikerin für Psychotherapie an der Heilpraktikerschule Landsberg",
    },
    {
      date: "2010 - 2015",
      title: "Unternehmens- und Mitarbeiterentwicklung",
      description:
        "Freiberufliche Tätigkeit in den Bereichen Unternehmens- und Mitarbeiterentwicklung - Kramer Kundenkultur",
    },
  ];

  return (
    <div className={`relative flex flex-col min-w-sm ${className}`}>
      {/* mobile */}
      <div className="lg:hidden flex flex-col gap-4 px-4 md:px-16">
        {items.map((e, index) => (
          <div key={index} className="flex flex-col">
            <span className="font-semibold text-custom-blue">{e.title}</span>
            <span className="font-semibold text-custom-blue">{e.date}</span>
            <p className="pt-2">{e.description}</p>
          </div>
        ))}
      </div>

      {/* desktop */}
      <div className="hidden lg:block">
        {/* Mittige vertikale Linie */}
        <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-0.5 lg:w-1 bg-custom-blue" />

        {items.map((item, index) => (
          <div
            key={index}
            // Zentriert die Punkte auf der Linie
            className="flex gap-8 gap-24 pb-8 pb-12 last:pb-0  lg:min-w-2xl text-custom-blue text-lg ml-[calc(50%-27rem)]"
          >
            <div className={`text-right w-xs`}>
              {index % 2 === 0 ? (
                <span className="font-bold">{item.date}</span>
              ) : (
                <div>
                  <span className="font-bold">{item.title}</span>
                  <p className="pt-4 lg:text-base/8">{item.description}</p>
                </div>
              )}
            </div>
            {/* Punkt*/}
            <div
              className={`w-8 h-8 rounded-full border-2 shrink-0 z-10 relative bg-custom-blue`}
            />

            {/* Text - neben dem Punkt */}
            <div className={`max-w-1/2 lg:w-xs`}>
              {index % 2 === 1 ? (
                <span className="font-bold">{item.date}</span>
              ) : (
                <div>
                  <span className="font-bold">{item.title}</span>
                  <p className="pt-4 lg:text-base/8">{item.description}</p>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
