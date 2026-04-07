'use client';

import Link from 'next/link';
import { useLanguage } from './LanguageContext';
import Logo from './Logo';
import { motion, AnimatePresence } from 'motion/react';
import ThemeToggle from './ThemeToggle';
import { Menu, X, ArrowRight } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function Navbar() {
  const { lang, setLang, t } = useLanguage();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  const navLinks = [
    { href: '/', label: t.nav.home },
    { href: '/#services', label: t.nav.services },
    { href: '/#about', label: t.nav.about },
    { href: '/contact', label: t.nav.contact },
  ];

  return (
    <>
      <motion.header
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className={`sticky top-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'glass shadow-lg'
            : 'bg-bg/60 backdrop-blur-sm'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2.5 group">
            <Logo className="w-9 h-9 text-primary transition-transform duration-300 group-hover:scale-110" />
            <span className="font-display font-bold text-2xl tracking-tight text-gradient">Giacatec</span>
          </Link>

          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="relative px-4 py-2 text-sm font-medium text-text-muted hover:text-primary transition-colors duration-300 rounded-lg hover:bg-primary/5"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <ThemeToggle />
            <select
              value={lang}
              onChange={(e) => setLang(e.target.value as 'es' | 'en')}
              className="bg-surface border border-border text-text rounded-lg px-2.5 py-1.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 cursor-pointer transition-all"
            >
              <option value="es" className="bg-surface text-text">🇦🇷</option>
              <option value="en" className="bg-surface text-text">🇺🇸</option>
            </select>
            <Link
              href="/contact"
              className="hidden md:inline-flex neon-btn px-5 py-2.5 rounded-full text-sm font-semibold items-center gap-2"
            >
              {t.hero.cta}
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-primary/10 transition-colors"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 md:hidden"
              onClick={() => setMobileOpen(false)}
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 30, stiffness: 300 }}
              className="fixed top-0 right-0 bottom-0 w-[280px] bg-surface z-50 md:hidden shadow-2xl flex flex-col"
            >
              <div className="flex items-center justify-between p-5 border-b border-border">
                <span className="font-display font-bold text-lg text-gradient">Menu</span>
                <button onClick={() => setMobileOpen(false)} className="p-2 rounded-lg hover:bg-primary/10">
                  <X className="w-5 h-5" />
                </button>
              </div>
              <nav className="flex flex-col p-5 gap-1 flex-grow">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.08 }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setMobileOpen(false)}
                      className="block px-4 py-3 text-base font-medium text-text hover:text-primary hover:bg-primary/5 rounded-xl transition-all"
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
              </nav>
              <div className="p-5 border-t border-border">
                <Link
                  href="/contact"
                  onClick={() => setMobileOpen(false)}
                  className="neon-btn w-full py-3 rounded-xl text-center font-semibold flex items-center justify-center gap-2"
                >
                  {t.hero.cta}
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
