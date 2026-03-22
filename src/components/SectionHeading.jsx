import { motion } from "framer-motion";
import { fadeUp, stagger } from "./animations";

// Reusable section heading for consistent spacing and typography.
export default function SectionHeading({ eyebrow, title, description, align = "left" }) {
  const alignment = align === "center" ? "text-center items-center" : "text-left items-start";

  return (
    <motion.div
      variants={stagger}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-120px" }}
      className={`flex flex-col gap-3 ${alignment}`}
    >
      <motion.span
        variants={fadeUp}
        className="text-sm uppercase tracking-[0.3em] text-slate"
      >
        {eyebrow}
      </motion.span>
      <motion.h2
        variants={fadeUp}
        className="font-display text-3xl sm:text-4xl text-ink"
      >
        {title}
      </motion.h2>
      {description ? (
        <motion.p
          variants={fadeUp}
          className={`text-base sm:text-lg text-slate ${align === "center" ? "max-w-2xl" : "max-w-3xl"}`}
        >
          {description}
        </motion.p>
      ) : null}
    </motion.div>
  );
}
