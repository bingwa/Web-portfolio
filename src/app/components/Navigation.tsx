'use client';

import { useEffect, useState } from 'react';
import GooeyNav from '@/components/ui/gooey-nav';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navigation() {
  const [showNav, setShowNav] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      if (scrollY < window.innerHeight * 0.9) {
        setShowNav(true);
      } else {
        setShowNav(false);
        setIsMobileMenuOpen(false); // Close mobile menu when scrolling past hero
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Projects', href: '#projects' },
    { label: 'Testimonials', href: '#testimonials' },
    { label: 'Contact', href: '#contact' }
  ];

  const handleMobileNavClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      {/* Desktop Navigation */}
      <AnimatePresence>
        {showNav && (
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="fixed top-6 left-1/2 -translate-x-1/2 z-50 hidden md:block"
          >
            <GooeyNav items={navItems} />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile Menu Button - Only shows when showNav is true */}
      <AnimatePresence>
        {showNav && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.3 }}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="fixed top-6 right-6 z-50 md:hidden p-3 bg-white/20 backdrop-blur-lg border border-white/30 rounded-xl shadow-lg"
            aria-label="Toggle menu"
          >
            <motion.div
              animate={isMobileMenuOpen ? 'open' : 'closed'}
              className="w-6 h-5 flex flex-col justify-between"
            >
              <motion.span
                variants={{
                  closed: { rotate: 0, y: 0 },
                  open: { rotate: 45, y: 8 }
                }}
                className="w-full h-0.5 bg-white rounded-full"
              />
              <motion.span
                variants={{
                  closed: { opacity: 1 },
                  open: { opacity: 0 }
                }}
                className="w-full h-0.5 bg-white rounded-full"
              />
              <motion.span
                variants={{
                  closed: { rotate: 0, y: 0 },
                  open: { rotate: -45, y: -8 }
                }}
                className="w-full h-0.5 bg-white rounded-full"
              />
            </motion.div>
          </motion.button>
        )}
      </AnimatePresence>

    
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
          
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 md:hidden"
            />

          
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 w-64 bg-slate-900/95 backdrop-blur-xl border-l border-slate-800/50 z-50 md:hidden shadow-2xl"
            >
              <div className="flex flex-col h-full p-8 pt-20">
                <nav className="flex-1">
                  <ul className="space-y-6">
                    {navItems.map((item, index) => (
                      <motion.li
                        key={item.href}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                      >
                        <a
                          href={item.href}
                          onClick={handleMobileNavClick}
                          className="block text-xl font-heading text-slate-200 hover:text-blue-400 transition-colors py-2"
                        >
                          {item.label}
                        </a>
                      </motion.li>
                    ))}
                  </ul>
                </nav>

                <div className="pt-6 border-t border-slate-800/50">
                  <p className="text-sm text-slate-500 font-body">
                    © 2025 Brian Munyao
                  </p>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
