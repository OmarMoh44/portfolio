import { motion } from "framer-motion";
import { useState } from "react";

/**
 * Notes in updating portfolio:
 * 1- remove gh-pages branch to delete last build
 * 2- before git run build, we need to copy the project folder to C:\omar directory as long path name causes error
 */

const getImagePath = (path: string) => {
  return `/portfolio/images/projects${path}`;
};

interface Project {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  github: string;
  live: string;
}

const softwareProjects: Project[] = [
  {
    title: "Whisper Backend (Messaging Backend)",
    description:
      "Designed and implemented a software product mimicking functionalities of Telegram, utilizing state-of-the-art tools and technologies. Created Whisper, a Telegram clone, to facilitate seamless communication with features like real-time messaging, group chats, and channels.",
    image: getImagePath("/whisper-backend.jpg"),
    technologies: [
      "Node.js",
      "Express.js",
      "REST API",
      "Socket.IO",
      "Prisma ORM",
      "PostgreSQL",
      "Redis",
      "Agora",
      "JWT",
    ],
    github: "https://github.com/GramBelleg/Whisper_BackEnd",
    live: "#",
  },
  {
    title: "E-Commerce Platform",
    description:
      "Developed a comprehensive e-commerce platform with features like product listings, shopping cart functionality, and user authentication. Leveraged modern web technologies to create a seamless online shopping experience.",
    image: getImagePath("/e-commerce.jpg"),
    technologies: [
      "React",
      "Express.js",
      "GraphQL API",
      "Prisma ORM",
      "PostgreSQL",
      "JWT",
    ],
    github: "https://github.com/OmarMoh44/E-commerce",
    live: "#",
  },
  {
    title: "Care Track (Healthcare Management System)",
    description:
      "Developed Care Track, a healthcare management system with a Spring Boot backend and a Flutter mobile application.Implemented features for appointment booking, medical record management, doctor and patient authentication, and user profile management.",
    image: getImagePath("/care-track.png"),
    technologies: [
      "Flutter",
      "Spring Boot",
      "Spring Data JPA / Hibernate (ORM)",
      "PostgreSQL",
      "Spring Security (JWT)",
      "REST APIs",
    ],
    github: "https://github.com/OmarMoh44/CareTrack",
    live: "#",
  },
  {
    title: "E-commerce (Backend API)",
    description:
      "Developed a backend for an E-commerce application using Java and Spring Boot. Designed and implemented data models for users, products, categories, carts, and cart items.",
    image: getImagePath("/e-commerce-backend.jpg"),
    technologies: [
      "Spring Boot",
      "Spring Data JPA / Hibernate (ORM)",
      "PostgreSQL",
      "Spring Security (JWT)",
      "Redis",
      "REST APIs",
    ],
    github: "https://github.com/OmarMoh44/E-commerce_demo",
    live: "#",
  },
  {
    title: "Missing Things Backend",
    description:
      "Designed a web-based platform to connect individuals who have lost items with those who have found them. Aimed to streamline the process of reuniting lost belongings with their owners through online connectivity.",
    image: getImagePath("/missing-things.jpg"),
    technologies: ["Node.js", "Express.js", "REST API", "PostgreSQL", "JWT"],
    github: "https://github.com/OmarMoh44/missing-things",
    live: "#",
  },
  {
    title: "Search Engine Bolt",
    description:
      "Created a Crawler-based search engine to demonstrate the 3 core functions of a search engine: indexing, ranking, and web crawling. Enabled users to interact with the search engine, providing a Google-like experience.",
    image: getImagePath("/search-engine.jpg"),
    technologies: [
      "Vue",
      "Java",
      "Spring Boot",
      "Web Crawling",
      "Search Algorithms",
    ],
    github: "https://github.com/3mr-mahmoud/search-engine",
    live: "#",
  },
  {
    title: "Resume Builder",
    description:
      "Aimed to help users create impressive resumes that highlight their unique accomplishments, experiences, and skills. Provided professional advice and easy-to-use templates to simplify the resume-writing process for job seekers.",
    image: getImagePath("/resume-builder.jpg"),
    technologies: [
      "React",
      "Node.js",
      "Express.js",
      "REST API",
      "MongoDB",
      "JWT",
    ],
    github: "https://github.com/Mo-Khater/ResemeGenerator",
    live: "#",
  },
  {
    title: "OS Scheduler",
    description:
      "Created a CPU scheduler simulator to demonstrate how a CPU scheduler selects and executes processes in a specific sequence. Utilized scheduling algorithms such as Round Robin, Higher Priority First, and Shortest Remaining Time.",
    image: getImagePath("/os-scheduler.jpg"),
    technologies: ["C", "Linux", "Algorithms"],
    github: "https://github.com/OmarMoh44/OS",
    live: "#",
  },
];

