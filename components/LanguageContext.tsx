'use client';

import React, { createContext, useContext, useState, ReactNode } from 'react';
import { es } from '@/dictionaries/es';
import { en } from '@/dictionaries/en';

type Language = 'es' | 'en';
type Dictionary = typeof es;

interface LanguageContextProps {
  lang: Language;
  setLang: (lang: Language) => void;
  t: Dictionary;
}

const LanguageContext = createContext<LanguageContextProps | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [lang, setLang] = useState<Language>('es');

  const t = lang === 'es' ? es : en;

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
