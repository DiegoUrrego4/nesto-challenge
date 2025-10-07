import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n.use(initReactI18next).init({
  lng: 'en',
  fallbackLng: 'en',
  
  resources: {
    en: {
      translation: {
        emptyState: {
          title: 'You have no applications yet',
          text: "It seems you haven't started an application.",
          cta: "Let's find the best rate for you!",
        },
        card: {
          selectProduct: 'Select this product',
        },
      },
    },
  },
});

export default i18n;