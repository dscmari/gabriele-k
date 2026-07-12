import Image from "next/image";
import Hero_leftOrientated from "../components/Hero_leftOrientated";
import SixBoxLayout from "../components/SixBoxLayout";
import { coaching } from "../data/SixBoxData";
import ContactBtn from "../components/buttons/ContactBtn";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Heilpraktikerin für Psychotherapie - Gabriela Kramer | Coaching für mentale Gesundheit",
};

export default function page() {
  const hero = {
    title: "Coaching für mentale Gesundheit",
    subtitle: "Stabil bleiben. Klar handeln. Sich weiterentwickeln.",
    intro:
      "Coaching für mentale Gesundheit bietet Ihnen einen klaren und strukturierten Rahmen. Es unterstützt Sie bei persönlicher oder beruflicher Entwicklung. Das Angebot ist für Sie geeignet, wenn Sie keine Therapie benötigen. Sie möchten Ihre mentale Stabilität stärken, bewusster mit Belastung umgehen oder in Beruf und Alltag handlungsfähig bleiben. Im Mittelpunkt steht nicht die Behandlung psychischer Erkrankungen. Stattdessen geht es darum, Kompetenzen aufzubauen, die Sie im Alltag und Beruf stärken.",
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
      <section className="px-4 sm:px-16 lg:px-32 pt-24 lg:pt-32">
        <div className="text-center">
          <span className="font-light text-sm mx-auto lg:mx-0">
            Für mehr innere Stärke
          </span>
          <h1 className="mb-8 lg:!text-3xl/12 xl:!text-5xl/14 !font-bold">
            Coaching für mentale Gesundheit
          </h1>
          <h2>
            Coaching für mentale Gesundheit unterstützt sie in unterschiedlichen
            Lebensbereichen
          </h2>
        </div>
        <SixBoxLayout boxes={coaching} className="pt-24" />
      </section>
      <section className="lg:pt-32 lg:px-32 pt-24 flex flex-col gap-8 lg:flex-row lg:gap-16 lg:items-center">
        <div className="px-4 sm:px-16 lg:px-0 flex flex-col lg:flex-1">
          <span className="font-light text-sm mx-auto lg:mx-0">
            Wie funktioniert Coaching?
          </span>
          <h1 className="text-center lg:text-start mb-8 lg:!text-3xl/12 xl:!text-5xl/14 !font-bold">
            Coaching
          </h1>
          <div className="flex flex-col gap-4 mb-8 lg:mt-4">
            <h2 className="!mb-0 text-center lg:text-start">
              Wie wir arbeiten
            </h2>
            <p>
              Coaching ist für mich ein strukturierter Entwicklungsprozess. Wir
              schauen gemeinsam darauf, was Sie beschäftigt, welche Muster eine
              Rolle spielen und welche nächsten Schritte sinnvoll sind.
            </p>
            <p>
              Dabei geht es nicht um allgemeine Ratschläge. Sie entwickeln
              Lösungen, die zu Ihrer Situation, Ihren Zielen und Ihrem Alltag
              passen. Je nach Anliegen fließen Elemente aus Stressbewältigung,
              Resilienztraining, mentaler Selbstregulation, Kommunikation und
              Selbstführung ein.
            </p>
            <h2 className="!mb-0 text-center lg:text-start">Meine Erfahrung</h2>
            <p>
              Ich verbinde therapeutisches Fachwissen und Coaching-Kompetenz mit
              eigener Erfahrung aus der freien Wirtschaft. Daraus entsteht ein
              klarer, menschlicher und lösungsorientierter Arbeitsstil.
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
      <section className="xl:pt-48 lg:pt-32 lg:px-32 pt-24 flex flex-col gap-8 xl:gap-16 lg:flex-row lg:gap-16 lg:items-center">
        <div className="lg:flex-1 relative ">
          <Image
            src={"/images/praxis.jpg"}
            alt="Portraitfoto von Heilpraktikerin für Psychotherapie Gaby Kramer"
            width={800}
            height={800}
            className="object-cover lg:rounded-xl mx-auto"
          />
        </div>
        <div className="px-4 sm:px-16 pt-24 lg:px-0 flex flex-col lg:flex-1">
          <span className="font-light text-sm mx-auto lg:mx-0">
            Für Ihre Entwicklung
          </span>
          <h1 className="text-center lg:text-start mb-8 lg:!text-3xl/12 xl:!text-5xl/14 !font-bold">
            Coaching
          </h1>
          <h2 className="text-center lg:text-start">Ihr nächster Schritt</h2>
          <p className="mb-4">
            Sie möchten Ihre mentale Gesundheit und Resilienz stärken, Stress bewusster
            bewältigen oder sich persönlich oder beruflich weiterentwickeln?
          </p>
          <p className="mb-8">
            Dann bietet Coaching einen klaren Rahmen, um Ihre Situation
            einzuordnen, Ziele zu klären und passende nächste Schritte zu
            entwickeln. Wenn Sie unsicher sind, ob Coaching oder Therapie für
            Ihr Anliegen passender ist, klären wir das gemeinsam im
            Erstgespräch.
          </p>
          <ContactBtn className="self-center lg:self-start" />
        </div>
      </section>
      <section className="px-4 sm:px-16 pt-24 pb-24 lg:px-32 lg:pt-32 xl:pt-48 lg:pb-32 xl:pb-48">
        {/* <Newsletter /> */}
      </section>
    </div>
  );
}
