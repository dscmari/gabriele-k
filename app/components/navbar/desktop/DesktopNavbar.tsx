"use client";
import Image from "next/image";
import Link from "next/link";
import ContactBtn from "../../buttons/ContactBtn";
import { Mail, Phone } from "lucide-react";
import { ShiftingDropDown } from "./ShiftingDropDown";

type Props = {
  className?: string;
};

export default function DesktopNavbar({ className }: Props) {
  return (
    <div className={`mx-auto p-8 pb-4 ${className}`}>
      <div className="flex gap-4 justify-end text-sm font-light pb-4 !text-custom-blue">
        <div className="flex items-center gap-2 ">
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
          <ShiftingDropDown />
          <div className="flex items-center gap-8">
            <ContactBtn />
          </div>
      </div>
         
    </div>
  );
}
