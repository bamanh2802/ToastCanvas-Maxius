'use client'
import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation"; 
import '../../styles/style.css';
import Leftbar from "./Leftbar";
import setLanguageValue from "@/action/changeLocale";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [currentLocale, setCurrentLocale] = useState<string>('en'); // Trạng thái để lưu locale hiện tại

    const handleToggleLeftbar = () => {
        setIsOpen(!isOpen);
    };

    const handleLocaleChange = async (locale: string) => {
        setLanguageValue(locale);
        setCurrentLocale(locale);  
    };

    useEffect(() => {
        const savedLocale = document.cookie.replace(/(?:(?:^|.*;\s*)language\s*\=\s*([^;]*).*$)|^.*$/, "$1");
        if (savedLocale) {
            setCurrentLocale(savedLocale); 
        }
    }, []);

    return (
        <nav className={`h-32 flex z-20 fixed top-0 right-0 left-0 items-center justify-between`}>
            <div>
                <Link href="/" className="text-[#1B2A5E] ml-24 text-xl font-bold">
                    MAXIUS
                </Link>
            </div>
            <div className="z-50 mt-4 flex flex-col justify-center items-center mr-20">
                <button className="bg-transparent cursor-pointer">
                <label className="burger burger1" htmlFor="burger1" aria-label="Toggle left sidebar">
                    <input onClick={handleToggleLeftbar} className="hidden" id="burger1" type="checkbox" />
                    <span></span>
                </label>

                </button>
                <div className="flex gap-2 text-[21px] font-extralight">
                    <span
                    role="button"
                        className={`cursor-pointer ${currentLocale === 'en' ? 'text-[#FF9B50]' : 'text-[#000000]'}`} // Highlight EN
                        onClick={() => handleLocaleChange("en")}
                    >
                        EN
                    </span>
                    <span
                    role="button"
                    className={`cursor-pointer ${currentLocale === 'kr' ? 'text-[#FF9B50]' : 'text-[#000000]'}`} // Highlight KR
                        onClick={() => handleLocaleChange("kr")}
                    >
                        KR
                    </span>
                </div>
            </div>
            <Leftbar isOpen={isOpen} onClose={handleToggleLeftbar} />
        </nav>
    );
};

export default Navbar;
