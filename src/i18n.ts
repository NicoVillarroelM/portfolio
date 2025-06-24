import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import translationEN from './locales/en/translation.json';
import translationES from './locales/es/translation.json';

const storedLang = localStorage.getItem('language');
const browserLang = navigator.language.split('-')[0];
const initialLang = storedLang || (['en', 'es'].includes(browserLang) ? browserLang : 'en');

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: translationEN },
      es: { translation: translationES },
    },
    lng: initialLang,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
