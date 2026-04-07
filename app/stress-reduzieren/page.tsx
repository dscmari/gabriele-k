import Image from "next/image";
import Hero_leftOrientated from "../components/Hero_leftOrientated";
import ContactBtn from "../components/buttons/ContactBtn";
import SixBoxLayout from "../components/SixBoxLayout";
import { stress } from "../data/SixBoxData";
import { stressFeatures } from "../data/FeaturesData";
import Features from "../components/Features";
import Accordeon from "../components/Accordeon";
import Newsletter from "../components/newsletter/Newsletter";
import { faqsHome } from "../data/FAQsData";

export default function page() {
  const hero = {
    title: "Individuelle Hilfe bei Stress",
    subtitle:
      "Wenn Stress zum Dauerzustand wird und Sie nur noch weiter machen",
    intro:
      "Stress gehört zum Leben – aber wenn er nicht mehr aufhört, wenn Sie morgens schon erschöpft aufwachen und abends nicht abschalten können, wird er zur Belastung. Hier finden Sie Unterstützung, um wieder Boden unter den Füßen zu spüren.",
    imgPathDesktop: "/images/portraits/buero_gk.png",
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
      <section className="px-4 lg:px-32 pt-24 lg:pt-32">
        <div className="text-center">
          <span className="font-light text-sm mx-auto lg:mx-0">
            Entspannung fehlt
          </span>
          <h1 className="mb-8 lg:!text-3xl/12 xl:!text-5xl/14 !font-bold tracking-wide text-custom-blue">
            Woran Sie Stress erkennen können?
          </h1>
          <h2>
            Stress zeigt sich von Mensch zu Mensch unterschiedlich. Aber es gibt
            klassische Anzeichen.
          </h2>
        </div>
        <SixBoxLayout boxes={stress} className="pt-12 lg:pt-24" />
      </section>
      <section className="bg-custom-blue text-white p-4 py-24 mt-24 lg:mt-16 md:p-16 lg:p-32 scroll-mt-24">
        <Features data={stressFeatures} />
      </section>
      <section className="lg:pt-32 lg:px-32 pt-12 xl:pt-48 flex flex-col gap-8 lg:flex-row lg:gap-16 lg:items-center lg:flex-row-reverse">
        <div className="lg:flex-1">
          <Image
            src={"/images/portraits/buero_sitting.jpg"}
            alt="Bild einer Sitzung, in der eine VR-Brille verwendet wird"
            width={400}
            height={800}
            className="object-cover lg:rounded-xl mx-auto"
          />
        </div>
        <div className="px-4 lg:px-0 flex flex-col lg:flex-1">
          <span className="font-light text-sm mx-auto lg:mx-0">
            Finde deine Ruhe
          </span>
          <h1 className="text-center lg:text-start mb-8 lg:!text-3xl/12 xl:!text-5xl/14 !font-bold tracking-wide text-custom-blue">
            Haltung zu Stress entwickeln
          </h1>
          <div className="flex flex-col gap-4 mb-8 lg:mt-4">
            <h2>
              In meiner Heilpraktiker Praxis für Psychotherapie nehmen wir Ihren
              Stress ernst
            </h2>
            <p>
              Mir ist wichtig, dass Sie sich mit Ihrem Anliegen ernst genommen
              fühlen. Sie finden bei mir einen geschützten Rahmen, Ruhe für eine
              ehrliche Bestandsaufnahme und eine Begleitung, die auf Ihre
              persönliche Situation abgestimmt ist.
            </p>
            <h2>Worum es in der Begleitung geht</h2>
            <p>
              Ziel meiner Begleitung ist es, dass Sie Ihre Belastung besser
              verstehen und einen stimmigeren Umgang mit Stress entwickeln. Es
              geht darum, Warnzeichen früher wahrzunehmen, Zusammenhänge klarer
              zu erkennen und wieder gesünder, klarer und dauerhaft
              leistungsfähig im Alltag zu sein.
            </p>
            <p>
              Stress muss nicht Ihr Dauerzustand bleiben. Manchmal beginnt
              Veränderung damit, die eigene Situation ernst zu nehmen und sich
              Unterstützung zu holen.
            </p>
          </div>

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
