'use client';

import React, { useState, useEffect, useRef } from 'react';
import { useLanguage } from '@/components/LanguageContext';
import { motion, AnimatePresence, useInView } from 'motion/react';
import Link from 'next/link';
import { ArrowRight, Code, Cloud, Sparkles, ShieldCheck, Mail, Users, Target, Lightbulb, Award, HeartHandshake, TrendingUp, Zap, FileText, Video, HardDrive, Search } from 'lucide-react';
import Logo from '@/components/Logo';

/* ─── Animated Counter ─── */
function AnimatedCounter({ value, suffix = '' }: { value: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const duration = 2000;
    const step = Math.ceil(value / (duration / 16));
    const timer = setInterval(() => {
      start += step;
      if (start >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, 16);
    return () => clearInterval(timer);
  }, [isInView, value]);

  return <span ref={ref}>{count}{suffix}</span>;
}

export default function Home() {
  const { t, lang } = useLanguage();
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 2200);
    return () => clearTimeout(timer);
  }, []);

  const workspaceApps = [
    { id: 'gmail', icon: <Mail className="w-6 h-6" />, data: t.workspace.apps.gmail },
    { id: 'drive', icon: <HardDrive className="w-6 h-6" />, data: t.workspace.apps.drive },
    { id: 'docs', icon: <FileText className="w-6 h-6" />, data: t.workspace.apps.docs },
    { id: 'meet', icon: <Video className="w-6 h-6" />, data: t.workspace.apps.meet },
  ];

  return (
    <>
      {/* ═══ SPLASH SCREEN ═══ */}
      <AnimatePresence>
        {showSplash && (
          <motion.div
            key="splash"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: 'easeInOut' }}
            className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-bg"
          >
            {/* Aurora blobs */}
            <div className="absolute inset-0 overflow-hidden">
              <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[120px] animate-glow-pulse" />
              <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-accent/15 rounded-full blur-[100px] animate-glow-pulse" style={{ animationDelay: '1s' }} />
            </div>

            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 1.5, opacity: 0, filter: 'blur(20px)' }}
              transition={{ duration: 0.8, ease: 'easeInOut' }}
              className="relative flex flex-col items-center"
            >
              <div className="flex items-center gap-4 mb-8">
                <Logo className="w-16 h-16 text-primary" />
                <span className="font-display font-bold text-5xl tracking-tight text-gradient">Giacatec</span>
              </div>
              <div className="relative w-10 h-10">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ repeat: Infinity, duration: 1.2, ease: "linear" }}
                  className="absolute inset-0 border-[3px] border-primary/20 border-t-primary rounded-full"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {!showSplash && (
        <motion.div
          initial={{ opacity: 0, filter: 'blur(10px)', scale: 0.98 }}
          animate={{ opacity: 1, filter: 'blur(0px)', scale: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="flex flex-col items-center w-full overflow-x-hidden"
        >
          {/* ═══ HERO SECTION ═══ */}
          <section aria-label="Hero - Giacatec IT Agency" className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-36 flex flex-col items-center text-center">
            {/* Background decorations */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <div className="absolute top-20 left-10 w-72 h-72 bg-primary/8 rounded-full blur-[100px]" />
              <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/6 rounded-full blur-[120px]" />
              {/* Floating geometric shapes */}
              <motion.div
                animate={{ y: [-10, 10, -10], rotate: [0, 5, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute top-32 right-[15%] w-16 h-16 border-2 border-primary/20 rounded-2xl rotate-12"
              />
              <motion.div
                animate={{ y: [10, -10, 10], rotate: [0, -5, 0] }}
                transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute top-48 left-[10%] w-10 h-10 bg-accent/10 rounded-full"
              />
              <motion.div
                animate={{ y: [-8, 12, -8] }}
                transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute bottom-32 left-[20%] w-8 h-8 border-2 border-accent/20 rotate-45"
              />
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="relative max-w-4xl"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.1, duration: 0.5 }}
                className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-1.5 rounded-full text-sm font-semibold mb-8 border border-primary/20"
              >
                <Sparkles className="w-3.5 h-3.5" />
                <span>IT Agency & AI Solutions</span>
              </motion.div>

              <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-8 leading-[1.05]">
                <span className="text-gradient">{t.hero.title}</span>
              </h1>
              <p className="text-lg md:text-xl text-text-muted mb-4 max-w-2xl mx-auto leading-relaxed">
                {t.hero.subtitle}
              </p>
              <p className="text-lg md:text-xl text-text-muted mb-12 max-w-2xl mx-auto leading-relaxed">
                {t.hero.subtitle2}
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link href="/contact" className="neon-btn px-8 py-4 rounded-full font-semibold flex items-center gap-2 text-lg group">
                  {t.hero.cta}
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link href="#workspace" className="px-8 py-4 rounded-full font-semibold border border-border text-text hover:border-primary/50 hover:bg-primary/5 transition-all flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-accent" />
                  Google Workspace + Gemini AI
                </Link>
              </div>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.7 }}
              className="mt-20 grid grid-cols-3 gap-8 md:gap-16"
            >
              {[
                { value: 100, suffix: '+', label: lang === 'es' ? 'Proyectos' : 'Projects' },
                { value: 99, suffix: '%', label: lang === 'es' ? 'Satisfacción' : 'Satisfaction' },
                { value: 24, suffix: '/7', label: lang === 'es' ? 'Soporte' : 'Support' },
              ].map((stat, i) => (
                <div key={i} className="text-center">
                  <div className="font-display font-bold text-3xl md:text-5xl text-gradient mb-1">
                    <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                  </div>
                  <div className="text-xs md:text-sm text-text-muted uppercase tracking-wider font-medium">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </section>

          {/* ═══ FREE CONSULTATION CTA BANNER ═══ */}
          <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative rounded-3xl overflow-hidden"
            >
              {/* Gradient background */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary-light to-accent opacity-90" />
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(255,255,255,0.15),transparent_70%)]" />

              {/* Floating orbs */}
              <motion.div
                animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.4, 0.2] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full blur-[80px] -mr-20 -mt-20"
              />
              <motion.div
                animate={{ scale: [1, 1.3, 1], opacity: [0.1, 0.2, 0.1] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                className="absolute bottom-0 left-0 w-48 h-48 bg-accent rounded-full blur-[60px] -ml-10 -mb-10"
              />

              <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8 p-8 md:p-12 text-left">
                <div className="flex-1">
                  <div className="inline-flex items-center gap-2 bg-white/15 text-white px-3 py-1 rounded-full text-xs font-semibold mb-4 border border-white/20">
                    <Sparkles className="w-3 h-3" />
                    <span>{t.hero.freeConsultation}</span>
                  </div>
                  <h3 className="text-3xl md:text-4xl font-display font-bold text-white mb-3">
                    {t.hero.freeConsultation}
                  </h3>
                  <p className="text-white/80 text-lg max-w-xl">
                    {t.hero.freeConsultationDesc}
                  </p>
                </div>
                <Link href="/contact" className="shrink-0 bg-white text-primary px-8 py-4 rounded-full font-semibold hover:bg-white/90 hover:shadow-lg hover:shadow-white/20 transition-all flex items-center gap-2 group/btn">
                  {t.hero.freeConsultationBtn}
                  <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.div>
          </section>

          {/* ═══ SERVICES SECTION ═══ */}
          <section id="services" aria-label="Our IT Services" className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16 max-w-3xl mx-auto"
            >
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-1.5 rounded-full text-sm font-semibold mb-6 border border-primary/20">
                <Code className="w-3.5 h-3.5" />
                <span>{lang === 'es' ? 'Servicios' : 'Services'}</span>
              </div>
              <h2 className="font-display text-4xl md:text-5xl font-bold text-gradient mb-6">{t.services.title}</h2>
              <p className="text-lg text-text-muted">{t.services.subtitle}</p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <ServiceCard
                icon={<Mail className="w-7 h-7" />}
                title={t.services.workspace.title}
                problem={t.services.workspace.problem}
                benefit={t.services.workspace.benefit}
                delay={0.1}
                color="primary"
              />
              <ServiceCard
                icon={<Sparkles className="w-7 h-7" />}
                title={t.services.ai.title}
                problem={t.services.ai.problem}
                benefit={t.services.ai.benefit}
                delay={0.15}
                color="accent"
              />
              <ServiceCard
                icon={<Cloud className="w-7 h-7" />}
                title={t.services.cloud.title}
                problem={t.services.cloud.problem}
                benefit={t.services.cloud.benefit}
                delay={0.2}
                color="primary"
              />
              <ServiceCard
                icon={<ShieldCheck className="w-7 h-7" />}
                title={t.services.cybersecurity.title}
                problem={t.services.cybersecurity.problem}
                benefit={t.services.cybersecurity.benefit}
                delay={0.25}
                color="accent"
              />
              <ServiceCard
                icon={<Code className="w-7 h-7" />}
                title={t.services.custom.title}
                problem={t.services.custom.problem}
                benefit={t.services.custom.benefit}
                delay={0.3}
                color="primary"
              />
              <ServiceCard
                icon={<Search className="w-7 h-7" />}
                title={t.services.seo.title}
                problem={t.services.seo.problem}
                benefit={t.services.seo.benefit}
                delay={0.35}
                color="accent"
              />
            </div>
          </section>

          {/* ═══ WHY CHOOSE US SECTION ═══ */}
          <section aria-label="Why Choose Us" className="w-full relative overflow-hidden py-24">
            {/* Dark mesh background */}
            <div className="absolute inset-0 bg-surface-alt dark:bg-[#0D1220]" />
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[150px]" />

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-16 max-w-3xl mx-auto"
              >
                <div className="inline-flex items-center gap-2 bg-accent/10 text-accent px-4 py-1.5 rounded-full text-sm font-semibold mb-6 border border-accent/20">
                  <Award className="w-3.5 h-3.5" />
                  <span>{lang === 'es' ? 'Diferencial' : 'Our Edge'}</span>
                </div>
                <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
                  <span className="text-gradient">{t.whyUs.title}</span>
                </h2>
                <p className="text-lg text-text-muted">{t.whyUs.subtitle}</p>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <WhyUsCard icon={<Award className="w-7 h-7" />} title={t.whyUs.expertise.title} desc={t.whyUs.expertise.desc} delay={0.1} />
                <WhyUsCard icon={<HeartHandshake className="w-7 h-7" />} title={t.whyUs.customer.title} desc={t.whyUs.customer.desc} delay={0.15} />
                <WhyUsCard icon={<TrendingUp className="w-7 h-7" />} title={t.whyUs.trackRecord.title} desc={t.whyUs.trackRecord.desc} delay={0.2} />
                <WhyUsCard icon={<Zap className="w-7 h-7" />} title={t.whyUs.agile.title} desc={t.whyUs.agile.desc} delay={0.25} />
              </div>
            </div>
          </section>

          {/* ═══ WORKSPACE CTA SECTION ═══ */}
          <section id="workspace" aria-label="Google Workspace Integration" className="w-full relative overflow-hidden py-24">
            <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/90 to-accent/80" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(0,212,170,0.3),transparent_60%)]" />

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7 }}
                >
                  <div className="inline-flex items-center gap-2 bg-white/15 text-white px-4 py-2 rounded-full text-sm font-semibold mb-6 border border-white/20">
                    <Sparkles className="w-4 h-4 text-accent-light" />
                    AI-Powered Workflow
                  </div>
                  <h2 className="font-display text-4xl md:text-5xl font-bold mb-6 leading-tight text-white">
                    {t.workspace.title}
                  </h2>
                  <p className="text-lg text-white/80 mb-8 leading-relaxed">
                    {t.workspace.desc}
                  </p>
                  <Link href="/contact" className="bg-white text-primary px-8 py-4 rounded-full font-semibold hover:bg-white/90 transition-all inline-flex items-center gap-2 group shadow-lg">
                    {t.workspace.cta}
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: 0.2 }}
                  className="relative"
                >
                  <div className="grid grid-cols-2 gap-4">
                    {workspaceApps.map((app, i) => (
                      <motion.div
                        key={app.id}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 + i * 0.1 }}
                        className="bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-2xl flex flex-col gap-3 hover:bg-white/20 transition-all group"
                      >
                        <div className="w-12 h-12 rounded-xl bg-white/15 flex items-center justify-center text-white group-hover:scale-110 transition-transform">
                          {app.icon}
                        </div>
                        <div>
                          <h4 className="font-display font-semibold text-white text-lg">{app.data.name}</h4>
                          <div className="flex items-center gap-1.5 mt-1">
                            <Sparkles className="w-3 h-3 text-accent-light" />
                            <p className="text-white/70 text-xs">{app.data.feature}</p>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </div>
            </div>
          </section>

          {/* ═══ WORKSPACE AI SHOWCASE ═══ */}
          <section aria-label="Workspace AI Showcase" className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16 max-w-3xl mx-auto"
            >
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-1.5 rounded-full text-sm font-semibold mb-6 border border-primary/20">
                <Sparkles className="w-3.5 h-3.5" />
                Google Workspace + Gemini AI
              </div>
              <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
                <span className="text-gradient">
                  {lang === 'es' ? 'Potencia cada aplicación con IA' : 'Power every app with AI'}
                </span>
              </h2>
              <p className="text-lg text-text-muted">
                {lang === 'es'
                  ? 'Descubre cómo la Inteligencia Artificial se integra directamente en las herramientas que tu equipo ya utiliza todos los días.'
                  : 'Discover how Artificial Intelligence integrates directly into the tools your team already uses every day.'}
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {workspaceApps.map((app, i) => (
                <motion.div
                  key={`showcase-${app.id}`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="glass-card glow-border p-8 rounded-2xl group"
                >
                  <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors text-primary">
                    {React.cloneElement(app.icon as React.ReactElement<any>, { className: "w-7 h-7" })}
                  </div>
                  <h3 className="font-display text-2xl font-semibold mb-3">{app.data.name}</h3>
                  <div className="flex items-center gap-2 text-accent font-medium mb-4 text-sm">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>{app.data.feature}</span>
                  </div>
                  <p className="text-text-muted text-sm leading-relaxed">
                    {lang === 'es'
                      ? `Optimiza tu flujo de trabajo en ${app.data.name} utilizando ${app.data.feature.toLowerCase()} impulsado por IA para ahorrar tiempo y mejorar resultados.`
                      : `Optimize your workflow in ${app.data.name} using AI-powered ${app.data.feature.toLowerCase()} to save time and improve results.`}
                  </p>
                </motion.div>
              ))}
            </div>
          </section>

          {/* ═══ ABOUT US SECTION ═══ */}
          <section id="about" aria-label="About Giacatec" className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
              >
                <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-1.5 rounded-full text-sm font-semibold mb-6 border border-primary/20">
                  <Users className="w-3.5 h-3.5" />
                  <span>{lang === 'es' ? 'Nosotros' : 'About Us'}</span>
                </div>
                <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
                  <span className="text-gradient">{t.about.title}</span>
                </h2>
                <p className="text-lg text-text-muted leading-relaxed mb-12">
                  {t.about.history}
                </p>

                <h3 className="font-display text-2xl font-bold mb-6 text-gradient">{t.about.teamTitle}</h3>
                <p className="text-lg text-text-muted leading-relaxed mb-8">
                  {t.about.teamDesc}
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="glass-card p-8 md:p-10 rounded-2xl"
              >
                <h3 className="font-display text-2xl font-bold text-gradient mb-8">{t.about.valuesTitle}</h3>
                <div className="space-y-8">
                  {[
                    { icon: <Lightbulb className="w-6 h-6" />, title: t.about.values.innovation.title, desc: t.about.values.innovation.desc },
                    { icon: <Target className="w-6 h-6" />, title: t.about.values.excellence.title, desc: t.about.values.excellence.desc },
                    { icon: <Users className="w-6 h-6" />, title: t.about.values.partnership.title, desc: t.about.values.partnership.desc },
                  ].map((value, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 + i * 0.1 }}
                      className="flex gap-4 group"
                    >
                      <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center shrink-0 text-accent group-hover:bg-accent/20 group-hover:scale-110 transition-all">
                        {value.icon}
                      </div>
                      <div>
                        <h4 className="font-display font-semibold text-xl mb-2">{value.title}</h4>
                        <p className="text-text-muted">{value.desc}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </section>
        </motion.div>
      )}
    </>
  );
}

/* ─── Service Card Component ─── */
function ServiceCard({ icon, title, problem, benefit, delay, color }: { icon: React.ReactNode; title: string; problem: string; benefit: string; delay: number; color: 'primary' | 'accent' }) {
  const { lang } = useLanguage();
  const colorClass = color === 'primary' ? 'text-primary bg-primary/10 group-hover:bg-primary/20' : 'text-accent bg-accent/10 group-hover:bg-accent/20';

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="h-full"
    >
      <div className="glass-card glow-border p-8 rounded-2xl flex flex-col h-full group">
        <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 transition-all group-hover:scale-110 ${colorClass}`}>
          {icon}
        </div>
        <h3 className="font-display text-xl font-semibold mb-5">{title}</h3>
        <div className="flex flex-col gap-4 flex-grow">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-red-400 dark:text-red-300 mb-1 block">
              {lang === 'es' ? 'El Problema' : 'The Problem'}
            </span>
            <p className="text-sm text-text-muted leading-relaxed">{problem}</p>
          </div>
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-accent mb-1 block">
              {lang === 'es' ? 'La Solución' : 'The Solution'}
            </span>
            <p className="text-sm leading-relaxed font-medium">{benefit}</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

/* ─── Why Us Card Component ─── */
function WhyUsCard({ icon, title, desc, delay }: { icon: React.ReactNode; title: string; desc: string; delay: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="glass-card glow-border flex flex-col items-center text-center p-8 rounded-2xl group"
    >
      <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center mb-6 text-accent group-hover:scale-110 group-hover:-rotate-3 transition-all duration-300">
        {icon}
      </div>
      <h3 className="font-display text-xl font-semibold mb-3">{title}</h3>
      <p className="text-text-muted text-sm leading-relaxed">{desc}</p>
    </motion.div>
  );
}
