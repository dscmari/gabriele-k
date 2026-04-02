import { title } from "process";
import Hero from "../components/Hero";
import Hero_leftOrientated from "../components/Hero_leftOrientated";

export default function page() {
  const hero = {
    title: "Therapeutische Verfahren",
    subtitle: "Erprobte Methoden, die ich in meiner Praxis einsetze",
    intro:
      "Jeder Mensch ist anders — und so ist auch jede Therapie anders. Ich arbeite nicht nach Schema, sondern wähle die Methoden, die zu Ihnen, Ihrem Thema und Ihrem Tempo passen.",
    imgPathDesktop: "/images/office_bg.jpg",
  };
  const { title, subtitle, intro, imgPathDesktop } = hero;
  return (
    <div>
      <Hero_leftOrientated
        imgPathDesktop={imgPathDesktop}
        imgPathMobile={imgPathDesktop}
        title={title}
        subtitle={subtitle}
        intro={intro}
      />
    </div>
  );
}
