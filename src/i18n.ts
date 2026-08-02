import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from "./locales/en";
import fr from "./locales/fr";
import ar from "./locales/ar";
import de from "./locales/de";

export const supportedLanguages = ["en", "fr", "ar", "de"] as const;
export type SupportedLanguage = (typeof supportedLanguages)[number];

const resources = {
  en: { translation: en },
  fr: { translation: fr },
  ar: { translation: ar },
  de: { translation: de },
};

const isSupportedLanguage = (value: string | null): value is SupportedLanguage => {
  return value !== null && supportedLanguages.includes(value as SupportedLanguage);
};

const getInitialLanguage = (): SupportedLanguage => {
  if (typeof window === "undefined") return "en";

  const stored = window.localStorage.getItem("portfolio-language");
  if (isSupportedLanguage(stored)) return stored;

  const browserLanguage = window.navigator.language.toLowerCase();
  if (browserLanguage.startsWith("fr")) return "fr";
  if (browserLanguage.startsWith("ar")) return "ar";
  if (browserLanguage.startsWith("de")) return "de";

  return "en";
};

void i18n.use(initReactI18next).init({
  resources,
  lng: getInitialLanguage(),
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
  react: {
    useSuspense: false,
  },
});

const applyDocumentLanguage = (language: string) => {
  if (typeof document === "undefined") return;

  document.documentElement.lang = language;
  document.documentElement.dir = language === "ar" ? "rtl" : "ltr";
};

applyDocumentLanguage(i18n.language);

i18n.on("languageChanged", (language) => {
  applyDocumentLanguage(language);
  if (typeof window !== "undefined") {
    window.localStorage.setItem("portfolio-language", language);
  }
});

export default i18n;
