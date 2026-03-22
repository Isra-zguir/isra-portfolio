import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { fadeUp, stagger } from "./animations";
import loraImage from "../assets/lora.png";
import mediconnectImage from "../assets/mediconnect.jpg";
import maternaImage from "../assets/materna.png";
import droneImage from "../assets/drone.jpg";
import pcbImage from "../assets/pcb.jpg";
import sunshineImage from "../assets/sunshine.jpg";

// Projects section with detailed cards.
export default function Projects() {
  const projects = [
    {
      title: "MediConnect",
      image: mediconnectImage,
      description:
        "Medical platform with multi-role access, appointment scheduling, and secure payments.",
      technologies: ["Symfony", "AJAX", "Stripe", "MySQL"],
      achievements: [
        "Role-based dashboards for doctors, patients, and admins.",
        "Real-time appointment management with smart reminders.",
        "Integrated billing workflows and analytics-ready data models.",
      ],
    },
    {
      title: "MaternAlert",
      image: maternaImage,
      description:
        "Pregnancy monitoring mobile app with IoT sensor integration and alerting.",
      technologies: ["React Native", "Node.js", "IoT", "Firebase"],
      achievements: [
        "Live health monitoring with wearable device integration.",
        "Automated alerts for caregivers and clinicians.",
        "Clean mobile UX optimized for daily check-ins.",
      ],
    },
    {
      title: "LORA Perfumes",
      image: loraImage,
      description:
        "Luxury brand website crafted with premium UI/UX and conversion-focused storytelling.",
      technologies: ["UI/UX", "React", "Tailwind CSS"],
      achievements: [
        "High-end visual design and product storytelling.",
        "Responsive e-commerce-ready layout.",
        "Performance-first build with rich interactions.",
      ],
    },
    {
      title: "Autonomous Drone",
      image: droneImage,
      description:
        "Smart agriculture drone system for automated monitoring and field analytics.",
      technologies: ["ROS", "Raspberry Pi", "Pixhawk", "Python"],
      achievements: [
        "Autonomous navigation using sensor fusion.",
        "Edge data capture for crop health analysis.",
        "Robust flight control with fail-safe modes.",
      ],
    },
    {
      title: "Gas Detection PCB",
      image: pcbImage,
      description:
        "Safety-focused PCB detecting gas leaks with automated ventilation control.",
      technologies: ["PCB Design", "Sensors", "Embedded C"],
      achievements: [
        "Multi-sensor calibration for accurate detection.",
        "Automated ventilation and alert system integration.",
        "Compact, production-ready board layout.",
      ],
    },
    {
      title: "Sunshine Machine Prototype",
      image: sunshineImage,
      description:
        "Industrial automation prototype using sensors for precision operations.",
      technologies: ["Automation", "Sensors", "Industrial IoT"],
      achievements: [
        "Sensor-driven automation with real-time feedback.",
        "Improved process efficiency with smart scheduling.",
        "Scalable architecture for factory deployment.",
      ],
    },
  ];

  return (
    <section id="projects" className="py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="Projects"
          title="Selected work across software, IoT, and robotics."
          description="Each project blends elegant UX with reliable engineering, balancing user needs and system constraints."
        />
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-120px" }}
          className="mt-12 grid gap-8 lg:grid-cols-2"
        >
          {projects.map((project) => (
            <motion.article
              key={project.title}
              variants={fadeUp}
              className="overflow-hidden rounded-4xl border border-ink/5 bg-white/85 shadow-card transition hover:-translate-y-1 hover:shadow-soft"
            >
              <div className="h-56 overflow-hidden">
                <img
                  src={project.image}
                  alt={`${project.title} project`}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="space-y-4 p-6">
                <h3 className="font-display text-2xl text-ink">{project.title}</h3>
                <p className="text-sm text-slate">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-ink/10 bg-white px-3 py-1 text-xs font-medium text-ink shadow-card"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <ul className="space-y-2 text-sm text-slate">
                  {project.achievements.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="mt-2 h-2 w-2 rounded-full bg-gradient-to-r from-accent to-sun"></span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
