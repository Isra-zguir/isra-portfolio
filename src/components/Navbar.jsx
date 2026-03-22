import { motion } from "framer-motion";
import { fadeUp } from "./animations";

// Top navigation with anchor links.
export default function Navbar() {
  return (
    <motion.header
      initial="hidden"
      animate="show"
      variants={fadeUp}
      className="sticky top-0 z-50 border-b border-black/5 bg-sand/80 backdrop-blur-xl"
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#hero" className="font-display text-lg tracking-wide">
          Isra Zguir
        </a>
        <nav className="hidden items-center gap-8 text-sm font-medium text-slate md:flex">
          <a className="transition hover:text-ink" href="#about">
            About
          </a>
          <a className="transition hover:text-ink" href="#projects">
            Projects
          </a>
          <a className="transition hover:text-ink" href="#experience">
            Experience
          </a>
          <a className="transition hover:text-ink" href="#contact">
            Contact
          </a>
        </nav>
        <a
          href="#contact"
          className="rounded-full border border-ink/10 bg-white/80 px-4 py-2 text-sm font-semibold text-ink shadow-card transition hover:-translate-y-0.5 hover:shadow-soft"
        >
          Let&apos;s Talk
        </a>
      </div>
    </motion.header>
  );
}
