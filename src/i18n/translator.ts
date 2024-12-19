import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';
import english from "./language/enUs.json";
import portugues from "./language/ptBr.json";

i18n.use(LanguageDetector)
    .use(initReactI18next)
    .init({
        fallbackLng: 'en',
        interpolation: {
            escapeValue: false,
        },
        resources: {
            en: {
                translation: english
            },
            pt: {
                translation: portugues
            },
        },
        detection: {
            order: ['navigator', 'cookie', 'localStorage', 'htmlTag', 'path', 'subdomain'],
            caches: ['cookie'],
        },
    });

export default i18n;
