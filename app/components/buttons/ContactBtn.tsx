'use client'
import Link from "next/link";
import { usePathname } from "next/navigation";

type Props = {
  className?: string;
  content?: string
};

export default function ContactBtn({ className, content}: Props) {
  return (
    <Link href={'#'}
      className={`bg-custom-blue px-4 py-2 text-white font-semibold tracking-tight rounded-xl inline-block whitespace-nowrap ${className}`}
    >
      {content ? content : "Termin anfragen"}
    </Link>
  );
}
