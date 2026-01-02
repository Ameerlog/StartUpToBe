import { motion } from "framer-motion";
import img1 from "../assets/branding.svg";
import img2 from "../assets/trademarkfiling.svg";
import img3 from "../assets/contentcreation.svg";
const items = [
  {
    title: "Brand Names & Premium Domains",
    desc: "YYour name is your first competitive advantage,Curated startup‑ready brand names Premium & hand‑picked domains (.com, .in & more) Naming aligned to brand story, scalability & SEO Secure transfer & ownership support Inspired by how global brands start—simple, strong, and memorable. ",
    img: img1,
    alt: "Brand & Design Thinking",
    reverseOnDesktop: false,
  },
  {
    title: "Trademark & IP Filing ",
    desc: "Protect what you build. Trademark search & filing Logo & brand name protection ",
    img: img2,
    alt: "AI & Tech Stack",
    reverseOnDesktop: true,
  },
  {
    title: "Content Creation & Social Media Management ",
    desc: "Your brand needs presence from Day One. Website & launch content Social media strategy & creatives Monthly content calendars",
    img: img3,
    alt: "Operations & Infrastructure",
    reverseOnDesktop: false,
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0 },
};

export default function AdvantageSection() {
  return (
    <section id="advantage" className="w-full">
      <div
        className="
          relative
          sm:py-[50px] lg:pt-[120px] lg:pb-[160px] px-4
          bg-[url(/images/launchpad_mobile.svg)]
          md:bg-[url(/images/launchpad.svg)]
          lg:bg-[url(/images/Background.png)]
          bg-no-repeat bg-center bg-cover
        "
      >
 
        <motion.div
          className="relative flex flex-col justify-center sm:items-center p-2 gap-[24px] md:gap-[20px] lg:gap-[40px]"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <p className="font-gilvenir text-[36px] lg:text-[68px] font-bold leading-[114%] tracking-[-0.04em] text-start sm:text-center text-[#BD8E5D] flex flex-col max-w-[342px] md:max-w-[560px] lg:max-w-[800px] w-full">
            <span>Our Core Solutions</span>
            {/* <span>Sit amet consectetur.</span> */}
          </p>

          {/* <p className="font-nunito-sans font-medium text-[16px] md:text-[18px] lg:text-[22px] leading-[135%] tracking-[-0.02em] text-[#333333CC] text-start sm:text-center max-w-[342px] md:max-w-[450px] lg:max-w-[560px] w-full">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.
          </p> */}
        </motion.div>

        <div className="relative">
          {items.map((item, idx) => (
            <div key={item.title}>

              <motion.div
                className="flex md:hidden flex-col max-w-7xl mx-auto py-[40px] gap-6"
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.25 }}
                transition={{
                  duration: 0.55,
                  ease: "easeOut",
                  delay: idx * 0.05,
                }}
              >
                <img
                  src={item.img}
                  alt={item.alt}
                  className="rounded-[12px] w-full max-h-[240px] object-cover"
                  loading="lazy"
                />

                <div className="flex flex-col gap-4">
                  <p className="font-gilvenir font-medium text-[#333333CC] text-[28px] leading-[114%] tracking-[-0.04em]">
                    {item.title}
                  </p>
                  <p className="font-nunito-sans text-[#333333CC] text-[16px] font-medium leading-[135%] tracking-[-0.02em]">
                    {item.desc}
                  </p>
                </div>
              </motion.div>

              <motion.div
                className={[
                  "hidden md:flex relative justify-between max-w-7xl mx-auto p-8 gap-8 items-center",
                  item.reverseOnDesktop ? "flex-row-reverse" : "flex-row",
                ].join(" ")}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                <div className="max-w-[320px] lg:max-w-[524px] px-[32px] flex flex-col gap-[20px]">
                  <p className="font-gilvenir font-medium text-[#333333CC] text-[28px] lg:text-[48px] leading-[114%] tracking-[-0.04em]">
                    {item.title}
                  </p>
                  <p className="font-nunito-sans text-[#33333399] max-w-[460px] text-[18px] lg:text-[22px] font-medium leading-[135%] tracking-[-0.02em]">
                    {item.desc}
                  </p>
                </div>

                <div className="max-w-[320px] lg:max-w-[524px] w-full">
                  <img
                    src={item.img}
                    alt={item.alt}
                    className="rounded-[16px] w-full h-auto object-cover"
                    loading="lazy"
                  />
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
