import { motion } from "framer-motion";

const TESTIMONIALS = [
  {
    name: "Neminath",
    title: "First-time Founder",
    
    body: (
      <>
        <p>
          Thinking about starting a business felt overwhelming — company
          registration, GST, domain, branding, everything.
        </p>
        <p>
          <strong>StartupToBe gave me one clear place to start.</strong>
        </p>
        <p>
          From name selection to registration and compliance, everything was
          handled step by step.
        </p>
        <p>
          Instead of Googling endlessly, I just followed the process.
        </p>
      </>
    ),
  },
  {
    name: "Faisal",
    title: "Founder & CEO",
 
    body: (
      <>
        <p>
          We were dealing with multiple vendors — CA for filing, someone else for
          domains, another agency for branding.
        </p>
        <p>
          <strong>StartupToBe replaced all of that with one platform.</strong>
        </p>
        <p>
          Now our focus is on building the product, not managing paperwork or
          chasing people for updates.
        </p>
      </>
    ),
  },
  {
    name: "Sangmesh",
    title: "Startup Consultant",
  
    body: (
      <>
        <p>
          I can’t believe how simple it is to onboard founders using StartupToBe.
        </p>
        <p>
          Registration, GST, trademark, and domain selection — all structured and
          transparent.
        </p>
        <p>
          Founders feel confident, and I don’t have to explain the basics
          repeatedly.
        </p>
      </>
    ),
  },
];

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 18,
    filter: "blur(6px)",
  },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.45,
      ease: "easeOut",
    },
  },
};

export default function Testimonials() {
  return (
    <section className="pt-0 pb-16 sm:pb-20 mt-10">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
        <div className="mb-8 flex justify-center">
          <h2 className="max-w-3xl text-center text-xl font-kaio tracking-tight sm:text-2xl lg:text-5xl  text-black">
          “Everything I needed to turn an idea into a registered, credible startup — in one place..."
          </h2>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3"
        >
          {TESTIMONIALS.map((t) => (
            <motion.article
              key={t.name}
              variants={cardVariants}
              className="h-full rounded-2xl border border-white/10 bg-white/5 p-5 shadow-[0_18px_50px_rgba(0,0,0,0.28)] backdrop-blur"
            >
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-3">
                  <div className="relative">
                  
                    <span
                      aria-hidden="true"
                      className="pointer-events-none absolute -inset-[3px] rounded-full border border-white/20"
                    />
                  </div>

                  <div className="min-w-0">
                    <div className="truncate text-sm font-extrabold">
                      {t.name}
                    </div>
                    <div className="truncate text-sm text-black">
                      {t.title}
                    </div>
                  </div>
                </div>

                <div className="space-y-2 text-sm leading-relaxed text-black/80">
                  {t.body}
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
