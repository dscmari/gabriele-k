import {
  CalendarCheck,
  CalendarClock,
  Clock,
  Compass,
  Moon,
  Route,
} from "lucide-react";

const therapyIconColor = " #14375f";

export const therapyFourBox = [
  {
    icon: <CalendarClock color={therapyIconColor} size="3rem" />,
    title: "Wie lange dauert die Therapie?",
    text: "In meiner Praxis arbeite ich deshalb im Normalfall mit einem strukturierten Rahmen von drei bis zu zwölf Sitzungen. In dieser Zeit konzentrieren wir uns gezielt auf Ihr aktuelles Anliegen, klären die zugrunde liegenden Zusammenhänge und entwickeln konkrete Ansätze für Veränderungen im Alltag.",
    link: "",
  },
  {
    icon: <Clock color={therapyIconColor} size="3rem" />,
    title: "Sitzungsdauer",
    text: "Eine Therapiesitzung dauert in der Regel 50 Minuten. Termine sind auch am Abends oder am Wochenende möglich.",
    link: "",
  },
  {
    icon: <CalendarCheck color={therapyIconColor} size="3rem" />,
    title: "Zeitnahe Termine",
    text: "In meiner Praxis in Kaufering bemühe ich, Ihnen innerhalb von zwei Wochen einen Termin für ein Erstgespräch anzubieten – ganz ohne bürokratische Hürden.",
    link: "",
  },
  {
    icon: <Route color={therapyIconColor} size="3rem" />,
    title: "Nicht jede Situation erfordert eine langfristige Therapie",
    text: "Oft ist es sinnvoller, ein konkretes Anliegen strukturiert und in einem klar begrenzten Rahmen zu bearbeiten. Ob dieser Rahmen für Ihre persönliche Situation passend ist, klären wir gemeinsam im Erstgespräch.",
    link: "",
  },
];
