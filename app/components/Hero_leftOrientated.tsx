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
  imgPathMobile,
  imgPathDesktop,
}: Props) {
  const pathname = usePathname();

  return (
    <div className={`${className}`}>
      <div className="md:hidden h-screen w-full relative mt-8">
        <Image
          src={
            imgPathMobile
              ? imgPathMobile
              : "/images/portraits/sitting_front_gk_small.jpg"
          }
          alt="Gabriele Kramer Logo"
          width={400}
          height={800}
          className="object-cover h-full w-full absolute"
        />
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="absolute translate-y-1/3 flex flex-col z-10 text-white">
          <h1 className="!text-3xl mt-12 text-white text-center">{title}</h1>
          <ContactBtn className="self-center mt-12" />
          <p className="mt-12 text-center font-light px-4">{intro}</p>
        </div>
      </div>
      <div className="hidden md:block  h-screen relative">
        {imgPathDesktop && (
          <div>
            <Image
              src={imgPathDesktop}
              alt={"Hintergrund Bild von einem Büro"}
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-black/20"></div>
          </div>
        )}

        <div className="flex flex-col p-8 bg-custom-beige/90 rounded-xl max-w-4/5 xl:max-w-3/5 absolute top-1/2 -translate-y-1/2 left-1/8 text-custom-blue">
          <h1 className="mb-8 lg:!text-3xl/12 xl:!text-6xl/18 !font-bold tracking-wide">
            {title}
          </h1>
          <h2 className="lg:!text-xl xl:!text-4xl/14">{subtitle}</h2>
          <p className="mb-8 xl:text-lg">{intro}</p>
          <ContactBtn className="self-start" />
        </div>
      </div>

      <Breadcrumbs className="block px-4 pt-8 lg:px-32 lg:pt-16 font-semibold" />
    </div>
  );
}
