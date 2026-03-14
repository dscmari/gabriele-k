"use client";
import Image from "next/image";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Breadcrumbs from "./Breadcrumps";
import ContactBtn from "./buttons/ContactBtn";

type Props = {
  className?: string;
};

export default function ATF({ className }: Props) {
  const backgroundimage = "/images/portraits/buero_gk.png";

  return (
    <div className={`${className}`}>
      <div className="md:hidden px-4 h-screen flex flex-col">
        <Image
          src={"/logo_gk.png"}
          alt="Gabriele Kramer Logo"
          width={200}
          height={100}
          className="mx-auto"
        />
        <h1 className="!text-3xl mt-12 text-custom-blue text-center">
          Individuelle Hilfe bei Stress, Ängsten & Schlafproblemen
        </h1>
        <ContactBtn className="self-center mt-12" />
        <p className="mt-12 text-center font-light text-sm">
          Für mehr Lebensqualität, innere Balance und einen achtsamen Umgang mit
          sich selbst – mit bewährten und innovativen Methoden.
        </p>
      </div>
      <div
        className="hidden md:block h-screen relative bg-cover bg-center"
        style={{ backgroundImage: `url(${backgroundimage})` }}
      >
        <div className="flex flex-col p-8 rounded-xl bg-custom-beige/90 max-w-4/5 xl:max-w-2/5 absolute top-1/2 -translate-y-1/2 right-1/8">
          <h1 className="mb-8 lg:!text-3xl/12 xl:!text-5xl/14 !font-bold tracking-wide text-custom-blue">
            Unterstützung bei Stress, Ängsten & Schlafproblemen
          </h1>
          <h2>
            Für mehr Lebensqualität, innere Balance und einen achtsamen Umgang
            mit sich selbst – mit bewährten und innovativen Methoden
          </h2>
          <p className="mb-8 font-light text-sm">
            Lernen Sie, mit Ihren Herausforderungen angemessen umzugehen und
            bringen Sie mehr Gelassenheit in Ihr Leben.
          </p>
          <ContactBtn className="self-center" />
        </div>
      </div>
      <Breadcrumbs className="block pt-4 px-4 lg:px-32 font-semibold" />
    </div>
  );
}
