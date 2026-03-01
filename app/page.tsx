'use client';

import React, { useState, useEffect } from 'react';
import { useLanguage } from '@/components/LanguageContext';
import { motion, AnimatePresence } from 'motion/react';
import Link from 'next/link';
import { ArrowRight, Code, Cloud, Sparkles, ShieldCheck, Mail, Users, Target, Lightbulb, Award, HeartHandshake, TrendingUp, Zap, FileText, Video, HardDrive, Search } from 'lucide-react';
import Logo from '@/components/Logo';

export default function Home() {
  const { t, lang } = useLanguage();
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  const workspaceApps = [
    { id: 'gmail', icon: <Mail className="w-6 h-6 text-white" />, data: t.workspace.apps.gmail },
    { id: 'drive', icon: <HardDrive className="w-6 h-6 text-white" />, data: t.workspace.apps.drive },
    { id: 'docs', icon: <FileText className="w-6 h-6 text-white" />, data: t.workspace.apps.docs },
    { id: 'meet', icon: <Video className="w-6 h-6 text-white" />, data: t.workspace.apps.meet },
  ];

  return (
    <>
      <AnimatePresence>
        {showSplash && (
          <motion.div
            key="splash"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: 'easeInOut' }}
            className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-pantone-bg"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 5, opacity: 0, filter: 'blur(10px)' }}
              transition={{ duration: 0.8, ease: 'easeInOut' }}
              className="flex flex-col items-center"
            >
              <div className="flex items-center gap-4 mb-8">
                <Logo className="w-16 h-16 text-pantone-blue" />
                <span className="font-outfit font-bold text-5xl tracking-tight text-pantone-text">Giacatec</span>
              </div>
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ repeat: 999999, duration: 1, ease: "linear" }}
                className="w-8 h-8 border-4 border-pantone-blue/20 border-t-pantone-blue rounded-full"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {!showSplash && (
        <motion.div
          initial={{ opacity: 0, filter: 'blur(10px)', scale: 0.98 }}
          animate={{ opacity: 1, filter: 'blur(0px)', scale: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="flex flex-col items-center w-full"
        >
          {/* Hero Section */}
          <section aria-label="Hero - Giacatec IT Agency" className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 flex flex-col items-center text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl"
            >
              <h1 className="font-outfit text-5xl md:text-7xl font-bold tracking-tight text-pantone-blue dark:text-white mb-6 leading-tight">
                {t.hero.title}
              </h1>
              <p className="text-lg md:text-xl text-pantone-text/80 dark:text-white/80 mb-10 max-w-2xl mx-auto">
                {t.hero.subtitle}
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link href="/contact" className="bg-pantone-blue dark:bg-pantone-coral text-white px-8 py-4 rounded-full font-medium hover:bg-pantone-blue/90 dark:hover:bg-pantone-coral/90 transition-all flex items-center gap-2 group">
                  {t.hero.cta}
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link href="#workspace" className="bg-white dark:bg-transparent text-pantone-blue dark:text-white border border-pantone-blue/20 dark:border-white/20 px-8 py-4 rounded-full font-medium hover:bg-pantone-blue/5 dark:hover:bg-white/5 transition-all">
                  Google Workspace + IA
                </Link>
              </div>
            </motion.div>

            {/* Hero CTA Banner */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mt-24 w-full max-w-5xl mx-auto bg-gradient-to-r from-pantone-blue to-[#1a65a4] rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden group"
            >
              {/* Decorative background elements */}
              <motion.div
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0.2, 0.3, 0.2],
                }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-0 right-0 w-64 h-64 bg-pantone-coral rounded-full blur-3xl -mr-20 -mt-20"
              />
              <motion.div
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.1, 0.15, 0.1],
                }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute bottom-0 left-0 w-48 h-48 bg-white rounded-full blur-2xl -ml-10 -mb-10"
              />

              <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8 text-left">
                <div className="flex-1">
                  <div className="inline-flex items-center gap-2 bg-white/10 text-white px-3 py-1 rounded-full text-xs font-semibold mb-4 border border-white/20">
                    <Sparkles className="w-3 h-3 text-pantone-coral" />
                    <span>{t.hero.freeConsultation}</span>
                  </div>
                  <h3 className="text-3xl md:text-4xl font-outfit font-bold text-white mb-3">
                    {t.hero.freeConsultation}
                  </h3>
                  <p className="text-white/80 text-lg max-w-xl">
                    {t.hero.freeConsultationDesc}
                  </p>
                </div>
                <Link href="/contact" className="shrink-0 bg-pantone-coral text-white px-8 py-4 rounded-full font-medium hover:bg-[#ff5a4a] hover:shadow-lg hover:shadow-pantone-coral/30 transition-all flex items-center gap-2 group/btn">
                  {t.hero.freeConsultationBtn}
                  <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.div>
          </section>

          {/* Services Section */}
          <section id="services" aria-label="Our IT Services" className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
            <div className="text-center mb-16 max-w-3xl mx-auto">
              <h2 className="font-outfit text-4xl font-bold text-pantone-blue dark:text-white mb-6">{t.services.title}</h2>
              <p className="text-lg text-pantone-text/70 dark:text-white/70">{t.services.subtitle}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <ServiceCard
                icon={<Mail className="w-8 h-8 text-pantone-coral" />}
                title={t.services.workspace.title}
                problem={t.services.workspace.problem}
                benefit={t.services.workspace.benefit}
                // tooltip={(t.services.workspace as any).tooltip}
                delay={0.1}
              />
              <ServiceCard
                icon={<Sparkles className="w-8 h-8 text-pantone-coral" />}
                title={t.services.ai.title}
                problem={t.services.ai.problem}
                benefit={t.services.ai.benefit}
                //   tooltip={(t.services.ai as any).tooltip}
                delay={0.2}
              />
              <ServiceCard
                icon={<Cloud className="w-8 h-8 text-pantone-coral" />}
                title={t.services.cloud.title}
                problem={t.services.cloud.problem}
                benefit={t.services.cloud.benefit}
                delay={0.3}
              />
              <ServiceCard
                icon={<ShieldCheck className="w-8 h-8 text-pantone-coral" />}
                title={t.services.cybersecurity.title}
                problem={t.services.cybersecurity.problem}
                benefit={t.services.cybersecurity.benefit}
                delay={0.4}
              />
              <ServiceCard
                icon={<Code className="w-8 h-8 text-pantone-coral" />}
                title={t.services.custom.title}
                problem={t.services.custom.problem}
                benefit={t.services.custom.benefit}
                delay={0.5}
              />
              <ServiceCard
                icon={<Search className="w-8 h-8 text-pantone-coral" />}
                title={t.services.seo.title}
                problem={t.services.seo.problem}
                benefit={t.services.seo.benefit}
                delay={0.6}
              />
            </div>
          </section>

          {/* Why Choose Us Section */}
          <section aria-label="Why Choose Us" className="w-full bg-pantone-text dark:bg-[#1A1A1A] text-pantone-bg dark:text-white py-24 transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16 max-w-3xl mx-auto">
                <h2 className="font-outfit text-4xl font-bold mb-6 dark:text-white">{t.whyUs.title}</h2>
                <p className="text-lg text-pantone-bg/70 dark:text-white/70">{t.whyUs.subtitle}</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                <WhyUsCard
                  icon={<Award className="w-8 h-8 text-pantone-coral" />}
                  title={t.whyUs.expertise.title}
                  desc={t.whyUs.expertise.desc}
                  delay={0.1}
                />
                <WhyUsCard
                  icon={<HeartHandshake className="w-8 h-8 text-pantone-coral" />}
                  title={t.whyUs.customer.title}
                  desc={t.whyUs.customer.desc}
                  delay={0.2}
                />
                <WhyUsCard
                  icon={<TrendingUp className="w-8 h-8 text-pantone-coral" />}
                  title={t.whyUs.trackRecord.title}
                  desc={t.whyUs.trackRecord.desc}
                  delay={0.3}
                />
                <WhyUsCard
                  icon={<Zap className="w-8 h-8 text-pantone-coral" />}
                  title={t.whyUs.agile.title}
                  desc={t.whyUs.agile.desc}
                  delay={0.4}
                />
              </div>
            </div>
          </section>

          {/* Workspace CTA Section */}
          <section id="workspace" aria-label="Google Workspace Integration" className="w-full bg-pantone-blue text-white py-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  <div className="inline-flex items-center gap-2 bg-pantone-coral/20 text-pantone-coral px-4 py-2 rounded-full text-sm font-semibold mb-6">
                    <Sparkles className="w-4 h-4" />
                    AI-Powered Workflow
                  </div>
                  <h2 className="font-outfit text-4xl md:text-5xl font-bold mb-6 leading-tight">
                    {t.workspace.title}
                  </h2>
                  <p className="text-lg text-white/80 mb-8 leading-relaxed">
                    {t.workspace.desc}
                  </p>
                  <Link href="/contact" className="bg-pantone-coral text-white px-8 py-4 rounded-full font-medium hover:bg-pantone-coral/90 transition-all inline-flex items-center gap-2 group">
                    {t.workspace.cta}
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="relative"
                >
                  <div className="aspect-square md:aspect-[4/3] bg-gradient-to-tr from-pantone-blue to-pantone-blue/50 rounded-3xl border border-white/10 shadow-2xl overflow-hidden flex items-center justify-center p-8 relative">
                    <div className="absolute inset-0 bg-[url('https://picsum.photos/seed/workspace/800/600')] opacity-20 mix-blend-overlay bg-cover bg-center" />
                    <div className="relative z-10 grid grid-cols-2 gap-4 w-full max-w-md">
                      {workspaceApps.map((app, i) => (
                        <motion.div
                          key={app.id}
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.3 + i * 0.1 }}
                          className="bg-white/10 backdrop-blur-md border border-white/20 p-5 rounded-2xl flex flex-col items-start justify-center gap-3 relative overflow-hidden group hover:bg-white/20 transition-colors"
                        >
                          <div className="absolute top-0 right-0 p-3 opacity-50 group-hover:opacity-100 transition-opacity">
                            <Sparkles className="w-4 h-4 text-pantone-coral" />
                          </div>
                          <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center border border-white/10">
                            {app.icon}
                          </div>
                          <div>
                            <h4 className="font-outfit font-semibold text-white text-lg leading-tight">{app.data.name}</h4>
                            <p className="text-white/70 text-xs mt-1">{app.data.feature}</p>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </section>

          {/* Workspace AI Showcase Section */}
          <section aria-label="Workspace AI Showcase" className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 border-t border-pantone-text/10">
            <div className="text-center mb-16 max-w-3xl mx-auto">
              <div className="inline-flex items-center gap-2 bg-pantone-blue/10 text-pantone-blue px-4 py-2 rounded-full text-sm font-semibold mb-6">
                <Sparkles className="w-4 h-4" />
                Google Workspace + Gemini AI
              </div>
              <h2 className="font-outfit text-4xl font-bold text-pantone-blue dark:text-white mb-6">
                {lang === 'es' ? 'Potencia cada aplicación con IA' : 'Power every app with AI'}
              </h2>
              <p className="text-lg text-pantone-text/70 dark:text-white/70">
                {lang === 'es'
                  ? 'Descubre cómo la Inteligencia Artificial se integra directamente en las herramientas que tu equipo ya utiliza todos los días.'
                  : 'Discover how Artificial Intelligence integrates directly into the tools your team already uses every day.'}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {workspaceApps.map((app, i) => (
                <motion.div
                  key={`showcase-${app.id}`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-white dark:bg-[#1E1E1E] p-8 rounded-3xl shadow-sm border border-pantone-text/5 dark:border-white/5 hover:shadow-md transition-all group hover:-translate-y-1"
                >
                  <div className="w-14 h-14 bg-pantone-blue/5 dark:bg-pantone-blue/20 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-pantone-blue/10 dark:group-hover:bg-pantone-blue/30 transition-colors">
                    {React.cloneElement(app.icon as React.ReactElement<any>, { className: "w-7 h-7 text-pantone-blue dark:text-pantone-coral" })}
                  </div>
                  <h3 className="font-outfit text-2xl font-semibold text-pantone-blue dark:text-white mb-3">{app.data.name}</h3>
                  <div className="flex items-center gap-2 text-pantone-coral font-medium mb-4">
                    <Sparkles className="w-4 h-4" />
                    <span>{app.data.feature}</span>
                  </div>
                  <p className="text-pantone-text/70 dark:text-white/70 text-sm leading-relaxed">
                    {lang === 'es'
                      ? `Optimiza tu flujo de trabajo en ${app.data.name} utilizando ${app.data.feature.toLowerCase()} impulsado por IA para ahorrar tiempo y mejorar resultados.`
                      : `Optimize your workflow in ${app.data.name} using AI-powered ${app.data.feature.toLowerCase()} to save time and improve results.`}
                  </p>
                </motion.div>
              ))}
            </div>
          </section>

          {/* About Us Section */}
          <section id="about" aria-label="About Giacatec" className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="font-outfit text-4xl font-bold text-pantone-blue dark:text-white mb-6">{t.about.title}</h2>
                <p className="text-lg text-pantone-text/80 dark:text-white/80 leading-relaxed mb-12">
                  {t.about.history}
                </p>

                <h3 className="font-outfit text-2xl font-bold text-pantone-blue dark:text-white mb-6">{t.about.teamTitle}</h3>
                <p className="text-lg text-pantone-text/80 dark:text-white/80 leading-relaxed mb-8">
                  {t.about.teamDesc}
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-white dark:bg-[#1E1E1E] p-8 md:p-10 rounded-3xl shadow-sm border border-pantone-text/5 dark:border-white/5"
              >
                <h3 className="font-outfit text-2xl font-bold text-pantone-blue dark:text-white mb-8">{t.about.valuesTitle}</h3>
                <div className="space-y-8">
                  <div className="flex gap-4">
                    <div className="w-12 h-12 bg-pantone-coral/10 rounded-2xl flex items-center justify-center shrink-0">
                      <Lightbulb className="w-6 h-6 text-pantone-coral" />
                    </div>
                    <div>
                      <h4 className="font-outfit font-semibold text-xl text-pantone-blue dark:text-white mb-2">{t.about.values.innovation.title}</h4>
                      <p className="text-pantone-text/70 dark:text-white/70">{t.about.values.innovation.desc}</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-12 h-12 bg-pantone-coral/10 rounded-2xl flex items-center justify-center shrink-0">
                      <Target className="w-6 h-6 text-pantone-coral" />
                    </div>
                    <div>
                      <h4 className="font-outfit font-semibold text-xl text-pantone-blue dark:text-white mb-2">{t.about.values.excellence.title}</h4>
                      <p className="text-pantone-text/70 dark:text-white/70">{t.about.values.excellence.desc}</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-12 h-12 bg-pantone-coral/10 rounded-2xl flex items-center justify-center shrink-0">
                      <Users className="w-6 h-6 text-pantone-coral" />
                    </div>
                    <div>
                      <h4 className="font-outfit font-semibold text-xl text-pantone-blue dark:text-white mb-2">{t.about.values.partnership.title}</h4>
                      <p className="text-pantone-text/70 dark:text-white/70">{t.about.values.partnership.desc}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </section>
        </motion.div>
      )}
    </>
  );
}

function ServiceCard({ icon, title, problem, benefit, delay, tooltip }: { icon: React.ReactNode, title: string, problem: string, benefit: string, delay: number, tooltip?: string }) {
  const { lang } = useLanguage();
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="h-full"
    >
      <div className="bg-white dark:bg-[#1E1E1E] p-8 rounded-3xl shadow-sm border border-pantone-text/5 dark:border-white/5 hover:shadow-xl hover:-translate-y-1 hover:scale-[1.02] transition-all duration-300 ease-out group flex flex-col h-full relative">
        {tooltip && (
          <div className="absolute -top-12 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-pantone-text dark:bg-white text-white dark:text-pantone-text text-xs py-2 px-3 rounded-lg pointer-events-none w-48 text-center z-50 shadow-lg">
            {tooltip}
            <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-pantone-text dark:border-t-white"></div>
          </div>
        )}
        <div className="w-16 h-16 bg-pantone-bg dark:bg-[#2B2B2B] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shrink-0">
          {icon}
        </div>
        <h3 className="font-outfit text-2xl font-semibold text-pantone-blue dark:text-white mb-4">{title}</h3>
        <div className="flex flex-col gap-4 flex-grow">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-pantone-coral mb-1 block">
              {lang === 'es' ? 'El Problema' : 'The Problem'}
            </span>
            <p className="text-sm text-pantone-text/60 dark:text-white/60 leading-relaxed">{problem}</p>
          </div>
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-pantone-blue dark:text-pantone-coral mb-1 block">
              {lang === 'es' ? 'La Solución' : 'The Solution'}
            </span>
            <p className="text-sm text-pantone-text/80 dark:text-white/80 leading-relaxed font-medium">{benefit}</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function WhyUsCard({ icon, title, desc, delay }: { icon: React.ReactNode, title: string, desc: string, delay: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="flex flex-col items-center text-center p-6 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/10 dark:bg-white/5 dark:border-white/10 dark:hover:bg-white/10 transition-colors group"
    >
      <div className="w-16 h-16 bg-pantone-coral/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:-rotate-3 transition-transform duration-300">
        {icon}
      </div>
      <h3 className="font-outfit text-xl font-semibold mb-3 dark:text-white">{title}</h3>
      <p className="text-pantone-bg/70 dark:text-white/70 text-sm leading-relaxed">{desc}</p>
    </motion.div>
  );
}
