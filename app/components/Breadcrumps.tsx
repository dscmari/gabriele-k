'use client'

import { ChevronRight, House } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

type Props = {
  className?: string;
};

export default function Breadcrumbs({ className }: Props) {
  const location = usePathname();
  // 1. Pfad aufteilen und leere Strings (durch Slashes) entfernen
  // "/geo-berater/check/" -> ["geo-berater", "check"]
  const pathnames = location.split("/").filter((x) => x);
  return (
    <div className={` ${className}`}>
      <ul className="flex flex-wrap lg:gap-4 text-custom-blue font-semibold items-center dark:text-darkmode-white">
        {/* Home Icon ist immer der Start */}
        <Link href="/" className="flex gap-2 items-center p-2 pl-0">
          <House className="hover:text-custom-red"/> <span className="hover:text-custom-red !cursor-pointer">HOME</span>
        </Link>
        {pathnames.map((value, index) => {
          // 2. Den Link für dieses Segment zusammenbauen
          // Index 0: /geo-berater
          // Index 1: /geo-berater/kostenloser-geo-check
          const last = index === pathnames.length - 1;
          const to = `/${pathnames.slice(0, index + 1).join("/")}`;
          // 3. Namen verschönern (Dashes entfernen & Großschreibung)
          const displayName = value.replace(/-/g, " ").toUpperCase();
          return (
            <div key={to} className="flex items-center lg:gap-4">
              <ChevronRight />
              {last ? (
                // Die letzte Seite ist aktiv und nicht klickbar
                <span className="text-custom-red p-2 rounded-md">
                  {displayName}
                </span>
              ) : (
                <Link href={to} className="hover:bg-slate-200 p-2 rounded-md">
                  {displayName}
                </Link>
              )}
            </div>
          );
        })}
      </ul>
    </div>
  );
}
