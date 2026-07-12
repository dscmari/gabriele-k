import {
  ActivitySquare,
  AlertCircle,
  BatteryLow,
  Bot,
  Brain,
  Compass,
  Flame,
  Focus,
  Heart,
  HeartPulse,
  Moon,
  MoonStar,
  RefreshCw,
  Scale,
  ScanEye,
  ShieldCheck,
  Sparkles,
  Sprout,
  Utensils,
  Wind,
} from "lucide-react";

//stress
export const stress = [
  {
    icon: (
      <Wind
        className="shrink-0 text-custom-blue dark:text-darkmode-white"
        size={48}
      />
    ),
    title: "Innere Unruhe",
    text: "Gedanken, die nicht zur Ruhe kommen. Ein Gefühl von Anspannung, das bleibt – auch wenn eigentlich kein konkreter Grund da ist. Innere Unruhe kann sich schleichend einschleichen und den Alltag spürbar belasten.",
  },
  {
    icon: (
      <MoonStar
        className="shrink-0 text-custom-blue dark:text-darkmode-white"
        size={48}
      />
    ),
    title: "Schlafprobleme",
    text: "Abends nicht einschlafen, nachts aufwachen, morgens wie gerädert aufstehen – Schlafprobleme rauben nicht nur Energie, sondern belasten auf Dauer Körper und Psyche.",
  },
  {
    icon: (
      <BatteryLow
        className="shrink-0 text-custom-blue dark:text-darkmode-white"
        size={48}
      />
    ),
    title: "Erschöpfung",
    text: "Wenn die Müdigkeit nicht mehr verschwindet, egal wie viel Sie schlafen – das ist mehr als nur ein schlechter Tag. Anhaltende Erschöpfung ist ein Zeichen, dass Körper und Geist dringend Unterstützung brauchen.",
  },
  {
    icon: (
      <Flame
        className="shrink-0 text-custom-blue dark:text-darkmode-white"
        size={48}
      />
    ),
    title: "Gereiztheit",
    text: "Kleinigkeiten, die plötzlich zu viel sind. Schnelle Ungeduld, kurze Zündschnur – Gereiztheit ist oft ein Zeichen, dass die inneren Reserven aufgebraucht sind.",
  },
  {
    icon: (
      <Focus
        className="shrink-0 text-custom-blue dark:text-darkmode-white"
        size={48}
      />
    ),
    title: "Konzentrationsmangel",
    text: "Gedanken schweifen ab, Aufgaben fallen schwer, der rote Faden geht verloren. Konzentrationsschwierigkeiten sind ein häufiges Zeichen dafür, dass das Nervensystem unter Dauerstress steht.",
  },
  {
    icon: (
      <Bot
        className="shrink-0 text-custom-blue dark:text-darkmode-white"
        size={48}
      />
    ),
    title: "Autopilot",
    text: "Das Gefühl, nur noch zu funktionieren – Aufgaben abhaken, weitermachen, durchhalten. Aber das eigene Erleben bleibt dabei irgendwie auf der Strecke.",
  },
];

//Abnehmen
export const weightSixBoxData = [
  {
    icon: (
      <Utensils
        className="shrink-0 text-custom-blue dark:text-darkmode-white"
        size={48}
      />
    ),
    title: "Belastende Essgewohnheiten",
    text: "Essen aus Frust, Langeweile, Gewohnheit oder Trost kennen viele Menschen. Essgewohnheiten sind oft tief verwurzelt und haben wenig mit Hunger zu tun.",
  },
  {
    icon: (
      <Heart
        className="shrink-0 text-custom-blue dark:text-darkmode-white"
        size={48}
      />
    ),
    title: "Emotionales Essen",
    text: "Essen als Trost, Belohnung oder Ablenkung – Gefühle und Hunger vermischen sich oft. Das zu erkennen ist der erste Schritt zur Veränderung.",
  },
  {
    icon: (
      <BatteryLow
        className="shrink-0 text-custom-blue dark:text-darkmode-white"
        size={48}
      />
    ),
    title: "Stress und innere Unruhe",
    text: "Stress wirkt auf mehreren Ebenen. Er kann dazu führen, dass Sie aus Anspannung, Frust oder zur Beruhigung essen. Gleichzeitig beeinflusst anhaltender Stress über Stresshormone wie Cortisol auch körperliche Prozesse.",
  },
  {
    icon: (
      <RefreshCw
        className="shrink-0 text-custom-blue dark:text-darkmode-white"
        size={48}
      />
    ),
    title: "Frust nach gescheiterten Diätversuchen",
    text: "Wieder angefangen, wieder aufgehört. Kennen Sie das? Dieser Frust ist kein Versagen, sondern ein Zeichen, dass der bisherige Ansatz nicht gepasst hat.",
  },
  {
    icon: (
      <Brain
        className="shrink-0 text-custom-blue dark:text-darkmode-white"
        size={48}
      />
    ),
    title: "Hinderliche Gedanken und Selbstkritik",
    text: "Wenn Sie lernen, weniger streng mit sich zu sein, kann der Weg zu ihrem Wohlfühlgewicht leichter und nachhaltiger werden.",
  },
  {
    icon: (
      <Sparkles
        className="shrink-0 text-custom-blue dark:text-darkmode-white"
        size={48}
      />
    ),
    title: "Passende Veränderungen für Ihren Alltag",
    text: "Kein Einheitsplan, sondern individuelle Schritte die wirklich zu Ihrem Leben passen – realistisch, alltagstauglich und langfristig umsetzbar.",
  },
];

