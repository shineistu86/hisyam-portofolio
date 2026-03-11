import { motion } from 'framer-motion';
import { FiHeart } from 'react-icons/fi';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';
import { profile, socialLinks } from '../data/portfolio';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialIcons: Record<string, React.ElementType> = {
    github: FaGithub,
    linkedin: FaLinkedin,
    instagram: FaInstagram,
  };

  return (
    <footer className="bg-dark-950 py-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold gradient-text mb-4">DevPortfolio</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Transforming data into insights and building solutions through data analysis and automation.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {['Home', 'About', 'Skills', 'Portfolio', 'Contact'].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    onClick={(e) => {
                      e.preventDefault();
                      document.querySelector(`#${link.toLowerCase()}`)?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="text-gray-400 hover:text-primary-400 transition-colors text-sm"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="font-semibold mb-4">Connect With Me</h4>
            <div className="flex gap-4">
              {socialLinks.map((social) => {
                const IconComponent = socialIcons[social.icon];
                return (
                  <motion.a
                    key={social.platform}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-dark-800 rounded-lg border border-white/10 hover:border-primary-500/30 hover:bg-primary-500/10 transition-all"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    aria-label={social.platform}
                  >
                    {IconComponent && (
                      <IconComponent className="text-gray-400 hover:text-primary-400 transition-colors" size={20} />
                    )}
                  </motion.a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm text-center md:text-left">
              © {currentYear} <span className="gradient-text font-medium">{profile.name}</span>. All rights reserved.
            </p>

            <p className="text-gray-400 text-sm flex items-center gap-2">
              Made with <FiHeart className="text-red-500" /> and React
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
