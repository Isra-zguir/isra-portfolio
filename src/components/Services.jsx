import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { fadeUp, stagger } from "./animations";

// Services or skills presented as premium cards.
export default function Services() {
  const services = [
    {
      title: "Full-stack web development",
      description: "Modern web apps with clean architecture, APIs, and responsive UX.",
      icon: (
        <svg viewBox="0 0 24 24" className="h-5 w-5 text-ink/80" fill="none" stroke="currentColor" strokeWidth="1.6">
          <path d="M4 6h16M4 18h16M7 9h10v6H7z" />
        </svg>
      ),
    },
    {
      title: "Mobile development",
      description: "Cross-platform mobile experiences built for performance and clarity.",
      icon: (
        <svg viewBox="0 0 24 24" className="h-5 w-5 text-ink/80" fill="none" stroke="currentColor" strokeWidth="1.6">
          <rect x="7" y="3" width="10" height="18" rx="2" />
          <path d="M10 18h4" />
        </svg>
      ),
    },
    {
      title: "Embedded systems & IoT",
      description: "Connected devices, data pipelines, and reliable edge computing.",
      icon: (
        <svg viewBox="0 0 24 24" className="h-5 w-5 text-ink/80" fill="none" stroke="currentColor" strokeWidth="1.6">
          <rect x="6" y="6" width="12" height="12" rx="2" />
          <path d="M9 1v4M15 1v4M9 19v4M15 19v4M1 9h4M1 15h4M19 9h4M19 15h4" />
        </svg>
      ),
    },
    {
      title: "Robotics systems",
      description: "Intelligent control, sensor fusion, and real-world automation.",
      icon: (
        <svg viewBox="0 0 24 24" className="h-5 w-5 text-ink/80" fill="none" stroke="currentColor" strokeWidth="1.6">
          <path d="M6 14h12v6H6z" />
          <path d="M9 14V9h6v5M10 9l2-3 2 3" />
          <circle cx="9" cy="17" r="1" />
          <circle cx="15" cy="17" r="1" />
        </svg>
      ),
    },
    {
      title: "UI/UX design",
      description: "Apple-like interfaces with strong typography and delightful motion.",
      icon: (
        <svg viewBox="0 0 24 24" className="h-5 w-5 text-ink/80" fill="none" stroke="currentColor" strokeWidth="1.6">
          <path d="M3 7h18M3 12h10M3 17h14" />
          <circle cx="18" cy="12" r="3" />
        </svg>
      ),
    },
  ];

  return (
    <section id="services" className="py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="Services"
          title="Capabilities built for end-to-end product delivery."
          description="From interface design to embedded intelligence, I build cohesive digital and physical experiences."
        />
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-120px" }}
          className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3"
        >
          {services.map((service) => (
            <motion.div
              key={service.title}
              variants={fadeUp}
              className="group rounded-4xl border border-ink/5 bg-white/80 p-6 shadow-card transition hover:-translate-y-1 hover:shadow-soft"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-accent/20 to-sun/20">
                {service.icon}
              </div>
              <h3 className="mt-6 font-display text-xl text-ink">{service.title}</h3>
              <p className="mt-3 text-sm text-slate">{service.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
