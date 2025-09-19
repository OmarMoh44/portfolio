import { motion } from "framer-motion";
import { useState } from "react";
import {
  CodeBracketIcon,
  CpuChipIcon,
  CalendarIcon,
  MapPinIcon,
} from "@heroicons/react/24/outline";

interface Experience {
  role: string;
  company: string;
  location: string;
  period: string;
  description: string[];
  technologies: string[];
  type:
    | "full-time"
    | "part-time"
    | "internship"
    | "freelance"
    | "project"
    | "training";
}

const aiExperiences: Experience[] = [
  {
    role: "ML Platforms Summer Training",
    company: "Cairo University - Computer Engineering Department",
    location: "Cairo, Egypt",
    period: "2024",
    description: [
      "Covered Python, Supervised & Unsupervised Learning, ML Pipelines, CNNs",
      "Worked with TensorFlow, Keras, and PyTorch frameworks. Explored hyperparameter tuning and cloud-based model training",
    ],
    technologies: [],
    type: "training",
  },
];

const webExperiences: Experience[] = [
  {
    role: "Full Stack Web Development Training",
    company: "Cairo University - Computer Engineering Department",
    location: "Cairo, Egypt",
    period: "2023",
    description: [
      "Built secure, responsive web applications using HTML, CSS, JavaScript, TypeScript, React, Node.js, Express.js, and MongoDB",
      "Focused on API integration, authentication/authorization, and collaborative development",
      "Strengthened technical proficiency across full-stack development",
    ],
    technologies: [
      "HTML",
      "CSS",
      "JavaScript",
      "TypeScript",
      "React",
      "Node.js",
      "Express.js",
      "MongoDB",
      "REST APIs",
    ],
    type: "training",
  },
  {
    role: "Java Backend Internship",
    company: "NTG Clarity",
    location: "Cairo, Egypt",
    period: "2025",
    description: [
      "Developed backend services using Java and Spring Boot.",
      "Implemented and tested 10+ RESTful API endpoints, improving integration and reducing manual work.",
      "Utilized Spring Data JPA and PostgreSQL for efficient data persistence and modeling.",
      "Collaborated on deployments with Git-based version control.",
      "Enhanced debugging, problem-solving, and backend architecture skills.",
    ],
    technologies: [
      "Agile",
      "Java",
      "Spring Web",
      "Spring Boot",
      "Spring JPA",
      "Soft Skills",
      "PostgreSQL",
      "REST APIs",
    ],
    type: "internship",
  }
];

const Experience = () => {
  const [activeCategory, setActiveCategory] = useState<"web" | "ai">("web");

  let experiences: Experience[] = [];

  switch (activeCategory) {
    case "web":
      experiences = webExperiences;
      break;
    case "ai":
      experiences = aiExperiences;
      break;
  }

  const getTypeColor = (type: Experience["type"]) => {
    switch (type) {
      case "full-time":
        return "bg-green-500/20 text-green-400";
      case "part-time":
        return "bg-blue-500/20 text-blue-400";
      case "internship":
        return "bg-purple-500/20 text-purple-400";
      case "freelance":
        return "bg-yellow-500/20 text-yellow-400";
      case "project":
        return "bg-secondary/20 text-secondary";
      default:
        return "bg-gray-500/20 text-gray-400";
    }
  };

  return (
    <section id="experience" className="py-20 bg-primary text-white">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">
            <span className="text-secondary font-mono">02.</span> Experience
          </h2>
          <p className="text-gray-400 max-w-2xl">
            My journey through various roles, projects, and learning experiences
            across different domains of software development.
          </p>
        </motion.div>

        {/* Category Filter Buttons */}
        <div className="flex justify-center gap-4 mb-12 flex-wrap">
          <button
            onClick={() => setActiveCategory("web")}
            className={`px-6 py-3 rounded-full flex items-center gap-2 transition-all ${
              activeCategory === "web"
                ? "bg-secondary text-white shadow-lg"
                : "bg-gray-800 text-gray-400 hover:text-secondary hover:bg-gray-700"
            }`}
          >
            <CodeBracketIcon className="w-5 h-5" />
            Web Development
          </button>
          <button
            onClick={() => setActiveCategory("ai")}
            className={`px-6 py-3 rounded-full flex items-center gap-2 transition-all ${
              activeCategory === "ai"
                ? "bg-secondary text-white shadow-lg"
                : "bg-gray-800 text-gray-400 hover:text-secondary hover:bg-gray-700"
            }`}
          >
            <CpuChipIcon className="w-5 h-5" />
            Artificial Intelligence
          </button>
        </div>

        {/* Experience Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gray-700 hidden md:block"></div>

          <div className="space-y-12">
            {experiences.map((experience, index) => (
              <motion.div
                key={`${experience.company}-${experience.role}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative"
              >
                {/* Timeline Dot */}
                <div className="absolute left-6 w-4 h-4 bg-secondary rounded-full border-4 border-primary z-10 hidden md:block"></div>

                {/* Experience Card */}
                <div className="md:ml-20 bg-gray-800/50 rounded-lg p-6 hover:bg-gray-800/70 transition-all duration-300">
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-xl font-bold text-white">
                          {experience.role}
                        </h3>
                        <span
                          className={`px-3 py-1 rounded-full text-xs font-medium ${getTypeColor(
                            experience.type
                          )}`}
                        >
                          {experience.type.charAt(0).toUpperCase() +
                            experience.type.slice(1)}
                        </span>
                      </div>
                      <p className="text-secondary font-semibold mb-1">
                        {experience.company}
                      </p>
                      <div className="flex flex-wrap items-center gap-4 text-gray-400 text-sm">
                        <div className="flex items-center gap-1">
                          <MapPinIcon className="w-4 h-4" />
                          {experience.location}
                        </div>
                        <div className="flex items-center gap-1">
                          <CalendarIcon className="w-4 h-4" />
                          {experience.period}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <div className="mb-4">
                    <ul className="space-y-2">
                      {experience.description.map((item, idx) => (
                        <li
                          key={idx}
                          className="text-gray-400 flex items-start"
                        >
                          <span className="text-secondary mr-2 mt-1.5">▹</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {experience.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-gray-700 text-gray-300 rounded-full text-sm font-mono"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Summary Statistics */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          <div className="text-center">
            <div className="text-3xl font-bold text-secondary mb-2">15+</div>
            <div className="text-gray-400">Projects Completed</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-secondary mb-2">2+</div>
            <div className="text-gray-400">Years Learning</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-secondary mb-2">10+</div>
            <div className="text-gray-400">Technologies Used</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
