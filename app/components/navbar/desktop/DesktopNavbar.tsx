"use client";
import Image from "next/image";
import Link from "next/link";
import ContactBtn from "../../buttons/ContactBtn";
import { Mail, Phone } from "lucide-react";

type Props = {
  className?: string;
};

export default function DesktopNavbar({ className }: Props) {
  return (
    <div className={`mx-auto p-8 ${className}`}>
      <div className="flex gap-4 justify-end text-sm font-light pb-4">
        <div className="flex items-center gap-2">
          <Phone className="shrink-0 size-4" />
          <span>+49 1520 2076952</span>
        </div>
        <div className="flex items-center gap-2">
          <Mail className="shrink-0 size-4" />
          <span>info@gabrielakramer.de</span>
        </div>
      </div>
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
              Ängste & Panik mindern
            </Link>
            <Link
              href={"#"}
              className="font-semibold hover:underline underline-offset-4"
            >
              Stress reduzieren
            </Link>
            <Link
              href={"besser-schlafen"}
              className="font-semibold hover:underline underline-offset-4"
            >
              Besser schlafen
            </Link>
            <Link
              href={"#"}
              className="font-semibold hover:underline underline-offset-4"
            >
              Zielgewicht erreichen
            </Link>
            <Link
              href={"methoden"}
              className="font-semibold hover:underline underline-offset-4"
            >
              Methoden
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
