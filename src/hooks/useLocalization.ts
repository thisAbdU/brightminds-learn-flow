import { useState, useEffect } from 'react';
import en from '../../locales/en.json';

type LocaleData = typeof en;
type SupportedLanguage = 'en' | 'am' | 'om';

interface LocalizationContextType {
  currentLanguage: SupportedLanguage;
  setLanguage: (lang: SupportedLanguage) => void;
  t: (key: string) => string;
  locale: LocaleData;
}

export const useLocalization = (): LocalizationContextType => {
  const [currentLanguage, setCurrentLanguage] = useState<SupportedLanguage>('en');
  const [locale, setLocale] = useState<LocaleData>(en);

  useEffect(() => {
    const loadLocale = async () => {
      try {
        if (currentLanguage === 'en') {
          setLocale(en);
        } else {
          const localeData = await import(`../../locales/${currentLanguage}.json`);
          setLocale(localeData.default);
        }
      } catch (error) {
        console.error(`Failed to load locale: ${currentLanguage}`, error);
        setLocale(en); // Fallback to English
      }
    };

    loadLocale();
  }, [currentLanguage]);

  const setLanguage = (lang: SupportedLanguage) => {
    setCurrentLanguage(lang);
    localStorage.setItem('preferredLanguage', lang);
  };

const t = (key: string): any => {
  const keys = key.split('.');
  let value: any = locale;

  for (const k of keys) {
    if (value && typeof value === 'object' && k in value) {
      value = value[k];
    } else {
      console.warn(`Translation key not found: ${key}`);
      return key;
    }
  }
  
  return value;
};

  // Load saved language preference on mount
  useEffect(() => {
    const savedLanguage = localStorage.getItem('preferredLanguage') as SupportedLanguage;
    if (savedLanguage && ['en', 'am', 'om'].includes(savedLanguage)) {
      setCurrentLanguage(savedLanguage);
    }
  }, []);

  return {
    currentLanguage,
    setLanguage,
    t,
    locale
  };
}; 