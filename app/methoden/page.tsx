import Image from "next/image";
import Hero_leftOrientated from "../components/Hero_leftOrientated";
import { methodsBlog } from "../data/BlogData";
import Blog from "../components/Blog";
import Features from "../components/Features";
import { methodsFeatures } from "../data/FeaturesData";
import Accordeon from "../components/Accordeon";
import Newsletter from "../components/newsletter/Newsletter";
import ContactBtn from "../components/buttons/ContactBtn";
import { faqsHome, faqsHypnosis } from "../data/FAQsData";

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
      <section className="lg:p-32 pt-12 flex flex-col gap-8 lg:flex-row lg:gap-16 lg:items-center">
        <div className="px-4 lg:px-0 flex flex-col lg:flex-1">
          <span className="font-light text-sm mx-auto lg:mx-0">
            Tiefe Entspannung
          </span>
          <h1 className="text-center lg:text-start mb-8 lg:!text-3xl/12 xl:!text-5xl/14 !font-bold tracking-wide text-custom-blue">
            Hypnose
          </h1>
          <div className="flex flex-col gap-4 mb-8 lg:mt-4">
            <h2 className="text-custom-blue !mb-0">
              Ist das bei meinem Anliegen überhaupt sinnvoll?
            </h2>
            <p>
              Hypnose kann eine hilfreiche Methode sein, wenn Sie sich
              Veränderung wünschen und merken, dass Sie mit Verstand, Disziplin
              oder gutem Zureden allein nicht weiterkommen. Gerade bei Ängsten,
              innerer Anspannung, Schlafproblemen, belastenden Gewohnheiten oder
              emotionalen Blockaden kann sie sinnvoll in die therapeutische
              Arbeit eingebunden werden.
            </p>
            <p>
              In meiner Praxis prüfe ich immer individuell, ob Hypnose zu Ihrem
              Anliegen passt. Nicht jedes Thema braucht Hypnose. Entscheidend
              ist, was für Sie in Ihrer Situation stimmig und fachlich sinnvoll
              ist.
            </p>
            <h2 className="text-custom-blue !mb-0">
              Verliere ich bei der Hypnose die Kontrolle?
            </h2>
            <p>
              Nein. Sie bleiben während der Hypnose ansprechbar und behalten die
              Kontrolle. Therapeutische Hypnose hat nichts mit Showhypnose zu
              tun. Sie sind mir nicht ausgeliefert und müssen nichts tun, was
              Sie nicht möchten.
            </p>
            <p>
              Mir ist wichtig, dass Sie sich sicher und gut begleitet fühlen.
              Hypnose ist in meiner Praxis kein Vorführeffekt, sondern eine
              ruhige, geschützte und professionelle Methode.
            </p>
          </div>
          <ContactBtn className="self-center lg:self-start" />
        </div>
        <div className="lg:flex-1 relative ">
          <Image
            src={"/images/portraits/sitting_front_gk_small.jpg"}
            alt="Portraitfoto von Heilpraktikerin für Psychotherapie Gaby Kramer"
            width={350}
            height={525}
            className="object-cover lg:rounded-xl mx-auto"
          />
        </div>
      </section>
      <section className="lg:px-32">
        <div className="flex flex-col px-4 lg:px-0">
          <span className="mx-auto font-light text-sm">FAQs</span>
          <h1 className="mb-8 lg:!text-3xl/12 xl:!text-5xl/14 !font-bold tracking-wide text-custom-blue text-center">
            Häufig gestellte Fragen zur Hypnose
          </h1>
          <p className="max-w-4xl font-light text-sm lg:text-center mx-auto">
            Hypnose nutze ich nicht als schnelle Technik, sondern als Teil einer
            sorgfältigen psychotherapeutischen Begleitung.
          </p>
        </div>
        <div className="px-4 pt-12 lg:pt-24">
          <Accordeon faqs={faqsHypnosis} />
        </div>
      </section>
      <section className="px-4 lg:px-32 pt-24 lg:pt-32">
        <div className="text-center">
          <span className="font-light text-sm mx-auto lg:mx-0">
            Muster erkennen und neu gestalten
          </span>
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
          <Accordeon faqs={faqsHome} />
        </div>
      </section>
      <section className="px-4 pt-24 pb-24 lg:px-32 lg:pt-32 xl:pt-48 lg:pb-32 xl:pb-48">
        <Newsletter />
      </section>
    </div>
  );
}
