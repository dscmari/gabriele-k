"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import ContactBtn from "./buttons/ContactBtn";

const sections = [
  { id: "was-ist-eine-phobie", label: "Was ist eine Phobie?" },
  { id: "koerperliche-belastungen", label: "Körperliche Belastungen" },
  { id: "psychosoziale-belastungen", label: "Psychosoziale Belastungen" },
  { id: "was-koennen-sie-tun", label: "Was können Sie tun?" },
];

function useActiveSection(ids: string[]) {
  const [activeId, setActiveId] = useState(ids[0]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      () => {
        const visible = ids.filter((id) => {
          const el = document.getElementById(id);
          if (!el) return false;
          const rect = el.getBoundingClientRect();
          return rect.top < window.innerHeight && rect.bottom > 0;
        });
        const topmost = ids.find((id) => visible.includes(id));
        if (topmost) setActiveId(topmost);
      },
      { rootMargin: "0px 0px -20% 0px" },
    );

    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return { activeId, setActiveId }; // setActiveId nach außen geben
}

export default function PhobiaSection() {
  const { activeId, setActiveId } = useActiveSection(sections.map((s) => s.id));

  return (
    <div className="flex flex-col lg:flex-row lg:gap-32">
      <div className="lg:sticky lg:self-start lg:top-0 lg:pt-32 pt-12 pl-4 flex flex-col">
        <ol className="flex flex-col gap-2 font-light border-l border-gray-300">
          {sections.map(({ id, label }) => (
            <li key={id}>
              <Link
                href={`#${id}`}
                onClick={() => setActiveId(id)} // sofort umschalten beim Klick
                className={`block pl-4 border-l-2 border-custom-blue transition-all duration-200 ${
                  activeId === id
                    ? "border-black font-medium text-custom-blue"
                    : "border-transparent text-gray-400 hover:text-custom-blue"
                }`}
              >
                {label}
              </Link>
            </li>
          ))}
        </ol>
        <ContactBtn className="self-center lg:self-start mt-8 lg:ml-4" />
      </div>
      <div className="flex flex-col gap-4 max-w-xl lg:text-base/8 pt-12 lg:pt-32">
        <h1 id="was-ist-eine-phobie" className="scroll-mt-16 text-custom-blue">
          Was versteht man unter Phobien?
        </h1>
        <p>
          Eine Phobie ist eine Form der Angststörung. Dabei handelt es sich um
          eine starke Angst vor bestimmten Auslösern. Das können zum Beispiel
          enge Räume, Höhen, Fahrstühle, Spritzen oder Spinnen sein. Auch
          Menschenmengen oder Situationen, in denen Sie sich beobachtet oder
          bewertet fühlen, werden von vielen Betroffenen als sehr belastend
          erlebt.
        </p>
        <p>
          Phobien können sehr belastend sein. Vielleicht vermeiden Sie bestimmte
          Orte, Situationen, Tiere oder Tätigkeiten schon seit Längerem.
          Vielleicht wissen Sie auch, dass Ihre Angst nach außen hin übertrieben
          wirken mag. Trotzdem erleben Sie sie als überwältigend. Genau das ist
          für viele Betroffene besonders schwer: Sie verstehen oft selbst, dass
          die Reaktion „eigentlich nicht nötig" wäre, und fühlen sich ihr
          dennoch ausgeliefert.
        </p>
        <p>
          Phobien gehören zu den häufigsten psychischen Erkrankungen – Sie sind
          damit also bei weitem nicht allein. Sie können sich in jedem
          Lebensalter entwickeln, manchmal nach einem konkreten Erlebnis,
          manchmal scheinbar ohne erkennbaren Auslöser. Auch die Ausprägung ist
          sehr unterschiedlich: Während manche Betroffene ihre Phobie lange im
          Alltag verbergen können, schränkt sie andere stark in ihrer
          Lebensqualität ein. Eines haben jedoch fast alle gemeinsam –
          unbehandelt verschwinden Phobien selten von selbst.
        </p>
        <h2
          id="koerperliche-belastungen"
          className="scroll-mt-16 text-custom-blue"
        >
          Herzrasen, Zittern und Schwindel
        </h2>
        <p>
          Typisch ist, dass der Körper sehr schnell in Alarmbereitschaft geht.
          Herzrasen, Zittern, Luftnot, Schwindel oder das starke Bedürfnis,
          sofort wegzugehen, sind typische Symptome. Viele Betroffene beginnen
          deshalb, die angstauslösenden Situationen zu meiden. Das entlastet im
          ersten Moment, kann die Angst auf Dauer jedoch verstärken.
        </p>
        <p>
          Manchmal reicht schon der Gedanke an die gefürchtete Situation aus, um
          körperliche Reaktionen auszulösen. Der Körper unterscheidet dabei kaum
          zwischen echter und vorgestellter Bedrohung – die Alarmreaktion läuft
          in beiden Fällen ähnlich ab. Das kann dazu führen, dass Betroffene
          nicht nur konkrete Situationen meiden, sondern auch Gedanken daran,
          Bilder oder Gespräche über das Thema. Der Vermeidungskreis wird so mit
          der Zeit immer größer.
        </p>

        <h2
          id="psychosoziale-belastungen"
          className="scroll-mt-16 text-custom-blue"
        >
          Intensive Ängste und Hilflosigkeit
        </h2>
        <p>
          Neben den körperlichen Reaktionen zeigt sich eine Phobie auch auf
          psychischer Ebene. Betroffene erleben oft intensive Angst oder Panik,
          die in keinem Verhältnis zur tatsächlichen Gefahr steht. Gedanken wie
          „Ich verliere die Kontrolle" oder „Mir passiert etwas Schlimmes"
          können die Situation zusätzlich verschlimmern. Manche entwickeln eine
          sogenannte Erwartungsangst – die Angst vor der Angst – und beginnen,
          bestimmte Orte oder Situationen gedanklich schon im Voraus zu meiden.
          Langfristig kann das zu einem eingeschränkten Alltag und einem
          wachsenden Gefühl von Hilflosigkeit führen.
        </p>
        <p>
          Das bleibt selten ohne Folgen für das soziale Leben. Einladungen
          werden abgesagt, Aktivitäten mit Familie oder Freunden gemieden,
          berufliche Situationen umgangen. Oft entsteht dabei das Gefühl,
          anderen erklären zu müssen, warum man wieder nicht dabei ist – oder
          die Angst davor, als schwach oder übertrieben wahrgenommen zu werden.
          Viele Betroffene ziehen sich deshalb zunehmend zurück, was das Gefühl
          von Isolation und Hilflosigkeit langfristig verstärken kann.
        </p>

        <h2 id="was-koennen-sie-tun" className="scroll-mt-16 text-custom-blue">
          Ängste behandeln und verstehen
        </h2>
        <p>
          Mit einer Phobie sind Sie weder schwach noch überempfindlich. Angst
          ist zunächst eine sinnvolle Schutzreaktion. Wenn sie jedoch immer
          häufiger anspringt und Ihren Alltag einschränkt, entsteht oft ein
          hoher Leidensdruck. Dann kann es hilfreich sein, die Zusammenhänge
          besser zu verstehen und neue Wege im Umgang mit der Angst zu
          entwickeln.
        </p>
        <p>
          In meiner Privatpraxis in Kaufering finden Sie einen geschützten
          Rahmen mit voller Aufmerksamkeit für Ihr Anliegen. Ich arbeite
          ressourcen- und ergebnisorientiert. Bevorzugt kombiniere ich Formate
          aus der Verhaltenstherapie mit EMDR oder Hypnose.
          Verhaltenstherapeutisch nutze ich unter anderem auch
          Virtual-Reality-gestützte Methoden. Sitzungen sind in entspannter und
          vertrauensvoller Atmosphäre vor Ort sowie online möglich.
        </p>
        <p>
          Mir ist wichtig, dass Sie sich mit Ihrer Angst ernst genommen fühlen.
          Gemeinsam schauen wir, was Sie belastet, welche Muster Ihre Angst
          aufrechterhalten und welche Schritte für Sie hilfreich sein können.
          Nicht mit Druck, sondern in Ihrem Tempo.
        </p>
      </div>
    </div>
  );
}
