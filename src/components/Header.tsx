import { Link } from "react-router-dom";
import { BsTelephone } from "react-icons/bs";

export default function Header() {
    return (
        <div className="relative w-full">
            <img src="/images/header2.webp" alt="Header Background" className="w-full object-cover brightness-75    " />
            <div className="absolute top-0 left-0 w-full h-full">
                <div className="mx-auto h-full max-w-screen-lg relative z-10">
                    <div className="flex flex-col h-full">
                        <div className="flex flex-row">
                            <img src="/images/logotype4.svg" alt="логотип" className="flex mt-5 w-72" />
                            <div className="flex flex-col w-full mt-5  font-light">
                                <ul className="flex space-x-5 justify-end">
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
                                <div className="flex justify-end mt-5 space-x-8 items-center">
                                    <a href="tel:+74955443322" className="flex items-center">
                                        <BsTelephone className="mr-2" /> +7 (495) 544-33-22
                                    </a>
                                    <span className="border border-black px-3 py-1 cursor-pointer">
                                        Обратный звонок
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="flex h-full items-end text-white mb-10">
                            <div className="space-y-3">
                                <div className="text-5xl font-thin">ШАХОВСКАЯ УСАДЬБА</div>
                                <div className="font-thin">УНИКАЛЬНЫЙ КЛУБНЫЙ ЖИЛОЙ КОМПЛЕКС В СЕРДЦЕ ПОДМОСКОВЬЯ</div>
                                <div>
                                    <span className="bg-mynormal px-3 py-1">ОБРАТНЫЙ ЗВОНОК</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
