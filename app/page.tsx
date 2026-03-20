import Image from "next/image";
import Hero from "./components/Hero";
import ContactBtn from "./components/buttons/ContactBtn";
import AccordeonClean from "./components/AccordeonClean";
import Features from "./components/Features";
import Accordeon from "./components/Accordeon";
import ScrollToTopBtn from "./components/buttons/ScrollToTopBtn";
import Newsletter from "./components/newsletter/Newsletter";

export default function Home() {
  return (
    <div>
      <Hero imgPathDesktop="/images/portraits/buero_gk.png" />
      <section className="lg:p-32 pt-12 flex flex-col gap-8 lg:flex-row lg:gap-16 lg:items-center">
        <div className="px-4 lg:px-0 flex flex-col lg:flex-1">
          <span className="font-light text-sm mx-auto lg:mx-0">
            Finde deine Ruhe
          </span>
          <h1 className="text-center lg:text-start mb-8 lg:!text-3xl/12 xl:!text-5xl/14 !font-bold tracking-wide text-custom-blue">
            Panik & Ängste mindern
          </h1>
          <h2>
            Angst ist eine natürliche Reaktion des Körpers – doch wenn sie
            überhandnimmt, kann sie den Alltag stark belasten
          </h2>
          <p className="mb-8 font-light text-sm">
            In unserer Arbeit lernen Sie, Ihre Angstreaktionen besser zu
            verstehen und Schritt für Schritt zu regulieren. So gewinnen Sie
            mehr innere Ruhe und Handlungsspielraum zurück.
          </p>
          <ContactBtn className="self-center lg:self-start" />
        </div>
        <div className="lg:flex-1 relative ">
          <Image
            src={"/images/portraits/vr_gk.jpg"}
            alt="Bild einer Sitzung, in der eine VR-Brille verwendet wird"
            width={400}
            height={400}
            className="object-cover lg:rounded-xl w-96 h-96 mx-auto lg:mx-0"
          />
        </div>
      </section>
      <section className="bg-custom-blue text-white p-4 py-24 mt-24 lg:mt-0 md:p-16 lg:p-32 scroll-mt-24">
        <Features />
      </section>
      <section id="ueber-uns" className="pt-24 md:p-16 lg:pt-32 lg:px-32">
        <div className="flex flex-col px-4 lg:px-0">
          <span className="mx-auto font-light text-sm">
            Ruhige Nächte, klare Morgen
          </span>
          <h1 className="mb-8 lg:!text-3xl/12 xl:!text-5xl/14 !font-bold tracking-wide text-custom-blue text-center">
            Besser Schlafen
          </h1>
          <p className="max-w-4xl font-light text-sm lg:text-center mx-auto">
            Ausreichend gesunder Schlaf ist elementar für unser Wohlbefinden. Er
            garantiert Erholung und Leistungsfähigkeit. Oftmals sind belastende
            Situationen, permanenter Stress oder falsche Angewohnheiten für
            schlechten Schlaf verantwortlich.
          </p>
        </div>
        <div className="flex flex-col lg:flex-row-reverse lg:flex-row gap-16 mt-12 lg:mt-32">
          <div className="flex-1">
            <Image
              src="/images/portraits/gk_blue_vertikal.jpg"
              alt="Business environment in the office"
              width={400}
              height={400}
              className="object-cover lg:rounded-xl w-96 h-96 mx-auto lg:mx-0"
            />
          </div>
          <AccordeonClean className="flex-1" />
        </div>
      </section>
      <section className="flex flex-col gap-12 lg:gap-0 lg:flex-row lg:items-center pt-24 lg:pt-32">
        <div className="flex-1 flex flex-col  px-4 lg:px-32">
          <span className="font-light text-sm mx-auto lg:mx-0">Schnelle Hilfe</span>
          <h1 className="mb-8 lg:!text-3xl/12 xl:!text-5xl/14 !font-bold tracking-wide text-custom-blue text-center lg:text-start">
            Unterstützung während der Therapieplatzsuche
          </h1>
          <div className="flex flex-col items-center lg:flex-row lg:items-start gap-8 pt-8">
            <div className="flex-1 flex flex-col items-end font-semibold text-custom-blue">
              <span className="text-9xl">3+</span>
              <span>
                Monate <br /> Wartezeit
              </span>
            </div>

            <p className="flex-2 lg:text-base/8">
              Lange Wartezeiten auf einen kassengestützten Psychotherapieplatz
              sind leider die Regel. Bei Ängsten, Panik, Schlafproblemen, Stress
              oder belastenden Gedanken wünschen sich viele Betroffene schnelle
              Orientierung und Unterstützung. In meiner Praxis für
              Psychotherapie in Kaufering biete ich Ihnen zeitnah Hilfe.
            </p>
          </div>
        </div>
        <div className="lg:flex-1">
          <Image
            src={"/images/portraits/writing_gk.jpg"}
            alt="Bild einer Sitzung, in der eine VR-Brille verwendet wird"
            width={400}
            height={400}
            className="object-cover lg:rounded-xl w-96 h-96 mx-auto lg:mx-0"
          />
        </div>
      </section>
      <section className="pt-24 lg:pt-32 lg:px-32">
        <div className="flex flex-col px-4 lg:px-0">
          <span className="mx-auto font-light text-sm">FAQs</span>
          <h1 className="mb-8 lg:!text-3xl/12 xl:!text-5xl/14 !font-bold tracking-wide text-custom-blue text-center">
            Häufig gestellte Fragen
          </h1>
          <p className="max-w-4xl font-light text-sm lg:text-center mx-auto">
            Hier kriegst du einen Überblick über häufig gestellte Fragen zur
            Zusammenarbeit mit Gabriela Kramer, Heilpraktikerin für
            Psychothrapie.
          </p>
        </div>
        <div className="px-4 pt-12 lg:pt-24">
          <Accordeon />
        </div>
      </section>
      <section className="px-4 pt-24 pb-24 lg:px-32 lg:pt-32 lg:pb-32">
        <Newsletter />
      </section>
      <ScrollToTopBtn />
    </div>
  );
}
