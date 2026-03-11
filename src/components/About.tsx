import { motion } from 'framer-motion';
import { FiUser, FiCode, FiBriefcase, FiAward, FiCheck } from 'react-icons/fi';
import { profile, statistics } from '../data/portfolio';

const About = () => {
  const stats = statistics;

  return (
    <section id="about" className="py-24 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-cyan-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-2 bg-cyan-500/10 border border-cyan-500/20 rounded-full text-cyan-400 text-sm font-medium mb-4"
          >
            About Me
          </motion.span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Get to know <span className="gradient-text">more about me</span>
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500 mx-auto rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative">
              {/* Decorative frame */}
              <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl blur opacity-30" />

              <div className="relative bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl border border-white/10 overflow-hidden">
                <div className="aspect-square flex flex-col items-center justify-center p-8">
                  {/* Avatar Icon */}
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="w-32 h-32 bg-gradient-to-br from-cyan-400 via-blue-500 to-indigo-500 rounded-2xl flex items-center justify-center mb-6 shadow-2xl rotate-12 hover:rotate-0 transition-transform duration-500"
                  >
                    <FiUser size={64} className="text-white -rotate-12 hover:rotate-0 transition-transform duration-500" />
                  </motion.div>

                  <h3 className="text-2xl font-bold text-white mb-2">{profile.name}</h3>
                  <p className="text-cyan-400 text-center mb-4 font-medium">{profile.profession}</p>

                  {/* Languages */}
                  <div className="flex flex-wrap gap-2 justify-center mb-6">
                    {profile.languages.map((lang) => (
                      <span
                        key={lang}
                        className="px-3 py-1.5 bg-cyan-500/10 border border-cyan-500/20 rounded-lg text-sm text-cyan-300"
                      >
                        {lang}
                      </span>
                    ))}
                  </div>

                  {/* What I Do */}
                  <div className="w-full space-y-3">
                    {[
                      { icon: FiCode, text: 'Web Development', color: 'text-cyan-400' },
                      { icon: FiBriefcase, text: 'Data Analysis', color: 'text-blue-400' },
                      { icon: FiAward, text: 'System Design', color: 'text-indigo-400' },
                    ].map((item, i) => (
                      <motion.div
                        key={item.text}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: 0.1 * i }}
                        className="flex items-center gap-3 p-3 bg-slate-800/50 rounded-lg border border-white/5"
                      >
                        <div className={`p-2 bg-slate-700 rounded-lg ${item.color}`}>
                          <item.icon size={18} />
                        </div>
                        <span className="text-gray-300">{item.text}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 rounded-full mb-6">
              <FiUser className="text-cyan-400" size={18} />
              <span className="text-cyan-400 text-sm font-medium">Introduction</span>
            </div>

            <h3 className="text-3xl font-bold mb-6">
              Hello! I'm <span className="gradient-text">{profile.nickname}</span>
            </h3>

            <p className="text-gray-300 mb-8 leading-relaxed text-lg">
              {profile.description}
            </p>

            {/* Features Grid */}
            <div className="grid grid-cols-2 gap-4 mb-10">
              {[
                { icon: FiCode, title: 'Web Development', desc: 'React, Laravel, Tailwind' },
                { icon: FiBriefcase, title: 'Data Analysis', desc: 'Python, RapidMiner, Power BI' },
                { icon: FiAward, title: 'Experience', desc: profile.experience },
                { icon: FiUser, title: 'Education', desc: 'Information Systems' },
              ].map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="group p-5 bg-slate-800/50 rounded-xl border border-white/5 hover:border-cyan-500/30 transition-all card-hover"
                >
                  <div className="p-3 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-lg w-fit mb-3 group-hover:scale-110 transition-transform">
                    <item.icon className="text-cyan-400" size={24} />
                  </div>
                  <h4 className="font-semibold mb-1 text-white">{item.title}</h4>
                  <p className="text-sm text-gray-400">{item.desc}</p>
                </motion.div>
              ))}
            </div>

            {/* Statistics */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="text-center p-5 bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl border border-white/5 card-hover"
                >
                  <div className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-1">
                    {stat.value}
                  </div>
                  <div className="text-xs text-gray-400">{stat.label}</div>
                </motion.div>
              ))}
            </div>

            {/* Download CV Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mt-10"
            >
              <motion.a
                href="https://drive.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white font-semibold rounded-xl shadow-lg shadow-cyan-500/25 transition-all"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FiCheck size={20} />
                Download My CV
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
