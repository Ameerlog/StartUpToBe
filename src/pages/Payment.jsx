// src/pages/Payments.jsx
import React from "react";
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
} from "lucide-react"; 

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
        See pricing
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

export default function Payments() {
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
                Payments
              </div>

              <p className="mt-3 text-4xl font-semibold leading-tight tracking-tight md:text-5xl">
                Connect to Stripe.
                <br />
                Start selling.
              </p>

              <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-zinc-600">
                Outseta is an all-in-one billing system purpose built for SaaS and
                membership businesses. Payments, subscription management, and tax
                compliance integrated with your site—and the rest of your tech stack—in
                minutes.
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

      <div className="py-10">
        <GradientDivider />
      </div>

      <section className="py-16">
        <div className="mx-auto max-w-6xl px-4 pb-16">
          <div className="grid items-start gap-10 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <div className="mb-4">
                <div className="flex items-center gap-3 text-zinc-600">
                  <GradientIcon Icon={CreditCard} />
                  <h2 className="text-sm font-semibold tracking-wide">
                    Optimized checkout forms
                  </h2>
                </div>
              </div>

              <p className="text-2xl font-semibold tracking-tight md:text-3xl">
                Embeds. Pop-ups. Payment Links.
              </p>

              <div className="mt-4 space-y-4 text-zinc-600">
                <p>
                  <span className="font-semibold text-zinc-900">
                    Build a beautifully optimized checkout experience.
                  </span>{" "}
                  Integrate payments with your site via embeddable forms, pop-ups, or
                  payment links.
                </p>
                <p>
                  Style your sign up forms to match your brand and collect whatever
                  information you require at sign up. Payments are captured and secured
                  by Stripe.
                </p>
              </div>

              {/* <div className="mt-7 flex flex-wrap gap-3">
                <a
                  href="/demo"
                  className="rounded-full border border-zinc-300 bg-white px-5 py-2 text-sm font-semibold text-zinc-900 hover:bg-zinc-50"
                >
                  View checkout demo
                </a>
                <a
                  href="/pricing"
                  className="rounded-full bg-zinc-900 px-5 py-2 text-sm font-semibold text-white hover:bg-zinc-800"
                >
                  Compare plans
                </a>
              </div> */}
            </div>

            <div className="lg:col-span-7">
              <div className="lg:w-[50vw]">
                <ImageFrame
                  src="https://cdn.prod.website-files.com/663cf90ca192fe7e5bcb8bd7/6701523c08fb3aa6c8825dfb_Screen%20Shot%202024-10-05%20at%207.50.17%20AM.avif"
                  alt="Embedded Outseta sign up form on a web page"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="mx-auto max-w-6xl px-4">
          <div className="grid gap-4 lg:grid-cols-2">
            <AiryCard
              Icon={Landmark}
              title="Sell globally with Stripe tax"
              desc="Automatically apply the appropriate tax rate at checkout to ensure that you're tax compliant while selling globally."
            />
            <AiryCard
              Icon={Plug}
              title="Integrate how you want"
              desc="Move beyond disjointed account creation and checkout flows required when using third party payment tools."
            />
            <AiryCard
              Icon={Palette}
              title="Style to match your brand"
              desc="Customize the design of your sign up forms to match the aesthetic of your brand."
            />
            <AiryCard
              Icon={CreditCard}
              title="Accept popular payment methods via Stripe"
              desc="Charge customers via a variety of payment methods including cards, Google Pay, Apple Pay, bank transfers, SEPA, iDeal, and more."
            />
          </div>
        </div>
      </section>

      <div className="py-10">
        <GradientDivider />
      </div>

      <section className="py-16">
        <div className="mx-auto max-w-6xl px-4 pb-16">
          <div className="grid items-start gap-10 lg:grid-cols-12">
            <div className="lg:col-span-7 lg:order-1 order-2">
              <div className="lg:float-right lg:w-[50vw]">
                <ImageFrame
                  src="https://cdn.prod.website-files.com/663cf90ca192fe7e5bcb8bd7/670151cede99bb801f3af2d2_Screen%20Shot%202024-10-05%20at%207.47.38%20AM.avif"
                  alt="Outseta plan configuration settings"
                />
              </div>
            </div>

            <div className="lg:col-span-5 lg:order-2 order-1">
              <div className="mb-4">
                <div className="flex items-center gap-3 text-zinc-600">
                  <GradientIcon Icon={UsersRound} />
                  <h2 className="text-sm font-semibold tracking-wide">
                    Individual or team memberships
                  </h2>
                </div>
              </div>

              <p className="text-2xl font-semibold tracking-tight md:text-3xl">
                Individual or team based memberships
              </p>

              <div className="mt-4 space-y-4 text-zinc-600">
                <p>
                  <span className="font-semibold text-zinc-900">
                    B2C? B2B? Teams?
                  </span>{" "}
                  Outseta allows you to sell both individual and team based memberships.
                </p>
                <p>
                  While many membership sites start by selling individual memberships,
                  they soon recognize an opportunity to sell to businesses or organizations.
                </p>
                <p>
                  This transition allows you to acquire members in bulk while selling to less
                  cost sensitive buyers (businesses).
                </p>
              </div>

              {/* <div className="mt-7 flex flex-wrap gap-3">
                <a
                  href="/pricing"
                  className="rounded-full bg-zinc-900 px-5 py-2 text-sm font-semibold text-white hover:bg-zinc-800"
                >
                  Explore pricing models
                </a>
                <a
                  href="#faq"
                  className="rounded-full border border-zinc-300 bg-white px-5 py-2 text-sm font-semibold text-zinc-900 hover:bg-zinc-50"
                >
                  Read FAQs
                </a>
              </div> */}
            </div>
          </div>
        </div>

        <div className="mx-auto max-w-6xl px-4">
          <div className="grid gap-4 lg:grid-cols-3">
            <AiryCard
              Icon={Building2}
              title="Move from selling B2C to B2B"
              desc="While your business may have been built by selling individual memberships, don't limit your growth potential."
            />
            <AiryCard
              Icon={UsersRound}
              title="Set up plans with access to X number of users"
              desc="Want to setup a 5-user plan? How about a 25-user? No problemo."
            />
            <AiryCard
              Icon={UserPlus}
              title="Charge per user fees"
              desc="Outseta support per user pricing models, giving you the flexibility to charge a set fee to each user."
            />
          </div>
        </div>

        {/* section-inset u-bg-tertiary */}
        <div className="mt-16 h-28 bg-zinc-50" />
      </section>

      <div className="py-10">
        <GradientDivider />
      </div>

      <section className="pb-0 pt-16">
        <div className="mx-auto max-w-6xl px-4 pb-16">
          <div className="grid items-start gap-10 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <div className="mb-4">
                <div className="flex items-center gap-3 text-zinc-600">
                  <GradientIcon Icon={Smile} />
                  <h2 className="text-sm font-semibold tracking-wide">Feature</h2>
                </div>
              </div>

              <p className="text-2xl font-semibold tracking-tight md:text-3xl">
                Flexible pricing models
              </p>

              <div className="mt-4 space-y-4 text-zinc-600">
                <p>
                  <span className="font-semibold text-zinc-900">
                    Monetize with memberships—on your own terms.
                  </span>{" "}
                  From subscriptions and one-time products to free trials and per user
                  pricing, experiment with pricing models quickly.
                </p>
              </div>

              {/* <div className="mt-7 flex flex-wrap gap-3">
                <a
                  href="/pricing"
                  className="rounded-full bg-zinc-900 px-5 py-2 text-sm font-semibold text-white hover:bg-zinc-800"
                >
                  See pricing
                </a>
                <a
                  href="/demo"
                  className="rounded-full border border-zinc-300 bg-white px-5 py-2 text-sm font-semibold text-zinc-900 hover:bg-zinc-50"
                >
                  Watch demo
                </a>
              </div> */}
            </div>

            <div className="lg:col-span-7">
              <div className="lg:w-[50vw]">
                <ImageFrame
                  src="https://cdn.prod.website-files.com/663cf90ca192fe7e5bcb8bd7/670153096ac70f4e8a39ed42_Screen%20Shot%202024-10-05%20at%207.53.37%20AM.avif"
                  alt="Outseta plan configuration settings"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="mx-auto max-w-6xl px-4 pb-16">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <AiryCard
              Icon={Layers}
              title="Sell add-on products"
              desc="Sell additional subscriptions, one-time products, or usage based add-ons in addition to your membership plans."
            />
            <AiryCard
              Icon={Tag}
              title="Discounts and coupon codes"
              desc="Create flat rate or percentage based discounts with plan-specific codes and redemption limits."
            />
            <AiryCard
              Icon={Coins}
              title="Charge setup fees"
              desc="Charge customers an additional one-time setup fee when they first sign up."
            />
            <AiryCard
              Icon={Package}
              title="One-time products"
              desc="Sell one-time fee products—perfect for selling courses or lifetime access products."
            />
            <AiryCard
              Icon={HandHeart}
              title="Free trials or freemium"
              desc="Offer a free trial or freemium plan. Choose whether to collect card information at the beginning or end."
            />
            <AiryCard
              Icon={Repeat}
              title="Recurring billing"
              desc="Charge your members with recurring monthly, quarterly, or annual memberships."
            />
          </div>
        </div>
      </section>

      {/* PRO CTA BAND */}
      {/* <section className="py-16">
        <div className="mx-auto max-w-6xl px-4">
          <div className="relative overflow-hidden rounded-3xl border border-zinc-200 bg-white p-8 shadow-[0_22px_80px_rgba(13,26,54,0.10)] md:p-10">
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-fuchsia-500/10 via-indigo-500/10 to-transparent blur-2xl" />
            <div className="relative grid gap-6 md:grid-cols-12 md:items-center">
              <div className="md:col-span-8">
                <h3 className="text-2xl font-semibold tracking-tight text-zinc-900">
                  Start selling with Stripe in a day, not a sprint.
                </h3>
                <p className="mt-2 text-zinc-600">
                  Launch checkout flows, subscriptions, tax handling, and pricing experiments without rebuilding your stack.
                </p>
              </div>
              <div className="md:col-span-4 md:justify-self-end">
                <div className="flex flex-col gap-3 sm:flex-row md:flex-col md:items-stretch">
                  <a
                    href="/pricing"
                    className="inline-flex items-center justify-center rounded-full bg-zinc-900 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-zinc-800"
                  >
                    Get started
                  </a>
                  <a
                    href="/demo"
                    className="inline-flex items-center justify-center rounded-full border border-zinc-300 bg-white px-6 py-3 text-sm font-semibold text-zinc-900 shadow-sm transition hover:bg-zinc-50"
                  >
                    Book a demo
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      <div className="py-10">
        <GradientDivider />
      </div>


      <section id="faq" className="py-16">
        <div className="mx-auto max-w-6xl px-4">
          <div className="grid gap-10 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <p className="text-2xl font-semibold text-center lg:text-left">
                Frequently asked questions
              </p>
            </div>

            <div className="lg:col-span-8 space-y-3">
              <FAQItem q="Do I need a Stripe account to use Outseta?">
                Yes. Stripe securely handles credit card transactions and deposits funds
                into your bank account.
              </FAQItem>

              <FAQItem q="What payment methods does Outseta support?">
                All Stripe payment methods—cards, ACH, Apple Pay, Google Pay, SEPA Direct
                Debit, and more.
              </FAQItem>

              <FAQItem q="How does Outseta handle failed payments?">
                Automatic retries and customer notifications to update payment details.
              </FAQItem>

              <FAQItem q="Can I offer different payment plans and pricing models?">
                Monthly/annual subscriptions, per-user pricing, add-ons, one-time products,
                setup fees, and trials.
              </FAQItem>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
