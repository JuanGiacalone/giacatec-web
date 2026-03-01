'use client';

import Link from 'next/link';
import { useLanguage } from './LanguageContext';
import Logo from './Logo';
import { Linkedin, Twitter } from 'lucide-react';

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-pantone-text dark:bg-black text-pantone-bg dark:text-white py-12 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <Link href="/" className="flex items-center gap-2 mb-4">
            <Logo className="w-6 h-6 text-pantone-coral" />
            <span className="font-outfit font-bold text-xl tracking-tight">Giacatec</span>
          </Link>
          <p className="text-white/70 text-sm max-w-xs">
            {t.hero.subtitle}
          </p>
          <div className="flex items-center gap-4 mt-6">
            <a href="https://linkedin.com/company/giacatec" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-pantone-coral transition-colors" aria-label="LinkedIn">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="https://twitter.com/giacatec" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-pantone-coral transition-colors" aria-label="Twitter">
              <Twitter className="w-5 h-5" />
            </a>
          </div>
        </div>
        <div className="flex flex-col gap-2 text-sm">
          <h4 className="font-outfit font-semibold text-lg mb-2">Links</h4>
          <Link href="/" className="text-white/70 hover:text-pantone-coral transition-colors">{t.nav.home}</Link>
          <Link href="/#services" className="text-white/70 hover:text-pantone-coral transition-colors">{t.nav.services}</Link>
          <Link href="/#about" className="text-white/70 hover:text-pantone-coral transition-colors">{t.nav.about}</Link>
          <Link href="/contact" className="text-white/70 hover:text-pantone-coral transition-colors">{t.nav.contact}</Link>
          <Link href="/privacy" className="text-white/70 hover:text-pantone-coral transition-colors">{t.nav.privacy}</Link>
          <Link href="/terms" className="text-white/70 hover:text-pantone-coral transition-colors">{t.nav.terms}</Link>
        </div>
        <div className="flex flex-col gap-2 text-sm">
          <h4 className="font-outfit font-semibold text-lg mb-2">{t.contact.title}</h4>
          <p className="text-white/70">hola@giacatec.com.ar</p>
          <p className="text-white/70">+54 9 (223) 6694722</p>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 pt-8 border-t border-white/10 text-center text-sm text-white/50">
        &copy; {new Date().getFullYear()} Giacatec 🇦🇷 {t.footer.rights}
      </div>
    </footer>
  );
}
