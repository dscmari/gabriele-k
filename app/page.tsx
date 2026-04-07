import Image from "next/image";
import Hero from "./components/Hero";
import ContactBtn from "./components/buttons/ContactBtn";
import AccordeonClean from "./components/AccordeonClean";
import Features from "./components/Features";
import { smoke } from "./data/FeaturesData";
import Accordeon from "./components/Accordeon";
import Newsletter from "./components/newsletter/Newsletter";
import { faqsHome } from "./data/FAQsData";

export default function Home() {
  const hero = {
    title: "Heilpraktikerin für Psychotherapie in Kaufering",
    subtitle:
      "Ich bin Gabriela Kramer, Ihre Heilpraktikerin für Psychotherapie in Kaufering und der Region Landsberg am Lech.",
    intro:
      "In meiner Praxis unterstütze ich Sie bei Ängsten, Stressbewältigung, Schlafproblemen und anderen mentalen Belastungen. Ich biete Ihnen eine entspannte und vertrauensvolle Arbeitsatmosphäre sowie flexible Behandlungszeiten – auch am Abend oder am Wochenende.",
    imgPathDesktop: "/images/portraits/buero_gk.png",
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
      <section className="px-4 lg:px-32 pt-24 lg:pt-32">
        <div className="text-center">
          <span className="font-light text-sm mx-auto lg:mx-0">Ablauf</span>
          <h1 className="mb-8 lg:!text-3xl/12 xl:!text-5xl/14 !font-bold tracking-wide text-custom-blue">
            Unser gemeinsamer Weg
          </h1>
          <p className="mb-8 font-light text-sm max-w-4xl mx-auto">
            Veränderung braucht Raum — und Raum braucht Struktur. Deshalb folgt
            unsere Zusammenarbeit einem klaren Rahmen, der Ihnen von der ersten
            Begegnung bis zum Abschluss Sicherheit und Orientierung gibt.
          </p>
        </div>
        <div className="flex flex-col lg:flex-row lg:gap-16 pt-12">
          <div className="lg:flex-1">
            <Image
              src="/images/process.png"
              alt="Graphik zum Ablauf der Zusammenarbeit"
              height={961}
              width={914}
              className="lg:hidden mx-auto"
            />
            <Image
              src="/images/process_desktop.png"
              alt="Graphik zum Ablauf der Zusammenarbeit"
              height={961}
              width={914}
              className="hidden lg:block lg:w-4xl xl:w-6xl mx-auto"
            />
          </div>
          <div className="pt-12 flex flex-col lg:hidden">
            <h2 className="text-center lg:text-start !mb-8">
              Was Sie erwartet
            </h2>
            <div className="flex flex-col gap-4 text-sm font-light">
              <p>
                Unsere Zusammenarbeit beginnt mit einem kostenlosen Erstgespräch
                von etwa 20 Minuten — ganz unverbindlich. Sie schildern, was Sie
                bewegt, und wir spüren gemeinsam, ob die Chemie stimmt.
              </p>
              <p>
                Passt es, folgt eine ausführliche Anamnese: Wir nehmen uns Zeit
                für Ihre Geschichte, Ihre Ressourcen und das, was Sie sich
                wünschen. Daraus entsteht ein Behandlungskonzept, das wirklich
                zu Ihnen passt.
              </p>
              <p>
                In der therapeutischen Begleitung arbeiten wir dann regelmäßig
                zusammen — mit erprobten Methoden wie Gesprächstherapie,
                verhaltenstherapeutischen Ansätzen oder traumasensibler Arbeit,
                je nachdem, was für Sie stimmig ist.
              </p>
              <p>
                Am Ende steht kein abruptes Ende, sondern ein bewusster
                Abschluss: Wir sichern gemeinsam die Fortschritte, stärken Ihre
                Eigenverantwortung — und verabschieden uns so, wie die Arbeit
                war: wertschätzend.
              </p>
              <ContactBtn className="self-center lg:self-start mt-8 text-base" />
            </div>
          </div>
        </div>
      </section>
      <section className="lg:p-32 pt-12 xl:py-48 flex flex-col gap-8 lg:flex-row lg:gap-16 lg:items-center lg:flex-row-reverse">
        <div className="lg:flex-1">
          <Image
            src={"/images/portraits/vr_gk.jpg"}
            alt="Bild einer Sitzung, in der eine VR-Brille verwendet wird"
            width={400}
            height={400}
            className="object-cover lg:rounded-xl w-96 h-96 mx-auto"
          />
        </div>
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
      </section>
      <section className="bg-custom-blue text-white p-4 py-24 mt-24 lg:mt-0 md:p-16 lg:p-32 scroll-mt-24">
        <Features data={smoke} />
      </section>
      <section
        id="ueber-uns"
        className="pt-24 md:p-16 lg:pt-32 xl:pt-48 lg:px-32"
      >
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
        <div className="flex flex-col lg:flex-row-reverse lg:flex-row gap-16 mt-12 lg:mt-16 xl:mt-32">
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
          <span className="font-light text-sm mx-auto lg:mx-0">
            Schnelle Hilfe
          </span>
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
      <section className="pt-24 lg:pt-32 xl:pt-48 lg:px-32">
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
          <Accordeon faqs={faqsHome} />
        </div>
      </section>
      <section className="px-4 pt-24 pb-24 lg:px-32 lg:pt-32 xl:pt-48 lg:pb-32 xl:pb-48">
        <Newsletter />
      </section>
    </div>
  );
}
