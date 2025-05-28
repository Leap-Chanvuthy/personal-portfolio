import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// English translations
import enGlobal from "./src/locales/en/global.json";
import enNavbar from "./src/locales/en/navbar.json";
import enHome from "./src/locales/en/home.json";
import enMeta from "./src/locales/en/meta-tag.json";
import enAbout from "./src/locales/en/about.json";
import enProject from "./src/locales/en/project.json";
import enService from "./src/locales/en/service.json";


// Khmer translations
import kmGlobal from "./src/locales/km/global.json";
import kmNavbar from "./src/locales/km/navbar.json";
import kmHome from "./src/locales/km/home.json";
import kmMeta from "./src/locales/km/meta-tag.json";
import kmAbout from "./src/locales/km/about.json";
import kmProject from "./src/locales/km/project.json";
import kmService from "./src/locales/km/service.json";





i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        global : enGlobal,
        navbar: enNavbar,
        home : enHome,
        meta : enMeta,
        about : enAbout,
        project : enProject,
        service : enService,
      },
      km: {
        global : kmGlobal,
        navbar: kmNavbar,
        home : kmHome,
        meta : kmMeta,
        about : kmAbout,
        project : kmProject,
        service : kmService,
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