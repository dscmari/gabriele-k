import Image from "next/image";
import Hero from "./components/Hero";
import ContactBtn from "./components/buttons/ContactBtn";
import AccordeonClean from "./components/AccordeonClean";
import Features from "./components/Features";

export default function Home() {
  return (
    <div>
      <Hero />
      <section className="lg:p-32 pt-24 flex flex-col gap-8 lg:flex-row lg:gap-16 lg:items-center">
        <div className="px-4 lg:px-0 flex flex-col lg:flex-1">
          <span className="font-light text-sm">Finde deine Ruhe</span>
          <h1 className="mb-8 lg:!text-3xl/12 xl:!text-5xl/14 !font-bold tracking-wide text-custom-blue">
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
        <div className="lg:flex-1 relative h-90">
          <Image
            src={"/images/anxiety.png"}
            alt="Stockfoto einer Person in Angst"
            fill
            className="object-cover lg:rounded-xl"
          />
        </div>
      </section>
      <section className="bg-custom-blue text-white p-4 py-24 mt-24 lg:mt-0 md:p-16 lg:p-32 scroll-mt-24">
        <Features />
      </section>
      <section id="ueber-uns" className="pt-24 md:p-16 lg:p-32">
        <div className="flex flex-col px-4 lg:px-0">
          <span className="lg:mx-auto font-light text-sm">
            Ruhige Nächte, klare Morgen
          </span>
          <h1 className="mb-8 lg:!text-3xl/12 xl:!text-5xl/14 !font-bold tracking-wide text-custom-blue text-center">
            Besser Schlafen
          </h1>
          <p className="max-w-4xl font-light text-sm lg:text-center mx-auto">
            Ausreichend gesunder Schlaf ist elementar für unser Wohlbefinden. Er
            garantiert Erholung und Leistungsfähigkeit. Oftmals sind belastende Situationen, permanenter Stress oder falsche Angewohnheiten für schlechten Schlaf verantwortlich.
          </p>
        </div>
        <div className="flex flex-col lg:flex-row-reverse lg:flex-row gap-16 mt-12 lg:mt-32">
          <div className="flex-1">
            <Image
              src="/images/sleep.jpg"
              alt="Business environment in the office"
              width={800}
              height={600}
              className="lg:rounded-xl"
            />
          </div>
          <AccordeonClean className="flex-1" />
        </div>
      </section>
    </div>
  );
}
