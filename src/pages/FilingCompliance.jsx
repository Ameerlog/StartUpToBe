// src/pages/Payments.jsx
import React from "react";
import { motion } from "framer-motion";

import {
  CreditCard,
  Landmark,
  Plug,
  Palette,
  UsersRound,
  Building2,
  UserPlus,
  Smile,
  Layers,
  Tag,
  Coins,
  Package,
  HandHeart,
  Repeat,
  Plus,
  FileText,
  BadgeCheck,
  Calculator,
  RefreshCcw,
  ShieldCheck,
  ListCheck,
Check
} from "lucide-react"; 


const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.08 },
  },
};

const item = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0 },
};

function GradientDivider() {
  return (
    <div className="mx-auto max-w-6xl px-4">
      <div className="h-px w-full bg-gradient-to-r from-transparent via-zinc-200 to-transparent" />
    </div>
  );
}

function GradientIcon({ Icon }) {
  return (
    <div className="grid h-10 w-10 place-items-center rounded-2xl bg-gradient-to-br from-fuchsia-500/20 via-indigo-500/15 to-transparent ring-1 ring-zinc-200">
      <Icon className="h-5 w-5 text-zinc-900" />
    </div>
  );
}

function FeaturedIcon({ Icon }) {
  return (
    <div className="grid h-10 w-10 place-items-center rounded-2xl border border-zinc-200 bg-white shadow-sm">
      <Icon className="h-5 w-5 text-zinc-900" />
    </div>
  );
}

function AiryCard({ Icon, title, desc }) {
  return (
    <div className="h-full rounded-3xl border border-zinc-200 bg-white p-7 shadow-[0_18px_60px_rgba(15,23,42,0.08)]">
      <div className="mb-4">
        <FeaturedIcon Icon={Icon} />
      </div>
      <h3 className="text-lg font-semibold text-zinc-900">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-zinc-600">{desc}</p>
    </div>
  );
}

function ImageFrame({ src, alt }) {
  return (
    <div className="relative isolate">
      <div className="overflow-hidden rounded-3xl border border-zinc-200 bg-white shadow-[0_22px_80px_rgba(13,26,54,0.12)]">
        <img src={src} alt={alt} loading="lazy" className="w-full" />
      </div>
      <div className="pointer-events-none absolute inset-0 rounded-3xl ring-1 ring-black/5" />
    </div>
  );
}

function FAQItem({ q, children }) {
  return (
    <details className="group rounded-2xl border border-zinc-200 bg-white">
      <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-6 py-5">
        <span className="text-base font-semibold text-zinc-900">{q}</span>
        <span className="grid h-10 w-10 place-items-center rounded-full border border-zinc-200 bg-white text-zinc-900 transition-transform group-open:rotate-45">
          <Plus className="h-5 w-5" />
        </span>
      </summary>
      <div className="px-6 pb-6 text-sm leading-relaxed text-zinc-600">
        {children}
      </div>
    </details>
  );
}

function CTAButtons() {
  return (
    <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
      <a
        href="/pricing"
        className="inline-flex items-center justify-center rounded-full bg-zinc-900 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-zinc-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-900/30"
      >
        Get Filing & Compliance with StartupToBe
      </a>
      <a
        href="/demo"
        className="inline-flex items-center justify-center rounded-full border border-zinc-300 bg-white px-6 py-3 text-sm font-semibold text-zinc-900 shadow-sm transition hover:bg-zinc-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-900/20"
      >
        Watch demo
      </a>
    </div>
  );
}

