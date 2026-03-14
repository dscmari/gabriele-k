"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "motion/react";
import DesktopNavbar from "./desktop/DesktopNavbar";

type Props = {
  className?: string;
};

export default function Navbar({ className }: Props) {
  const [showMenu, setShowMenu] = useState(false);

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
      <div className="lg:hidden px-4 pt-4 md:p-12 w-full">
        <div className="flex justify-end md:justify-between items-center">
           <Link href="/">
            <Image
              src="/logo_gk.png"
              alt="Logo"
              width={200}
              height={100}
              className="hidden md:block w-32"
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
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ease: "easeOut", duration: 1 }}
            onClick={toggleMenu}
          >
            <div className="flex flex-col items-end  gap-4 py-12 font-semibold ">
              <div className="pb-1 text-neutral-400 border-b-2 border-slate-200 w-full flex justify-end">
                <Link href={"#"} className="text-right text-charcoalDark">
                  Item 1
                </Link>
              </div>

              <div className="pb-1 text-neutral-400 border-b-2 border-slate-200 w-full flex justify-end">
                <Link href={"#"} className="text-right text-charcoalDark">
                  Item 1
                </Link>
              </div>

              <div className="pb-1 text-neutral-400 border-b-2 border-slate-200 w-full flex justify-end">
                <Link href={"#"} className="text-right text-charcoalDark">
                  Item 2
                </Link>
              </div>

              <div className="pb-1 text-neutral-400 border-b-2 border-slate-200 w-full flex justify-end">
                <Link href={"#"} className="text-right text-charcoalDark">
                  Item 3
                </Link>
              </div>

              <div className="pb-1 text-neutral-400 border-b-2 border-slate-200 w-full flex justify-end">
                <Link href={"#"} className="text-right text-charcoalDark">
                  Item 4
                </Link>
              </div>
            </div>
          </motion.div>
        ) : null}
      </div>
      {/* Desktop */}
      <div className="hidden lg:block bg-offwhite w-full max-w-[2048px]">
        <DesktopNavbar />
      </div>
    </div>
  );
}
