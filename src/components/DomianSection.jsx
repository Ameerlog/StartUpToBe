import React from "react";
import Marquee from "react-fast-marquee";
import { domainCards } from "../data/domains";

function Card({ title, src, price, theme }) {
  return (
    <div className="shrink-0 w-[230px] sm:w-[260px] mx-2 sm:mx-3">
      <div
        className={[
          "group relative h-full overflow-hidden rounded-2xl border",
          "shadow-[0_16px_40px_rgba(0,0,0,0.10)]",
          "transition-transform duration-300 hover:-translate-y-1",
          theme.cardBg,
          theme.border,
        ].join(" ")}
      >
        <div className="p-4">
          <div className="flex items-start justify-between gap-3">
            <h3
              className={[
                "font-gilvenir text-[16px] sm:text-[18px] font-semibold leading-[120%] tracking-[-0.02em]",
                theme.title,
              ].join(" ")}
            >
              {title}
            </h3>

            {/* Price pill */}
            <span
              className={[
                "shrink-0 rounded-full border px-2.5 py-1 text-[12px] sm:text-[13px] font-semibold bg-white/70",
                theme.border,
                theme.price,
              ].join(" ")}
            >
              {price}
            </span>
          </div>

          {/* Image */}
          <div className="mt-3 rounded-xl bg-white/70 border border-white/40 overflow-hidden">
            <div className="h-[150px] sm:h-[170px] w-full p-4">
              <img
                src={src}
                alt={title}
                className="w-full h-full object-contain"
                loading="lazy"
                draggable={false}
              />
            </div>
          </div>

          <div className="mt-4 flex items-center justify-between">
            <a
              href="/showcase"
              className="rounded-xl bg-[#111] px-3 py-2 text-[12px] sm:text-[13px] font-semibold text-white shadow-sm hover:opacity-95"
            >
              Buy now
            </a>
          </div>
        </div>

        <div className="h-1 w-full bg-black/10" />
      </div>
    </div>
  );
}

export default function DomainSection() {
  return (
    <section className="w-full" id="archetypes">
      <div className="w-full max-w-5xl mx-auto px-3 sm:px-4 mt-10">
        <div className="w-full flex flex-col items-start md:items-center text-center md:text-center">
          <h2 className="text-[34px] md:text-[52px] lg:text-[66px] font-Kaio font-bold leading-[100%] tracking-[-0.03em] text-black">
            Popular Collections in StartupToBe Domain Marketplace
          </h2>

          <p className="text-[16px] md:text-[18px] lg:text-[20px] leading-[135%] tracking-[-0.02em] font-nunito-sans text-[#333333] max-w-[620px] pt-4 sm:pt-6">
            Hand-picked names with clean branding potential.
          </p>
        </div>
      </div>

      <div className="my-10">
        <Marquee
          speed={45}
          pauseOnHover
          pauseOnClick
          autoFill
          gradient={false} // Remove blur effect at the ends
          className="px-2 sm:px-5"
        >
          {domainCards.map((c) => (
            <Card
              key={c.id}
              title={c.title}
              src={c.src}
              price={c.price}
              theme={c.theme}
            />
          ))}
        </Marquee>
      </div>

      <div className="mt-4 px-5 pb-2 flex justify-center">
        <a
          href="/showcase"
          className="flex w-fit items-center justify-center gap-2 rounded-2xl bg-pink-300 px-5 py-3 text-base font-semibold text-white shadow-[0_18px_50px_rgba(36,0,41,0.22)] hover:opacity-95 hover:bg-pink-350"
        >
          View all <span aria-hidden="true">→</span>
        </a>
      </div>
    </section>
  );
}
