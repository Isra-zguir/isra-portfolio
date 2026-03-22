import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { fadeUp, stagger } from "./animations";

// Contact section with CTA and social placeholders.
export default function Contact() {
  return (
    <section id="contact" className="py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="Contact"
          title="Let&apos;s build something ambitious together."
          description="Open to collaborations, internships, and impactful engineering challenges."
        />
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-120px" }}
          className="mt-12 grid gap-6 lg:grid-cols-[1.2fr_0.8fr]"
        >
          <motion.div
            variants={fadeUp}
            className="rounded-4xl border border-ink/5 bg-white/85 p-8 shadow-card"
          >
            <p className="text-sm uppercase tracking-[0.2em] text-slate">Email</p>
            <a
              href="mailto:zguirsarroura@gmail.com"
              className="mt-3 block text-2xl font-display text-ink transition hover:text-accent"
            >
              zguirsarroura@gmail.com
            </a>
            <p className="mt-4 text-sm text-slate">
              Based in Tunisia, available for remote and on-site opportunities.
            </p>
          </motion.div>

          <motion.div
            variants={fadeUp}
            className="rounded-4xl border border-ink/5 bg-white/85 p-8 shadow-card"
          >
            <p className="text-sm uppercase tracking-[0.2em] text-slate">Online</p>
            <div className="mt-4 space-y-3 text-sm font-semibold text-ink">
              <a
                href="https://www.linkedin.com/in/isra-zguir-9117a9269/?locale=fr"
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-between gap-3 rounded-2xl border border-ink/10 bg-white px-4 py-3 text-left shadow-card transition hover:-translate-y-0.5 hover:shadow-soft"
              >
                <span>LinkedIn</span>
                <svg
                  viewBox="0 0 24 24"
                  className="h-5 w-5 text-ink/70"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.6"
                >
                  <path d="M8 11v5M8 8v.01M12 16v-5a3 3 0 0 1 3 3v2M16 16v-3" />
                  <rect x="4" y="4" width="16" height="16" rx="3" />
                </svg>
              </a>
              <a
                href="https://github.com/Isra-zguir?tab=repositories"
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-between gap-3 rounded-2xl border border-ink/10 bg-white px-4 py-3 text-left shadow-card transition hover:-translate-y-0.5 hover:shadow-soft"
              >
                <span>GitHub</span>
                <svg
                  viewBox="0 0 24 24"
                  className="h-5 w-5 text-ink/70"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.6"
                >
                  <path d="M12 3a7 7 0 0 0-2.2 13.65c.35.07.48-.15.48-.34v-1.2c-2 .43-2.42-.85-2.42-.85-.32-.84-.79-1.07-.79-1.07-.64-.44.05-.43.05-.43.71.05 1.08.74 1.08.74.64 1.1 1.68.78 2.1.6.06-.47.25-.78.45-.96-1.6-.18-3.28-.8-3.28-3.57 0-.79.28-1.44.74-1.95-.08-.18-.32-.92.07-1.91 0 0 .6-.19 1.98.74a6.9 6.9 0 0 1 3.6 0c1.38-.93 1.98-.74 1.98-.74.39.99.15 1.73.07 1.91.46.51.74 1.16.74 1.95 0 2.78-1.68 3.39-3.29 3.56.26.22.5.66.5 1.33v1.97c0 .19.13.41.48.34A7 7 0 0 0 12 3z" />
                </svg>
              </a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
