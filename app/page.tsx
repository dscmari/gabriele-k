import Image from "next/image";
import Hero from "./components/Hero";
import ContactBtn from "./components/buttons/ContactBtn";
import AccordeonClean from "./components/AccordeonClean";
import Features from "./components/Features";
import { smoke } from "./data/FeaturesData";
import Accordeon from "./components/Accordeon";
import Newsletter from "./components/newsletter/Newsletter";
import { faqsHome } from "./data/FAQsData";
import Hero_leftOrientated from "./components/Hero_leftOrientated";
import FourBoxLayout from "./components/FourBoxLayout";
import { therapyFourBox } from "./data/FourBoxData";

export default function Home() {
  const hero = {
    title: "Heilpraktikerin für Psychotherapie in Kaufering",
    subtitle:
      "Ich bin Gabriela Kramer, Ihre Heilpraktikerin für Psychotherapie in Kaufering und der Region Landsberg am Lech",
    intro:
      "In meiner Praxis für Psychotherapie und Hypnose unterstütze ich Sie bei Ängsten, Stressbewältigung, Schlafproblemen und anderen mentalen Belastungen. Ich biete Ihnen eine entspannte und vertrauensvolle Arbeitsatmosphäre sowie flexible Behandlungszeiten – auch am Abend oder am Wochenende.",
    imgPathDesktop: "/images/portraits/buero_0.png",
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
      <section className="lg:px-32 lg:pt-32 pt-12 xl:pt-48 flex flex-col gap-8 xl:gap-16 lg:flex-row lg:gap-16 lg:items-center lg:flex-row-reverse">
        <div className="lg:flex-1">
          <Image
            src={"/images/portraits/buero_1.jpg"}
            alt="Bild einer Sitzung, in der eine VR-Brille verwendet wird"
            width={800}
            height={400}
            className="object-cover lg:rounded-xl  mx-auto"
          />
        </div>
        <div className="px-4 pt-24 lg:pt-0 sm:px-16 lg:px-0 flex flex-col lg:flex-1">
          <span className="font-light text-sm mx-auto lg:mx-0">
            Wieder mehr Sicherheit im Alltag erleben
          </span>
          <h1 className="text-center lg:text-start mb-8 lg:!text-3xl/12 xl:!text-5xl/14 !font-bold">
            Ängste & Panik regulieren
          </h1>
          <h2 className="text-center lg:text-start">
            Angst ist eine natürliche Reaktion des Körpers. Sie kann schützen,
            warnen und aktivieren. Wenn Angst jedoch überhandnimmt, kann sie den
            Alltag stark belasten.
          </h2>
          <p className="mb-4">
            Panikattacken, unterschiedlichste Ängste oder diffuse Anspannung
            ohne klaren Grund können sich auf viele Arten zeigen. Was sie
            gemeinsam haben: Sie entstehen im Nervensystem und lassen sich dort
            auch gezielt ansprechen.
          </p>
          <p className="mb-8">
            In unserer gemeinsamen Arbeit lernen Sie, Ihre Angstreaktionen
            besser zu verstehen und Schritt für Schritt zu regulieren. So
            gewinnen Sie mehr Sicherheit, innere Stabilität und
            Handlungsspielraum zurück.
          </p>
          <ContactBtn className="self-center lg:self-start" />
        </div>
      </section>
      <section className="xl:pt-48 lg:pt-32 lg:px-32 pt-12 flex flex-col gap-8 xl:gap-16 lg:flex-row lg:gap-16 lg:items-center">
        <div className="lg:flex-1 relative mt-24 lg:mt-0">
          <Image
            src={"/images/stress.jpg"}
            alt="Portraitfoto von Heilpraktikerin für Psychotherapie Gaby Kramer"
            width={800}
            height={800}
            className="object-cover lg:rounded-xl mx-auto"
          />
        </div>
        <div className="px-4 sm:px-16 lg:px-0 pt-24 lg:pt-0 flex flex-col lg:flex-1">
          <span className="font-light text-sm mx-auto lg:mx-0">
            Umgang mit Druck lernen
          </span>
          <h1 className="text-center lg:text-start mb-8 lg:!text-3xl/12 xl:!text-5xl/14 !font-bold text-custom-blue">
            Stress bewältigen
          </h1>
          <h2 className="text-center lg:text-start">
            Wenn der Alltag zu viel wird
          </h2>
          <p className="mb-4">
            Stress ist eine der häufigsten Ursachen für Schlafprobleme,
            Erschöpfung und emotionale Belastung. Er entsteht oft schleichend –
            und bleibt, wenn er keine Ventile findet. Genau hier setzen wir an.
          </p>
          <p className="mb-8">
            In meiner Praxis begleite ich Sie dabei, Stressauslöser zu erkennen,
            das Nervensystem gezielt zu beruhigen und langfristig mehr innere
            Ruhe in den Alltag zu bringen – mit erprobten Methoden wie
            Atemtechniken, EMDR und Hypnose.
          </p>
          <ContactBtn className="self-center lg:self-start" />
        </div>
      </section>
      <section className="pt-24 sm:px-16 lg:pt-32 xl:pt-48 lg:px-32">
        <div className="flex flex-col px-4 lg:px-0">
          <span className="mx-auto font-light text-sm">
            Ruhige Nächte, klare Morgen
          </span>
          <h1 className="mb-8 lg:!text-3xl/12 xl:!text-5xl/14 !font-bold text-custom-blue text-center">
            Mehr Energie durch besseren Schlaf
          </h1>
          <p className="max-w-4xl lg:text-center mx-auto">
            Ausreichend gesunder Schlaf ist elementar für unser Wohlbefinden. Er
            garantiert Erholung und Leistungsfähigkeit. Oftmals sind belastende
            Situationen, permanenter Stress oder falsche Angewohnheiten für
            schlechten Schlaf verantwortlich.
          </p>
        </div>
        <div className="flex flex-col lg:flex-row-reverse lg:flex-row gap-16 mt-12 lg:mt-16 xl:mt-32">
          <div className="lg:flex-1">
            <Image
              src="/images/portraits/buero_0.png"
              alt="Business environment in the office"
              width={800}
              height={800}
              className="object-cover lg:rounded-xl mx-auto lg:mx-0"
            />
          </div>
          <AccordeonClean className="lg:flex-1" />
        </div>
      </section>
      <section className="xl:pt-48 lg:pt-32 lg:px-32 pt-24 flex flex-col gap-8 xl:gap-16 lg:flex-row lg:gap-16 lg:items-center">
        <div className="lg:flex-1 relative ">
          <Image
            src={"/images/portraits/buero_2.jpg"}
            alt="Foto Heilpraktikerin für Psychotherapie Gaby Kramer im Gespräch mit einer Klientin"
            width={800}
            height={800}
            className="object-cover lg:rounded-xl mx-auto"
          />
        </div>
        <div className="px-4 pt-24 lg:pt-0 sm:px-16 lg:px-0 flex flex-col lg:flex-1">
          <span className="font-light text-sm mx-auto lg:mx-0">
            Erreiche dein Wohlfühlgewicht
          </span>
          <h1 className="text-center lg:text-start mb-8 lg:!text-3xl/12 xl:!text-5xl/14 !font-bold">
            Gesund abnehmen
          </h1>
          <h2 className="text-center lg:text-start">
            Gewicht im Gleichgewicht - Ihr Weg zum Wohlfühlgewicht!
          </h2>
          <p className="mb-4">
            Abnehmen beginnt oft nicht auf dem Teller, sondern im Kopf. Denn
            Essverhalten, Stress, Gewohnheiten und emotionale Belastungen hängen
            häufig eng zusammen. Mit Gewicht im Gleichgewicht begleite ich Sie
            dabei, diese Zusammenhänge besser zu verstehen und neue,
            alltagstaugliche Wege zu entwickeln.
          </p>
          <p className="mb-4">
            Im Fokus stehen keine starren Regeln, sondern ein bewussterer Umgang
            mit sich selbst, dem Essen und den eigenen Belastungen.
          </p>
          <p className="mb-8">
            Für Menschen, die ihr Wohlfühlgewicht erreichen möchten und dabei
            mehr suchen als das nächste Abnehmprogramm.
          </p>
          <ContactBtn className="self-center lg:self-start" />
        </div>
      </section>
      <section className="sm:px-16 lg:px-32 pt-24 lg:pt-32 xl:pt-48">
        <div className="text-center px-4 sm:px-0">
          <span className="font-light text-sm mx-auto lg:mx-0">Ablauf</span>
          <h1 className="mb-8 lg:!text-3xl/12 xl:!text-5xl/14 !font-bold text-custom-blue">
            Unser gemeinsamer Weg
          </h1>
          <p className="mb-8 max-w-4xl mx-auto">
            Veränderung braucht Raum — und Raum braucht Struktur. Deshalb folgt
            unsere Zusammenarbeit einem klaren Rahmen, der Ihnen von der ersten
            Begegnung bis zum Abschluss Sicherheit und Orientierung gibt.
          </p>
        </div>
        <div className="flex flex-col lg:flex-row lg:gap-16 pt-12">
          <div className="lg:flex-1">
            <div className="dark:bg-white px-4 sm:px-16 dark:py-24">
              <Image
                src="/images/roadmap_mobile.png"
                alt="Graphik zum Ablauf der Zusammenarbeit"
                height={500}
                width={500}
                className="lg:hidden mx-auto"
              />
            </div>
            <Image
              src="/images/roadmap_2.png"
              alt="Graphik zum Ablauf der Zusammenarbeit"
              height={961}
              width={914}
              className="hidden lg:block lg:w-4xl xl:w-6xl mx-auto"
            />
          </div>
          <div className="pt-12 px-4 sm:px-0 flex flex-col lg:hidden">
            <h2 className="text-center lg:text-start !mb-8">
              Was Sie erwartet
            </h2>
            <div className="flex flex-col gap-4">
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
      <section className="sm:px-16 lg:px-32 pt-24 lg:pt-32 xl:pt-48">
        <div className="text-center px-4 sm:px-0">
          <span className="font-light text-sm mx-auto lg:mx-0">
            Klare Vorgehensweise
          </span>
          <h1 className="mb-8 lg:!text-3xl/12 xl:!text-5xl/14 !font-bold text-custom-blue">
            Struktur statt endloser Therapie
          </h1>
          <p className="mb-8 max-w-4xl mx-auto">
            Viele Menschen wünschen sich keine Therapie ohne absehbares Ende,
            sondern eine klare, zeitlich überschaubare Begleitung.
          </p>
        </div>
        <FourBoxLayout data={therapyFourBox} />
      </section>

      <section className="flex flex-col gap-12 lg:gap-16 lg:flex-row lg:items-center pt-24 lg:pt-32 lg:px-32 xl:pt-48">
        <div className="flex-1 flex flex-col ">
          <span className="font-light text-sm mx-auto lg:mx-0">
            Schnelle Hilfe
          </span>
          <h1 className="mb-8 lg:!text-3xl/12 xl:!text-5xl/14 !font-bold text-custom-blue text-center lg:text-start">
            Unterstützung während der Therapieplatzsuche
          </h1>
          <div className="flex flex-col items-center lg:flex-row lg:items-start gap-8 2xl:gap-16 pt-8">
            <div className="flex-1 flex flex-col items-end 2xl:flex-0 font-semibold text-custom-blue dark:text-darkmode-white">
              <span className="text-9xl">3+</span>
              <span>
                Monate <br /> Wartezeit
              </span>
            </div>
            <p className="flex-2 lg:text-base/8 px-4 sm:px-16 lg:px-0 2xl:max-w-xl">
              Lange Wartezeiten auf einen kassengestützten Psychotherapieplatz
              sind leider die Regel. Bei Ängsten, Panik, Schlafproblemen, Stress
              oder belastenden Gedanken wünschen sich viele Betroffene schnelle
              Orientierung und Unterstützung. In meiner Praxis für
              Psychotherapie in Kaufering biete ich Ihnen zeitnah Hilfe.
            </p>
          </div>
        </div>
        <div className="lg:flex-1 sm:max-w-lg sm:mx-auto">
          <Image
            src={"/images/portraits/gaby_2.jpg"}
            alt="Bild von Gaby Kramer, Heilpraktikerin für Psychotherapie"
            width={800}
            height={800}
            className="object-cover lg:rounded-xl mx-auto lg:mx-0"
          />
        </div>
      </section>
      <section className="bg-custom-blue text-white px-4 py-12 md:p-16 lg:p-32 mt-12 lg:mt-32 xl:mt-48">
        <Features data={smoke} />
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
