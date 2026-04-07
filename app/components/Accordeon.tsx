import { ChevronDown } from "lucide-react";

type FAQ = {
  id: string;
  question: string;
  answer: string;
};

type Props = {
  className?: string;
  faqs: FAQ[];
};

export default function Accordeon({ className, faqs }: Props) {


  return (
    <div className={`max-w-5xl mx-auto ${className}`}>
      <div className="flex flex-col gap-4">
        {faqs.map((faq) => (
          <div
            key={faq.id}
            className="group border border-slate-200 dark:border-none rounded-xl overflow-hidden bg-white"
          >
            <input type="checkbox" id={faq.id} className="peer hidden" />
            <label
              htmlFor={faq.id}
              className="flex justify-between items-center p-4 cursor-pointer font-semibold select-none"
            >
              <span className="pointer-events-none text-custom-blue">{faq.question}</span>
             <ChevronDown className="shrink-0 transition-transform duration-300 group-has-[:checked]:scale-y-[-1] group-has-[:checked]:text-custom-red" />
            </label>
            <div className="grid grid-rows-[0fr] transition-[grid-template-rows] duration-500 ease-in-out group-has-[:checked]:grid-rows-[1fr]">
              <div className="overflow-hidden">
                <div className="p-4 dark:bg-darkmode-blue">
                  <p className="whitespace-pre-line">{faq.answer}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
