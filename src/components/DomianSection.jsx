
import Marquee from "react-fast-marquee";

const cards = [
  {
    id: "creators",
    title: "The Creators",
    src: "/images/card/card-1.svg",
    description: "Builders who ship fast and learn by doing.",
    theme: {
      cardBg: "bg-indigo-50",
      border: "border-indigo-200",
      title: "text-indigo-900",
      desc: "text-indigo-700",
    },
  },
  {
    id: "strategist",
    title: "The Strategist",
    src: "/images/card/card-2.svg",
    description: "Plans clearly and chooses the highest-leverage moves.",
    theme: {
      cardBg: "bg-emerald-50",
      border: "border-emerald-200",
      title: "text-emerald-900",
      desc: "text-emerald-700",
    },
  },
  {
    id: "catalyst",
    title: "The Catalyst",
    src: "/images/card/card-3.svg",
    description: "Creates momentum through people and distribution.",
    theme: {
      cardBg: "bg-orange-50",
      border: "border-orange-200",
      title: "text-orange-900",
      desc: "text-orange-700",
    },
  },
  {
    id: "leader",
    title: "The Leader",
    src: "/images/card/card-4.svg",
    description: "Aligns teams and executes with consistency.",
    theme: {
      cardBg: "bg-rose-50",
      border: "border-rose-200",
      title: "text-rose-900",
      desc: "text-rose-700",
    },
  },
  {
    id: "innovator",
    title: "The Innovator",
    src: "/images/card/card-5.svg",
    description: "Solves hard problems with fresh approaches.",
    theme: {
      cardBg: "bg-cyan-50",
      border: "border-cyan-200",
      title: "text-cyan-900",
      desc: "text-cyan-700",
    },
  },
  {
    id: "visionary",
    title: "The Visionary",
    src: "/images/card/card-6.svg",
    description: "Thinks long-term and spots what’s next early.",
    theme: {
      cardBg: "bg-fuchsia-50",
      border: "border-fuchsia-200",
      title: "text-fuchsia-900",
      desc: "text-fuchsia-700",
    },
  },
];

function Card({ title, src, description, theme }) {
  return (
    <div className="shrink-0 w-[210px] sm:w-[240px] mx-1.5 sm:mx-2">
      <div
        className={[
          "h-full rounded-[14px] border shadow-[0_10px_24px_rgba(0,0,0,0.07)] p-3 sm:p-4",
          theme.cardBg,
          theme.border,
        ].join(" ")}
      >
        <h3
          className={[
            "font-gilvenir text-[16px] sm:text-[18px] font-semibold leading-[120%] tracking-[-0.02em]",
            theme.title,
          ].join(" ")}
        >
          {title}
        </h3>

        <div className="mt-2.5 rounded-[10px] overflow-hidden bg-white/60">
          <img
            alt={title}
            className="w-full h-[140px] sm:h-[160px] object-cover"
            src={src}
            loading="lazy"
            draggable={false}
          />
        </div>

        <p
          className={[
            "mt-2.5 font-nunito-sans text-[13px] sm:text-[14px] leading-[150%] tracking-[-0.02em]",
            theme.desc,
          ].join(" ")}
        >
          {description}
        </p>
      </div>
    </div>
  );
}


export default function DomanSection() {
  return (
    <section className="w-full " id="archetypes">
  
      <div className="w-full max-w-4xl mx-auto px-3 sm:px-4 mt-10">
        <div className="text-center w-full flex flex-col items-start md:items-center">
          <h2 className="text-[36px] md:text-[48px] lg:text-[68px] font-gilvenir text-start md:text-center font-bold leading-[100%] tracking-[-0.03em] text-[#333333CC] max-w-[1000px]">
           <br />Popular Collections in Startuptobe Domain Marketplace
          </h2>

          <p className="text-[16px] md:text-[18px] text-start md:text-center lg:text-[22px] leading-[135%] tracking-[-0.02em] font-nunito-sans text-[#333333] max-w-[466px] pt-[16px] sm:pt-[28px]">
            {/* Lorem ipsum dolor sit amet consectetur adipisicing elit. what&apos;s next. */}
          
          </p>
        </div>
        
      </div>

      <div className="my-10 px-5">
        <Marquee speed={50} pauseOnHover pauseOnClick autoFill gradient={false}>
          {cards.map((c) => (
            <Card
              key={c.id}
              title={c.title}
              src={c.src}
              description={c.description}
              theme={c.theme}
            />
          ))}
        </Marquee>
      </div>
     <div className="mt-8 px-5 pb-2">
    <a
    href="/archetypes"
    className="
      mx-auto flex w-30  items-center justify-center gap-2
      rounded-2xl bg-[#726d72] px-4 py-3
      text-base font-semibold text-white
      shadow-[0_18px_50px_rgba(36,0,41,0.22)]
      hover:opacity-95
    "
  >
    View all <span aria-hidden="true">→</span>
  </a>
     </div>
    </section>
  );
}
