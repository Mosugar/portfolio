import { useEffect, useState } from 'react';
import translations from '../i18n/translations';
import { LanguageContext } from './useLanguage';

const STORAGE_KEY = 'lang';

// The visitor's last choice, if storage is available and holds a known language
const savedLang = () => {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    return saved in translations ? saved : 'fr';
  } catch {
    return 'fr';
  }
};

export const LanguageProvider = ({ children }) => {
  const [lang, setLang] = useState(savedLang);
  const toggle = () => setLang(l => (l === 'fr' ? 'en' : 'fr'));
  const t = translations[lang];

  // Keep <html lang> in sync so screen readers and search engines get the right language
  useEffect(() => {
    document.documentElement.lang = lang;
    try { localStorage.setItem(STORAGE_KEY, lang); } catch { /* private mode: the choice just isn't remembered */ }
  }, [lang]);

  return (
    <LanguageContext.Provider value={{ lang, toggle, t }}>
      {children}
    </LanguageContext.Provider>
  );
};
