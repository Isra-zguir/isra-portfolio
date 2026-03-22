import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { fadeUp, stagger } from "./animations";

// About section highlighting multidisciplinary profile.
export default function About() {
  const focus = ["Full-stack development", "Embedded systems", "Robotics", "IoT", "Design"];

  return (
    <section id="about" className="py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="About"
          title="A multidisciplinary engineer with a product-first mindset."
          description="I blend software engineering, embedded intelligence, and human-centered design to deliver connected experiences that feel premium and reliable."
        />
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-120px" }}
          className="mt-12 grid gap-8 lg:grid-cols-[1.2fr_0.8fr]"
        >
          <motion.p variants={fadeUp} className="text-lg text-slate">
            With hands-on experience across full-stack development, embedded systems, robotics,
            and IoT, I craft solutions that connect hardware intelligence with modern digital
            products. I value clean architecture, thoughtful UX, and systems that scale from
            prototype to production.
          </motion.p>
          <motion.div
            variants={fadeUp}
            className="rounded-4xl border border-ink/5 bg-white/80 p-8 shadow-card"
          >
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate">
              Focus Areas
            </p>
            <div className="mt-4 flex flex-wrap gap-3">
              {focus.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-ink/10 bg-white px-4 py-2 text-sm text-ink shadow-card"
                >
                  {item}
                </span>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
