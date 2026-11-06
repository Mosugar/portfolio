import { createContext, useContext, useState } from 'react';
import translations from '../i18n/translations';

const LanguageContext = createContext(null);

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

export const useLanguage = () => useContext(LanguageContext);
