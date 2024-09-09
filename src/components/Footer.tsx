import { Link } from "react-router-dom";
import IMG from "../assets/images";
import Btn from "./Btn.tsx";

export default function Footer() {
    return (
        <footer className="relative bg-black-1 pt-[15px] pb-[30px] text-white">
            <div className="container flex items-start justify-between">
                <div className="flex items-start gap-[128px]">
                    <Link to="/">
                        <img src={IMG.footerLogo} alt="логотип" />
                    </Link>
                    <ul className="flex flex-col gap-[15px] text-base leading-5">
                        <li>
                            <Link to="/">О нас</Link>
                        </li>
                        <li>
                            <Link to="/">Карта</Link>
                        </li>
                        <li>
                            <Link to="/">Дома</Link>
                        </li>
                        <li>
                            <Link to="/">Ипотека</Link>
                        </li>
                        <li>
                            <Link to="/">Обратная связь</Link>
                        </li>
                        <li>
                            <Link to="/">Контакты</Link>
                        </li>
                    </ul>
                </div>
                <div className="flex items-start gap-[133px]">
                    <div className="text-base leading-[140%]">
                        <a href="tel:+79991234567" className="flex items-center gap-[5px] mb-1">
                            <img src={IMG.phoneWhite} alt="" />
                            <span>+7 999 123-45-67</span>
                        </a>
                        <p className="mb-4">с 9:00 до 21:00</p>
                        <Btn theme="light-green" className="mb-5">Обратный звонок</Btn>
                        <a href="mailto:info@gmail.com" className="flex items-center gap-[5px]">
                            <img src={IMG.mail} alt="" />
                            <span>info@gmail.com</span>
                        </a>
                    </div>
                    <div>
                        <h3 className="text-base leading-[140%] mb-3">Наши соцсети:</h3>
                        <div className="flex items-center gap-[10px] mb-[97px]">
                            <a href="#">
                                <img src={IMG.telegram} alt="" />
                            </a>
                            <a href="#">
                                <img src={IMG.instagram} alt="" />
                            </a>
                            <a href="#">
                                <img src={IMG.facebook} alt="" />
                            </a>
                            <a href="#">
                                <img src={IMG.whatsapp} alt="" />
                            </a>
                        </div>
                        <p className="text-xs leading-[15px]">Политика конфиденциальности</p>
                    </div>
                </div>
            </div>
        </footer>
    );
}
