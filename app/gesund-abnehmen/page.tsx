import ContactBtn from "../components/buttons/ContactBtn";
import Image from "next/image";
import Hero_leftOrientated from "../components/Hero_leftOrientated";
import SixBoxLayout from "../components/SixBoxLayout";
import { weightSixBoxData } from "../data/SixBoxData";
import Accordeon from "../components/Accordeon";
import Newsletter from "../components/newsletter/Newsletter";
import { faqsHome } from "../data/FAQsData";

export default function page() {
  const hero = {
    title: "Gesund abnehmen",
    subtitle: "Ihr Weg zum Wohlfühlgewicht",
    intro:
      "Abnehmen beginnt oft nicht auf dem Teller, sondern im Kopf. Denn Essverhalten, Stress, Gewohnheiten und emotionale Belastungen hängen häufig eng zusammen.",
    imgPathDesktop: "/images/portraits/buero_1.jpg",
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
      <section className="xl:pt-48 lg:pt-32 lg:px-32 pt-12 flex flex-col flex-col-reverse gap-8 xl:gap-16 lg:flex-row lg:gap-16 lg:items-center">
        <div className="lg:flex-1 relative mt-12 lg:mt-0 ">
          <Image
            src={"/images/portraits/buero_2.jpg"}
            alt="Portraitfoto von Heilpraktikerin für Psychotherapie Gaby Kramer"
            width={800}
            height={800}
            className="object-cover lg:rounded-xl mx-auto"
          />
        </div>
        <div className="px-4 lg:px-0 flex flex-col lg:flex-1">
          <span className="font-light text-sm mx-auto lg:mx-0">
            Finde deine Ruhe test
          </span>
          <h1 className="text-center lg:text-start mb-8 lg:!text-3xl/12 xl:!text-5xl/14 !font-bold tracking-wide text-custom-blue">
            Gesund abnehmen
          </h1>
          <h2 className="text-center lg:text-start">Gewicht im Gleichgewicht - Abnehmen beginnt im Kopf</h2>
          <p className="mb-4">
            Der Wunsch nach dem eigenen Wohlfühlgewicht hat oft mit mehr zu tun
            als nur mit Ernährung. Stress, Gewohnheiten, emotionale Belastungen
            oder innere Anspannung können das Essverhalten deutlich
            beeinflussen. Vielleicht haben Sie selbst schon erlebt, dass es
            nicht einfach an mangelnder Disziplin liegt. Genau hier setzt
            Gewicht im Gleichgewicht an.
          </p>
          <p className="mb-8">
            In meiner Praxis in Kaufering begleite ich Sie dabei, die
            Hintergründe Ihres Essverhaltens besser zu verstehen. Denn Essen
            dient nicht immer nur dazu, Hunger zu stillen. Es kann auch
            beruhigen, ablenken, belohnen oder kurzfristig entlasten. Wenn diese
            Zusammenhänge klarer werden, entsteht oft eine neue Grundlage für
            Veränderung.
          </p>
          <ContactBtn className="self-center lg:self-start" />
        </div>
      </section>
      <section className="px-4 lg:px-32 pt-24 lg:pt-32 xl:pt-48">
        <div className="">
          <span className="font-light text-sm mx-auto lg:mx-0">
            Viele Ebenen
          </span>
          <h1 className="mb-8 lg:!text-3xl/12 xl:!text-5xl/14 max-w-5xl !font-bold tracking-wide text-custom-blue">
            Gewicht im Gleichgewicht - Unterstützung bei allen Aspekten des
            Abnehmens
          </h1>
          <h2 className="max-w-5xl">
            Abnehmen ist mehr als eine Frage der Disziplin – es berührt Ihr
            Verhältnis zu Ihnen selbst, zu Essen, zu Ihrem Körper und oft auch
            zu Ihrer Geschichte
          </h2>
          <p className="">
            Gewicht im Gleichgewicht ist mehr als ein reines Abnehmprogramm. Es
            geht nicht um starre Regeln, sondern um Orientierung, persönliche
            Begleitung und um Schritte, die sich stimmig in Ihr Leben einfügen
            lassen.Wenn Sie Ihr Wohlfühlgewicht nicht nur mit noch mehr Druck
            erreichen möchten, sondern die Hintergründe Ihres Essverhaltens
            besser verstehen wollen, begleite ich Sie gern.
          </p>
        </div>
        <SixBoxLayout boxes={weightSixBoxData} className="pt-12 lg:pt-24" />
      </section>
      <section className="xl:pt-48 lg:pt-32 lg:px-32 pt-12 flex flex-col gap-8 xl:gap-16 lg:flex-row-reverse lg:gap-16 lg:items-center">
        <div className="lg:flex-1 relative mt-24 lg:mt-0">
          <Image
            src={"/images/portraits/buero_0.png"}
            alt="Portraitfoto von Heilpraktikerin für Psychotherapie Gaby Kramer"
            width={800}
            height={800}
            className="object-cover lg:rounded-xl mx-auto"
          />
        </div>
        <div className="px-4 lg:px-0 flex flex-col lg:flex-1">
          <span className="font-light text-sm mx-auto lg:mx-0">
            Vorgehensweise
          </span>
          <h1 className="text-center lg:text-start mb-8 lg:!text-3xl/12 xl:!text-5xl/14 !font-bold tracking-wide text-custom-blue">
            Unser Ablauf
          </h1>
          <h2>Am Anfang steht ein ausführliches Erstgespräch</h2>
          <p className="mb-4">
            Es bietet Raum, Ihre bisherige Entwicklung, Ihre Gewohnheiten,
            mögliche Belastungsfaktoren und Ihre aktuelle Lebenssituation in
            Ruhe zu betrachten. Auf dieser Grundlage wird die weitere Begleitung
            individuell auf Sie abgestimmt.
          </p>
          <p className="mb-8">
            Im weiteren Verlauf arbeite ich schwerpunktmäßig mit Hypnose. Sie
            kann dabei unterstützen, innere Prozesse bewusster wahrzunehmen,
            eingefahrene Muster zu reflektieren und neue hilfreiche Impulse für
            den Alltag zu entwickeln. Welche Schritte für Sie passend sind,
            orientiert sich immer an Ihrem persönlichen Anliegen.
          </p>
          <ContactBtn className="self-center lg:self-start" />
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
