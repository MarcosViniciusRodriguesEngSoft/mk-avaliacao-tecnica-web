import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n.use(initReactI18next).init({
    fallbackLng: 'en',
    interpolation: {
        escapeValue: false,
    },
    resources: {
        en: {
            translation: {
                metadata: {
                    title: "MK Solutions",
                    description: "This is a Next.js application with i18n support."
                },
                welcome: "Welcome to our website!",
                description: "This is a Next.js application with i18n support."
            },
        },
        pt: {
            translation: {
                metadata: {
                    title: "MK Solutions",
                    description: "Esta é uma aplicação Next.js com suporte a i18n."
                },
                welcome: "Bem-vindo ao nosso site!",
                description: "Esta é uma aplicação Next.js com suporte a i18n."
            },
        },
    },
});

export default i18n;
