import Image from "next/image";
import Timeline from "../components/cv/Timeline";
import Qualifications from "../components/cv/Qualifications";
import Accordeon from "../components/Accordeon";
import Newsletter from "../components/newsletter/Newsletter";
import { faqsHome } from "../data/FAQsData";
import { educations, jobs } from "../data/QualificationsData";
import Hero_leftOrientated from "../components/Hero_leftOrientated";
import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Heilpraktikerin für Psychotherapie - Gabriela Kramer | Über Gabriele Kramer",
};

export default function page() {
  const hero = {
    title: "Über Mich",
    subtitle: "Vom Premiumvertrieb zur mentalen Gesundheit",
    intro:
      "Was haben Premiumvertrieb, mentale Gesundheit und Psychotherapie miteinander zu tun? Für mich: sehr viel. Über 20 Jahre war ich im Premiumvertrieb tätig, in einem leistungsorientierten Umfeld, geprägt von Verantwortung, Kundenerwartungen und Veränderungsdruck. Eine ernsthafte körperliche Erkrankung hat meinen Blick auf Gesundheit, persönliche Grenzen und Stress deutlich geschärft. Daraus entstand mein Wunsch, Menschen im Bereich mentale Gesundheit fundiert zu unterstützen. Heute begleite ich Menschen nicht mehr auf dem Weg zum nächsten Abschluss, sondern zu mehr innerer Stabilität, Selbstregulation und Vertrauen in sich selbst.",
    imgPathDesktop: "/images/portraits/vr_gk.jpg",
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
      <section className="">
        <div className="sm:pt-24 lg:pt-32 md:px-16 lg:px-32 flex flex-col gap-8 lg:gap-16 lg:flex-row-reverse 2xl:flex-row">
          <div className="w-full lg:flex-1 min-w-sm ">
            <Image
              src={"/images/portraits/portrait_standing.jpg"}
              alt="Portraitfoto von Heilpraktikerin für Psychotherapie Gaby Kramer"
              width={400}
              height={600}
              className="object-cover sm:rounded-tr-xl mx-auto md:mx-0"
            />
          </div>
          <div className="px-4 lg:px-0 lg:mt-16">
            <span className="font-light text-sm mx-auto lg:mx-0">
              Klar. Menschlich. Lösungsorientiert.
            </span>
            <h1 className="mb-8 lg:!text-3xl/12 xl:!text-5xl/14 !font-bold">
              Mein Weg
            </h1>
            <div className="flex flex-col gap-4">
              <p>
                Mein beruflicher Weg begann in der Wirtschaft und hat sich
                Schritt für Schritt weiterentwickelt. Viele Jahre war ich in
                einem leistungsorientierten Umfeld tätig, geprägt von
                Zielvorgaben, Verantwortung, Kundenerwartungen und
                Veränderungsdruck. Ich weiß daher, wie viel Kraft es kosten
                kann, dauerhaft präsent, belastbar und souverän zu bleiben.
              </p>
              <p>
                Auf dieser Grundlage habe ich später meine Kompetenz in
                Beratung, Kommunikation und Konfliktklärung ausgebaut. Die
                wichtigsten beruflichen Stationen und fachlichen Qualifikationen
                finden Sie weiter unten auf dieser Seite.
              </p>
              <p>
                Eine ernsthafte körperliche Erkrankung brachte eine längere
                Auszeit mit sich. Diese Zeit hat meinen Blick auf Gesundheit,
                persönliche Grenzen und den Umgang mit Stress deutlich
                geschärft. Daraus entstand der Wunsch, Menschen im Bereich
                mentale Gesundheit fundiert zu unterstützen.
              </p>
              <p>
                Mir wurde bewusst: Manche Themen lassen sich im Coaching gut
                begleiten. Andere reichen tiefer. Wenn Ängste, anhaltender
                Stress, Schlafprobleme oder emotionales Essen auftreten, reichen
                neue Strategien oft nicht aus. Dann braucht es den Blick auf
                innere Muster, emotionale Belastungen und Selbstregulation.
              </p>
              <p>
                Deshalb habe ich meinen beruflichen Weg um die
                psychotherapeutische Arbeit erweitert und die Erlaubnis zur
                Ausübung der Heilkunde auf dem Gebiet der Psychotherapie
                erworben. Heute verbinde ich therapeutisches Fachwissen und
                Coaching-Kompetenz mit eigener Erfahrung aus der freien
                Wirtschaft. Daraus entsteht ein klarer, menschlicher und
                lösungsorientierter Arbeitsstil.
              </p>
            </div>
          </div>
          <Timeline className="hidden 2xl:block md:flex-1 lg:mr-32 xl:mr-48 2xl:mr-0" />
        </div>{" "}
      </section>
      <section className="pt-24 lg:pt-32 xl:pt-48 px-4 md:px-16 lg:px-32">
        <div className="flex flex-col">
          <span className="font-light text-sm">Erfahrung</span>
          <h1 className="mb-8 lg:!text-3xl/12 xl:!text-5xl/14 !font-bold max-w-5xl">
            Über 17 Jahre Berufserfahrung als Coach und Heilpraktikerin für
            Psychotherapie
          </h1>
        </div>
        <Qualifications qualifications={jobs} className="mt-12 max-w-3xl" />
      </section>
      <section className="pt-24 lg:pt-32 xl:pt-48 px-4 md:px-16 lg:px-32">
        <div className="flex flex-col">
          <span className="font-light text-sm">Zertifizierungen</span>
          <h1 className="mb-8 lg:!text-3xl/12 xl:!text-5xl/14 !font-bold">
            Zusätzliche Aus- und Weiterbildungen
          </h1>
          <p className="max-w-4xl font-light text-sm">
            Meine Aus- und Weiterbildungen spiegeln meinen beruflichen Weg
            wider: von Businesstraining & Coaching, Wirtschaftsmediation,
            Changemanagement zur therapeutischen Arbeit als Heilpraktikerin für
            Psychotherapie.
          </p>
        </div>
        <Qualifications
          qualifications={educations}
          className="mt-12 max-w-3xl"
        />
      </section>
      <section className="pt-24 lg:pt-32 xl:pt-48 px-4 md:px-16 lg:px-32">
        <div className="flex flex-col">
          <span className="mx-auto font-light text-sm">FAQs</span>
          <h1 className="mb-8 lg:!text-3xl/12 xl:!text-5xl/14 !font-bold text-center">
            Häufig gestellte Fragen
          </h1>
          <p className="max-w-4xl font-light text-sm lg:text-center mx-auto">
            Hier kriegen Sie einen Überblick über häufig gestellte Fragen zur
            Zusammenarbeit mit Gabriela Kramer, Heilpraktikerin für
            Psychotherapie.
          </p>
        </div>
        <div className="pt-12 lg:pt-24">
          <Accordeon faqs={faqsHome} />
        </div>
      </section>
      <section className="px-4 md:px-16 lg:px-32 pt-24 pb-24 lg:pt-32 xl:pt-48 lg:pb-32 xl:pb-48">
        {/* <Newsletter /> */}
      </section>
    </div>
  );
}
