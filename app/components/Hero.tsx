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
  text?: string;
  imgPathMobile?: string;
  imgPathDesktop?: string;
};

export default function ATF({
  className,
  imgPathMobile,
  imgPathDesktop,
}: Props) {
  const backgroundimage = imgPathDesktop;
  const pathname = usePathname();

  return (
    <div className={`${className}`}>
      {false ? (
        <div className="md:hidden px-4 h-screen flex flex-col">
          {/* <Image
          src={"/logo_gk.png"}
          alt="Gabriele Kramer Logo"
          width={200}
          height={100}
          className="mx-auto"
        /> */}
          <h1 className="!text-3xl mt-12 text-custom-blue text-center">
            Heilpraktikerin für Psychotherapie in Kaufering
          </h1>
          <ContactBtn className="self-center mt-12" />
          <p className="mt-12 text-center font-light text-sm">
            Ich bin Gabriela Kramer, Ihre Heilpraktikerin für Psychotherapie in
            Kaufering und der Region Landsberg am Lech. In meiner Praxis
            unterstütze ich Sie bei Ängsten, Stressbewältigung, Schlafproblemen
            und anderen mentalen Belastungen.
          </p>
        </div>
      ) : (
        <div className="md:hidden h-screen w-full relative mt-8">
          <Image
            src={"/images/portraits/sitting_front_gk_small.jpg"}
            alt="Gabriele Kramer Logo"
            width={400}
            height={800}
            className="object-cover h-full w-full absolute"
          />
          <div className="absolute inset-0 bg-black/50"></div>
          <div className="absolute translate-y-1/3 flex flex-col z-10 text-white">
            <h1 className="!text-3xl mt-12 text-white text-center">
              Heilpraktikerin für Psychotherapie in Kaufering
            </h1>
            <ContactBtn className="self-center mt-12" />
            <p className="mt-12 text-center font-light px-4">
              Ich bin Gabriela Kramer, Ihre Heilpraktikerin für Psychotherapie
              in Kaufering und der Region Landsberg am Lech. In meiner Praxis
              unterstütze ich Sie bei Ängsten, Stressbewältigung,
              Schlafproblemen und anderen mentalen Belastungen.
            </p>
          </div>
        </div>
      )}

      {pathname === "/" ? (
        <div
          className="hidden md:block h-screen relative bg-cover bg-center"
          style={{ backgroundImage: `url(${backgroundimage})` }}
        >
          <div className="flex flex-col p-8 rounded-xl bg-custom-beige/90 max-w-4/5 xl:max-w-2/5 absolute top-1/2 -translate-y-1/2 right-1/8">
            <h1 className="mb-8 lg:!text-3xl/12 xl:!text-5xl/14 !font-bold tracking-wide text-custom-blue">
              Heilpraktikerin für Psychotherapie in Kaufering
            </h1>
            <h2>
              Ich bin Gabriela Kramer, Ihre Heilpraktikerin für Psychotherapie
              in Kaufering und der Region Landsberg am Lech.
            </h2>
            <p className="mb-8 font-light text-sm">
              In meiner Praxis unterstütze ich Sie bei Ängsten,
              Stressbewältigung, Schlafproblemen und anderen mentalen
              Belastungen.
            </p>
            <ContactBtn className="self-center" />
          </div>
        </div>
      ) : (
        <div className="hidden md:block px-4 lg:px-32 lg:flex lg:items-center lg:gap-32 xl:gap-64 h-screen">
          <div className="flex-1 bg-custom-beige flex flex-col">
            <h1 className="mb-8 lg:!text-3xl/12 xl:!text-5xl/14 !font-bold tracking-wide text-custom-blue">
              Heilpraktikerin für Psychotherapie in Kaufering
            </h1>
            <h2 className="z-10">
              Ich bin Gabriela Kramer, Ihre Heilpraktikerin für Psychotherapie
              in Kaufering und der Region Landsberg am Lech.
            </h2>
            <p className="mb-8 font-light text-sm">
              In meiner Praxis unterstütze ich Sie bei Ängsten,
              Stressbewältigung, Schlafproblemen und anderen mentalen
              Belastungen.
            </p>
            <ContactBtn className="self-start" />
          </div>
          <div className="flex-1 ">
            <div className="relative bg-custom-blue h-[600px] w-[600px]">
              <Image
                src={"/images/portraits/gk_blue_vertikal.jpg"}
                alt={"Portrait von Gabriela Kramer"}
                width={400}
                height={400}
                className="h-[600px] w-[600px] absolute top-24  -left-24"
              />
            </div>
          </div>
        </div>
      )}

      <Breadcrumbs className="block px-4 pt-8 lg:px-32 lg:pt-16 font-semibold" />
    </div>
  );
}
