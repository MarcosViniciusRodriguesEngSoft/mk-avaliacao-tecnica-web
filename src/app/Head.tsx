'use client'
import { useTranslation } from "../global/hooks/use-translation.hook";

export default function Head() {
  const { getTranslation } = useTranslation();
  const title = getTranslation("metadata.title");
  const description = getTranslation("metadata.description");

  return (
    <head>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="description" content={description} />
      <link rel="icon" href="https://www.mksolutions.com.br/wp-content/uploads/2022/11/mk-positive-favicon-150x150.png" sizes="32x32" />
      <link rel="icon" href="https://www.mksolutions.com.br/wp-content/uploads/2022/11/mk-positive-favicon.png" sizes="192x192" />
      <link rel="apple-touch-icon" href="https://www.mksolutions.com.br/wp-content/uploads/2022/11/mk-positive-favicon.png" />
      <title>{title}</title>
    </head>
  );
}