export default function FilingCompliance() {
  return (
    <main id="main" className="bg-white text-zinc-900">

      <section className="relative overflow-hidden pb-0 pt-16">
 
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-fuchsia-500/18 via-indigo-500/10 to-transparent blur-3xl" />

     
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.35]"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(113,113,122,0.18) 1px, transparent 1px), linear-gradient(to bottom, rgba(113,113,122,0.18) 1px, transparent 1px)",
            backgroundSize: "44px 44px",
          }}
        />

        <div className="relative mx-auto max-w-6xl px-4">
          <div className="flex justify-center">
            <div className="w-full max-w-3xl text-center">
              <div className="text-sm font-semibold tracking-wide text-zinc-500">
                Filing and Compliance
              </div>

              <p className="mt-3 text-4xl font-semibold leading-tight tracking-tight md:text-5xl">
               Filing and Compliances made for
                <br />
                Startup-to-be
              </p>

              <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-zinc-600">
                Starting a business is exciting. 
                Missing a filing deadline isn’t. 
                StartupToBe takes care of registrations, filings, and compliance — so your startup stays legal, credible, and stress-free. 
              </p>

              <CTAButtons />

              <p className="mt-4 text-sm text-zinc-500">
                No contracts • Connect Stripe in minutes • Cancel anytime
              </p>

              {/* extra aesthetic line */}
              <div className="mt-10 flex justify-center">
                <div className="h-px w-72 bg-gradient-to-r from-transparent via-zinc-200 to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <div className="py-10">
        <GradientDivider />
      </div> */}

  <section className="py-16">
  <div className="mx-auto max-w-6xl px-4 py-20">
    <div className="grid items-start gap-12 lg:grid-cols-12">

      {/* LEFT CONTENT */}
      <div className="lg:col-span-5">
        <div className="mb-4 flex items-center gap-3 text-zinc-600">
          <GradientIcon Icon={ShieldCheck} />
          <h2 className="text-sm font-semibold tracking-wide">
            How it works
          </h2>
        </div>

        <h3 className="text-2xl font-semibold tracking-tight md:text-3xl">
          Payments, handled with accountability
        </h3>

        <p className="mt-4 text-zinc-600">
          We don’t just enable payments — we bring structure, visibility, and
          responsibility to how your startup handles financial obligations.
        </p>

        <p className="mt-4 text-zinc-600">
          Every step is tracked, monitored, and reported — so you stay in
          control without constant follow-ups.
        </p>
      </div>

      {/* RIGHT STEPS */}
      <div className="lg:col-span-7">
        <div className="space-y-6">
          {[
            {
              step: "1",
              title: "Understand your requirement",
              desc: "We guide you on what’s actually required — not everything.",
            },
            {
              step: "2",
              title: "Collect & file",
              desc: "Documents are collected and filings are handled.",
            },
            {
              step: "3",
              title: "Track compliance",
              desc: "Deadlines are monitored continuously.",
            },
            {
              step: "4",
              title: "Stay penalty-free",
              desc: "Your startup stays clean and compliant.",
            },
          ].map((item) => (
            <div key={item.step} className="flex gap-4">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-zinc-900 text-sm font-semibold text-white">
                {item.step}
              </div>
              <div>
                <p className="font-semibold text-zinc-900">
                  {item.title}
                </p>
                <p className="mt-1 text-zinc-600">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  </div>
</section>

      <div className="py-10">
        <GradientDivider />
      </div>

      <section className="py-16">
   <div className="mx-auto max-w-6xl px-4 pb-20">
  <div className="grid gap-12 lg:grid-cols-12">
    
    {/* LEFT – INTRO */}
    <div className="lg:col-span-5">
      <div className="flex items-center gap-3 text-zinc-500 mb-4">
        <GradientIcon Icon={UsersRound} />
        <span className="text-sm font-semibold tracking-wide uppercase">
          Why founders choose StartupToBe
        </span>
      </div>

      <h2 className="text-3xl font-semibold tracking-tight text-zinc-900">
        Compliance, without the confusion
      </h2>

      <p className="mt-4 text-zinc-600 leading-relaxed">
        We remove the complexity, stress, and uncertainty founders face while
        managing compliance — so you can focus on building your business.
      </p>

      <p className="mt-6 font-semibold text-zinc-900">
        We don’t just file documents.  
        <br />
        We own the responsibility.
      </p>
    </div>

    {/* RIGHT – VALUE POINTS */}
    <div className="lg:col-span-7 grid gap-6 sm:grid-cols-2">
      
      {/* CARD 1 */}
      <div className="rounded-xl border border-zinc-200 p-6">
        <h3 className="font-semibold text-zinc-900 mb-1">
          No hidden costs
        </h3>
        <p className="text-sm text-zinc-600">
          Transparent pricing with zero surprise charges later.
        </p>
      </div>

      {/* CARD 2 */}
      <div className="rounded-xl border border-zinc-200 p-6">
        <h3 className="font-semibold text-zinc-900 mb-1">
          No last-minute panic
        </h3>
        <p className="text-sm text-zinc-600">
          Deadlines are tracked continuously so nothing is missed.
        </p>
      </div>

      {/* CARD 3 */}
      <div className="rounded-xl border border-zinc-200 p-6">
        <h3 className="font-semibold text-zinc-900 mb-1">
          No legal confusion
        </h3>
        <p className="text-sm text-zinc-600">
          Clear guidance without complex legal jargon.
        </p>
      </div>

      {/* CARD 4 */}
      <div className="rounded-xl border border-zinc-200 p-6">
        <h3 className="font-semibold text-zinc-900 mb-1">
          Accountability built-in
        </h3>
        <p className="text-sm text-zinc-600">
          We proactively manage compliance instead of reacting to issues.
        </p>
      </div>
    </div>
  </div>

  {/* DIVIDER */}
  <div className="my-16 h-px w-full bg-zinc-200" />

{/* CONTINUOUS COMPLIANCE */}
<div className="mt-16">
  <motion.div
    variants={container}
    initial="hidden"
    whileInView="show"
    viewport={{ once: true }}
    className="grid gap-10 lg:grid-cols-12"
  >
    {/* LEFT */}
    <motion.div
      variants={item}
      className="lg:col-span-5"
    >
      <h3 className="text-2xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-600">
        Compliance that continues
      </h3>

      <p className="mt-3 text-zinc-800 dark:text-zinc-700 leading-relaxed">
        Compliance isn’t one-time. It’s ongoing.
        <br />
        That’s why founders stay with us long-term.
      </p>
    </motion.div>

    {/* RIGHT – CARDS */}
  
<div className="lg:col-span-7 space-y-3">
  {[
    "Monthly compliance plans",
    "Ongoing filings",
    "Continuous reminders",
    "Regulatory updates",
  ].map((text) => (
    <div
      key={text}
      className="flex items-start gap-3 text-sm text-zinc-900"
    >
      <Check className="mt-0.5 h-4 w-4 text-zinc-500" />
      <span>{text}</span>
    </div>
  ))}
</div>

  </motion.div>
</div>

</div>


        {/* section-inset u-bg-tertiary */}
        {/* <div className="mt-16 h-28 bg-zinc-50" /> */}
      </section>
{/* 
      <div className="py-10">
        <GradientDivider />
      </div> */}

      

           

    
    </main>
  );
}
