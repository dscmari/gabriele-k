import Image from "next/image";
import Hero from "../components/Hero";
import Features from "../components/Features";
import { anxietyFeatures } from "../data/FeaturesData";
import { anxietyBlog } from "../data/BlogData";
import Accordeon from "../components/Accordeon";
import ContactBtn from "../components/buttons/ContactBtn";
import Link from "next/link";
import Blog from "../components/Blog";
import Newsletter from "../components/newsletter/Newsletter";

export default function page() {
  const hero = {
    title: "Ängste und Panik mindern",
    subtitle:
      "Angst ist eine natürliche Reaktion des Körpers – doch wenn sie überhandnimmt, kann sie den Alltag stark belasten",
    intro:
      "In unserer Arbeit lernen Sie, Ihre Angstreaktionen besser zu verstehen und Schritt für Schritt zu regulieren. So gewinnen Sie mehr innere Ruhe und Handlungsspielraum zurück.",
    imgPathDesktop: "/images/portraits/vr_gk.jpg",
  };
  const { title, subtitle, intro, imgPathDesktop } = hero;

  return (
    <div>
      {" "}
      <Hero
        imgPathDesktop={imgPathDesktop}
        title={title}
        subtitle={subtitle}
        intro={intro}
      />
      <section className="lg:p-32 pt-12 flex flex-col gap-8 lg:flex-row lg:gap-16 lg:items-center">
        <div className="px-4 lg:px-0 flex flex-col lg:flex-1">
          <span className="font-light text-sm mx-auto lg:mx-0">
            Finde deine Ruhe
          </span>
          <h1 className="text-center lg:text-start mb-8 lg:!text-3xl/12 xl:!text-5xl/14 !font-bold tracking-wide text-custom-blue">
            Ängste verstehen und loslassen
          </h1>
          <h2>
            Wenn bestimmte Situationen, Orte, Tiere oder Gegenstände bei Ihnen
            starke Angst auslösen, kann das den Alltag sehr belasten. Vielleicht
            vermeiden Sie manches schon länger, um sich sicherer zu fühlen.
          </h2>
          <p className="mb-8 font-light text-sm">
            In meiner Praxis in Kaufering finden Sie einen geschützten Rahmen,
            in dem Ihre Angst ernst genommen wird. Gemeinsam schauen wir, was
            Sie belastet, was Ihre Angst aufrechterhält und welche Schritte Sie
            in Ihrem Tempo unterstützen können.
          </p>
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
      <section className="bg-custom-blue text-white p-4 py-24 mt-16 md:p-16 lg:p-32 scroll-mt-24">
        <Features data={anxietyFeatures} />
      </section>
      <section className="lg:pt-32 xl:pt-48 lg:px-32 pt-12 flex flex-col gap-8 lg:flex-row lg:gap-16 lg:items-center">
        <div className="lg:flex-1">
          <Image
            src={"/images/portraits/writing_gk.jpg"}
            alt="Bild einer Sitzung, in der eine VR-Brille verwendet wird"
            width={400}
            height={400}
            className="object-cover lg:rounded-xl mx-auto"
          />
        </div>
        <div className="px-4 lg:px-0 flex flex-col lg:flex-1">
          <span className="font-light text-sm mx-auto lg:mx-0">
            Deine Angst hat einen Namen
          </span>
          <h1 className="text-center lg:text-start mb-8 lg:!text-3xl/12 xl:!text-5xl/14 !font-bold tracking-wide text-custom-blue">
            Phobien erkennen und überwinden
          </h1>
          <h2>
            Phobien können den Alltag stark einschränken. Erfahren Sie, was
            hinter den Ängsten steckt und was wir gemeinsam in meiner Praxis in
            Kaufering für Sie tun können
          </h2>
          <p className="mb-8 font-light text-sm">
            In meiner Praxis in Kaufering finden Sie einen geschützten Rahmen,
            in dem Ihre Angst ernst genommen wird. Gemeinsam schauen wir, was
            Sie belastet, was Ihre Angst aufrechterhält und welche Schritte Sie
            in Ihrem Tempo unterstützen können.
          </p>
          <ContactBtn className="self-center lg:self-start" />
        </div>
      </section>
      <section className="pt-24 lg:pt-32 xl:pt-48 px-4 lg:px-32">
        <div className="flex flex-col px-4 lg:px-0">
          <span className="mx-auto font-light text-sm">Ängste verstehen</span>
          <h1 className="mb-8 lg:!text-3xl/12 xl:!text-5xl/14 !font-bold tracking-wide text-custom-blue text-center">
            Mehr über Phobien erfahren
          </h1>
          <p className="max-w-4xl font-light text-sm lg:text-center mx-auto">
            Phobien sind weit verbreitet – und oft wenig verstanden. Ob
            Höhenangst, Spinnen, enge Räume oder soziale Situationen: Die
            Auslöser sind vielfältig, das Erleben dahinter oft sehr ähnlich.
            Hier finden Sie einen Überblick darüber, was eine Phobie ausmacht,
            wie sie sich körperlich und seelisch anfühlt und warum sie ohne
            Unterstützung selten von alleine verschwindet.
          </p>
        </div>
        <Blog data={anxietyBlog} />
      </section>
      <section className="py-24 lg:p-32 xl:py-48">
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
