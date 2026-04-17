type Props = {
  className?: string;
};

export default function Timeline({ className }: Props) {
  const items = [
    "Ängste & Panik mindern",
    "Stress reduzieren",
    "Besser schlafen",
    "Gesund abnehmen",
    "Über mich",
    "Methoden",
  ];

  return (
    <div className={`relative flex flex-col min-w-xs pr-16 ${className}`}>
      <div className="absolute right-16 top-0 bottom-0 w-[1px] bg-custom-blue dark:bg-darkmode-white translate-x-[-7px]" />
      {items.map((item) => (
        <div
          key={item}
          className="flex items-center flex-row-reverse gap-6 pb-16 last:pb-0"
        >
          <div
            className={`w-4 h-4 rounded-full border-2 shrink-0 z-10 relative ${item === "Über mich" ? "bg-cta border-cta" : "bg-custom-beige border-custom-blue"}`}
          />
          <span
            className={`text-custom-blue dark:text-darkmode-white text-sm text-right ${item === "Über mich" ? "!text-2xl font-semibold" : ""}`}
          >
            {item}{" "}
            {item === "Über mich" && <span className="text-custom-blue">—</span>}
          </span>
        </div>
      ))}
    </div>
  );
}
