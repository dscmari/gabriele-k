import Image from "next/image";
import Timeline from "../components/cv/Timeline";
import Qualifications from "../components/cv/Qualifications";
import Accordeon from "../components/Accordeon";
import Newsletter from "../components/newsletter/Newsletter";
import { faqsHome } from "../data/FAQsData";
import { educations, jobs } from "../data/QualificationsData";
import Hero_leftOrientated from "../components/Hero_leftOrientated";

export default function page() {
  const hero = {
    title: "Über Mich",
    subtitle:
      "Eine Frage wird mir immer wieder gestellt: Wie wird aus einer Automobilverkäuferin eine Heilpraktikerin für Psychotherapie?",
    intro:
      "Nach über 20 Jahren bei Mercedes-Benz und einer Karriere als Business-Trainerin erkannte ich, dass hinter jedem beruflichen Erfolg ein gesunder Geist steht. Die Arbeit mit Menschen – das Zuhören, das Vertrauen, der Umgang mit Druck – führten mich schließlich ganz natürlich zur Ausbildung als Heilpraktikerin für Psychotherapie. Heute begleite ich Menschen nicht mehr auf dem Weg zum nächsten Geschäftsabschluss, sondern auf dem Weg zu sich selbst.",
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
      <section className="">
        <div className="sm:pt-24 lg:pt-32 md:px-16 lg:px-32 flex flex-col gap-8 lg:gap-16 lg:flex-row-reverse 2xl:flex-row">
          <div className="w-full lg:flex-1 min-w-sm ">
            <Image
              src={"/images/portraits/portrait_standing.jpg"}
              alt="Portraitfoto von Heilpraktikerin für Psychotherapie Gaby Kramer"
              width={400}
              height={600}
              className="object-cover sm:rounded-tr-xl mx-auto md:mx-0"
            />
          </div>
          <div className="px-4 lg:px-0 lg:mt-16">
            <span className="font-light text-sm mx-auto lg:mx-0">
              Klar. Menschlich. Lösungsorientiert.
            </span>
            <h1 className="mb-8 lg:!text-3xl/12 xl:!text-5xl/14 !font-bold">
              Mein Weg
            </h1>
            <div className="flex flex-col gap-4">
              <p>
                Ich war über 20 Jahre im Vertrieb der Marke Mercedes-Benz tätig.
                Auf den ersten Blick ging es dort um Fahrzeuge. In Wirklichkeit
                ging es oft um Menschen, Vertrauen, Wünsche, Fragen und darum,
                wirklich zuzuhören. Leistung, Verantwortung und Druck waren mir
                aus dieser Zeit sehr vertraut. Heute weiß ich: Stärke bedeutet
                nicht nur, durchzuhalten. Sie bedeutet auch, rechtzeitig auf
                sich selbst zu achten.
              </p>
              <p>
                Als Business-Trainerin und Coach stand später ein Ziel im
                Mittelpunkt: Menschen beruflich erfolgreicher zu machen: durch
                klare Kommunikation, sicheres Auftreten und den Aufbau von
                Vertrauen. Mit der Zeit wurde daraus eine wichtige Erkenntnis:
                Leistungsfähigkeit braucht mentale Gesundheit.
              </p>
              <p>
                2015 erkrankte ich körperlich schwer. Ergänzend zur
                medizinischen Behandlung wurde mir bewusst, wie innere
                Stabilität und mentale Selbstregulation die Gesundheit
                unterstützen können. Heute begleite ich Menschen, die ihre
                mentale Gesundheit stärken und erhalten möchten. Therapie setzt
                dort an, wo psychische Beschwerden den Alltag belasten. Coaching
                passt, wenn persönliche oder berufliche Entwicklung im
                Vordergrund steht.
              </p>
              <p>
                Ich verbinde therapeutisches Fachwissen und Coaching-Kompetenz
                mit eigener Erfahrung aus der freien Wirtschaft. Daraus entsteht
                ein klarer, menschlicher und lösungsorientierter Arbeitsstil.
              </p>
            </div>
          </div>
          <Timeline className="hidden 2xl:block md:flex-1 lg:mr-32 xl:mr-48 2xl:mr-0" />
        </div>{" "}
      </section>
      <section className="pt-24 lg:pt-32 xl:pt-48 px-4 md:px-16 lg:px-32">
        <div className="flex flex-col">
          <span className="font-light text-sm">Erfahrung</span>
          <h1 className="mb-8 lg:!text-3xl/12 xl:!text-5xl/14 !font-bold max-w-5xl">
            Über 17 Jahre Berufserfahrung als Coach und Heilpraktikerin für
            Psychotherapie
          </h1>
        </div>
        <Qualifications qualifications={jobs} className="mt-12 max-w-3xl" />
      </section>
      <section className="pt-24 lg:pt-32 xl:pt-48 px-4 md:px-16 lg:px-32">
        <div className="flex flex-col">
          <span className="font-light text-sm">Zertifizierungen</span>
          <h1 className="mb-8 lg:!text-3xl/12 xl:!text-5xl/14 !font-bold">
            Zusätzliche Aus- und Weiterbildungen
          </h1>
          <p className="max-w-4xl font-light text-sm">
            Meine Aus- und Weiterbildungen spiegeln meinen beruflichen Weg
            wider: von Businesstraining & Coaching, Wirtschaftsmediation,
            Changemanagement zur therapeutischen Arbeit als Heilpraktikerin für
            Psychotherapie.
          </p>
        </div>
        <Qualifications
          qualifications={educations}
          className="mt-12 max-w-3xl"
        />
      </section>
      <section className="pt-24 lg:pt-32 xl:pt-48 px-4 md:px-16 lg:px-32">
        <div className="flex flex-col">
          <span className="mx-auto font-light text-sm">FAQs</span>
          <h1 className="mb-8 lg:!text-3xl/12 xl:!text-5xl/14 !font-bold text-center">
            Häufig gestellte Fragen
          </h1>
          <p className="max-w-4xl font-light text-sm lg:text-center mx-auto">
            Hier kriegen Sie einen Überblick über häufig gestellte Fragen zur
            Zusammenarbeit mit Gabriela Kramer, Heilpraktikerin für
            Psychothrapie.
          </p>
        </div>
        <div className="pt-12 lg:pt-24">
          <Accordeon faqs={faqsHome} />
        </div>
      </section>
      <section className="px-4 md:px-16 lg:px-32 pt-24 pb-24 lg:pt-32 xl:pt-48 lg:pb-32 xl:pb-48">
        <Newsletter />
      </section>
    </div>
  );
}
