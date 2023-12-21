import i18n from "i18next";
import {initReactI18next} from "react-i18next";
import PTBR from "./locales/pt/pt-br.json";
import ENUS from "./locales/en/en-us.json";

i18n.use(initReactI18next).init({
  resources: {
    "en-US": {
      translation: ENUS,
    },
    "pt-BR": {
      translation: PTBR,
    },
  },
  lng: navigator.language === "pt-BR" ? "pt-BR" : "en-US",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
