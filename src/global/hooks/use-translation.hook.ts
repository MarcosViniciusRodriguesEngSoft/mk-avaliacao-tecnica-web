import i18n from "@/i18n/translator";
import { languages } from "@/types/languages";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";

export function useTranslationI18n(languages?: languages) {
    const { t } = useTranslation();

    useEffect(() => {
        i18n.changeLanguage(languages);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [i18n]);

    return { t };
}
