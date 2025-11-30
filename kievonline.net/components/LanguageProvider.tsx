'use client';

import { createContext, useContext, useState, useEffect, type ReactNode } from 'react';
import { type Locale, defaultLocale, getTranslations, type Translations } from '@/lib/i18n';

interface LanguageContextType {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: Translations;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(defaultLocale);
  const [t, setT] = useState<Translations>(getTranslations(defaultLocale));

  useEffect(() => {
    // Check localStorage for saved language preference
    const saved = localStorage.getItem('locale') as Locale;
    if (saved && ['en', 'uk', 'de'].includes(saved)) {
      setLocaleState(saved);
      setT(getTranslations(saved));
    }
  }, []);

  const setLocale = (newLocale: Locale) => {
    setLocaleState(newLocale);
    setT(getTranslations(newLocale));
    localStorage.setItem('locale', newLocale);
  };

  return (
    <LanguageContext.Provider value={{ locale, setLocale, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider');
  }
  return context;
}
