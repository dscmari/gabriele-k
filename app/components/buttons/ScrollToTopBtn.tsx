"use client";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

import { ArrowUp } from "lucide-react";

export default function ScrollToTopBtn() {
  const [isVisible, setIsVisible] = useState(false);
  const routePath = usePathname();

  const handleScroll = () => {
    if (window.scrollY > 100) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    scrollToTop();
  }, [routePath]);

  return (
    <>
      {isVisible && (
        <button
          className="fixed bottom-10 bg-black/30 right-10 rounded-4xl p-2 cursor-pointer"
          onClick={scrollToTop}
        >
          <ArrowUp color="white" size={24} />
        </button>
      )}
    </>
  );
}
