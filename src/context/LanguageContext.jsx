import { useEffect, useState } from 'react';
import translations from '../i18n/translations';
import { LanguageContext } from './useLanguage';

export const LanguageProvider = ({ children }) => {
  const [lang, setLang] = useState('fr');
  const toggle = () => setLang(l => (l === 'fr' ? 'en' : 'fr'));
  const t = translations[lang];

  // Keep <html lang> in sync so screen readers and search engines get the right language
  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  return (
    <LanguageContext.Provider value={{ lang, toggle, t }}>
      {children}
    </LanguageContext.Provider>
  );
};
