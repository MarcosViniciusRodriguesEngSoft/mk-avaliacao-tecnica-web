import { useTranslationI18n } from "@/global/hooks/use-translation.hook";

const Header: React.FunctionComponent = () => {
     const { t } = useTranslationI18n();
    return (
        <div className="hidden md:flex flex-col md:flex-row justify-between w-full max-w-[1000px] border p-4 rounded-md shadow-md gap-2">
            <div>
                <p className="font-poppins text-[16px] font-normal leading-6 text-black">{t('list_person_screen.header.name')}</p>
            </div>
            <div>
                <p className="font-poppins text-[16px] font-normal leading-6 text-black">{t('list_person_screen.header.cpf')}</p>
            </div>
            <div>
                <p className="font-poppins text-[16px] font-normal leading-6 text-black">{t('list_person_screen.header.email')}</p>
            </div>
            <div>
                <p className="font-poppins text-[16px] font-normal leading-6 text-black">{t('list_person_screen.header.mobile')}</p>
            </div>
        </div >
    );
}

export default Header;