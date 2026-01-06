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
    ShieldCheck
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



function CTAButtons() {
  return (
    <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
      <a
        href="/pricing"
        className="inline-flex items-center justify-center rounded-full bg-zinc-900 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-zinc-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-900/30"
      >
         Stay accountable with StartupToBe
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
                Accountability
              </div>

              <p className="mt-3 text-4xl font-semibold leading-tight tracking-tight md:text-5xl">
                Ready to be a startup, making 
                <br />
                 startup official.
              </p>

              <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-zinc-600">
                        Founders don’t fail because they’re lazy. 
                They fail because they lose visibility on their own business. 
                StartupToBe keeps your startup accountable — without pressure. 
              </p>

              <CTAButtons />

              <p className="mt-4 text-sm text-zinc-500">
               Always know where your startup stands. 
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
              title: "Setup your startup dashboard",
              desc: "We configure tracking based on your business stage.",
            },
            {
              step: "2",
              title: "Monitor continuously",
              desc: "Your startup is tracked month by month.",
            },
            {
              step: "3",
              title: "Remind & report",
              desc: "You get clarity without chasing.",
            },
            {
              step: "4",
              title: "Stay in control",
              desc: "Decisions become easier.",
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
<section className="py-20">
  <div className="mx-auto max-w-6xl px-4">
    <div className="grid gap-12 lg:grid-cols-12">

      {/* LEFT */}
      <div className="lg:col-span-5">
        <div className="mb-4 flex items-center gap-3 text-zinc-600">
          <GradientIcon Icon={ShieldCheck} />
          <span className="text-sm font-semibold tracking-wide">
            What you get
          </span>
        </div>

        <h3 className="text-3xl font-semibold tracking-tight text-zinc-900">
          Built-in accountability for founders
        </h3>

        <p className="mt-4 text-zinc-600">
          We don’t just track compliance. We make sure someone is accountable
          for every obligation — so nothing slips through silently.
        </p>
      </div>

      {/* RIGHT */}
      <div className="lg:col-span-7 space-y-8">

        <div className="border-l border-zinc-200 pl-6">
          <h4 className="font-semibold text-zinc-900">
            Compliance Tracking
          </h4>
          <p className="mt-1 text-sm text-zinc-600">
            Filing timelines, live status, and upcoming obligations —
            always visible, always current.
          </p>
        </div>

        <div className="border-l border-zinc-200 pl-6">
          <h4 className="font-semibold text-zinc-900">
            Founder Reminders
          </h4>
          <p className="mt-1 text-sm text-zinc-600">
            Timely alerts and priority nudges that keep you ahead,
            without noise or panic.
          </p>
        </div>

        <div className="border-l border-zinc-200 pl-6">
          <h4 className="font-semibold text-zinc-900">
            Monthly Startup Summaries
          </h4>
          <p className="mt-1 text-sm text-zinc-600">
            A clear monthly snapshot of compliance status,
            actions taken, and what’s next.
          </p>
        </div>

        <div className="border-l border-zinc-200 pl-6">
          <h4 className="font-semibold text-zinc-900">
            Startup Health Dashboard
          </h4>
          <p className="mt-1 text-sm text-zinc-600">
            See where you stand across compliance, visibility,
            and readiness — no guessing.
          </p>
        </div>

        <div className="border-l border-zinc-200 pl-6">
          <h4 className="font-semibold text-zinc-900">
            Founder Accountability Support
          </h4>
          <p className="mt-1 text-sm text-zinc-600">
            Real follow-ups, real ownership, real responsibility —
            you’re not managing this alone.
          </p>
        </div>

      </div>
    </div>
  </div>
</section>


      <div className="py-10">
        <GradientDivider />
      </div>

      <section className="pb-0 pt-16">
        {/* <div className="mx-auto max-w-6xl px-4 pb-16">
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
        </div> */}

<div className="mx-auto max-w-6xl px-4 py-20">
  <div className="grid gap-14 lg:grid-cols-12 items-start">

    {/* LEFT */}
    <div className="lg:col-span-5">
      <div className="flex items-center gap-3 text-zinc-500 mb-6">
        <GradientIcon Icon={UsersRound} />
        <span className="text-sm font-semibold tracking-wide uppercase">
          Why founders choose StartupToBe
        </span>
      </div>

      <p className="mt-10 text-lg font-semibold leading-relaxed text-zinc-900 dark:text-zinc-100">
        We don’t just file documents.
        <br />
        We own the responsibility.
      </p>
    </div>

    {/* RIGHT */}
    <div className="lg:col-span-7 grid gap-6 sm:grid-cols-2">

      {/* Card 1 */}
      <div className="group rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 p-6 transition-all duration-200 hover:border-zinc-300 dark:hover:border-zinc-700 hover:shadow-sm">
        <h3 className="font-semibold text-zinc-900 dark:text-zinc-100">
          No hidden costs
        </h3>
      </div>

      {/* Card 2 */}
      <div className="group rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 p-6 transition-all duration-200 hover:border-zinc-300 dark:hover:border-zinc-700 hover:shadow-sm">
        <h3 className="font-semibold text-zinc-900 dark:text-zinc-100">
          No last-minute panic
        </h3>
      </div>

      {/* Card 3 */}
      <div className="group sm:col-span-2 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 p-6 transition-all duration-200 hover:border-zinc-300 dark:hover:border-zinc-700 hover:shadow-sm">
        <h3 className="font-semibold text-zinc-900 dark:text-zinc-100">
          No legal confusion
        </h3>
      </div>

    </div>
  </div>
</div>




      </section>
      <div className="py-10">
        <GradientDivider />
      </div>


    </main>
  );
}
