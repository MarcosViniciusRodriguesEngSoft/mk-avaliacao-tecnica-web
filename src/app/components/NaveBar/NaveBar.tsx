import { useState } from "react";
import logo from "@/assets/img/png/MK-solutions-logo.png";
import Image from "next/image";
import { useTranslationI18n } from "@/global/hooks/use-translation.hook";

export const NaveBar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const { t } = useTranslationI18n();

    const toggleMenu = () => {
        setMenuOpen((prev) => !prev);
    };

    return (
        <nav className="fixed w-full z-50">
            <div className="flex justify-between items-center flex-col md:!flex-row w-full h-12 px-0 md:px-8 bg-[#205266]">
                <div className="flex justify-between items-center w-full md:w-fit h-14 px-4">
                    <Image
                        src={logo}
                        alt="MK Solutions Logo"
                        width={40}
                        height={40}
                        className="rounded-lg"
                        priority
                        unoptimized
                    />
                    <button
                        onClick={toggleMenu}
                        className="block md:hidden text-white focus:outline-none"
                        aria-label="Abrir menu"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="2"
                            stroke="currentColor"
                            className="w-6 h-6"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M4 6h16M4 12h16m-7 6h7"
                            />
                        </svg>
                    </button>
                </div>
                <div className={`flex flex-col md:flex-row justify-end items-center gap-4 w-full md:w-auto bg-[#205266] md:bg-transparent p-4 md:p-0 rounded-b-lg transition-all ${menuOpen ? "block" : "hidden md:flex"}`}>
                    <a href="list-person" className="font-roboto text-[16px] font-medium leading-4 text-white">{t('home_screen.navbar.link_person_registration')}</a>
                </div>
            </div>
        </nav>
    );
}
