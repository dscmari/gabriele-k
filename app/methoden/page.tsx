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
import Process from "../components/Process";

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
      <section className="bg-custom-blue text-white p-4 py-24 dark:py-0 mt-24 md:p-16 lg:p-32 scroll-mt-24">
        <Features data={methodsFeatures} />
      </section>
      <section className="lg:p-32 pt-24 flex flex-col gap-8 lg:flex-row lg:gap-16 lg:items-center">
        <div className="px-4 sm:px-16 lg:px-0 flex flex-col lg:flex-1">
          <span className="font-light text-sm mx-auto lg:mx-0">
            Tiefe Entspannung
          </span>
          <h1 className="text-center lg:text-start mb-8 lg:!text-3xl/12 xl:!text-5xl/14 !font-bold">
            Hypnose
          </h1>
          <div className="flex flex-col gap-4 mb-8 lg:mt-4">
            <h2 className="!mb-0 text-center lg:text-start">
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
            <h2 className="!mb-0 text-center lg:text-start">
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
        <div className="lg:flex-1 relative mt-24 lg:mt-0">
          <Image
            src={"/images/portraits/gaby_2.jpg"}
            alt="Portraitfoto von Heilpraktikerin für Psychotherapie Gaby Kramer"
            width={400}
            height={400}
            className="object-cover lg:rounded-xl mx-auto"
          />
        </div>
      </section>
      <section className="lg:px-32 flex flex-col xl:flex-row gap-24 xl:gap-8 2xl:gap-16">
        <div className="xl:flex-1 mt-24 lg:mt-0">
          <Process className="lg:mt-0" />
        </div>
        <div className="xl:flex-1">
          <div className="flex flex-col px-4 sm:px-16 lg:px-0">
            <span className="mx-auto font-light text-sm">FAQs</span>
            <h1 className="mb-8 lg:!text-3xl/12 xl:!text-5xl/14 !font-bold text-center">
              Häufig gestellte Fragen zur Hypnose
            </h1>
            <p className="max-w-4xl font-light text-sm lg:text-center mx-auto">
              Hypnose nutze ich nicht als schnelle Technik, sondern als Teil
              einer sorgfältigen psychotherapeutischen Begleitung.
            </p>
          </div>
          <div className="px-4 sm:px-16 lg:px-0 pt-12 lg:pt-24">
            <Accordeon faqs={faqsHypnosis} />
          </div>
          <ContactBtn className="block mx-auto lg:mx-4 mt-12 w-fit" />
        </div>
      </section>
      <section className="xl:pt-48 lg:pt-32 lg:px-32 pt-24 flex flex-col gap-8 xl:gap-16 lg:flex-row lg:gap-16 lg:items-center">
        <div className="lg:flex-1 relative ">
          <Image
            src={"/images/portraits/buero_2.jpg"}
            alt="Portraitfoto von Heilpraktikerin für Psychotherapie Gaby Kramer"
            width={800}
            height={800}
            className="object-cover lg:rounded-xl mx-auto"
          />
        </div>
        <div className="px-4 sm:px-16 pt-24 lg:px-0 flex flex-col lg:flex-1">
          <span className="font-light text-sm mx-auto lg:mx-0">
            Wenn belastende Erlebnisse im Weg stehen
          </span>
          <h1 className="text-center lg:text-start mb-8 lg:!text-3xl/12 xl:!text-5xl/14 !font-bold">
            EMDR
          </h1>
          <h2 className="text-center lg:text-start">
            Eye Movement Desensitization and Reprocessing - Was ist EMDR?
          </h2>
          <p className="mb-4">
            EMDR ist eine wissenschaftlich anerkannte psychotherapeutische
            Methode, die ursprünglich zur Behandlung von Traumata entwickelt
            wurde. Dabei folgen Sie mit den Augen den Fingerbewegungen des
            Therapeuten – oder anderen rhythmischen Reizen wie Tönen oder
            leichten Berührungen.
          </p>
          <p className="mb-8">
            Diese bilaterale Stimulation beider Gehirnhälften hilft dabei,
            belastende Erinnerungen neu zu verarbeiten und emotional zu
            entlasten. Was sich ungewöhnlich anhört, ist gut erforscht – die WHO
            empfiehlt EMDR ausdrücklich zur Behandlung von Traumafolgestörungen.
            Inzwischen wird die Methode auch bei Ängsten, Phobien und anderen
            psychischen Belastungen erfolgreich eingesetzt.
          </p>
          <ContactBtn className="self-center lg:self-start" />
        </div>
      </section>
      <section className="px-4 sm:px-16 lg:px-32 pt-24 lg:pt-32 xl:pt-48">
        <div className="text-center">
          <span className="font-light text-sm mx-auto lg:mx-0">
            Muster erkennen und neu gestalten
          </span>
          <h1 className="mb-8 lg:!text-3xl/12 xl:!text-5xl/14 !font-bold">
            Verhaltenstherapie
          </h1>
          <h2>Herkunft, Anwendung und wichtige Hinweise</h2>
          <p className="mb-8 max-w-4xl mx-auto">
            Die Verhaltenstherapie ist ein gut strukturiertes
            psychotherapeutisches Verfahren, das sich mit erlernten Denk- und
            Verhaltensmustern beschäftigt. In meiner Praxis in Kaufering nutze
            ich diesen Ansatz, um gemeinsam mit Ihnen nachvollziehbare und
            alltagstaugliche Schritte zu entwickeln.
          </p>
        </div>
        <Blog data={methodsBlog} />
      </section>
      <section className="xl:pt-48 pt-24 lg:pt-32 lg:px-32 pt-12 flex flex-col gap-8 xl:gap-16 lg:flex-row lg:gap-16 lg:items-center">
        <div className="lg:flex-1 relative ">
          <Image
            src={"/images/portraits/buero_0.png"}
            alt="Portraitfoto von Heilpraktikerin für Psychotherapie Gaby Kramer"
            width={800}
            height={800}
            className="object-cover lg:rounded-xl mx-auto"
          />
        </div>
        <div className="px-4 sm:px-16 pt-24 lg:p-0 flex flex-col lg:flex-1">
          <span className="font-light text-sm mx-auto lg:mx-0">
            Einfach. Jederzeit. Wirkungsvoll.
          </span>
          <h1 className="text-center lg:text-start mb-8 lg:!text-3xl/12 xl:!text-5xl/14 !font-bold">
            Atemtechniken
          </h1>
          <h2 className="text-center lg:text-start">
            Der Atem als Schlüssel zur inneren Ruhe
          </h2>
          <p className="mb-4">
            Atmen tun wir ständig – aber bewusstes Atmen ist etwas anderes.
            Gezielte Atemtechniken sind eine der wirksamsten und zugänglichsten
            Methoden, um das Nervensystem direkt zu beeinflussen. Sie senken
            Stress, beruhigen den Geist und bringen den Körper in einen Zustand
            der Entspannung.
          </p>
          <p className="mb-8">
            In meiner Praxis zeige ich Ihnen Atemübungen, die sich einfach in
            den Alltag integrieren lassen – ob in einer kurzen Pause, vor dem
            Einschlafen oder in stressigen Momenten. Regelmäßig angewendet
            stärken sie langfristig die Resilienz und verbessern das allgemeine
            Wohlbefinden spürbar.
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
