import { useEffect, useMemo, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ChevronDown,
  Menu,
  X,
  BookOpen,
  PlayCircle,
  MessageCircle,
  CalendarDays,
  HandCoins,
  Paintbrush,
  CreditCard,
  Users,
  Mail,
  LifeBuoy,
  KeyRound,
  FileText,
  Plug,
} from "lucide-react";
import Logo from "../assets/30 (1).svg";

const navData = [
  {
    label: "Visibility",
    items: [
      { icon: BookOpen, title: "Validate and Name your business", desc: "Brand Names, Premium domains, Name Availability", href: "/is-outseta-for-me" },
      { icon: PlayCircle, title: "Domains for sale", desc: "Available domains, Trade checks.", href: "/demo" },
      { icon: MessageCircle, title: "Build your digital presence", desc: "Website & landing Page, Brand messaging, Social media setup, Launch ready digital assets", href: "/the-case-for-outseta" },
    ],
  },
  {
    label: "Filing & Compliances",
    items: [
      { icon: CreditCard, title: "Register your company", desc: "Privtate Limited LLP, OPC, Proprietorship", href: "/payments" },
      { icon: Users, title: "Protect your brand", desc: "Trade mark search & filing, Logo & Brand protection, Copyright & IP Advisory", href: "/crm" },
      { icon: Mail, title: "Set up GST & Compliances", desc: "GST Registrtion , Accounting & Book keeping setup, Ongoing Compliances & Filling", href: "/email" },
    ],
  },
  {
    label: "Accountability",
    items: [
      { icon: FileText, title: "Run & Scale operations", desc: "CRM & Operational software, Accounting & Finance tools, Customer Support Outsourcing.", href: "https://go.outseta.com/support/kb/categories", external: true },
    ],
  },
];

const dropdownPanel = {
  closed: { opacity: 0, y: -10, scale: 0.98, pointerEvents: "none", transition: { duration: 0.15 } },
  open: { opacity: 1, y: 0, scale: 1, pointerEvents: "auto", transition: { duration: 0.18 } },
};

const mobileMenu = {
  closed: { opacity: 0, y: -8, transition: { duration: 0.15 } },
  open: { opacity: 1, y: 0, transition: { duration: 0.18 } },
};

function useOnClickOutside(ref, handler) {
  useEffect(() => {
    const listener = (e) => {
      if (!ref.current || ref.current.contains(e.target)) return;
      handler();
    };
    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener);
    return () => {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
    };
  }, [ref, handler]);
}

function NavLink({ href, children, external, className = "" }) {
  const props = external ? { target: "_blank", rel: "noreferrer" } : {};
  return (
    <a
      href={href}
      {...props}
      className={
        "rounded-xl px-4 py-2 text-sm font-medium text-[#4a2a4a]/70 hover:bg-[#240029]/[0.05] hover:text-[#240029] transition " +
        className
      }
    >
      {children}
    </a>
  );
}

