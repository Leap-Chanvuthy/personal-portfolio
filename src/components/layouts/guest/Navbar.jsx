import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import { HiMenu, HiX } from 'react-icons/hi';
import LanguageSelector from '../../resusable/language-selector';
import ToggleTheme from '../../resusable/toggle-theme';

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const slideIn = {
  hidden: { x: '100%' },
  visible: { x: 0 },
  exit: { x: '100%' },
};

const NavBar = () => {
  const { t, i18n } = useTranslation('navbar');
  const path = useLocation().pathname;
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { path: '/', label: t('home') },
    { path: '/about', label: t('about') },
    { path: '/projects', label: t('project') },
    { path: '/blogs', label: t('blog') },
    { path: '/services', label: t('service') },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white dark:bg-slate-800">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/">
          <img
            src="/images/Leapchanvuthy.png"
            alt="Logo"
            className="h-10 rounded-md"
          />
        </Link>

        {/* Desktop nav */}
        <nav className={`hidden md:flex items-center gap-6 font-bold ${i18n.language === 'km' ? 'font-kh' : ''}`}>
          {navLinks.map((navLink, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6 }}
            >
              <Link
                to={navLink.path}
                className={`rounded-lg hover:text-primary transition-all duration-200 ${
                  path === navLink.path ? 'text-secondary' : ''
                }`}
              >
                {navLink.label}
              </Link>
            </motion.div>
          ))}

          <LanguageSelector />
          <ToggleTheme />
        </nav>

        {/* Mobile hamburger */}
        <div className="md:hidden flex items-center gap-2">
          <LanguageSelector />
          <ToggleTheme />
          <button onClick={() => setMenuOpen(true)} aria-label="Open Menu">
            <HiMenu size={28} />
          </button>
        </div>
      </div>

      {/* Mobile Slide Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="fixed inset-0 z-50 bg-black bg-opacity-50"
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <motion.div
              className="absolute top-0 right-0 w-3/4 sm:w-1/2 h-full bg-white dark:bg-slate-800 p-6 flex flex-col gap-6"
              variants={slideIn}
              initial="hidden"
              animate="visible"
              exit="exit"
              transition={{ type: 'tween', duration: 0.3 }}
            >
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-semibold">Menu</h2>
                <button onClick={() => setMenuOpen(false)} aria-label="Close Menu">
                  <HiX size={26} />
                </button>
              </div>

              <div className={`flex flex-col gap-4 font-bold ${i18n.language === 'km' ? 'font-kh' : ''}`}>
                {navLinks.map((navLink, index) => (
                  <Link
                    key={index}
                    to={navLink.path}
                    onClick={() => setMenuOpen(false)}
                    className={`rounded-lg hover:primary ${
                      path === navLink.path ? 'text-secondary' : ''
                    }`}
                  >
                    {navLink.label}
                  </Link>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default NavBar;
