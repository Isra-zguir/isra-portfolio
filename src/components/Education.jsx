import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { fadeUp, stagger } from "./animations";

// Education timeline cards.
export default function Education() {
  const education = [
    {
      school: "ESPRIT",
      degree: "Computer Science Engineering",
      period: "Current",
      detail: "Focused on full-stack engineering, AI, and connected systems.",
    },
    {
      school: "ISTIC Borj Cedria",
      degree: "Embedded Systems Degree",
      period: "Completed",
      detail: "Embedded systems, electronics, and real-time control foundations.",
    },
  ];

  return (
    <section id="education" className="py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="Education"
          title="Technical foundations across software and hardware."
        />
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-120px" }}
          className="mt-12 grid gap-6 md:grid-cols-2"
        >
          {education.map((item) => (
            <motion.div
              key={item.school}
              variants={fadeUp}
              className="rounded-4xl border border-ink/5 bg-white/80 p-6 shadow-card"
            >
              <p className="text-sm uppercase tracking-[0.2em] text-slate">{item.period}</p>
              <h3 className="mt-3 font-display text-2xl text-ink">{item.school}</h3>
              <p className="mt-2 text-sm font-semibold text-ink">{item.degree}</p>
              <p className="mt-3 text-sm text-slate">{item.detail}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
