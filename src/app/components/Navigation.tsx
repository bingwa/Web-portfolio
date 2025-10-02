'use client';

import { useEffect, useState } from 'react';
import GooeyNav from '@/components/ui/gooey-nav';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navigation() {
  const [showNav, setShowNav] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;

      if (scrollY < window.innerHeight * 0.9) {
        setShowNav(true);
      } else {
        setShowNav(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // initialize on mount

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Projects', href: '#projects' },
    { label: 'Testimonials', href: '#testimonials' },
    { label: 'Contact', href: '#contact' }
  ];

  return (
    <AnimatePresence>
      {showNav && (
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
          className="fixed top-6 left-1/2 -translate-x-1/2 z-50"
        >
          <GooeyNav
            items={navItems}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
