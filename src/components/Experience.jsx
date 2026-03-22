import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { fadeUp, stagger } from "./animations";
import usaImage from "../assets/usa.jpg";
import italyImage from "../assets/italy.jpg";

// Experience and participation timeline.
export default function Experience() {
  const items = [
    {
      title: "Internships",
      detail: "GD Tunisia, Tunav, Assad Power",
      description: "Hands-on engineering experience across software and embedded environments.",
    },
    {
      title: "Enterprise Networking Project",
      detail: "Design + implementation",
      description: "Planned and executed an enterprise-grade network architecture.",
    },
  ];

  const ieee = {
    title: "IEEE International Participation",
    detail: "USA & Italy sessions",
    description:
      "Presented projects, connected with global IEEE communities, and collaborated on emerging tech themes.",
    locations: [
      { label: "USA", image: usaImage },
      { label: "Italy", image: italyImage },
    ],
  };

  return (
    <section id="experience" className="py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="Experience"
          title="Professional exposure across industry, networks, and communities."
        />
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-120px" }}
          className="mt-12 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]"
        >
          <div className="grid gap-6">
            {items.map((item) => (
              <motion.div
                key={item.title}
                variants={fadeUp}
                className="rounded-4xl border border-ink/5 bg-white/80 p-6 shadow-card"
              >
                <h3 className="font-display text-xl text-ink">{item.title}</h3>
                <p className="mt-2 text-sm font-semibold text-ink">{item.detail}</p>
                <p className="mt-3 text-sm text-slate">{item.description}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            variants={fadeUp}
            className="rounded-4xl border border-ink/5 bg-white/85 p-6 shadow-card"
          >
            <p className="text-sm uppercase tracking-[0.2em] text-slate">Global Participation</p>
            <h3 className="mt-3 font-display text-2xl text-ink">{ieee.title}</h3>
            <p className="mt-2 text-sm font-semibold text-ink">{ieee.detail}</p>
            <p className="mt-3 text-sm text-slate">{ieee.description}</p>
            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              {ieee.locations.map((location) => (
                <div key={location.label} className="overflow-hidden rounded-3xl">
                  <img
                    src={location.image}
                    alt={`${location.label} IEEE`}
                    className="h-40 w-full object-cover"
                  />
                  <div className="bg-white/90 px-3 py-2 text-xs font-semibold text-ink">
                    {location.label}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
