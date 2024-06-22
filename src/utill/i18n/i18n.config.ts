import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { en, fr } from "./translation";
import { getLocales } from "expo-localization";

const userLocale = getLocales()[0].languageCode ?? "en";

const resources = {
  en: { translation: en },
  fr: { translation: fr },
  // add translation support for different languages
};

i18n.use(initReactI18next).init({
  lng: "en",
  compatibilityJSON: "v3",
  resources,
  fallbackLng: "en",
});

i18n.changeLanguage(userLocale);

export default i18n;
