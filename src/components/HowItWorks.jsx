import { Check } from "lucide-react";
import Logo from "../assets/30 (1).svg";

export default function HowItWorks() {
  const points = [
    "One place to build your startup",
    "One place to name your business",
    "One platform to find and buy your domain",
    "One form for company registration & GST",
    "One flow for trademark & compliance",
    "One dashboard to track filings & status",
    "One community for founders like you",
    "One roadmap to stay accountable",
    "One login to manage your startup journey",
    "One simple price to get started",
  ];

  return (
    <section
      className="pt-0 pb-20"
      style={{
        background: "linear-gradient(180deg, #faf7fb 0%, #ffffff 80%)",
      }}
    >
      <div className="mx-auto max-w-5xl px-4 flex flex-col items-center">
       
                     <img
                       src={Logo}
                       alt="StartUptobe"
                       className="
                         h-40 w-full
                         object-contain
                         bg-transparent
                         block
                         pl-3
                         scale-500
                       "
                       loading="lazy"
                     />

        <div className="my-6 h-px w-[28rem] bg-[#240029]/20" />

        
        <div className="mt-10 w-full max-w-lg mx-auto transform translate-x-2">
          {points.map((text) => (
            <div
              key={text}
              className="flex items-start gap-4 mb-3"
            >
              <span className="mt-1 flex h-6 w-6 items-center justify-center rounded-full bg-emerald-500 flex-shrink-0">
                <Check size={14} className="text-white stroke-[3]" />
              </span>

              <p className="text-[17px] font-medium text-[#240029] leading-relaxed">
                <span className="font-semibold">One</span>
                {text.replace(/^One/, "")}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
