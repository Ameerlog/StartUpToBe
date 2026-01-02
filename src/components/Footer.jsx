import React from "react";
import { Twitter, Linkedin, Youtube } from "lucide-react";
import Logo from "../assets/30 (1).svg";

const BlueskyIcon = ({ className }) => (
  <div
    className={[
      "grid h-5 w-5 place-items-center rounded-full border border-current text-[9px] font-semibold leading-none",
      className,
    ].join(" ")}
  >
    StartTobe
  </div>
);

const social = [
  { href: "https://x.com/starttobe", label: "X", Icon: Twitter },
  { href: "https://bsky.app/profile/starttobe.com", label: "Bluesky", Icon: BlueskyIcon },
  { href: "https://www.linkedin.com/company/starttobe", label: "LinkedIn", Icon: Linkedin },
  { href: "https://www.youtube.com/@starttobe", label: "YouTube", Icon: Youtube },
];

const columns = [
  {
    title: "Product",
    links: [
      { href: "/payments", label: "Payments" },
      { href: "/crm", label: "CRM" },
      { href: "/email", label: "Email" },
      { href: "/help-desk", label: "Help desk" },
      { href: "/authentication", label: "Auth and gating" },
      { href: "/pricing", label: "Pricing" },
    ],
  },
  {
    title: "Company",
    links: [
      { href: "/company", label: "About us" },
      { href: "/blog", label: "Blog" },
      { href: "/partners", label: "Partner program" },
      { href: "/privacy-policy", label: "Privacy policy" },
      { href: "/terms-of-service", label: "Terms of service" },
    ],
  },
  {
    title: "Resources",
    links: [
      { href: "https://zapier.com", label: "Zapier integration", external: true },
      { href: "/webflow", label: "Webflow + StartToBe" },
      { href: "/guides", label: "Integrations" },
      { href: "https://status.starttobe.com", label: "Status", external: true },
    ],
  },
  {
    title: "Developers",
    links: [
      { href: "/docs", label: "Documentation" },
      { href: "/api", label: "API docs" },
      { href: "/workflows", label: "Time-saving workflows" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-white text-zinc-900 ">
      <section className="border-t border-zinc-200">
        <div className="mx-auto max-w-6xl px-4 py-14">
          <div className="grid gap-10 lg:grid-cols-5">

            <div className="lg:col-span-1 flex flex-col justify-between gap-6">
              <div>
                <div className="mb-6">
                  <img
                    src={Logo}
                    alt="StartToBe"
                    className="h-8 w-auto scale-900 ml-11 "
                  />
                </div>
                <div className="text-sm text-zinc-500">
                  © 2025 StartToBe
                </div>
              </div>

              <div className="flex items-center gap-2">
                {social.map(({ href, label, Icon }) => (
                  <a
                    key={href}
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={label}
                    className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-zinc-200 bg-white text-zinc-700 transition hover:bg-zinc-50 hover:text-zinc-950"
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                ))}
              </div>
            </div>

            <div className="lg:col-span-4 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
              {columns.map((col) => (
                <div key={col.title} className="flex flex-col gap-2">
                  <div className="text-sm font-semibold text-zinc-900">
                    {col.title}
                  </div>

                  {col.links.map((l) => (
                    <a
                      key={l.href + l.label}
                      href={l.href}
                      target={l.external ? "_blank" : undefined}
                      rel={l.external ? "noreferrer" : undefined}
                      className="text-sm text-zinc-600 hover:text-zinc-950"
                    >
                      {l.label}
                    </a>
                  ))}
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>
    </footer>
  );
}
