import {
  CigaretteOff,
  ShieldCheck,
  BadgeEuro,
  SearchCheck,
  BoxSelect,
  Moon,
  Plane,
  Users,
} from "lucide-react";

export const smoke = {
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

export const anxiety = {
  headline: "Spezifische Ängste",
  subheader: "Jetzt Ängste bekämpfen",
  intro:
    "Bestimmte Situationen, Orte oder Gedanken lösen bei Ihnen starke Angstreaktionen aus? Mit gezielten Methoden helfe ich Ihnen, Ihre spezifischen Ängste zu verstehen und Schritt für Schritt zu überwinden.",
  bullets: [
    {
      icon: <BoxSelect className="shrink-0" />,
      header: "Angst vor Enge",
      text: "Aufzüge, volle Busse oder geschlossene Räume – das Gefühl, nicht entkommen zu können, löst sofort Panik aus und schränkt den Alltag spürbar ein.",
    },
    {
      icon: <Users className="shrink-0" />,
      header: "Angst vor Menschen",
      text: "In Gesellschaft fühlt es sich eng an – Blicke, Gespräche oder Menschenmengen lösen ein Unbehagen aus, das Sie am liebsten vermeiden würden.",
    },
    {
      icon: <Plane className="shrink-0" />,
      header: "Angst vor dem Fliegen",
      text: "Schon der Gedanke ans Einsteigen reicht aus – Reisen werden gemieden, Urlaubspläne scheitern, und das Gefühl der Kontrolle fehlt völlig.",
    },
    {
      icon: <Moon className="shrink-0" />,
      header: "Angst vor der Zukunft",
      text: "Was kommt noch alles auf mich zu? Wenn Sorgen um Job, Familie oder Gesundheit nicht mehr abschalten lassen und der Alltag zur Last wird.",
    },
  ],
};
