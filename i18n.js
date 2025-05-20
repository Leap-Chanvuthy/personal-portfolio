import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// English translations
import enNavbar from "./src/locales/en/navbar.json"


// Khmer translations
import kmNavbar from "./src/locales/km/navbar.json"



i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        navbar: enNavbar,
      },
      km: {
        navbar: kmNavbar,
      },
    },
    fallbackLng: 'en',
    ns: [
      'navbar',
    ],
    defaultNS: 'common',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;