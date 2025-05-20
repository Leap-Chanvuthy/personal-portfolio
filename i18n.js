import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// English translations
import enNavbar from "./src/locales/en/navbar.json"
import enHome from "./src/locales/en/home.json"


// Khmer translations
import kmNavbar from "./src/locales/km/navbar.json"
import kmHome from "./src/locales/km/home.json"



i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        navbar: enNavbar,
        home : enHome,
      },
      km: {
        navbar: kmNavbar,
        home : kmHome
      },
    },
    fallbackLng: 'en',
    ns: [
      'navbar',
      'home'
    ],
    defaultNS: 'common',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;