//coaching
export const coaching = [
  {
    icon: (
      <ScanEye
        className="shrink-0 text-custom-blue dark:text-darkmode-white"
        size={48}
      />
    ),
    title: "Belastungen früher erkennen",
    text: "Erkennen Sie Ihre ganz persönlichen Belastungen frühzeitig und ordnen sie diese für sich ein.",
  },
  {
    icon: (
      <ActivitySquare
        className="shrink-0 text-custom-blue dark:text-darkmode-white"
        size={48}
      />
    ),
    title: "Stress regulieren",
    text: "Entwickeln Sie einen bewussteren, stimmigeren Umgang mit Stress und verbessern Sie Ihre Stresskompetenz.",
  },
  {
    icon: (
      <HeartPulse
        className="shrink-0 text-custom-blue dark:text-darkmode-white"
        size={48}
      />
    ),
    title: "Resilienz",
    text: "Bauen Sie Ihre innere Stabilität und Resilienz im Umgang mit Belastungen aus.",
  },
  {
    icon: (
      <ShieldCheck
        className="shrink-0 text-custom-blue dark:text-darkmode-white"
        size={48}
      />
    ),
    title: "Grenzen setzen",
    text: "Lernen Sie, im Beruf wie im Privatleben klare Grenzen zu setzen und diese mit Überzeugung zu vertreten.",
  },
  {
    icon: (
      <Sprout
        className="shrink-0 text-custom-blue dark:text-darkmode-white"
        size={48}
      />
    ),
    title: "Ressourcen wahrnehmen",
    text: "Entdecken Sie Ihre persönlichen Stärken und Kraftquellen und setzen sie diese gezielt im Alltag ein.",
  },
  {
    icon: (
      <Compass
        className="shrink-0 text-custom-blue dark:text-darkmode-white"
        size={48}
      />
    ),
    title: "Im Beruf und Alltag handlungsfähig bleiben",
    text: "Entwickeln Sie Strategien, die Ihnen helfen, auch in herausfordernden Phasen handlungsfähig, klar und fokussiert zu bleiben.",
  },
];

//coaching
export const psychotherapieSchwabmuenchen = [
  {
    icon: (
      <AlertCircle
        className="shrink-0 text-custom-blue dark:text-darkmode-white"
        size={48}
      />
    ),
    title: "Ängste, Panik und Phobien",
    text: "In meiner Praxis in Kaufering finden Sie einen geschützten Rahmen, in dem Ihre Angst ernst genommen wird. ",
  },
  {
    icon: (
      <ActivitySquare
        className="shrink-0 text-custom-blue dark:text-darkmode-white"
        size={48}
      />
    ),
    title: "Innere Unruhe und Anspannung",
    text: "Entwickeln Sie einen bewussteren, stimmigeren Umgang mit Stress und verbessern Sie Ihre Stresskompetenz.",
  },
  {
    icon: (
      <HeartPulse
        className="shrink-0 text-custom-blue dark:text-darkmode-white"
        size={48}
      />
    ),
    title: "Stress und Erschöpfung",
    text: "Bauen Sie Ihre innere Stabilität und Resilienz im Umgang mit Belastungen aus.",
  },
  {
    icon: (
      <Moon
        className="shrink-0 text-custom-blue dark:text-darkmode-white"
        size={48}
      />
    ),
    title: "Schlafprobleme und Grübeln",
    text: "In meiner Praxis begleite ich Sie dabei, mögliche Zusammenhänge und Hintergründe Ihrer Schlafstörungen besser einzuordnen.",
  },
  {
    icon: (
      <Sprout
        className="shrink-0 text-custom-blue dark:text-darkmode-white"
        size={48}
      />
    ),
    title: "Coaching für mentale Gesundheit",
    text: "Entdecken Sie Ihre persönlichen Stärken und Kraftquellen und setzen sie diese gezielt im Alltag ein.",
  },
  {
    icon: (
      <Scale
        className="shrink-0 text-custom-blue dark:text-darkmode-white"
        size={48}
      />
    ),
    title: "Beruflicher oder privater Druck",
    text: "Es geht es nicht um allgemeine Ratschläge. Sie entwickeln Lösungen, die zu Ihrer Situation, Ihren Zielen und Ihrem Alltag passen.",
  },
];
