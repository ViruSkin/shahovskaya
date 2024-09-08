import { useState } from "react";
import { BsTelephone } from "react-icons/bs";
import { Link } from "react-router-dom";
import { IoIosMenu } from "react-icons/io";
import { MdOutlineMailOutline } from "react-icons/md";
import { SiFacebook, SiInstagram, SiTelegram, SiWhatsapp } from "react-icons/si";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    console.log(isOpen);
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="absolute inset-0">
            <div className="flex md:hidden justify-between">
                <img src="/images/logo_mini.svg" alt="логотип" className="w-24 pl-4 pt-4" />
                <button onClick={toggleMenu} className="inline-flex items-center w-10 h-10 justify-center text-sm p-0">
                    <IoIosMenu size={32} />
                </button>
            </div>

            <div
                className={`${isOpen ? "block" : "hidden"} h-full space-y-2 flex-col w-full md:flex md:flex-row mt-5 font-light border pl-8`}
            >
                <ul className="flex flex-col space-y-2 md:flex-row md:space-y-0 md:space-x-5 md:justify-end">
                    <li>
                        <Link to="/#about">О проект</Link>
                    </li>
                    <li>
                        <Link to="/#map">Карта</Link>
                    </li>
                    <li>
                        <Link to="/#houses">Дома</Link>
                    </li>
                    <li>
                        <Link to="/#credit">Ипотека</Link>
                    </li>
                    <li>
                        <Link to="/#feedback">Обратная связь</Link>
                    </li>
                    <li>
                        <Link to="/#feedback">О Компании</Link>
                    </li>
                    <li>
                        <Link to="/#contacts">Контакты</Link>
                    </li>
                </ul>
                <hr />
                <div className="flex mt-5 md:mt-0 md:ml-5 space-x-8 items-center">
                    <a href="tel:+74955443322" className="flex items-center">
                        <BsTelephone className="mr-2" /> +7 (495) 544-33-22
                    </a>
                </div>
                <div className="flex items-center">
                    <MdOutlineMailOutline className="mr-2" /> info@gmail.com
                </div>
                <div>
                    <button className="bg-white text-mynormal border-2 border-mynormal">
                        ОБРАТНЫЙ ЗВОНОК
                    </button>
                </div>
                <div>
                    <h6>Наши соцсети:</h6>
                    <div className="flex space-x-4 mt-2">
                        <a href="https://t.me/company" className="hover:text-[#0088cc]">
                            <SiTelegram />
                        </a>
                        <a href="https://instagram.com/company" className="hover:text-[#E1306C]">
                            <SiInstagram />
                        </a>
                        <a href="https://facebook.com/company" className="hover:text-[#1877F2]">
                            <SiFacebook />
                        </a>
                        <a href="https://wa.me/company" className="hover:text-[#075e54]">
                            <SiWhatsapp />
                        </a>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
