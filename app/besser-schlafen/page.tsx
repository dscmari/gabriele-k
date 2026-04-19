import Hero from "../components/Hero";
import Image from "next/image";
import ContactBtn from "../components/buttons/ContactBtn";
import Features from "../components/Features";
import { sleep } from "../data/FeaturesData";
import Accordeon from "../components/Accordeon";
import Newsletter from "../components/newsletter/Newsletter";
import { faqsHome } from "../data/FAQsData";

export default function page() {
  const hero = {
    title: "Gesund und erholsam schlafen",
    subtitle: "Hilfe bei Ein- und Durchschlafstörungen",
    intro:
      "Sie sind abends hundemüde, liegen im Bett und können trotzdem nicht einschlafen. Oder Sie wachen nachts immer wieder auf und finden nicht mehr in den Schlaf. Wenn Sie unter Ein- und Durchschlafstörungen leiden, kann das sehr belastend sein.",
    imgPathDesktop: "/images/portraits/buero_0.png",
  };
  const { title, subtitle, intro, imgPathDesktop } = hero;
  return (
    <div>
      <Hero
        imgPathDesktop={imgPathDesktop}
        title={title}
        subtitle={subtitle}
        intro={intro}
      />
      <section className="lg:p-32 pt-24 sm:px-16 flex flex-col gap-8 lg:flex-row-reverse lg:gap-16 lg:items-center">
                <div className="lg:flex-1 relative ">
          <Image
            src={"/images/portraits/gaby_2.jpg"}
            alt="Portraitfoto von Heilpraktikerin für Psychotherapie Gaby Kramer"
            width={400}
            height={500}
            className="object-cover lg:rounded-xl mx-auto"
          />
        </div>
        <div className="px-4 sm:px-0 pt-24 lg:pt-0 flex flex-col lg:flex-1">
          <span className="font-light text-sm mx-auto lg:mx-0">
            Ruhige Nächte, klare Morgen
          </span>
          <h1 className="text-center lg:text-start mb-8 lg:!text-3xl/12 xl:!text-5xl/14 !font-bold tracking-wide text-custom-blue">
            Besser schlafen
          </h1>
          <h2 className="text-center lg:text-start">
            Als Heilpraktikerin für Psychotherapie unterstütze ich Sie dabei,
            die möglichen Zusammenhänge Ihrer Schlafstörungen besser zu
            verstehen und passende Schritte für Ihre persönliche Situation zu
            entwickeln
          </h2>
          <p className="mb-8">
            Meine Begleitung ist individuell auf Sie abgestimmt. Gemeinsam
            erarbeiten wir Lösungen, die realistisch und im Alltag gut umsetzbar
            sind. Es geht darum, Ihren Schlaf zu entlasten, innere Ruhe zu
            fördern und wieder mehr Erholung möglich zu machen.
          </p>
          <ContactBtn className="self-center lg:self-start" />
        </div>

      </section>
      <section className="bg-custom-blue text-white p-4 py-24 dark:py-0 mt-16 md:p-16 lg:p-32 scroll-mt-24">
        <Features data={sleep} />
      </section>
      <section className="lg:pt-32 xl:pt-48 lg:px-32 pt-24 flex flex-col gap-8 lg:flex-row lg:gap-16 lg:items-center">
        <div className="lg:flex-1">
          <Image
            src={"/images/portraits/gaby_3.jpg"}
            alt="Portrait von Heilpraktikerin für Psychotherapie Gaby Kramer"
            width={400}
            height={400}
            className="object-cover lg:rounded-xl mx-auto"
          />
        </div>
        <div className="px-4 sm:px-16 pt-24 lg:p-0 flex flex-col lg:flex-1">
          <span className="font-light text-sm mx-auto lg:mx-0">
            Hol dir einen Schlaf zurück
          </span>
          <h1 className="text-center lg:text-start mb-8 lg:!text-3xl/12 xl:!text-5xl/14 !font-bold tracking-wide text-custom-blue">
            Schlafstörungen überwinden
          </h1>
          <h2>
            In meiner Praxis unterstütze ich Sie dabei, die möglichen
            Zusammenhänge Ihrer Schlafstörungen besser zu verstehen und passende
            Schritte für Ihre persönliche Situation zu entwickeln
          </h2>
          <p className="mb-4 font-light text-sm">
            Gemeinsam erarbeiten wir Lösungen, die realistisch und im Alltag gut
            umsetzbar sind. Es geht darum, Ihren Schlaf zu entlasten, innere
            Ruhe zu fördern und wieder mehr Erholung möglich zu machen. Welche
            Form der Unterstützung für Sie passend ist, klären wir sorgfältig im
            persönlichen Gespräch.
          </p>
          <p className="mb-8 font-light text-sm">
            Sie möchten mehr erfahren? Bitte vereinbaren Sie ein kostenfreies
            telefonisches Erstgespräch von 15 Minuten direkt in der
            Onlineterminbuchung.
          </p>
          <ContactBtn className="self-center lg:self-start" />
        </div>
      </section>
      <section className="pt-24 lg:pt-32 xl:pt-48 lg:px-32">
        <div className="flex flex-col px-4 sm:px-16 text-center lg:px-0">
          <span className="mx-auto font-light text-sm">FAQs</span>
          <h1 className="mb-8 lg:!text-3xl/12 xl:!text-5xl/14 !font-bold text-center">
            Häufig gestellte Fragen
          </h1>
          <p className="max-w-4xl font-light text-sm lg:text-center mx-auto">
            Hier kriegst du einen Überblick über häufig gestellte Fragen zur
            Zusammenarbeit mit Gabriela Kramer, Heilpraktikerin für
            Psychothrapie.
          </p>
        </div>
        <div className="px-4 sm:px-16 lg:px-32 pt-12 lg:pt-24">
          <Accordeon faqs={faqsHome} />
        </div>
      </section>
      <section className="px-4 sm:px-16 pt-24 pb-24 lg:px-32 lg:pt-32 xl:pt-48 lg:pb-32 xl:pb-48">
        <Newsletter />
      </section>
    </div>
  );
}
