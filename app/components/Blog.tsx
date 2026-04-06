"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import ContactBtn from "./buttons/ContactBtn";

type NavigationItem = {
  id: string;
  label: string;
};

type Section = {
  header: string;
  id: string;
  texts: string[];
};

type BlogData = {
  navigation: NavigationItem[];
  sections: Section[];
};

type Props = {
  data : BlogData
}

function useActiveSection(ids: string[]) {
  const [activeId, setActiveId] = useState(ids[0]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      () => {
        const visible = ids.filter((id) => {
          const el = document.getElementById(id);
          if (!el) return false;
          const rect = el.getBoundingClientRect();
          return rect.top < window.innerHeight && rect.bottom > 0;
        });
        const topmost = ids.find((id) => visible.includes(id));
        if (topmost) setActiveId(topmost);
      },
      { rootMargin: "0px 0px -20% 0px" },
    );

    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return { activeId, setActiveId }; // setActiveId nach außen geben
}

export default function Blog({data}: Props) {
  const { navigation, sections } = data;
  const { activeId, setActiveId } = useActiveSection(
    navigation.map((s) => s.id),
  );

  return (
    <div className="flex flex-col lg:flex-row lg:gap-32">
      <div className="lg:sticky lg:self-start lg:top-0 lg:pt-32 pt-12 pl-4 flex flex-col">
        <ol className="flex flex-col gap-2 font-light border-l border-gray-300">
          {navigation.map(({ id, label }) => (
            <li key={id}>
              <Link
                href={`#${id}`}
                onClick={() => setActiveId(id)} // sofort umschalten beim Klick
                className={`block pl-4 border-l-2 border-custom-blue transition-all duration-200 ${
                  activeId === id
                    ? "border-black font-medium text-custom-blue"
                    : "border-transparent text-gray-400 hover:text-custom-blue"
                }`}
              >
                {label}
              </Link>
            </li>
          ))}
        </ol>
        <ContactBtn className="self-center lg:self-start mt-8 lg:ml-4" />
      </div>
      <div className="flex flex-col pt-12 lg:pt-24">
        {sections.map((e, index) => (
          <div
            key={index}
            className="flex flex-col gap-4 max-w-xl lg:text-base/8 pt-8"
          >
            {" "}
            <h2 id={e.id} className="scroll-mt-16 text-custom-blue">
              {e.header}
            </h2>
            {e.texts?.map((e, index) => (
              <p key={index}>{e}</p>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
