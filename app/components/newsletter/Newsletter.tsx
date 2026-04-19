import Image from "next/image";
import WebsiteCheckForm from "./NewsletterForm";
import NewsletterForm from "./NewsletterForm";

type Props = {
  isGeo?: boolean;
  className?: string;
};

export default function WebsiteCheck({ isGeo, className }: Props) {
  return (
    <section className={`${className}`}>
      <div className="xl:flex xl:gap-16">
        <div className="hidden xl:block mx-auto">
          <div className="xl:relative">
            <Image
              src="/images/portraits/gaby_4.jpg"
              alt="Portrait von Heilpraktikerin für Psychotherapie Gabriela Kramer"
              className="w-full rounded-tr-4xl rounded-b-4xl"
              width={400}
              height={200}
            />
            <div className="xl:absolute p-8 bottom-0 leading-8 font-semibold text-white">
              <h1 className="!text-white">
                Heilpraktikerin für Psychotherapie in Kaufering
              </h1>
              <p className="text-sm font-light !text-white">
                Ich bin Gabriela Kramer, Ihre Heilpraktikerin für Psychotherapie
                in Kaufering und der Region Landsberg am Lech.
              </p>
            </div>
          </div>
        </div>
        <div className="xl:max-w-1/2">
          <span className="font-light text-sm">
            Keine Neuigkeiten verpassen!
          </span>
          <div className="lg:flex lg:flex-col 2xl:justify-center ">
            <h1 className="mb-8 lg:!text-3xl/12 tracking-wide text-custom-blue">
              Newsletter
            </h1>
            <p className="max-w-4xl font-light text-sm">
              Der Weg zu mehr Wohlbefinden beginnt oft mit kleinen Schritten. Im
              Newsletter begleite ich Sie mit Gedanken, Übungen und
              Inspirationen – auch zwischen unseren Terminen.
            </p>
            <NewsletterForm />
          </div>
        </div>
      </div>
    </section>
  );
}
