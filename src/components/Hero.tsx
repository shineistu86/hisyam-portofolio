import { motion } from 'framer-motion';
import { FiMail, FiDownload, FiMapPin, FiArrowRight, FiCode, FiDatabase } from 'react-icons/fi';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';
import { profile, socialLinks } from '../data/portfolio';

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        duration: 0.8,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7 },
    },
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20"
    >
      {/* Animated Background Grid */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(14,165,233,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(14,165,233,0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />

        {/* Glowing Orbs */}
        <motion.div
          className="absolute top-20 left-10 w-72 h-72 bg-cyan-500/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-96 h-96 bg-blue-600/15 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{ duration: 10, repeat: Infinity }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-500/10 rounded-full blur-3xl"
          animate={{
            rotate: [0, 360],
          }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        />
      </div>

      <motion.div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <motion.div variants={itemVariants} className="order-2 lg:order-1">
            {/* Badge */}
            <motion.div
              className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/30 rounded-full mb-8 backdrop-blur-sm"
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
              </span>
              <span className="text-cyan-400 text-sm font-medium">Available for opportunities</span>
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
              variants={itemVariants}
            >
              <span className="text-white">Hello, I'm</span>
              <br />
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500 bg-clip-text text-transparent">
                {profile.nickname}
              </span>
            </motion.h1>

            {/* Profession */}
            <motion.p
              className="text-xl md:text-2xl text-gray-400 mb-6 font-light"
              variants={itemVariants}
            >
              {profile.profession}
            </motion.p>

            {/* Tagline */}
            <motion.p
              className="text-gray-300 mb-10 max-w-xl leading-relaxed text-lg"
              variants={itemVariants}
            >
              {profile.tagline}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-wrap gap-4 mb-10"
              variants={itemVariants}
            >
              <motion.a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="group px-8 py-4 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white font-semibold rounded-xl shadow-lg shadow-cyan-500/30 transition-all flex items-center gap-2"
                whileHover={{ scale: 1.05, boxShadow: '0 20px 40px rgba(14,165,233,0.4)' }}
                whileTap={{ scale: 0.95 }}
              >
                <FiMail /> Contact Me
                <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
              </motion.a>

              <motion.a
                href="https://drive.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-white/5 hover:bg-white/10 text-white font-semibold rounded-xl border border-white/20 backdrop-blur-sm transition-all flex items-center gap-2"
                whileHover={{ scale: 1.05, borderColor: 'rgba(255,255,255,0.4)' }}
                whileTap={{ scale: 0.95 }}
              >
                <FiDownload /> Download CV
              </motion.a>
            </motion.div>

            {/* Stats & Social */}
            <motion.div
              className="flex flex-wrap items-center gap-8"
              variants={itemVariants}
            >
              {/* Quick Stats */}
              <div className="flex gap-6">
                <div className="text-center">
                  <div className="flex items-center gap-2 text-cyan-400 mb-1">
                    <FiCode size={20} />
                    <span className="text-2xl font-bold">5+</span>
                  </div>
                  <span className="text-xs text-gray-500">Projects</span>
                </div>
                <div className="text-center">
                  <div className="flex items-center gap-2 text-blue-400 mb-1">
                    <FiDatabase size={20} />
                    <span className="text-2xl font-bold">10+</span>
                  </div>
                  <span className="text-xs text-gray-500">Technologies</span>
                </div>
              </div>

              {/* Divider */}
              <div className="w-px h-12 bg-white/10" />

              {/* Location */}
              <div className="flex items-center gap-2 text-gray-400">
                <FiMapPin />
                <span className="text-sm">{profile.location}</span>
              </div>

              {/* Social Links */}
              <div className="flex gap-3">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.platform}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-cyan-500/50 rounded-xl transition-all group"
                    whileHover={{ scale: 1.1, y: -3 }}
                    whileTap={{ scale: 0.95 }}
                    aria-label={social.platform}
                  >
                    {social.icon === 'github' && <FaGithub size={18} className="text-gray-400 group-hover:text-cyan-400 transition-colors" />}
                    {social.icon === 'linkedin' && <FaLinkedin size={18} className="text-gray-400 group-hover:text-blue-400 transition-colors" />}
                    {social.icon === 'instagram' && <FaInstagram size={18} className="text-gray-400 group-hover:text-pink-400 transition-colors" />}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Hero Image/Illustration */}
          <motion.div
            variants={itemVariants}
            className="order-1 lg:order-2 flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Main Circle with Gradient */}
              <motion.div
                className="relative w-72 h-72 md:w-96 md:h-96"
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              >
                {/* Outer Glow Ring */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-500 blur-2xl opacity-30" />

                {/* Animated Border Ring */}
                <div className="absolute inset-0 rounded-full border-2 border-dashed border-cyan-500/30 animate-spin-slow" style={{ animationDuration: '20s' }} />

                {/* Main Avatar Circle */}
                <div className="absolute inset-4 rounded-full bg-gradient-to-br from-slate-800 to-slate-900 border border-white/10 flex items-center justify-center overflow-hidden">
                  {/* Inner Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-indigo-500/10" />

                  {/* Avatar Content */}
                  <div className="relative text-center z-10">
                    <motion.div
                      className="w-24 h-24 md:w-32 md:h-32 mx-auto bg-gradient-to-br from-cyan-400 to-blue-600 rounded-full flex items-center justify-center shadow-2xl"
                      animate={{ boxShadow: ['0 0 30px rgba(14,165,233,0.3)', '0 0 60px rgba(14,165,233,0.6)', '0 0 30px rgba(14,165,233,0.3)'] }}
                      transition={{ duration: 3, repeat: Infinity }}
                    >
                      <span className="text-5xl md:text-6xl font-bold text-white">
                        {profile.nickname.charAt(0)}
                      </span>
                    </motion.div>
                    <motion.p
                      className="text-white font-semibold mt-4 text-lg"
                      animate={{ opacity: [0.7, 1, 0.7] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      {profile.nickname}
                    </motion.p>
                    <p className="text-gray-500 text-sm">{profile.experience} Experience</p>
                  </div>
                </div>

                {/* Floating Cards */}
                <motion.div
                  className="absolute -top-6 -right-6 px-5 py-3 bg-slate-800/90 backdrop-blur-xl border border-cyan-500/30 rounded-2xl shadow-xl"
                  animate={{ y: [0, -12, 0] }}
                  transition={{ duration: 4, repeat: Infinity, delay: 0.5 }}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center">
                      <FiCode className="text-white" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-400">Specialization</p>
                      <p className="text-sm font-semibold text-white">Web Dev</p>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  className="absolute -bottom-6 -left-6 px-5 py-3 bg-slate-800/90 backdrop-blur-xl border border-blue-500/30 rounded-2xl shadow-xl"
                  animate={{ y: [0, 12, 0] }}
                  transition={{ duration: 4, repeat: Infinity, delay: 1 }}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-xl flex items-center justify-center">
                      <FiDatabase className="text-white" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-400">Data</p>
                      <p className="text-sm font-semibold text-white">Analysis</p>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
