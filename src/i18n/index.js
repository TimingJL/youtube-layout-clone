import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from './en';
import zhHant from './zh-Hant';
import ja from './ja';

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources: {
      en,
      'zh-Hant': zhHant,
      ja,
    },
    lng: 'zh-Hant',
    fallbackLng: 'zh-Hant',

    interpolation: {
      escapeValue: false,
    },
  });


export default i18n;
