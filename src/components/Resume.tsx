import { motion } from 'framer-motion';
import { FiAward, FiBriefcase, FiCalendar, FiUser } from 'react-icons/fi';
import { education, experiences } from '../data/portfolio';

const Resume = () => {
  return (
    <section id="resume" className="py-20 bg-dark-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            My <span className="gradient-text">Resume</span>
          </h2>
          <div className="w-20 h-1 bg-primary-500 mx-auto rounded-full mb-6" />
          <p className="text-gray-400 max-w-2xl mx-auto">
            My educational background and professional experience journey
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Education */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
              <FiAward className="text-primary-400" size={28} />
              Education
            </h3>

            <div className="space-y-6">
              {education.map((edu, index) => (
                <motion.div
                  key={edu.institution}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="p-6 bg-dark-900 rounded-lg border border-white/10 card-hover relative overflow-hidden"
                >
                  <div className="absolute top-0 right-0 w-20 h-20 bg-primary-500/10 rounded-bl-full" />
                  
                  <div className="flex items-start gap-4 mb-4">
                    <div className="p-3 bg-primary-500/10 rounded-lg">
                      <FiUser className="text-primary-400" size={24} />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold mb-1">{edu.institution}</h4>
                      <p className="text-primary-400">{edu.degree}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 text-gray-400 text-sm">
                    <FiCalendar />
                    <span>{edu.period}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Experience */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
              <FiBriefcase className="text-primary-400" size={28} />
              Experience
            </h3>

            <div className="space-y-6">
              {experiences.map((exp, index) => (
                <motion.div
                  key={`${exp.title}-${exp.organization}`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="p-6 bg-dark-900 rounded-lg border border-white/10 card-hover relative overflow-hidden"
                >
                  <div className="absolute top-0 right-0 w-20 h-20 bg-primary-500/10 rounded-bl-full" />
                  
                  <div className="relative">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="p-3 bg-primary-500/10 rounded-lg">
                        <FiBriefcase className="text-primary-400" size={24} />
                      </div>
                      <div>
                        <h4 className="text-lg font-bold mb-1">{exp.title}</h4>
                        <p className="text-primary-400">{exp.organization}</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 text-gray-400 text-sm mb-4">
                      <FiCalendar />
                      <span>{exp.period}</span>
                    </div>

                    <ul className="space-y-2">
                      {exp.description.map((item, i) => (
                        <li key={i} className="flex items-start gap-2 text-gray-300 text-sm">
                          <span className="text-primary-400 mt-1">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
