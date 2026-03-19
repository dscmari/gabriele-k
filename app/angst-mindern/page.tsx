import React from "react";
import Breadcrumbs from "../components/Breadcrumps";
import Hero from "../components/Hero";
import Features from "../components/Features";
import Accordeon from "../components/Accordeon";

export default function page() {
  return (
    <div>
      {" "}
      <Hero imgPathDesktop="/images/portraits/gk_blue_vertikal.png" />
      <section className="bg-custom-blue text-white p-4 py-24 mt-16 md:p-16 lg:p-32 scroll-mt-24">
        <Features />
      </section>
      <section className="py-24 lg:p-32">
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
    </div>
  );
}
