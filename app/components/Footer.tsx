"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

type Props = {
  className?: string;
};

export default function Footer({ className }: Props) {
  const pathname = usePathname();
  return (
    <footer className={`text-white bg-custom-blue ${className}`}>
      <div className="p-4 lg:pt-32 lg:px-32 grid grid-cols-1 gap-12 lg:grid-cols-4">
        <div className="flex flex-col items-center lg:items-start gap-2 order-2 lg:order-1">
          <span>Gabriela Kramer</span>
          <span>www.gabrielakramer.de</span>
          <span>+49 1520 2076952</span>
          <span>info@gabrielakramer.de</span>
          <span>Franz-Senn-Weg 3a</span>
          <span>86916 Kaufering</span>
        </div>
        <div className="flex flex-col gap-8 order-3 mb-12 lg:mb-0 lg:order-2">
          <div className="flex flex-col items-center lg:items-start gap-2">
            <Link
              href={"#"}
              className="font-semibold hover:underline underline-offset-4"
            >
              Angst & Panik mindern
            </Link>
            <Link
              href={"#"}
              className="font-semibold hover:underline underline-offset-4"
            >
              Rauchfrei werden
            </Link>
            <Link
              href={"#"}
              className="font-semibold hover:underline underline-offset-4"
            >
              Besser schlafen
            </Link>
            <Link
              href={"#"}
              className="font-semibold hover:underline underline-offset-4"
            >
              Die Praxis
            </Link>
            <Link
              href={"#"}
              className="font-semibold hover:underline underline-offset-4"
            >
              Über Mich
            </Link>
          </div>
        </div>
        <div className="lg:col-span-2 order-1 lg:order-3 mt-12 lg:mt-0">
          <h1> Heilpraktikerin für Psychotherapie in Kaufering</h1>
          <p className="mb-2">
            Ich bin Gabriela Kramer, Ihre Heilpraktikerin für Psychotherapie in
            Kaufering und der Region Landsberg am Lech.
          </p>
          <p className="mb-2">
            In meiner Praxis unterstütze ich Sie bei Ängsten, Stressbewältigung,
            Schlafproblemen und anderen mentalen Belastungen.
          </p>
        </div>
      </div>
      <div className="px-4 lg:px-32 pt-4 lg:pt-16 flex flex-col lg:flex-row items-center lg:justify-center gap-2 lg:gap-8">
        <Link href={"#"} className="underline">
          Allgemeine Geschäftsbedingungen
        </Link>
        <Link href={"#"} className="underline">
          Datenschutzerklärung
        </Link>
        <Link href={"#"} className="underline">
          Impressum
        </Link>
      </div>
      <div className="px-4 py-8 lg:px-32 lg:py-16 text-sm font-thin flex flex-col md:flex-row justify-between items-center gap-4">
        <span>© 2026 Cristian Pop</span>
        <span>
          Design & Entwicklung von{" "}
          <a
            href="https://namaste-websites.de"
            className="hover:offwhite transition-colors  underline decoration-[0.1px] underline-offset-4 font-thin"
          >
            Marian Nökel
          </a>
        </span>
      </div>
    </footer>
  );
}
