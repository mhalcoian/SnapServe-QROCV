import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import en from "./locales/en.js";
import kr from "./locales/kr.js";

const savedLang = localStorage.getItem("lang") || "en";

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: en },
    kr: { translation: kr },
  },
  lng: savedLang, // default language
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
