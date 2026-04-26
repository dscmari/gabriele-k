import Link from "next/link";
import React from "react";

export default function page() {
  return (
    <div className="m-8 lg:m-16 xl:m-32 privacy">
      <h1 className="!mb-8">Impressum</h1>
      <ul className="text-custom-blue">
        <li>Gabriela Kramer</li>
        <li>Franz-Senn-Weg 3a</li>
        <li>86916 Kaufering</li>
        <li>Tel.: 08191 9409400</li>
        <li>Mobil: 0172 9050168</li>
        <li>info@gabrielakramer.de</li>
      </ul>
      <h2>Umsatzsteuer</h2>
      <p>
        Heilleistungen sind von der Umsatzsteuer gemäß § 4 Nr. 14 a UStG
        befreit.
      </p>
      <p>Für alle anderen Leistungen gilt die UST-ID: DE 268 3.98 616</p>
      <h2>Aufsichtsbehörde</h2>
      <ul className="text-custom-blue">
        <li>Gesundheitsamt Landsberg</li>
        <li>Hauptgebäude Landratsamt Landsberg am Lech</li>
        <li>Von-Kühlmann-Str. 15</li>
        <li>86899 Landsberg am Lech</li>
        <li>Telefon: 08191/ 129-0</li>
        <li>E-Mail: poststelle@LRA-LL.bayern.de</li>
        <li>www.landratsamt-landsberg.de</li>
      </ul>
      <h2>Berufsbezeichnung</h2>
      <p>
        Heilpraktiker beschränkt auf das Gebiet der Psychotherapie verliehen
        durch das Landratsamt Augsburg am 13.11.2019.
      </p>
      <h2>Berufsrechtliche Regelungen</h2>
      <p>
        Gesetz über die berufsmäßige Ausübung der Heilkunde ohne ärztliche
        Bestallung (Heilpraktikergesetz) und Durchführungsverordnung
      </p>
      <p>Nachzulesen im Internet unter</p>
      <ol>
        <li>
          {" "}
          <Link
            href={"http://www.gesetze-im-internet.de/heilprg/index.html"}
            target="_blank"
          >
            http://www.gesetze-im-internet.de/heilprg/index.html
          </Link>
        </li>
        <li>
          {" "}
          <Link
            href={"http://www.gesetze-im-internet.de/heilprgdv_1/index.html"}
            target="_blank"
          >
            http://www.gesetze-im-internet.de/heilprgdv_1/index.html
          </Link>
        </li>{" "}
        <li>
          {" "}
          <Link
            href={
              "http://freieheilpraktiker.com/Patienteninfo/Heilpraktikergesetz"
            }
            target="_blank"
          >
            http://freieheilpraktiker.com/Patienteninfo/Heilpraktikergesetz
          </Link>
        </li>
      </ol>
      <h2>Angaben zur Berufshaftpflichtversicherung</h2>
      <p>Continentale Sachversicherung AG, Continentale-Allee 1, 44269 Dortmund</p>
      <p>Geltungsbereich der Versicherung: Deutschland</p>
      <h2>Verantwortlich für den Inhalt</h2>
      <p>Gabriela Kramer</p>
      <h2>Bildnachweise</h2>
      <p>Alle auf dieser Website verwendeten Fotos sind privat erstellt und urheberrechtlich geschützt. Eine Verwendung durch Dritte ist ohne ausdrückliche Genehmigung nicht gestattet. © Gabriela Kramer</p>
      <h2>Mitgliedschaft im Verband</h2>
      <p>BDVT – Berufsverband für Training, Beratung und Coaching</p>
      <p>VFP – Verband Freier Psychotherapeuten, Heilpraktiker für Psychotherapie und Psychologischer Berater e.V.</p>
      <h2>Verbraucherstreitbeilegung/Universalschlichtungsstelle</h2>
      <p>Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.</p>
    </div>
  );
}
