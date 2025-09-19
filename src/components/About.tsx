import { motion } from "framer-motion";

const getImagePath = (path: string) => {
  return `/portfolio/images/${path}`;
};

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
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div>
              <p className="text-gray-400 mb-4">
                <ul>
                  <li className="mb-2">Computer Engineering student at Cairo University.</li>
                  <li className="mb-2">Passionate about building secure and efficient web applications.</li>
                  <li className="mb-2">Gained expertise through intensive training in modern web technologies, collaborative development, machine learning, and deep learning.</li>
                  <li className="mb-2">Started with backend focus.</li>
                  <li className="mb-2">Expanded skills to include data preprocessing and full-stack development.</li>
                </ul>
              </p>
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
                  src={getImagePath('me.jpg')}
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
