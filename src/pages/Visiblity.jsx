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
  Check,
} from "lucide-react";

// import Dashboard from "../assets/domain/dashboard1.svg";
// import Dashboard2 from "../assets/domain/dashboard2.svg";

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
        Find the right name with StartupToBe
      </a>
      <a
        href="/demo"
        className="inline-flex items-center justify-center rounded-full border border-zinc-300 bg-white px-6 py-3 text-sm font-semibold text-zinc-900 shadow-sm transition hover:bg-zinc-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-900/20"
      >
        Talk to us
      </a>
    </div>
  );
}

function InlineCTA({ href = "/pricing", label = "Get started" }) {
  return (
    <a
      href={href}
      className="mt-6 inline-flex items-center justify-center rounded-full bg-zinc-900 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-zinc-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-900/30"
    >
      {label}
    </a>
  );
}

export default function Visibility() {
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
                VISIBILITY
              </div>

              <p className="mt-3 text-5xl font-bold leading-tight tracking-tight md:text-6xl">
              STARTUP NAMING & BRAND CLARITY
              </p>

              <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-zinc-600">
                You need naming clarity before Buying a domain, Designing a logo, Filing a trademark, and Going public with your startup. A weak name creates confusion before your product even speaks.
                </p>

              <CTAButtons />

              <p className="mt-4 text-sm text-zinc-500">
                No hype • No pressure • Founder-first clarity
              </p>

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
                  <h2 className="text-2xl font-semibold tracking-wide">
                    DOMAIN MARKETPLACE
                  </h2>
                </div>
              </div>

         

              <div className="mt-4 space-y-4 text-zinc-600">

                <p>We help founders understand:
                  <div className="mt-4 space-y-3 text-zinc-600">
                <ul className="list-disc space-y-2 pl-5">
                  <li>What to show </li>
                  <li>Where to show it </li>
                  <li>When visibility actually matters </li>
                </ul>
                <p>And we do it step-by-step.</p>
              </div>

                </p>
                <InlineCTA
                href="/naming"
                label="Explore startup-ready domains"
              />
              </div>
              
            </div>

            <div className="lg:col-span-7">
              <div className="lg:w-[50vw] pl-18">
                {/* <ImageFrame src={Dashboard} alt="Startup visibility overview" /> */}
              </div>
            </div>
          </div>
        </div>

        <div className="mx-auto max-w-6xl px-4">
          <div className="grid gap-4 lg:grid-cols-2">
            <AiryCard
              Icon={Landmark}
              title="What to show"
              desc="Choose the signals that make people understand you fast—without overexplaining."
            />
            <AiryCard
              Icon={Plug}
              title="Where to show it"
              desc="Show up in the places your audience already trusts, instead of being everywhere."
            />
            <AiryCard
              Icon={CreditCard}
              title="When visibility actually matters"
              desc="Time visibility around the moments that create leverage: launches, outreach, partnerships, and sales."
            />
            <AiryCard
              Icon={Plus}
              title="Step-by-step"
              desc="No overwhelm. Build visibility in the right order, one layer at a time."
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
              <div className="lg:float-right lg:w-[50vw] right-5">
                {/* <ImageFrame src={Dashboard2} alt="Naming and brand clarity" /> */}
              </div>
            </div>

            <div className="lg:col-span-5 lg:order-2 order-1">
              <div className="mb-4">
                <div className="flex items-center gap-3 text-zinc-600">
                  <GradientIcon Icon={UsersRound} />
                  <h2 className="text-2xl font-semibold tracking-wide">
                    BRAND IDENTITY                  </h2>
                </div>
              </div>

              <p className="text-sm font-semibold tracking-tight md:text-3xl">
                Name it right before you build around it.
              </p>

              <div className="mt-4 space-y-4 text-zinc-600">
                <p>
                  <span className="font-semibold text-zinc-900">
                   What we help with 
                  </span>
                   <div className="mt-4 space-y-3 text-zinc-600">
                <p className="font-semibold text-zinc-900">You need naming clarity before: </p>
                <ul className="list-disc space-y-2 pl-5">
                  <li>Clean logo design </li>
                  <li>Brand colors & typography   </li>
                  <li>Basic brand kit  </li>
                  <li>Consistency across platforms   </li>
                </ul>
                
              </div>
                </p>
              </div>

              <InlineCTA
                href="/naming"
                label="Build a clean, startup-ready brand"
              />
            </div>
          </div>
        </div>

        {/* <div className="mx-auto max-w-6xl px-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <AiryCard
              Icon={Building2}
              title="What founders usually do wrong"
              desc="Choosing names without checking availability, picking trendy but meaningless names, ignoring future expansion, and finalizing names before understanding the business direction."
            />
            <AiryCard
              Icon={Palette}
              title="What we help with"
              desc="Meaningful startup name ideas, availability checks, brand positioning clarity, and long-term brand suitability."
            />
            <AiryCard
              Icon={Repeat}
              title="Risks of getting it wrong"
              desc="Forced rebranding later, trademark conflicts, weak recall, and a poor first impression."
            />
          </div>
        </div> */}
      </section>

      <div className="py-10">
        <GradientDivider />
      </div>

      <section className="pb-0">
        <div className="mx-auto max-w-6xl px-4 pb-16">
          <div className="grid items-start gap-10 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <div className="mb-4">
                <div className="flex items-center gap-3 text-zinc-600">
                  <GradientIcon Icon={Smile} />
                  <h2 className="text-2xl font-semibold tracking-wide">
                    CONTENT & ONLINE PRESENCE
                  </h2>
                </div>
              </div>

              <p className="text-sm font-semibold tracking-tight md:text-3xl">
                Your domain is often your first impression.
              </p>

              <div className="mt-4 space-y-4 text-zinc-600">
                <p>
                  <span className="font-semibold text-zinc-900">
                    What we help with:
                  </span>
                   <div className="mt-4 space-y-3 text-zinc-600">
                <p className="font-semibold text-zinc-900">Your domain is required when:  </p>
                <ul className="list-disc space-y-2 pl-5">
                  <li>Website content </li>
                  <li>Founder messaging  </li>
                  <li>Startup storytelling </li>
                  <li>Clear value communication   </li>
                </ul>
              </div>
                </p>
              </div>

              <InlineCTA href="/domains" label="Create content that explains your startup clearly" />
            </div>

            <div className="lg:col-span-7">
              <div className="lg:w-[50vw]">
                <ImageFrame
                  src="https://cdn.prod.website-files.com/663cf90ca192fe7e5bcb8bd7/670153096ac70f4e8a39ed42_Screen%20Shot%202024-10-05%20at%207.53.37%20AM.avif"
                  alt="Domain marketplace"
                />
              </div>
            </div>
          </div>
        </div>

        {/* <div className="mx-auto max-w-6xl px-4 pb-16">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <AiryCard
              Icon={Layers}
              title="What founders usually do wrong"
              desc="Compromising with long or confusing domains, ignoring extensions & brand value, buying cheap names that don’t scale, and finalizing a domain without brand strategy."
            />
            <AiryCard
              Icon={Tag}
              title="What we offer"
              desc="Curated premium domains, startup-friendly brand names, industry-relevant selections, plus clear pricing & guidance."
            />
            <AiryCard
              Icon={Package}
              title="Risks of getting it wrong"
              desc="Brand confusion, poor credibility, lost traffic, and difficult scaling."
            />
          </div>
        </div> */}
      </section>

      <div className="py-10">
        <GradientDivider />
      </div>
    <section className="py-16">
  <div className="mx-auto max-w-6xl px-4 pb-12">
    <div className="grid items-start gap-10 lg:grid-cols-12">

      {/* LEFT CONTENT - IMAGE */}
      <div className="lg:col-span-7">
        <div className="lg:w-[50vw]">
          {/* Replace with your image or illustration */}
          {/* <ImageFrame src={Dashboard} alt="Brand identity basics preview" /> */}
        </div>
      </div>

      {/* RIGHT CONTENT - TEXT */}
      <div className="lg:col-span-5">
        <div className="mb-4">
          <div className="flex items-center gap-3 text-zinc-600">
            <GradientIcon Icon={Palette} />
            <h2 className="text-2xl font-semibold tracking-wide">
              SOCIAL MEDIA SETUP & MANAGEMENT
            </h2>
          </div>
        </div>

        <p className="text-sm font-semibold tracking-tight md:text-3xl">
          Branding is about clarity, not decoration.
        </p>

        <div className="mt-4 space-y-4 text-zinc-600">
          <p>
            <span className="font-semibold text-zinc-900">
              What we help with
            </span>
            <div className="mt-4 space-y-3 text-zinc-600">
              <p className="font-semibold text-zinc-900">
                You need a basic brand identity when:
              </p>
              <ul className="list-disc space-y-2 pl-5">
                <li>Platform selection</li>
                <li>Profile setup</li>
                <li>Content direction</li>
                <li>Consistent posting support</li>
              </ul>
            </div>
          </p>
        </div>

        <InlineCTA
          href="/brand"
          label="Build a calm, consistent online presence"
        />
      </div>

    </div>
  </div>
</section>


      <div className="py-10">
        <GradientDivider />
      </div>

      {/* <section className="py-16">
        <div className="mx-auto max-w-6xl px-4 pb-12">
          <div className="grid items-start gap-10 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <div className="mb-4">
                <div className="flex items-center gap-3 text-zinc-600">
                  <GradientIcon Icon={Plug} />
                  <h2 className="text-2xl font-semibold tracking-wide">
                    Content & online presence
                  </h2>
                </div>
              </div>

              <p className="text-sm font-semibold tracking-tight md:text-3xl">
                Content builds trust before conversations begin.
              </p>

              <div className="mt-4 space-y-4 text-zinc-600">
                <p>
                  <span className="font-semibold text-zinc-900">
                    When you actually need it:
                  </span>
                    <div className="mt-4 space-y-3 text-zinc-600">
                <p className="font-semibold text-zinc-900">Content matters when:  </p>
                <ul className="list-disc space-y-2 pl-5">
                  <li>You want to explain what you do</li>
                  <li>You want founders or clients to trust you</li>
                  <li>You want long-term awareness </li>
                  <li>You want organic visibility.</li>
                </ul>
                <p>Content builds trust before conversations begin. </p>
              </div>
                </p>
              </div>

              <InlineCTA
                href="/content"
                label="Create content that explains your startup clearly"
              />
            </div>

            <div className="lg:col-span-7">
              <div className="lg:w-[50vw]">
                <ImageFrame */}
                   {/* src={Dashboard2} */}
                  {/* alt="Content and messaging preview"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="mx-auto max-w-6xl px-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <AiryCard
              Icon={Layers}
              title="What founders usually do wrong"
              desc="Posting without strategy, chasing trends, ignoring consistency, and sounding unclear or generic."
            />
            <AiryCard
              Icon={Tag}
              title="What we help with"
              desc="Website content, founder messaging, startup storytelling, and clear value communication."
            />
            <AiryCard
              Icon={Repeat}
              title="Risks of getting it wrong"
              desc="Low engagement, poor understanding, missed opportunities, and wasted effort."
            />
          </div>
        </div>
      </section> */}

      <div className="py-10">
        <GradientDivider />
      </div>


      {/* {/* <section className="py-16">
        <div className="mx-auto max-w-6xl px-4 pb-12">
          <div className="grid items-start gap-10 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <div className="mb-4">
                <div className="flex items-center gap-3 text-zinc-600">
                  <GradientIcon Icon={UsersRound} />
                  <h2 className="text-2xl font-semibold tracking-wide">
                    Social media setup & management
                  </h2>
                </div>
              </div>

              <p className="text-sm font-semibold tracking-tight md:text-3xl">
                You don’t need to be everywhere. You need to be consistent where
                it matters.
              </p>

              <div className="mt-4 space-y-4 text-zinc-600">
                <p>
                  <span className="font-semibold text-zinc-900">
                    When you actually need it
                  </span>             
                   <div className="mt-4 space-y-3 text-zinc-600">
                <p className="font-semibold text-zinc-900">Social presence is important when: </p>
                <ul className="list-disc space-y-2 pl-5">
                  <li>You want visibility, not virality </li>
                  <li>You want credibility</li>
                  <li>You want long-term awareness </li>
                  <li>You don’t need to be everywhere.</li>
                  <li>You need to be consistent where it matters.</li>
                </ul>
              </div>

                </p>
              </div>

              <InlineCTA
                href="/social"
                label="Build a calm, consistent online presence"
              />
            </div>

            <div className="lg:col-span-7">
              <div className="lg:w-[50vw]"> */}
                {/* <ImageFrame src={Dashboard} alt="Social setup preview" /> */}
              {/* </div>
            </div>
          </div>
        </div>

        <div className="mx-auto max-w-6xl px-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <AiryCard
              Icon={Layers}
              title="What founders usually do wrong"
              desc="Being on too many platforms, posting randomly, copying others, and expecting instant results."
            />
            <AiryCard
              Icon={Tag}
              title="What we help with"
              desc="Platform selection, profile setup, content direction, and consistent posting support."
            />
            <AiryCard
              Icon={Repeat}
              title="Risks of getting it wrong"
              desc="Burnout, no traction, mixed messaging, and lost focus."
            />
          </div>
        </div> */}
      {/* </section> */} 

      <div className="py-10">
        <GradientDivider />
      </div>
      <section className="py-16">
        <div className="mx-auto max-w-6xl px-4">
          <div className="grid items-start gap-10 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <div className="mb-4">
                <div className="flex items-center gap-3 text-zinc-600">
                  <GradientIcon Icon={Repeat} />
                  <h2 className="text-2xl font-semibold tracking-wide">
                    How visibility connects to everything else
                  </h2>
                </div>
              </div>

              <p className="text-sm font-semibold tracking-tight md:text-3xl">
                Visibility works best when everything is aligned.
              </p>

              <div className="mt-4 space-y-3 text-zinc-600">
                <p>Visibility works best when:</p>
                <ul className="list-disc space-y-2 pl-5">
                  <li>Your name is clear.</li>
                  <li>Your domain is strong.</li>
                  <li>Your compliance is sorted.</li>
                  <li>Your startup looks trustworthy.</li>
                </ul>
                <p>
                  That’s why StartupToBe connects visibility with filing,
                  compliance, and accountability — all in one place.
                </p>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="rounded-3xl border  border-zinc-200 bg-white p-7 text-center shadow-[0_18px_60px_rgba(15,23,42,0.08)]">

                <p className="mt-3 text-2xl font-semibold tracking-tight text-zinc-900">
                  Visibility shouldn’t be confusing or expensive.
                </p>

                <p className="mx-auto mt-2 max-w-md text-sm leading-relaxed text-zinc-600">
                  Build your startup’s presence with clarity, not chaos.
                </p>

                <div className="mt-6 flex justify-center">
                  <a
                    href="/pricing"
                    className="inline-flex items-center justify-center rounded-full bg-zinc-900 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-zinc-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-900/30"
                  >
                    Build your startup’s visibility with StartupToBe
                  </a>
                </div>

                <p className="mx-auto mt-4 max-w-md text-xs text-zinc-500">
                  Founder-friendly language • No hype • Calm, clear guidance
                </p>
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
