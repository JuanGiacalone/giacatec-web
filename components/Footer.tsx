'use client';

import Link from 'next/link';
import { useLanguage } from './LanguageContext';
import Logo from './Logo';
import { Linkedin, Twitter, ArrowUpRight } from 'lucide-react';

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="relative bg-surface dark:bg-[#080C16] text-text overflow-hidden">
      {/* Aurora gradient at the top */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent opacity-40" />
      <div className="absolute top-0 left-1/4 w-96 h-48 bg-primary/5 rounded-full blur-[100px]" />
      <div className="absolute top-0 right-1/4 w-64 h-32 bg-accent/5 rounded-full blur-[80px]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          {/* Brand */}
          <div className="md:col-span-5">
            <Link href="/" className="flex items-center gap-2.5 mb-5 group">
              <Logo className="w-8 h-8 text-primary transition-transform group-hover:scale-110" />
              <span className="font-display font-bold text-xl tracking-tight text-gradient">Giacatec</span>
            </Link>
            <p className="text-text-muted text-sm leading-relaxed max-w-sm mb-6">
              {t.hero.subtitle}
            </p>
            <div className="flex items-center gap-3">
              <a
                href="https://linkedin.com/company/giacatec"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-surface-alt border border-border flex items-center justify-center text-text-muted hover:text-primary hover:border-primary/40 transition-all"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="https://twitter.com/giacatec"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-surface-alt border border-border flex items-center justify-center text-text-muted hover:text-primary hover:border-primary/40 transition-all"
                aria-label="Twitter"
              >
                <Twitter className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Links */}
          <div className="md:col-span-3">
            <h4 className="font-display font-semibold text-sm uppercase tracking-widest text-primary mb-5">Links</h4>
            <div className="flex flex-col gap-3 text-sm">
              {[
                { href: '/', label: t.nav.home },
                { href: '/#services', label: t.nav.services },
                { href: '/#about', label: t.nav.about },
                { href: '/contact', label: t.nav.contact },
                { href: '/privacy', label: t.nav.privacy },
                { href: '/terms', label: t.nav.terms },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-text-muted hover:text-primary transition-colors flex items-center gap-1 group/link"
                >
                  {link.label}
                  <ArrowUpRight className="w-3 h-3 opacity-0 -translate-y-0.5 group-hover/link:opacity-100 group-hover/link:translate-y-0 transition-all" />
                </Link>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div className="md:col-span-4">
            <h4 className="font-display font-semibold text-sm uppercase tracking-widest text-primary mb-5">{t.contact.title}</h4>
            <div className="flex flex-col gap-3 text-sm">
              <a href="mailto:hola@giacatec.com.ar" className="text-text-muted hover:text-accent transition-colors">
                hola@giacatec.com.ar
              </a>
              <a href="tel:+5492236694722" className="text-text-muted hover:text-accent transition-colors">
                +54 9 (223) 6694722
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-text-muted">
            &copy; {new Date().getFullYear()} Giacatec 🇦🇷 {t.footer.rights}
          </p>
          <div className="flex items-center gap-1">
            {[0, 1, 2].map((i) => (
              <div
                key={i}
                className="w-1.5 h-1.5 rounded-full bg-primary"
                style={{ opacity: 1 - i * 0.3 }}
              />
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
