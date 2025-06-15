import { motion } from 'framer-motion';
import profileImg from '../assets/images/profile.jpg';

const About = () => {
  return (
    <section id="about" className="py-20 bg-dark text-white">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">
            <span className="text-secondary font-mono">01.</span> About Me
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <p className="text-gray-400 mb-4">
                I am a Computer Engineering student at Cairo University, passionate about building secure and efficient web applications. 
                My journey in software development began with a focus on backend technologies, particularly Node.js and SQL databases.
              </p>
              <p className="text-gray-400 mb-4">
                During my studies, I've completed coursework in Object-Oriented Programming, Data Structures, Algorithms Analysis, 
                Database Management, Web Development, and Software Engineering. This academic foundation has been complemented by 
                practical experience in full-stack development.
              </p>
              <p className="text-gray-400 mb-6">
                I recently completed an intensive full-stack development training at Cairo University's Computer Engineering Department, 
                where I enhanced my skills in modern web technologies and collaborative development practices.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <ul className="list-disc list-inside text-gray-400">
                  <li>Node.js</li>
                  <li>Express.js</li>
                  <li>MongoDB</li>
                  <li>PostgreSQL</li>
                </ul>
                <ul className="list-disc list-inside text-gray-400">
                  <li>React.js</li>
                  <li>TypeScript</li>
                  <li>Git</li>
                  <li>Linux</li>
                </ul>
              </div>
            </div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative w-full h-[400px] rounded-lg overflow-hidden border-2 border-secondary">
                <img
                  src={profileImg}
                  alt="Omar Mohammed"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About; 