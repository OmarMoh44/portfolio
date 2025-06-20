import { motion } from 'framer-motion';
import { 
  CodeBracketIcon, 
  GlobeAltIcon, 
  CircleStackIcon, 
  WrenchScrewdriverIcon,
  UserGroupIcon
} from '@heroicons/react/24/outline';

interface SkillItem {
  name: string;
  icon?: string;
}

interface SkillCategory {
  category: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  items: SkillItem[];
}

const skills: SkillCategory[] = [
  {
    category: "Programming Languages",
    icon: CodeBracketIcon,
    items: [
      { name: "C/C++", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" },
      { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
      { name: "Java", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" }
    ]
  },
  {
    category: "Web Development",
    icon: GlobeAltIcon,
    items: [
      { name: "HTML/CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
      { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
      { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
      { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
      { name: "Express.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" }
    ]
  },
  {
    category: "Databases",
    icon: CircleStackIcon,
    items: [
      { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
      { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" }
    ]
  },
  {
    category: "Tools",
    icon: WrenchScrewdriverIcon,
    items: [
      { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
      { name: "Linux", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg" }
    ]
  },
  {
    category: "Soft Skills",
    icon: UserGroupIcon,
    items: [
      { name: "Problem Solving" },
      { name: "Teamwork" },
      { name: "Communication" },
      { name: "Time Management" },
      { name: "Troubleshooting" }
    ]
  }
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-dark text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Skills & Expertise</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A comprehensive overview of my technical capabilities and professional competencies
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((category, index) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-800 rounded-lg p-6"
            >
              <div className="flex items-center mb-4">
                <category.icon className="h-6 w-6 text-primary mr-2" />
                <h3 className="text-xl font-semibold">{category.category}</h3>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {category.items.map((skill) => (
                  <div
                    key={skill.name}
                    className="flex items-center space-x-2 p-2 rounded-md hover:bg-gray-700 transition-colors"
                  >
                    {skill.icon && (
                      <img
                        src={skill.icon}
                        alt={skill.name}
                        className="h-6 w-6"
                      />
                    )}
                    <span className="text-sm">{skill.name}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 