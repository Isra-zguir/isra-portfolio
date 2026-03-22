import { motion } from "framer-motion";
import { fadeUp, stagger } from "./animations";
import heroPortrait from "../assets/isra.png";

// Hero section with intro, CTA buttons, and profile image.
export default function Hero() {
  return (
    <section id="hero" className="relative overflow-hidden py-20 sm:py-28">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-12 px-6 lg:flex-row lg:gap-16">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-120px" }}
          className="flex w-full flex-1 flex-col gap-6"
        >
          <motion.div
            variants={fadeUp}
            className="inline-flex w-fit items-center gap-2 rounded-full border border-ink/10 bg-white/70 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-slate shadow-card"
          >
            <span className="h-2 w-2 rounded-full bg-gradient-to-r from-accent to-sun"></span>
            Available for collaboration
          </motion.div>
          <motion.h1
            variants={fadeUp}
            className="font-display text-4xl leading-tight sm:text-5xl lg:text-6xl"
          >
            Isra Zguir
            <span className="block text-gradient">Full-Stack & Embedded Systems Engineer</span>
          </motion.h1>
          <motion.p variants={fadeUp} className="text-lg text-slate">
            Computer Science Engineering student at ESPRIT with a background in Embedded
            Systems (ISTIC Borj Cedria). Passionate about intelligent solutions blending web
            development, mobile apps, embedded systems, IoT, and robotics.
          </motion.p>
          <motion.div variants={fadeUp} className="flex flex-wrap gap-4">
            <a
              href="#projects"
              className="rounded-full bg-ink px-6 py-3 text-sm font-semibold text-white shadow-card transition hover:-translate-y-0.5 hover:shadow-soft"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="rounded-full border border-ink/15 bg-white/80 px-6 py-3 text-sm font-semibold text-ink shadow-card transition hover:-translate-y-0.5 hover:shadow-soft"
            >
              Contact
            </a>
          </motion.div>
          <motion.div variants={fadeUp} className="flex flex-wrap gap-3 text-sm text-slate">
            {["Tunisia", "Web + Embedded", "IoT & Robotics"].map((item) => (
              <span
                key={item}
                className="rounded-full border border-ink/10 bg-white/70 px-4 py-2 shadow-card"
              >
                {item}
              </span>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-120px" }}
          className="relative w-full max-w-md flex-1"
        >
          <div className="absolute -left-10 -top-10 h-32 w-32 rounded-full bg-gradient-to-br from-accent/30 to-sun/30 blur-2xl"></div>
          <div className="absolute -bottom-10 -right-6 h-40 w-40 rounded-full bg-gradient-to-br from-sun/30 to-accent/30 blur-2xl"></div>
          <div className="relative overflow-hidden rounded-4xl bg-white/80 p-4 shadow-soft">
            <img
              src={heroPortrait}
              alt="Isra Zguir portrait"
              className="h-[420px] w-full rounded-3xl object-cover object-[50%_25%] ring-1 ring-ink/10"
            />
            <div className="mt-4 rounded-3xl border border-ink/5 bg-white/90 px-4 py-3 text-sm text-slate shadow-card">
              Building elegant software and intelligent devices with a product mindset.
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
