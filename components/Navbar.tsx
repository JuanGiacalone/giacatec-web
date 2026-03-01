'use client';

import Link from 'next/link';
import { useLanguage } from './LanguageContext';
import Logo from './Logo';
import { motion } from 'motion/react';
import ThemeToggle from './ThemeToggle';

export default function Navbar() {
  const { lang, setLang, t } = useLanguage();

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="sticky top-0 z-50 bg-pantone-bg/80 backdrop-blur-md border-b border-pantone-text/10 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <Logo className="w-8 h-8 text-pantone-blue dark:text-pantone-coral" />
          <span className="font-outfit font-bold text-2xl tracking-tight text-pantone-blue dark:text-pantone-text">Giacatec</span>
        </Link>

        <nav className="hidden md:flex items-center gap-8 font-medium text-sm">
          <Link href="/" className="text-pantone-text/80 hover:text-pantone-coral transition-colors">{t.nav.home}</Link>
          <Link href="/#services" className="text-pantone-text/80 hover:text-pantone-coral transition-colors">{t.nav.services}</Link>
          <Link href="/#about" className="text-pantone-text/80 hover:text-pantone-coral transition-colors">{t.nav.about}</Link>
          <Link href="/contact" className="text-pantone-text/80 hover:text-pantone-coral transition-colors">{t.nav.contact}</Link>
        </nav>

        <div className="flex items-center gap-4">
          <ThemeToggle />
          <select
            value={lang}
            onChange={(e) => setLang(e.target.value as 'es' | 'en')}
            className="bg-transparent border border-pantone-text/20 text-pantone-text rounded-md px-2 py-1 text-sm focus:outline-none focus:border-pantone-blue cursor-pointer"
          >
            <option value="es" className="bg-pantone-bg text-pantone-text">🇦🇷</option>
            <option value="en" className="bg-pantone-bg text-pantone-text">🇺🇸</option>
          </select>
          <Link href="/contact" className="hidden md:inline-flex bg-pantone-coral text-white px-5 py-2 rounded-full text-sm font-medium hover:bg-[#ff5a4a] hover:shadow-md hover:shadow-pantone-coral/30 transition-all">
            {t.hero.cta}
          </Link>
        </div>
      </div>
    </motion.header>
  );
}
