import Image from "next/image";
import Hero_leftOrientated from "../components/Hero_leftOrientated";
import SixBoxLayout from "../components/SixBoxLayout";
import { coaching, psychotherapieSchwabmuenchen } from "../data/SixBoxData";
import ContactBtn from "../components/buttons/ContactBtn";
import { Metadata } from "next";
import Accordeon from "../components/Accordeon";
import { faqsHome } from "../data/FAQsData";

export const metadata: Metadata = {
  title:
    "Heilpraktikerin für Psychotherapie - Gabriela Kramer | Psychotherapie in Schwabmünchen",
};

export default function page() {
  const hero = {
    title: "Heilpraktikerin für Psychotherapie nahe Schwabmünchen",
    subtitle: "Psychotherapie, Hypnose und Coaching für mentale Gesundheit",
    intro:
      "Sie kommen aus Schwabmünchen und suchen Hilfe bei Angst, Panik, Stress oder Schlafproblemen? In meiner Praxis in Kaufering begleite ich Menschen dabei, wieder mehr innere Ruhe zu finden, Klarheit zu gewinnen und neue Wege für sich zu entdecken. Auch Patientinnen, Patienten und Coaching-Klienten aus dem Raum Lechfeld sind willkommen.",
    imgPathDesktop: "/images/portraits/vr_gk.jpg",
  };
  const { title, subtitle, intro, imgPathDesktop } = hero;
  return (
    <div>
      <Hero_leftOrientated
        imgPathDesktop={imgPathDesktop}
        title={title}
        subtitle={subtitle}
        intro={intro}
      />
      <section className="lg:pt-32 lg:px-32 pt-24 flex flex-col gap-8 lg:flex-row lg:gap-16 lg:items-center">
        <div className="px-4 sm:px-16 lg:px-0 flex flex-col lg:flex-1">
          <span className="font-light text-sm mx-auto lg:mx-0">
            Heilprakikerin für Psychotherapie
          </span>
          <h1 className="text-center lg:text-start mb-8 lg:!text-3xl/12 xl:!text-5xl/14 !font-bold">
            Psychotherapie in Kaufering nahe Schwabmünchen
          </h1>
          <div className="flex flex-col gap-4 mb-8 lg:mt-4">
            <h2 className="!mb-0 text-center lg:text-start">
              Für wen meine Praxis passend sein kann
            </h2>
            <p>
              Viele Menschen, die zu mir kommen, stehen mitten im Leben. Sie
              tragen Verantwortung im Beruf, in der Familie oder im eigenen
              Unternehmen. Nach außen wirken sie stabil. Innerlich sieht es oft
              anders aus.
            </p>
            <p>
              Die Gedanken kreisen. Der Schlaf wird schlechter. Der Körper steht
              unter Spannung. Manchmal kommen Herzrasen, Engegefühl,
              Panikattacken oder das Gefühl hinzu, die Kontrolle zu verlieren.
              Andere merken vor allem, dass sie nicht mehr richtig abschalten
              können.
            </p>

            <p>
              Besonders Menschen, die viel leisten, warten oft lange, bevor sie
              sich Hilfe holen. Sie versuchen es mit Disziplin, Vernunft oder
              noch mehr Durchhalten. Doch nicht jede Belastung lässt sich allein
              mit Willenskraft lösen.
            </p>
            <p>
              Ich kenne Leistungsdruck, Verantwortung und den Wunsch, schnell
              wieder klar, stabil und handlungsfähig zu sein, nicht nur aus der
              Theorie.
            </p>
          </div>
          <ContactBtn className="self-center lg:self-start" />
        </div>
        <div className="lg:flex-1 relative mt-24 lg:mt-0">
          <Image
            src={"/images/portraits/gaby_5.jpg"}
            alt="Portraitfoto von Heilpraktikerin für Psychotherapie Gaby Kramer"
            width={400}
            height={400}
            className="object-cover lg:rounded-xl mx-auto"
          />
        </div>
      </section>
      <section className="px-4 sm:px-16 lg:px-32 pt-24 lg:pt-32">
        <div className="text-center">
          <span className="font-light text-sm mx-auto lg:mx-0">
            Zeitnahe Unterstützung
          </span>
          <h1 className="mb-8 lg:!text-3xl/12 xl:!text-5xl/14 !font-bold">
            Schneller Zugang zu einem Therapiegespräch
          </h1>
          <h2 className="max-w-3xl mx-auto">
            In meiner Praxis nahe Schwabmünchen können Sie zeitnah einen ersten
            Termin bekommen. Wir klären, was Sie belastet, und entwickeln
            konkrete nächste Schritte, damit Sie wieder mehr Handlungsspielraum
            gewinnen.
          </h2>
        </div>
        <SixBoxLayout boxes={psychotherapieSchwabmuenchen} className="pt-24" />
      </section>
      <section className="pt-24 lg:pt-32 xl:pt-48 lg:px-32">
        <div className="flex flex-col px-4 sm:px-16 text-center lg:px-0">
          <span className="mx-auto font-light text-sm">FAQs</span>
          <h1 className="mb-8 lg:!text-3xl/12 xl:!text-5xl/14 !font-bold text-center">
            Häufig gestellte Fragen
          </h1>
          <p className="max-w-4xl font-light text-sm lg:text-center mx-auto">
            Hier kriegen Sie einen Überblick über häufig gestellte Fragen zur
            Zusammenarbeit mit Gabriela Kramer, Heilpraktikerin für
            Psychotherapie.
          </p>
        </div>
        <div className="px-4 sm:px-16 lg:px-32 pt-12 lg:pt-24">
          <Accordeon faqs={faqsHome} />
        </div>
      </section>
      <section className="px-4 sm:px-16 pt-24 pb-24 lg:px-32 lg:pt-32 xl:pt-48 lg:pb-32 xl:pb-48">
        {/* <Newsletter /> */}
      </section>
    </div>
  );
}
