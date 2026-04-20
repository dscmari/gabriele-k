"use client";
import Image from "next/image";
import Breadcrumbs from "./Breadcrumps";
import ContactBtn from "./buttons/ContactBtn";
import { usePathname } from "next/navigation";
import { div } from "motion/react-client";

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
  imgPathDesktop,
}: Props) {
  const pathname = usePathname();

  return (
    <div className={`${className}`}>
      {/* mobile */}
      <div className="sm:hidden h-screen w-full relative">
        <Image
          src={"/images/portraits/gaby_4.jpg"}
          alt="Gabriele Kramer Logo"
          width={400}
          height={800}
          className="object-cover h-full w-full absolute"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute translate-y-1/2 flex flex-col z-10 text-white">
          <h1 className="!text-3xl mt-12 !text-white dark:text-darkmode-white text-center px-4">
            {title}
          </h1>
          <ContactBtn className="self-center mt-8" />
          <p className="mt-8 text-sm/5 text-center font-light px-4 !text-darkmode-white">{intro}</p>
        </div>
      </div>
      {/* tablet */}
      <div className="hidden sm:flex flex-col justify-center gap-32 lg:hidden h-[75vh] ">
        <div className="flex flex-col p-8 rounded-xl dark:bg-custom-beige/90 max-w-4/5 mx-auto xl:max-w-3/5 dark:!text-custom-blue text-center">
          <h1 className="mb-8 lg:!text-3xl/12 xl:!text-5xl/14 !font-bold dark:!text-custom-blue">
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
      <div className="hidden lg:block h-screen relative">
        <Image
          src={imgPathDesktop!}
          alt={
            "Hintergrund Bild von Heilpraktikerin für Psychotherapie Gabriele Kramer im Gespräch"
          }
          fill
          className="object-cover"
          priority
        />
        <div className="flex flex-col p-8 rounded-xl bg-custom-beige/90 max-w-4/5 xl:max-w-3/5 absolute top-1/2 -translate-y-1/2 right-1/8 text-custom-blue">
          <h1 className="mb-8 lg:!text-3xl/12 xl:!text-5xl/14 !font-bold dark:!text-custom-blue">
            {title}
          </h1>
          <h2 className="lg:!text-xl xl:!text-4xl/12 dark:!text-custom-blue">
            {subtitle}
          </h2>
          <p className="mb-8 xl:text-lg">{intro}</p>
          <ContactBtn className="self-start" />
        </div>
      </div>

      <Breadcrumbs className="block px-4 pt-8 sm:px-16 lg:px-32 lg:pt-16 font-semibold" />
    </div>
  );
}
