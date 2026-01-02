import React, { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { DESIGNS } from "../data/design";

const themes = ["All", "Light", "Dark"];

export default function ShowCase() {
  const [theme, setTheme] = useState("All");
  const [cloneableOnly, setCloneableOnly] = useState(false);

  const filtered = useMemo(() => {
    return DESIGNS.filter((d) => {
      const themeOk = theme === "All" ? true : d.theme === theme;
      const cloneOk = cloneableOnly ? d.cloneable === true : true;
      return themeOk && cloneOk;
    });
  }, [theme, cloneableOnly]);

  return (
    <main className="min-h-screen bg-white text-zinc-950">

      <section className="relative overflow-hidden border-b border-zinc-200">
    
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-fuchsia-500/15 via-indigo-500/10 to-transparent blur-3xl" />
        <div className="relative mx-auto max-w-6xl px-4 py-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="mx-auto mb-6 grid h-12 w-12 place-items-center rounded-2xl border border-zinc-200 bg-white/70">
              <span className="text-lg">🖌️</span>
            </div>

            <h1 className="text-6xl font-semibold md:text-8xl">
             Lorem, ipsum.
            </h1>

            <p className="mx-auto mt-4 max-w-2xl text-zinc-600">
             Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, nobis.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-4 py-8">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div className="flex flex-wrap items-center gap-2">
              {themes.map((t) => {
                const active = t === theme;
                return (
                  <button
                    key={t}
                    onClick={() => setTheme(t)}
                    className={[
                      "rounded-full border px-4 py-2 text-sm transition",
                      active
                        ? "border-zinc-300 bg-zinc-100 text-zinc-950"
                        : "border-zinc-200 bg-transparent text-zinc-700 hover:bg-zinc-50",
                    ].join(" ")}
                  >
                    {t}
                  </button>
                );
              })}
            </div>

            <label className="flex cursor-pointer items-center gap-2 rounded-full border border-zinc-200 bg-transparent px-4 py-2 text-sm text-zinc-700 hover:bg-zinc-50">
              <input
                type="checkbox"
                className="h-4 w-4 accent-zinc-950"
                checked={cloneableOnly}
                onChange={(e) => setCloneableOnly(e.target.checked)}
              />
              Cloneable themes only
            </label>
          </div>
        </div>
      </section>


      <section className="bg-white pb-16">
        <div className="mx-auto max-w-6xl px-4">
          <AnimatePresence mode="popLayout">
            {filtered.length === 0 ? (
              <motion.div
                key="empty"
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                className="rounded-2xl border border-zinc-200 bg-zinc-50 p-10 text-center"
              >
                <div className="mx-auto mb-6 grid h-12 w-12 place-items-center rounded-2xl border border-zinc-200 bg-white">
                  <span className="text-lg">📋</span>
                </div>

                <h3 className="text-xl font-semibold">
                  Cloneable designs coming soon!
                </h3>
                <p className="mx-auto mt-3 max-w-2xl text-sm text-zinc-600">
                  We’re currently working on some fabulous designs using custom CSS
                  and animations. You’ll be able to simply link to a hosted script, or
                  grab the code and modify it to your liking.
                </p>
              </motion.div>
            ) : (
              <motion.div
                key="grid"
                layout
                className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
              >
                {filtered.map((item) => (
                  <motion.a
                    key={item.href}
                    href={item.href}
                    layout
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.25 }}
                    className="group relative overflow-hidden rounded-2xl border border-zinc-200 bg-white hover:border-zinc-300"
                  >
                    <div className="border-b border-zinc-200 bg-zinc-50 p-3">
                      <div className="aspect-[4/3] overflow-hidden rounded-xl">
                        <img
                          src={item.image}
                          alt={item.title}
                          loading="lazy"
                          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                        />
                      </div>

                      <div className="mt-3 flex gap-2">
                        <span className="rounded-full bg-zinc-900/5 px-2 py-1 text-[11px] tracking-wider text-zinc-700">
                          {item.badge.label}
                        </span>
                      </div>
                    </div>

                    <div className="p-4">
                      <div className="text-sm font-semibold">{item.title}</div>

                      <div className="mt-2 flex flex-wrap gap-2 text-xs text-zinc-600">
                        {item.tags.map((t) => (
                          <span
                            key={t}
                            className="rounded-full border border-zinc-200 px-2 py-1"
                          >
                            {t}
                          </span>
                        ))}
                      </div>

                      <div className="sr-only">
                        <div>Theme: {item.theme}</div>
                        <div>Cloneable: {String(item.cloneable)}</div>
                      </div>
                    </div>

                    <div className="pointer-events-none absolute right-3 top-3 grid h-9 w-9 place-items-center rounded-full bg-white/70 opacity-0 shadow-sm transition-opacity group-hover:opacity-100">
                      ↗
                    </div>
                  </motion.a>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>
    </main>
  );
}
