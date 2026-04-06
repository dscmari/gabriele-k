import { title } from "process";
import Hero_leftOrientated from "../components/Hero_leftOrientated";
import { methodsBlog } from "../data/BlogData";
import Blog from "../components/Blog";
import Features from "../components/Features";
import { methodsFeatures } from "../data/FeaturesData";
import Accordeon from "../components/Accordeon";
import Newsletter from "../components/newsletter/Newsletter";

export default function page() {
  const hero = {
    title: "Therapeutische Verfahren",
    subtitle:
      "Erprobte Methoden, die ich in meiner Heilpraktiker für Psychotherapie Praxis einsetze",
    intro:
      "Jeder Mensch ist anders — und so ist auch jede Therapie anders. Ich arbeite nicht nach Schema, sondern wähle die Methoden, die zu Ihnen, Ihrem Thema und Ihrem Tempo passen. Was mich dabei leitet: Erfahrung, Fingerspitzengefühl und der Wunsch, dass Sie sich wirklich gesehen fühlen.",
    imgPathDesktop: "/images/office_bg.jpg",
  };
  const { title, subtitle, intro, imgPathDesktop } = hero;
  return (
    <div>
      <Hero_leftOrientated
        imgPathDesktop={imgPathDesktop}
        imgPathMobile={imgPathDesktop}
        title={title}
        subtitle={subtitle}
        intro={intro}
      />
      <section className="bg-custom-blue text-white p-4 py-24 mt-16 md:p-16 lg:p-32 scroll-mt-24">
        <Features data={methodsFeatures} />
      </section>
      <section className="px-4 lg:px-32 pt-24 lg:pt-32">
        <div className="text-center">
          <span className="font-light text-sm mx-auto lg:mx-0">subheader</span>
          <h1 className="mb-8 lg:!text-3xl/12 xl:!text-5xl/14 !font-bold tracking-wide text-custom-blue">
            Verhaltenstherapie
          </h1>
          <h2>Herkunft, Anwendung und wichtige Hinweise</h2>
          <p className="mb-8 font-light text-sm max-w-4xl mx-auto">
            Die Verhaltenstherapie ist ein gut strukturiertes
            psychotherapeutisches Verfahren, das sich mit erlernten Denk- und
            Verhaltensmustern beschäftigt. In meiner Praxis in Kaufering nutze
            ich diesen Ansatz, um gemeinsam mit Ihnen nachvollziehbare und
            alltagstaugliche Schritte zu entwickeln.
          </p>
        </div>
        <Blog data={methodsBlog} />
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
          <Accordeon />
        </div>
      </section>
      <section className="px-4 pt-24 pb-24 lg:px-32 lg:pt-32 xl:pt-48 lg:pb-32 xl:pb-48">
        <Newsletter />
      </section>
    </div>
  );
}
