import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import homeGr from "./gr/home.json";
import homeEn from "./en/home.json";
import homeRu from "./ru/home.json";

i18n.use(initReactI18next).init({
  resources: {
    gr: {
      translation: {
        home: homeGr,
      },
    },
    en: {
      translation: {
        home: homeEn,
      },
    },
    ru: {
      translation: {
        home: homeRu,
      },
    },
  },
  lng: "en",
  fallbackLng: "gr",

  interpolation: {
    escapeValue: false,
  },
});

export const LangList = ["gr", "en", "ru"];
export const DefaultLang = "en";
