import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from './locales/en.json';
import ml from './locales/ml.json';
import hi from './locales/hi.json';
import bn from './locales/bn.json';
import or from './locales/or.json';
import te from './locales/te.json';

const resources = {
  en: { translation: en },
  ml: { translation: ml },
  hi: { translation: hi },
  bn: { translation: bn },
  or: { translation: or },
  te: { translation: te },
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;