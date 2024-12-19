'use client'
import Button from "@/components/Button/Button";
import LogoMiniature from "@/components/LogoMiniature/LogoMiniature";
import LogoScreen from "@/components/LogoScreen/LogoScreen";
import { useTranslationI18n } from "@/global/hooks/use-translation.hook";

export default function Home() {
  const { t } = useTranslationI18n();

  return (
    <div className="flex justify-center items-center w-screen h-screen">
      <div className="flex flex-col justify-center items-center w-full h-full gap-4 bg-[#FFFFFF]">
        <LogoMiniature />
        <Button className="primary w-[300px] h-[50px]" href="/login">{t('home_screen.button_presentation')}</Button>
      </div>
      <LogoScreen />
    </div>
  );
}
