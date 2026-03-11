import { motion } from 'framer-motion';
import { FiBarChart2, FiMonitor, FiGitBranch, FiCpu } from 'react-icons/fi';
import { services } from '../data/portfolio';

const Services = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'chart':
        return <FiBarChart2 size={32} />;
      case 'dashboard':
        return <FiMonitor size={32} />;
      case 'process':
        return <FiGitBranch size={32} />;
      case 'system':
        return <FiCpu size={32} />;
      default:
        return <FiBarChart2 size={32} />;
    }
  };

  return (
    <section id="services" className="py-20 bg-dark-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            My <span className="gradient-text">Services</span>
          </h2>
          <div className="w-20 h-1 bg-primary-500 mx-auto rounded-full mb-6" />
          <p className="text-gray-400 max-w-2xl mx-auto">
            Professional services I offer to help businesses leverage data and technology
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="group p-8 bg-dark-800 rounded-xl border border-white/10 card-hover text-center"
            >
              <motion.div
                className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-primary-500 to-primary-700 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg shadow-primary-500/25"
                whileHover={{ rotate: [0, -10, 10, 0] }}
                transition={{ duration: 0.5 }}
              >
                <span className="text-white">{getIcon(service.icon)}</span>
              </motion.div>

              <h3 className="text-xl font-bold mb-3 group-hover:text-primary-400 transition-colors">
                {service.title}
              </h3>

              <p className="text-gray-400 text-sm leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="p-8 bg-gradient-to-r from-primary-500/10 to-primary-700/10 border border-primary-500/20 rounded-xl">
            <h3 className="text-2xl font-bold mb-4">Need help with a project?</h3>
            <p className="text-gray-400 mb-6 max-w-xl mx-auto">
              I'm available for freelance work and collaborations. Let's discuss how I can help you achieve your goals.
            </p>
            <motion.a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="inline-block px-8 py-4 bg-primary-600 hover:bg-primary-700 text-white font-semibold rounded-lg shadow-lg shadow-primary-500/25 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get In Touch
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
