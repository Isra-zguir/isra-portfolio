import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { fadeUp, stagger } from "./animations";

// Skills presented as tag cloud.
export default function Skills() {
  const skills = [
    "React",
    "Symfony",
    "Node.js",
    "PHP",
    "Arduino",
    "Raspberry Pi",
    "ROS",
    "Networking",
    "Linux",
    "Grafana",
    "InfluxDB",
    "UI/UX tools",
  ];

  return (
    <section id="skills" className="py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="Skills"
          title="A toolkit built for connected, scalable systems."
        />
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-120px" }}
          className="mt-10 flex flex-wrap gap-3"
        >
          {skills.map((skill) => (
            <motion.span
              key={skill}
              variants={fadeUp}
              className="rounded-full border border-ink/10 bg-white/80 px-4 py-2 text-sm font-semibold text-ink shadow-card"
            >
              {skill}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
