import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';
import en from './languages/en.json';
import de from './languages/de.json';

i18n.use(initReactI18next).init({
  // we init with resources
  compatibilityJSON: 'v3',
  resources: {
    en,
    de,
  },
  fallbackLng: 'en',
  debug: true,

  // have a common namespace used around the full app
  ns: ['translations'],
  defaultNS: 'translations',

  keySeparator: false, // we use content as keys

  interpolation: {
    escapeValue: false,
  },
});
