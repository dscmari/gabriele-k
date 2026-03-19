'use client'
import Link from "next/link";

type Props = {
  className?: string;
  content?: string
};

export default function ContactBtn({ className, content}: Props) {
  return (
    <Link href={'https://my.lemniscus.de/ot/f23e504f-c333-470e-a0bf-1bbc742d2485'} target="_blank"
      className={`bg-orange-600 px-4 py-2 text-white font-semibold tracking-tight rounded-xl inline-block whitespace-nowrap hover:bg-custom-bronce ${className}`}
    >
      {content ? content : "Termin anfragen"}
    </Link>
  );
}