function Dropdown({ label, items, openKey, setOpenKey }) {
  const isOpen = openKey === label;

  return (
    <div className="relative" onMouseEnter={() => setOpenKey(label)} onMouseLeave={() => setOpenKey(null)}>
      <button
        type="button"
        onClick={() => setOpenKey(isOpen ? null : label)}
        className="inline-flex items-center gap-1 rounded-xl px-3 py-2 text-sm font-medium text-[#4a2a4a]/70 hover:bg-[#240029]/[0.05] hover:text-[#240029] transition"
        aria-haspopup="menu"
        aria-expanded={isOpen}
      >
        <span>{label}</span>
        <ChevronDown className={`h-4 w-4 transition ${isOpen ? "rotate-180" : ""}`} />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="panel"
            initial="closed"
            animate="open"
            exit="closed"
            variants={dropdownPanel}
            className="
              absolute left-0 top-[calc(100%+10px)] z-50 w-[380px]
              rounded-2xl border border-white/25
              bg-white backdrop-blur-xl
              p-2 shadow-[0_12px_40px_rgba(36,0,41,0.18)]
              ring-1 ring-black/5
            "
            role="menu"
          >
            <div className="flex flex-col gap-1">
              {items.map((it) => {
                const Icon = it.icon;
                return (
                  <a
                    key={it.href}
                    href={it.href}
                    target={it.external ? "_blank" : undefined}
                    rel={it.external ? "noreferrer" : undefined}
                    className="flex gap-3 rounded-xl p-3 hover:bg-[#240029]/[0.05] transition"
                    role="menuitem"
                  >
                    <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#240029]/[0.06] text-[#240029]">
                      {Icon ? <Icon className="h-4 w-4" /> : null}
                    </div>

                    <div className="min-w-0">
                      <div className="text-sm font-semibold text-[#240029]">{it.title}</div>
                      <div className="mt-0.5 text-xs text-[#240029]/60">{it.desc}</div>
                    </div>
                  </a>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function Navbar() {
  const rootRef = useRef(null);
  const [openKey, setOpenKey] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  useOnClickOutside(rootRef, () => setOpenKey(null));

  useEffect(() => {
    if (mobileOpen) setOpenKey(null);
  }, [mobileOpen]);

  const dropdowns = useMemo(() => navData, []);

  return (
    <header ref={rootRef} className="sticky top-3 z-50">
      <div className="mx-auto max-w-6xl px-4">
        <div
          className="
            flex items-center px-3 py-2
            rounded-full
            border border-white/20
            bg-white/20 backdrop-blur-2xl
            shadow-[0_10px_30px_rgba(0,0,0,0.12)]
            ring-1 ring-black/5
          "
        >
         
          <div className="flex items-center">
            <a
              href="/"
              aria-label="home"
              className="
                flex items-center
                h-10 md:h-11
                px-2
                bg-transparent
              "
            >
              <img
                src={Logo}
                alt="StartUptobe"
                className="
                  h-full w-auto
                  object-contain
                  bg-transparent
                  block
                  pl-3
                  scale-500
                "
                loading="lazy"
              />
            </a>
          </div>

          <nav className="hidden flex-1 items-center justify-center gap-1 md:flex" aria-label="Primary">
            {dropdowns.slice(0, 2).map((d) => (
              <Dropdown key={d.label} {...d} openKey={openKey} setOpenKey={setOpenKey} />
            ))}
           
            <Dropdown {...dropdowns[2]} openKey={openKey} setOpenKey={setOpenKey} />
       
            <NavLink href="/blog">Blog</NavLink>
          </nav>

          <div className="ml-auto hidden items-center gap-2 md:flex">
            <a
              href="/login"
              className="
                inline-flex h-9 items-center justify-center rounded-full
                border border-white/30 bg-white/25 backdrop-blur-xl
                px-4 text-sm font-semibold text-[#240029]
                hover:bg-gray-300/10 transition
                ring-1 ring-black/5
              "
            >
              Log in
            </a>
            <a
              href="/get-started"
              className="
                inline-flex h-9 items-center justify-center rounded-full
                bg-[#240029] px-4 text-sm font-semibold text-white
                hover:opacity-90 transition
              "
            >
              Sign up
            </a>
          </div>

          <button
            type="button"
            className="
              ml-auto inline-flex h-10 w-10 items-center justify-center
              rounded-full border border-white/30 bg-white/25 backdrop-blur-xl
              md:hidden
              ring-1 ring-black/5
            "
            aria-label="menu"
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((v) => !v)}
          >
            {mobileOpen ? <X className="h-5 w-5 text-[#240029]" /> : <Menu className="h-5 w-5 text-[#240029]" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div initial="closed" animate="open" exit="closed" variants={mobileMenu} className="md:hidden mt-3">
            <div className="mx-auto max-w-6xl px-4">
              <div
                className="
                  rounded-3xl border border-white/30
                  bg-white/15 backdrop-blur-2xl
                  shadow-[0_10px_30px_rgba(0,0,0,0.12)]
                  ring-1 ring-black/5
                  p-3
                "
              >
                <div className="flex flex-col gap-2">
                  {dropdowns.map((group) => (
                    <details key={group.label} className="group rounded-2xl border border-white/25 bg-white/15">
                      <summary className="cursor-pointer list-none px-4 py-3 text-sm font-semibold text-[#240029] flex items-center justify-between">
                        {group.label}
                        <ChevronDown className="h-4 w-4 transition group-open:rotate-180" />
                      </summary>

                      <div className="px-2 pb-2">
                        {group.items.map((it) => {
                          const Icon = it.icon;
                          return (
                            <a
                              key={it.href}
                              href={it.href}
                              target={it.external ? "_blank" : undefined}
                              rel={it.external ? "noreferrer" : undefined}
                              className="flex gap-3 rounded-xl px-3 py-2 hover:bg-[#240029]/[0.05] transition"
                            >
                              <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#240029]/[0.06] text-[#240029]">
                                {Icon ? <Icon className="h-4 w-4" /> : null}
                              </div>
                              <div>
                                <div className="text-sm font-medium text-[#240029]">{it.title}</div>
                                <div className="text-xs text-[#240029]/60">{it.desc}</div>
                              </div>
                            </a>
                          );
                        })}
                      </div>
                    </details>
                  ))}

            
                  <NavLink href="/blog" className="border border-white/25 bg-white/15">
                    Blog
                  </NavLink>

                  <div className="mt-2 flex gap-2">
                    <a
                      href="/login"
                      className="flex-1 inline-flex h-10 items-center justify-center rounded-full border border-white/30 bg-white/25 backdrop-blur-xl px-4 text-sm font-semibold text-[#240029] ring-1 ring-black/5 "
                    >
                      Log in
                    </a>
                    <a
                      href="/get-started"
                      className="flex-1 inline-flex h-10 items-center justify-center rounded-full bg-[#240029] px-4 text-sm font-semibold text-white"
                    >
                      Sign up
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
