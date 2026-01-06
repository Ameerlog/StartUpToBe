import Navbar from "../components/Navbar";

function Badge({ children }) {
  return (
    <span
      className="
        whitespace-nowrap rounded-full
        border border-white/25 bg-white/15
        px-3 py-1.5 sm:px-4 sm:py-2
        text-xs sm:text-sm
        text-[#240029]/80
        backdrop-blur-xl
      "
    >
      {children}
    </span>
  );
}

function MarqueeRow() {
  return (
    <div className="mt-8 sm:mt-10">
      <div className="mx-auto max-w-6xl px-2 sm:px-4">
        <div className="marquee">
          <span className="marquee__line marquee__line--left" />
          <span className="marquee__line marquee__line--right" />

          <div className="marquee__viewport">
            <div className="marquee__track">
              <div className="marquee__group">
                <Badge>Domains</Badge>
                <Badge>Branding</Badge>
                <Badge>Digital Presence</Badge>
                <Badge>Gst&Compliances</Badge>
                <Badge>Operational Support</Badge>
                <Badge>Communities</Badge>
                <Badge>Associations</Badge>
              </div>

              <div className="marquee__group" aria-hidden="true">
                <Badge>Domains</Badge>
                <Badge>Branding</Badge>
                <Badge>Digital Presence</Badge>
                <Badge>Gst&Compliances</Badge>
                <Badge>Operational Support</Badge>
                <Badge>Communities</Badge>
                <Badge>Associations</Badge>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen bg-[#faf7ff] px-1.5 sm:px-2 lg:px-3 py-1.5 sm:py-2">
      <div
        className="
          mx-auto max-w-9xl
          min-h-[calc(100vh-1rem)]
          rounded-[24px] sm:rounded-[36px]
          border border-[#240029]/10
          shadow-[0_30px_80px_rgba(36,0,41,0.12)]
          bg-[linear-gradient(135deg,_#FCFFC1_0%,_#FFE893_35%,_#FBB4A5_70%,_#FB9EC6_100%)]
        "
      >
        <div className="relative overflow-visible">
          <div className="mt-4 sm:mt-5" />
       

          <section className="relative overflow-visible pt-10 sm:pt-14">
            <div className="mx-auto max-w-6xl px-3 sm:px-4">
              <div className="flex justify-center">
                <div
                  className="
                    rounded-full
                    border border-white/40
                    bg-white/20
                    px-3 py-1.5 sm:px-4 sm:py-2
                    text-xs sm:text-sm
                    text-[#240029]/70
                    backdrop-blur-xl
                  "
                >
                  StartToBe
                </div>
              </div>

              <h1
                className="
                  mt-6 text-center font-bold tracking-tight text-[#240029]
                  text-4xl
                  sm:text-5xl
                  md:text-6xl
                  lg:text-7xl
                  xl:text-8xl
                "
              >
                One marketplace for Startups-to-be.
              </h1>

              <p
                className="
                  mx-auto mt-4 sm:mt-5
                  max-w-3xl
                  text-center
                  text-base sm:text-lg
                  text-[#240029]/70
                  px-2 sm:px-0
                "
              >
                Evertything you need to grow from{" "}
                <a
                  className="font-bold underline decoration-[#240029]/30 underline-offset-4 hover:decoration-[#240029]/60"
                  href="visibility"
                >
                  Visibility
                </a>{" "}
                and{" "}
                <a
                  className="font-bold underline decoration-[#240029]/30 underline-offset-4 hover:decoration-[#240029]/60"
                  href="compliance"
                >
                  Failing & Compliance
                </a>{" "}
                to{" "}
                <a
                  className="font-bold underline decoration-[#240029]/30 underline-offset-4 hover:decoration-[#240029]/60"
                  href="accountability"
                >
                  Accountability
                </a>{" "}
                and{" "}
                <a
                  className="font-bold underline decoration-[#240029]/30 underline-offset-4 hover:decoration-[#240029]/60"
                  href="#"
                >
                  SignUp for free
                </a>.
              </p>

              <div className="mt-8 sm:mt-10 flex flex-col items-center justify-center gap-3 sm:gap-4 sm:flex-row">
                <a
                  href="/get-started"
                  className="
                    inline-flex h-12 sm:h-14
                    min-w-[200px] sm:min-w-[220px]
                    items-center justify-center
                    rounded-xl
                    bg-pink-400
                    px-8 sm:px-10
                    text-sm sm:text-base
                    font-semibold text-white
                    shadow-lg shadow-pink-500/30
                    transition
                    hover:scale-[1.02]
                    hover:shadow-pink-500/40
                  "
                >
                  Sign up for free
                </a>

                <a
                  href="/learn-more"
                  className="
                    inline-flex h-12 sm:h-14
                    min-w-[200px] sm:min-w-[220px]
                    items-center justify-center
                    rounded-xl
                    border border-pink-400/40
                    bg-white/40
                    px-8 sm:px-10
                    text-sm sm:text-base
                    font-semibold text-pink-700
                    backdrop-blur-xl
                    transition
                    hover:bg-white/60
                    hover:scale-[1.02]
                  "
                >
                  Join Community.
                </a>
              </div>
            </div>

            <MarqueeRow />

            <div
              aria-hidden="true"
              className="
                pointer-events-none
                absolute inset-x-4 -bottom-12
                mx-auto h-40 sm:h-56
                max-w-6xl
                rounded-[36px]
                bg-gradient-to-r
                from-violet-500/25 via-fuchsia-500/20 to-sky-500/25
                blur-2xl
              "
            />

            <div className="h-16 sm:h-24" />
          </section>
        </div>
      </div>
    </div>
  );
}
