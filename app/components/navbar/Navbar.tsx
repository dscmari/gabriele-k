"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { AnimatePresence, motion } from "motion/react";
import DesktopNavbar from "./desktop/DesktopNavbar";
import ContactBtn from "../buttons/ContactBtn";
import { div } from "motion/react-client";
import { ChevronDown } from "lucide-react";

type Props = {
  className?: string;
};

export default function Navbar({ className }: Props) {
  const [showMenu, setShowMenu] = useState(false);
  const [isSelected, setIsSelected] = useState(false);

  const toggleMenu = () => {
    toggleX();
    setShowMenu(!showMenu);
  };

  const toggleX = () => {
    const burgerMenu = document.getElementById("burger-menu");
    const spans = burgerMenu?.getElementsByTagName("span");

    if (spans) {
      Array.from(spans).forEach((span) => {
        span.classList.toggle("open");
      });
    }
  };

  return (
    <div className={`${className}`}>
      {/* Mobile */}
      <div className="xl:hidden px-4 pt-4 md:p-12 w-full dark:bg-custom-beige pb-4">
        <div className="flex justify-between items-center">
          <Link href="/">
            <Image
              src="/logo_gk.png"
              alt="Logo"
              width={200}
              height={100}
              className="w-24 md:w-32"
            />
          </Link>
          <div className="flex items-center gap-4">
            <div className="burgermenu" id="burger-menu" onClick={toggleMenu}>
              <span className="top"></span>
              <span className="middle"></span>
              <span className="bottom"></span>
            </div>
          </div>
        </div>
        {showMenu ? (
          <div>
            <div
              className={`flex items-center gap-4 pt-12 ${
                isSelected
                  ? "border-t border-slate-200"
                  : "border-b-2 border-slate-200"
              }`}
              onClick={() => setIsSelected((prev) => !prev)}
            >
              <span className="font-semibold pb-2 text-custom-blue">
                Meine Schwerpunkte
              </span>
              <ChevronDown
                className={`transition-transform shrink-0 text-custom-blue ${
                  isSelected ? "scale-y-[-1]" : ""
                }`}
              />
            </div>

            <motion.div
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ ease: "easeOut", duration: 1 }}
              onClick={toggleMenu}
            >
              <AnimatePresence>
                {isSelected && (
                  <motion.ol
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className={`pl-4 pb-8 flex flex-col gap-4  ${
                      isSelected ? "" : ""
                    }`}
                  >
                    <div className="flex flex-col gap-4 mr-8 mt-4 text-custom-blue/60 font-semibold">
                      <div
                      className="pt-4 pb-1 border-b-2 border-slate-200 w-full flex justify-start"
                        onClick={() => setShowMenu((prev) => !prev)}
                      >
                        <Link href="/angst-regulieren/">
                          Ängste & Panik regulieren
                        </Link>
                      </div>
                      <div
                        className="pb-1 border-b-2 border-slate-200"
                        onClick={() => setShowMenu((prev) => !prev)}
                      >
                        <Link
                          href="/stress-bewaeltigen/"
                        >
                          Stress bewältigen
                        </Link>
                      </div>
                      <div
                        className="pb-1 border-b-2 border-slate-200"
                        onClick={() => setShowMenu((prev) => !prev)}
                      >
                        <Link href="/besser-schlafen/">Besser schlafen</Link>
                      </div>
                      <div
                        className="pb-1 border-b-2 border-slate-200 w-full flex justify-start"
                        onClick={() => setShowMenu((prev) => !prev)}
                      >
                        <Link href="/gesund-abnehmen/">Gesund abnehmen</Link>
                      </div>
                    </div>
                  </motion.ol>
                )}
              </AnimatePresence>
              <div className="flex flex-col items-start  gap-4 pb-12 font-semibold text-custom-blue">
                <div className="pt-4 pb-1 border-b-2 border-slate-200 w-full flex justify-start">
                  <Link href={"/coaching/"} className="text-right">
                    Coaching
                  </Link>
                </div>
                <div className="pb-1 border-b-2 border-slate-200 w-full flex justify-start">
                  <Link href={"/methoden/"} className="text-right">
                    Methoden
                  </Link>
                </div>
                <div className="pb-1 border-b-2 border-slate-200 w-full flex justify-start">
                  <Link href={"/ueber-mich/"} className="text-right">
                    Über Mich
                  </Link>
                </div>
                <div className="pb-1 border-b-2 border-slate-200 w-full flex justify-start">
                  <Link href={"/blog/"} className="text-right">
                    Blog
                  </Link>
                </div>
                <ContactBtn />
              </div>
            </motion.div>
          </div>
        ) : null}
      </div>
      {/* Desktop */}
      <div className="hidden xl:block w-full max-w-[2048px]">
        <DesktopNavbar />
      </div>
    </div>
  );
}
