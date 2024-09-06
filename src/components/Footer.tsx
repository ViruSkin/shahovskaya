import { Link } from "react-router-dom";
import { SiFacebook, SiInstagram, SiTelegram, SiWhatsapp } from "react-icons/si";
import { FiPhone } from "react-icons/fi";
import { MdOutlineMailOutline } from "react-icons/md";

export default function Footer() {
    return (
        <div className="relative w-full bg-[#131313]">
            <div className="flex flex-row mx-auto h-full max-w-screen-lg relative z-10 text-white font-thin py-10">
                <div className="basis-1/4 flex items-center">
                    <img src="/images/logotype4.svg" alt="логотип" className="flex px-10" />
                </div>
                <div className="basis-1/4 pl-6">
                    <ul className="space-y-2">
                        <li>
                            <Link to="/#company">О нас</Link>
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
                            <Link to="/#company">Контакты</Link>
                        </li>
                    </ul>
                </div>
                <div className="basis-1/4 flex flex-col space-y-2">
                    <div className="flex items-center">
                        <FiPhone className="mr-2" /> +7 999 123-45-67
                    </div>
                    <div>c 9:00 до 21:00</div>
                    <div>
                        <button className="bg-black border-2 border-mynormal text-mynormal hover:bg-myhover hover:text-white">
                            ОБРАТНЫЙ ЗВОНОК
                        </button>
                    </div>
                    <div className="flex items-center">
                        <MdOutlineMailOutline className="mr-2" /> info@gmail.com
                    </div>
                </div>
                <div className="basis-1/4 space-y-4">
                    <h6>Наши соцсети:</h6>
                    <div className="flex space-x-4">
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
        </div>
    );
}
