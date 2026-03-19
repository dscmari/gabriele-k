"use client";
import Image from "next/image";
import Link from "next/link";
import ContactBtn from "../../buttons/ContactBtn";

type Props = {
  className?: string;
};

export default function DesktopNavbar({ className }: Props) {
  return (
    <div className={`mx-auto p-8 ${className}`}>
      <div className="flex items-center gap-16 p-4 ">
        <Link className="z-100" href={"/"}>
          {" "}
          <Image
            src="/logo_gk.png"
            alt="Logo"
            width={200}
            height={100}
            className="w-36"
          />
        </Link>
        <div className="flex items-center justify-between w-full text-custom-blue">
          <div className="flex items-center gap-8">
            <Link
              href={"angst-mindern"}
              className="font-semibold hover:underline underline-offset-4"
            >
              Angst & Panik mindern
            </Link>
            <Link
              href={"rauchfrei-werden"}
              className="font-semibold hover:underline underline-offset-4"
            >
              Rauchfrei werden
            </Link>
            <Link
              href={"besser-schlafen"}
              className="font-semibold hover:underline underline-offset-4"
            >
              Besser schlafen
            </Link>
            <Link
              href={"praxis"}
              className="font-semibold hover:underline underline-offset-4"
            >
              Praxis
            </Link>
            <Link
              href={"ueber-mich"}
              className="font-semibold hover:underline underline-offset-4"
            >
              Über Mich
            </Link>
          </div>
          <div className="flex items-center gap-8">
            <ContactBtn className="hover:bg-gold" />
          </div>
        </div>
      </div>
    </div>
  );
}
