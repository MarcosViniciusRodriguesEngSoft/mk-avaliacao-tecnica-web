'use client'

import { useGlobalContext } from "@/context/GlobalContext";
import { useTranslationI18n } from "@/global/hooks/use-translation.hook";
import Button from "../components/Button/Button";
import CardListPerson from "./components/CardListPerson";
import Header from "./components/Header";

function ListPerson() {
    const { persons } = useGlobalContext();
    const { t } = useTranslationI18n();

    return (
        <div className="h-full w-screen">
            <div className="flex flex-col justify-center items-center py-20 gap-8">

                <div className="flex justify-between items-center w-full max-w-[1000px] px-6">
                    <div className="w-full">
                        <h1 className="font-poppins text-[24px] font-bold leading-10 text-[#205266]"> {t('list_person_screen.title')} ({persons?.length})</h1>
                    </div>
                    <div className="flex justify-end w-full">
                        <Button href="/person-registration" className="button primary w-full max-w-[200px]">
                            {t('list_person_screen.button_create')}
                        </Button>
                    </div>
                </div>
                <div className="flex flex-col md:shadow-md w-full max-w-[1000px] rounded-lg p-6 gap-2">
                    <Header />
                    {persons.map(item =>
                        <CardListPerson key={item.id} person={item} />
                    )}
                </div>
            </div>
        </div>
    );
};

export default ListPerson;