const aiProjects: Project[] = [
  {
    title: "Voice-based Age & Gender Classification System",
    description:
      "Developed a system that processes audio recordings to classify speakers into four demographic categories (male/female, young/old). Designed and implemented a complete machine learning pipeline, including audio preprocessing, feature extraction (MFCCs, formants, pitch, spectral features), feature selection, and model training using techniques like SMOTE and cross-validation.",
    image: getImagePath("/voice-based-age-gender-classification.png"),
    technologies: [
      "Python",
      "scikit-learn",
      "Pandas",
      "NumPy",
      "Matplotlib",
      "Librosa",
      "Praat-Parselmouth",
      "Soundfile",
    ],
    github:
      "https://github.com/OmarMoh44/Voice_Age-Gender_Classification_System",
    live: "#",
  },
  {
    title: "Disease Detection System",
    description:
      "Created a machine learning-based disease detection system that compares multiple classification models for accurate predictions. The project includes a machine learning pipeline and a web-based interface for real-time predictions.",
    image: getImagePath("/disease-detection.png"),
    technologies: [
      "Python",
      "Pandas",
      "NumPy",
      "scikit-learn",
      "Keras",
      "TensorFlow",
    ],
    github: "https://github.com/OmarMoh44/disease_detection",
    live: "#",
  },
  {
    title: "Grades Auto-Filler System",
    description:
      "Built a system to automatically process bubble sheets and grade sheets, integrating machine learning-based recognition of handwritten digits and symbols with Optical Character Recognition (OCR) for text processing.",
    image: getImagePath("/grades-auto-filler.png"),
    technologies: [
      "Python",
      "Pandas",
      "NumPy",
      "scikit-learn",
      "OpenCV",
      "Matplotlib",
    ],
    github: "https://github.com/3mr-mahmoud/grades-auto-filler",
    live: "#",
  },
];

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState<"software" | "ai">(
    "software"
  );
  const projects =
    activeCategory === "software" ? softwareProjects : aiProjects;

  return (
    <section id="projects" className="py-20 bg-dark text-white">
      <div className="max-w-7xl mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-3xl font-bold mb-8"
        >
          <span className="text-secondary font-mono">02.</span> Some Things I've
          Built
        </motion.h2>

        <div className="flex justify-center gap-4 mb-12">
          <button
            onClick={() => setActiveCategory("software")}
            className={`px-6 py-2 rounded-full ${
              activeCategory === "software"
                ? "bg-secondary text-white"
                : "bg-gray-800 text-gray-400 hover:text-secondary"
            }`}
          >
            Software Engineering
          </button>
          <button
            onClick={() => setActiveCategory("ai")}
            className={`px-6 py-2 rounded-full ${
              activeCategory === "ai"
                ? "bg-secondary text-white"
                : "bg-gray-800 text-gray-400 hover:text-secondary"
            }`}
          >
            Artificial Intelligence
          </button>
        </div>

        <div className="space-y-24">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className={`grid md:grid-cols-12 gap-8 items-center ${
                index % 2 === 1 ? "md:flex-row-reverse" : ""
              }`}
            >
              <div
                className={`md:col-span-7 ${
                  index % 2 === 1 ? "md:order-2" : ""
                }`}
              >
                <div className="relative group">
                  <div className="absolute inset-0 bg-secondary/20 rounded-lg transition-all duration-300 group-hover:bg-secondary/10"></div>
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-[400px] object-cover rounded-lg"
                  />
                </div>
              </div>

              <div
                className={`md:col-span-5 ${
                  index % 2 === 1 ? "md:order-1" : ""
                }`}
              >
                <p className="text-secondary font-mono mb-2">
                  Featured Project
                </p>
                <h3 className="text-2xl font-bold mb-4">{project.title}</h3>
                <div className="bg-gray-800/50 p-6 rounded-lg mb-4">
                  <p className="text-gray-400">{project.description}</p>
                </div>
                <ul className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <li key={tech} className="text-sm text-gray-400 font-mono">
                      {tech}
                    </li>
                  ))}
                </ul>
                <div className="flex gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-secondary transition-colors"
                    title={`View ${project.title} on GitHub`}
                  >
                    <svg
                      className="w-6 h-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-secondary transition-colors"
                    title={`View ${project.title} Live`}
                  >
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
