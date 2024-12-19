'use client';
import i18n from "@/i18n/translator";
import { languages } from "@/types/languages";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";

export function useTranslationI18n(initialLanguage?: languages) {
    const { t } = useTranslation();

    useEffect(() => {
        if (initialLanguage) {
            i18n.changeLanguage(initialLanguage);
        }
    }, [initialLanguage]);

    return { t };
}
