"use client";
import Image from "next/image";
import Breadcrumbs from "./Breadcrumps";
import ContactBtn from "./buttons/ContactBtn";
import { usePathname } from "next/navigation";
import { ViewTransition } from "react";
import { sub } from "motion/react-client";

type Props = {
  className?: string;
  title?: React.ReactNode;
  subtitle?: string;
  intro?: string;
  imgPathMobile?: string;
  imgPathDesktop?: string;
};

export default function Hero({
  className,
  title,
  subtitle,
  intro,
  imgPathMobile,
  imgPathDesktop,
}: Props) {
  const pathname = usePathname();

  return (
    <div className={`${className}`}>
      {/* mobile */}
      <div className="sm:hidden flex flex-col pt-12">
        {/* <Image
          src={imgPathMobile ? imgPathMobile : "/images/portraits/gaby_4.jpg"}
          alt="Gabriele Kramer Logo"
          width={400}
          height={800}
          className="object-cover h-full w-full absolute"
        /> */}
        {/* <div className="absolute inset-0 bg-black/50"></div> */}
        <div className="flex flex-col gap-4 px-4">
          <h1 className="!text-3xl mt-12  text-center">{title}</h1>
          <h2 className="text-center">{subtitle}</h2>
             <ContactBtn className="self-center" />
          <p className="text-center text-sm font-light px-4 mt-12">{intro}</p>
       
        </div>
      </div>
      {/* tablet */}
      <div className="hidden sm:flex flex-col justify-center gap-32 lg:hidden h-screen ">
        <div className="flex flex-col p-8 rounded-xl dark:bg-custom-beige/90 max-w-4/5 mx-auto xl:max-w-3/5 dark:!text-custom-blue text-center">
          <h1 className="mb-8 lg:!text-3xl/12 xl:!text-5xl/14 !font-bold tracking-wide dark:!text-custom-blue">
            {title}
          </h1>
          <h2 className="lg:!text-xl xl:!text-4xl/12 dark:!text-custom-blue">
            {subtitle}
          </h2>
          <p className="mb-8 xl:text-lg dark:!text-custom-blue">{intro}</p>
          <ContactBtn className="self-center" />
        </div>
        <div className="flex justify-around gap-8 px-16 ">
          <div className="flex flex-col gap-4 flex-1">
            <div className="flex items-center gap-4">
              <span className="block w-6 h-1 bg-current" />
              <h2 className="!m-0">Ängste</h2>
            </div>
            <p>
              Lernen Sie, Ihre Angstreaktionen besser zu verstehen und Schritt
              für Schritt zu regulieren.
            </p>
          </div>
          <div className="flex flex-col gap-4 flex-1">
            <div className="flex items-center gap-4">
              <span className="block w-6 h-1 bg-current" />
              <h2 className="!m-0">Stress</h2>
            </div>
            <p>
              Erkennen Sie Warnzeichen und entwickeln Sie einen stimmigeren
              Umgang mit Stress.
            </p>
          </div>
          <div className="flex flex-col gap-4 flex-1">
            <div className="flex items-center gap-4">
              <span className="block w-6 h-1 bg-current" />
              <h2 className="!m-0">Schlaf</h2>
            </div>
            <p>
              Entlasten Sie ihren Schlaf, indem Sie Ihre Schlafstörungen besser
              verstehen.
            </p>
          </div>
        </div>
      </div>
      {/* desktop */}

      <div className="hidden lg:block  h-screen relative">
        {imgPathDesktop && (
          <div>
            <Image
              src={"/images/portraits/buero_0.png"}
              alt={"Hintergrund Bild von einem Büro"}
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-black/20"></div>
          </div>
        )}
        <ViewTransition name="hero">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 xl:left-1/8 xl:-translate-x-0 -translate-y-1/2 xl:h-[512px] xl:max-w-4/5 2xl:max-w-3/5 flex flex-col justify-center p-8 bg-custom-beige/90 rounded-xl  text-custom-blue">
            <h1 className="mb-8 lg:!text-3xl/12 xl:!text-4xl !font-bold tracking-wide dark:!text-custom-blue">
              {title}
            </h1>
            <h2 className="lg:!text-xl xl:!text-3xl/12 dark:!text-custom-blue">
              {subtitle}
            </h2>
            <p className="mb-8 xl:text-lg dark:!text-custom-blue">{intro}</p>
            <ContactBtn className="self-start" />
          </div>
        </ViewTransition>
      </div>
      <Breadcrumbs className="block px-4 pt-8 sm:px-16 lg:px-32 lg:pt-16 font-semibold" />
    </div>
  );
}
