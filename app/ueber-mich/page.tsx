import Image from "next/image";
import Timeline from "../components/cv/Timeline";
import Qualifications from "../components/cv/Qualifications";
import Accordeon from "../components/Accordeon";
import Newsletter from "../components/newsletter/Newsletter";
import { faqsHome } from "../data/FAQsData";
import { educations, jobs } from "../data/QualificationsData";

export default function page() {
  return (
    <div>
      <section className="">
        <div className="pt-32 md:px-16 lg:px-32 flex flex-col gap-8 lg:gap-16 md:flex-row">
          <div className="w-full md:flex-1 min-w-sm ">
            <Image
              src={"/images/portraits/gaby_4.jpg"}
              alt="Portraitfoto von Heilpraktikerin für Psychotherapie Gaby Kramer"
              width={400}
              height={600}
              className="object-cover sm:rounded-tr-xl mx-auto md:mx-0"
            />
          </div>
          <div className="hidden 2xl:block px-4 lg:px-0 lg:mt-16">
            <span className="font-light text-sm mx-auto lg:mx-0">
              Über mich
            </span>
            <h1 className="mb-8 lg:!text-3xl/12 xl:!text-5xl/14 !font-bold">
              Mein Weg
            </h1>
            <div className="flex flex-col gap-4">
              <p>
                Über viele Jahre war ich im Automobilvertrieb einer Premiummarke
                tätig. In diesem anspruchsvollen Umfeld stand ich unter
                permanentem Druck. Auch in den anschließenden Jahren als
                selbstständige systemische Organisationsentwicklerin gehörte
                Stress zu meinem Alltag. In dieser Zeit lebte ich einen sehr
                ungesunden Umgang mit Stress. Ein daraus resultierendes
                Angstsyndrom riss mein Leben schlagartig aus den Angeln und
                führte schließlich dazu, dass ich meine Denk- und
                Verhaltensmuster reflektieren und verändern konnte.
              </p>
              <p>
                Zugleich wurde mir bewusst, dass das, was ich selbst erlebt und
                erlitten hatte, viele Menschen betrifft. Deshalb setzte ich mich
                zunehmend mit den Themen Stress und Ängsten auseinander. Ich
                bildete mich zur zertifizierten Stresskompetenz-Trainerin weiter
                und absolvierte Ausbildungen zur Heilpraktikerin für
                Psychotherapie sowie wissenschaftlich anerkannter
                Therapieverfahren.
              </p>
              <p>
                In Kombination mit meinen Erfahrungen und den Kenntnissen aus
                früheren Ausbildungen als Organisationsentwicklerin,
                Wirtschaftsmediatorin, Business-Trainerin und -Coach verfüge ich
                über ein weitreichendes persönliches und methodisches Spektrum
                zur professionellen Begleitung meiner Klienten.
              </p>
            </div>
          </div>
          <Timeline className="hidden md:block md:flex-1 lg:mr-32 xl:mr-48 2xl:mr-0" />
        </div>{" "}
        <div className="2xl:hidden px-4 md:px-16 lg:px-32 mt-24">
          <span className="font-light text-sm block text-center md:text-start">
            Über mich
          </span>
          <h1 className="mb-8 lg:!text-3xl/12 xl:!text-5xl/14 !font-bold text-center md:text-start">
            Mein Weg
          </h1>
          <div className="flex flex-col gap-4">
            <p>
              Über viele Jahre war ich im Automobilvertrieb einer Premiummarke
              tätig. In diesem anspruchsvollen Umfeld stand ich unter
              permanentem Druck. Auch in den anschließenden Jahren als
              selbstständige systemische Organisationsentwicklerin gehörte
              Stress zu meinem Alltag. In dieser Zeit lebte ich einen sehr
              ungesunden Umgang mit Stress. Ein daraus resultierendes
              Angstsyndrom riss mein Leben schlagartig aus den Angeln und führte
              schließlich dazu, dass ich meine Denk- und Verhaltensmuster
              reflektieren und verändern konnte.
            </p>
            <p>
              Zugleich wurde mir bewusst, dass das, was ich selbst erlebt und
              erlitten hatte, viele Menschen betrifft. Deshalb setzte ich mich
              zunehmend mit den Themen Stress und Ängsten auseinander. Ich
              bildete mich zur zertifizierten Stresskompetenz-Trainerin weiter
              und absolvierte Ausbildungen zur Heilpraktikerin für
              Psychotherapie sowie wissenschaftlich anerkannter
              Therapieverfahren.
            </p>
            <p>
              In Kombination mit meinen Erfahrungen und den Kenntnissen aus
              früheren Ausbildungen als Organisationsentwicklerin,
              Wirtschaftsmediatorin, Business-Trainerin und -Coach verfüge ich
              über ein weitreichendes persönliches und methodisches Spektrum zur
              professionellen Begleitung meiner Klienten.
            </p>
          </div>
        </div>
      </section>
      <section className="pt-24 lg:pt-32 xl:pt-48 px-4 md:px-16 lg:px-32">
        <div className="flex flex-col">
          <span className="font-light text-sm">
            Heilpraktikerin für Psychotherapie
          </span>
          <h1 className="mb-8 lg:!text-3xl/12 xl:!text-5xl/14 !font-bold">
            Über 8 Jahre Berufserfahrung als Heilpraktikerin
          </h1>
          <p className="font-light text-sm">
            Mit über 8 Jahren Erfahrung als Heilpraktikerin für Psychotherapie
            begleite ich Menschen in herausfordernden Lebensphasen – einfühlsam,
            kompetent und auf Augenhöhe.
          </p>
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
            Nach meiner fundierten Ausbildung zur Heilpraktikerin für
            Psychotherapie habe ich mich kontinuierlich weitergebildet.
            Besonders am Herzen liegen mir folgende Schwerpunkte:
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
          <h1 className="mb-8 lg:!text-3xl/12 xl:!text-5xl/14 !font-bold text-custom-blue text-center">
            Häufig gestellte Fragen
          </h1>
          <p className="max-w-4xl font-light text-sm lg:text-center mx-auto">
            Hier kriegst du einen Überblick über häufig gestellte Fragen zur
            Zusammenarbeit mit Gabriela Kramer, Heilpraktikerin für
            Psychothrapie.
          </p>
        </div>
        <div className="pt-12 lg:pt-24">
          <Accordeon faqs={faqsHome} />
        </div>
      </section>
      <section className="px-4 md:px-16 lg:px-32 pt-24 pb-24 lg:pt-32 xl:pt-48 lg:pb-32 xl:pb-48">
        <Newsletter />
      </section>
    </div>
  );
}
