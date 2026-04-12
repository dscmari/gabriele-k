import Image from "next/image";
import Timeline from "../components/Timeline";

export default function page() {
  return (
    <div>
      <section className="pt-12 lg:pt-32 lg:px-32 flex flex-col gap-8 lg:flex-row ">
        {" "}
        <div className="min-w-sm">
          <Image
            src={"/images/portraits/sitting_front_gk_small.jpg"}
            alt="Portraitfoto von Heilpraktikerin für Psychotherapie Gaby Kramer"
            width={350}
            height={525}
            className="object-cover"
          />
        </div>
        <div className="mt-16">
          <span className="font-light text-sm mx-auto lg:mx-0">Über mich</span>
          <h1 className="mb-8 lg:!text-3xl/12 xl:!text-5xl/14 !font-bold tracking-wide">
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
        <Timeline />
      </section>
    </div>
  );
}
