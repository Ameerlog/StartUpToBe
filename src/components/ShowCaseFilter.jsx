type Theme = "All" | "Light" | "Dark";

export default function DesignShowcaseFilters() {

  const themes: Theme[] = ["All", "Light", "Dark"];

  return (
    <section className="bg-zinc-950">
      <div className="mx-auto max-w-6xl px-4 py-8">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            {themes.map((t) => (
              <button
                key={t}
                className="rounded-full border border-white/15 px-4 py-2 text-sm text-white/80 hover:bg-white/5"
              >
                {t}
              </button>
            ))}
          </div>

          <label className="flex items-center gap-2 rounded-full border border-white/15 px-4 py-2 text-sm text-white/80 hover:bg-white/5">
            <input type="checkbox" className="accent-white" />
            Cloneable themes only
          </label>
        </div>
      </div>
    </section>
  );
}
