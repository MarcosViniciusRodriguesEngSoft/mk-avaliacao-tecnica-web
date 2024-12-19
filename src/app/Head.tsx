'use client'

import { useTranslationI18n } from "@/global/hooks/use-translation.hook";

export default function Head() {
  const { t } = useTranslationI18n();

  return (
    <head>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="description" content={t('header.metadata.description')} />
      <link rel="icon" href="https://www.mksolutions.com.br/wp-content/uploads/2022/11/mk-positive-favicon-150x150.png" sizes="32x32" />
      <link rel="icon" href="https://www.mksolutions.com.br/wp-content/uploads/2022/11/mk-positive-favicon.png" sizes="192x192" />
      <link rel="apple-touch-icon" href="https://www.mksolutions.com.br/wp-content/uploads/2022/11/mk-positive-favicon.png" />
      <title>{t('header.title')}</title>
    </head>
  );
}