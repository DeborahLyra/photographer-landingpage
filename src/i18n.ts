import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import translationEN from './locales/en/translation.json';
import translationPT from './locales/pt/translation.json';

const resources = {
  en: { translation: translationEN },
  pt: { translation: translationPT }
};

i18n
  .use(LanguageDetector) // detecta o idioma do navegador
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'pt', // se não encontrar, usa pt
    interpolation: {
      escapeValue: false // evita problemas com React
    }
  });

export default i18n;
