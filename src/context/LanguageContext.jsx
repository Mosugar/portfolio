import { useState } from 'react';
import translations from '../i18n/translations';
import { LanguageContext } from './useLanguage';

export const LanguageProvider = ({ children }) => {
  const [lang, setLang] = useState('fr');
  const toggle = () => setLang(l => (l === 'fr' ? 'en' : 'fr'));
  const t = translations[lang];
  return (
    <LanguageContext.Provider value={{ lang, toggle, t }}>
      {children}
    </LanguageContext.Provider>
  );
};
