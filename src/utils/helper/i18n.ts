import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';
import en from '../../assets/languages/english.json';
import ben from '../../assets/languages/bengali.json';

const resources = {
  en,
  ben,
};
i18n
  .use(initReactI18next)
  //init i18next
  .init(
    {
      resources,
      lng: 'en',
      fallbackLng: 'en',
      debug: false,
      compatibilityJSON: 'v4',
      interpolation: {
        escapeValue: false,
      },
    },
    (err: any) => console.log(err),
  );

export default i18n;
