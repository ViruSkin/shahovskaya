import { Link } from "react-router-dom";
import IMG from "../assets/images";
import Btn from "./Btn.tsx";

interface footerProps {
    setModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const Footer:React.FC<footerProps> = ({ setModal }) => {
    return (
        <footer className="relative bg-black-1 pt-6 lg:pt-[15px] pb-12 lg:pb-[30px] text-white">
            <div className="container flex flex-col lg:flex-row items-center lg:items-start lg:justify-between gap-6 lg:gap-0">
                <div className="flex flex-col lg:flex-row items-center lg:items-start gap-6 lg:gap-[60px] xl:gap-[128px]">
                    <Link to="/">
                        <img src={IMG.footerLogo} alt="логотип" className="w-[151px] lg:w-auto" />
                    </Link>
                    <ul className="flex flex-col gap-4 lg:gap-[15px] text-base leading-5 text-center lg:text-start">
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
                <div className="flex flex-col lg:flex-row items-center lg:items-start gap-6 lg:gap-[60px] xl:gap-[133px]">
                    <div className="text-base leading-[140%] flex lg:block flex-col items-center">
                        <a href="tel:+79991234567" className="flex items-center gap-[5px] mb-1">
                            <img src={IMG.phoneWhite} alt="" />
                            <span>+7 999 123-45-67</span>
                        </a>
                        <p className="mb-4 text-center lg:text-start">с 9:00 до 21:00</p>
                        <Btn theme="light-green" className="mb-5" onClick={() => setModal(true)}>Обратный звонок</Btn>
                        <a href="mailto:info@gmail.com" className="flex items-center gap-[5px]">
                            <img src={IMG.mail} alt="" />
                            <span>info@gmail.com</span>
                        </a>
                    </div>
                    <div className="flex lg:block flex-col items-center">
                        <h3 className="text-base leading-[140%] mb-2 lg:mb-3">Наши соцсети:</h3>
                        <div className="flex items-center gap-[10px] mb-4 lg:mb-[97px]">
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

export default Footer;