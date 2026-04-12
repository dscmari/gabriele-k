import {
  BadgeEuro,
  CigaretteOff,
  SearchCheck,
  ShieldCheck,
} from "lucide-react";
import ContactBtn from "./buttons/ContactBtn";

type Bullet = {
  icon: React.ReactNode;
  header: string;
  text: string;
};

type Data = {
  headline: string;
  subheader: string;
  intro: string;
  bullets: Bullet[];
};

type Props = {
  classname?: string;
  data: Data;
};

export default function Features({ classname, data }: Props) {
  const { headline, subheader, intro, bullets } = data;

  return (
    <div
      className={`flex flex-col xl:flex-row xl:items-start gap-12 lg:gap-32 ${classname}`}
    >
      <div className="flex-1 flex flex-col items-center lg:items-start gap-4">
        <span className="font-light text-sm">{subheader}</span>
        <h1 className="mb-8 lg:!text-3xl/12 xl:!text-5xl/14 !font-bold tracking-wide !text-white">
          {headline}
        </h1>
        <p className="lg:text-base/8 text-center lg:text-start">{intro}</p>
        <ContactBtn className="mx-auto lg:mx-0 bg-custom-bronce mt-8" />
      </div>
      <div className="flex-2 grid grid-cols-1 xl:grid-cols-2 gap-16 mt-4">
        {bullets.map((bullet, index) => {
          return (
            <div key={index} className="flex flex-col gap-4">
              <div className="flex gap-4 lg:flex-col text-white">
                {bullet.icon}

                <h2 className="!text-white">{bullet.header}</h2>
              </div>
              <p className="lg:text-base/8">{bullet.text}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
