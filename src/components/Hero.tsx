import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center bg-dark text-white px-4">
      <div className="max-w-4xl mx-auto text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-secondary font-mono mb-4"
        >
          Hi, my name is
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-4xl md:text-7xl font-bold mb-6"
        >
          Omar Mohammed Rabie.
        </motion.h1>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-2xl md:text-4xl text-gray-400 mb-8"
        >
          I build things for the web.
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-lg text-gray-400 max-w-2xl mx-auto mb-12"
        >
          A dedicated Software Engineer with a focus on backend development, proficient in Node.Js and SQL. 
          Experienced in building secure, database-driven applications, and recognized for strong problem-solving skills.
        </motion.p>
        <motion.a
          href="#projects"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="inline-block border-2 border-secondary text-secondary px-8 py-4 rounded hover:bg-secondary/10 transition-colors"
        >
          Check out my work!
        </motion.a>
      </div>
    </section>
  );
};

export default Hero; 