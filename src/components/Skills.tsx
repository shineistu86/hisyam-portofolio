import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiBarChart2, FiTool, FiPenTool, FiUsers } from 'react-icons/fi';
import { skills, softSkills } from '../data/portfolio';

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState<'all' | 'technical' | 'tool' | 'design'>('all');

  const categories = [
    { value: 'all', label: 'All', icon: FiBarChart2 },
    { value: 'technical', label: 'Technical', icon: FiBarChart2 },
    { value: 'tool', label: 'Tools', icon: FiTool },
    { value: 'design', label: 'Design', icon: FiPenTool },
  ];

  const filteredSkills = activeCategory === 'all'
    ? skills
    : skills.filter((skill) => skill.category === activeCategory);

  const getSkillColor = (category: string) => {
    switch (category) {
      case 'technical':
        return 'from-primary-500 to-primary-700';
      case 'tool':
        return 'from-green-500 to-green-700';
      case 'design':
        return 'from-purple-500 to-purple-700';
      default:
        return 'from-primary-500 to-primary-700';
    }
  };

  return (
    <section id="skills" className="py-20 bg-dark-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            My <span className="gradient-text">Skills</span>
          </h2>
          <div className="w-20 h-1 bg-primary-500 mx-auto rounded-full mb-6" />
          <p className="text-gray-400 max-w-2xl mx-auto">
            Here are my technical skills and proficiency levels acquired through projects and experience
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category.value}
              onClick={() => setActiveCategory(category.value as typeof activeCategory)}
              className={`px-6 py-3 rounded-lg font-medium transition-all flex items-center gap-2 ${
                activeCategory === category.value
                  ? 'bg-primary-600 text-white shadow-lg shadow-primary-500/25'
                  : 'bg-dark-800 text-gray-400 hover:text-white border border-white/10'
              }`}
            >
              <category.icon size={18} />
              {category.label}
            </button>
          ))}
        </motion.div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {filteredSkills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="p-6 bg-dark-800 rounded-lg border border-white/10 card-hover"
            >
              <div className="flex justify-between items-center mb-3">
                <span className="font-semibold text-lg">{skill.name}</span>
                <span className="text-primary-400 font-bold">{skill.level}%</span>
              </div>
              <div className="h-3 bg-dark-900 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: index * 0.05 }}
                  className={`h-full bg-gradient-to-r ${getSkillColor(skill.category)} rounded-full`}
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Soft Skills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16"
        >
          <h3 className="text-2xl font-bold text-center mb-8">
            <FiUsers className="inline-block mr-2" />
            Soft Skills
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {softSkills.map((skill, index) => (
              <motion.div
                key={skill}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="px-6 py-3 bg-gradient-to-r from-primary-500/10 to-primary-700/10 border border-primary-500/20 rounded-full text-gray-300 hover:text-white hover:border-primary-500/40 transition-all card-hover"
              >
                {skill}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
