import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import Backend from 'i18next-xhr-backend';

i18n
  .use(initReactI18next)
  .use(Backend)
  .init({
    lng: "ru",
    fallbackLng: "en",
    debug: true,
    ns: ["translation", "Login"],

    interpolation: {
      escapeValue: false // not needed for react as it escapes by default
    },
    react: {
      useSuspense: false,
      wait: true
    },
    backend: {
      loadPath: `/locales/FormI18n/{{lng}}/{{ns}}.json`
    }
  });

export default i18n;
