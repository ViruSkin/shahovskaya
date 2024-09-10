import { Link } from "react-router-dom";
import IMG from "../assets/images";

import Btn from './Btn.tsx'
import { useEffect, useState } from "react";

interface headerProps {
    setModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const Header:React.FC<headerProps> = ({ setModal }) => {
    const [menu, setMenu] = useState<boolean>(false);

    useEffect(() => {
        if (menu) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'visible';
        }
    }, [menu])

    return (<>
        <header className={`absolute ${menu ? 'z-20' : 'z-[2]'} left-0 top-0 w-full pt-3 pb-[15px]`}>
            <div className="container flex items-center justify-between">
                <Link to={'/'}>
                    <img src={IMG.headerLogo} alt="" className="w-[114px] lg:w-[250px] xl:w-auto" />
                </Link>
                <div className="flex flex-col items-end gap-[15px]">
                    <ul className="hidden lg:flex items-center gap-6 xl:gap-10 text-lg leading-[23px]">
                        <li>
                            <a href="#">О проекте</a>
                        </li>
                        <li>
                            <a href="#">Карта</a>
                        </li>
                        <li>
                            <a href="#">Дома</a>
                        </li>
                        <li>
                            <a href="#">Ипотека</a>
                        </li>
                        <li>
                            <a href="#">Обратная связь</a>
                        </li>
                        <li>
                            <a href="#">О компании</a>
                        </li>
                        <li>
                            <a href="#">Контакты</a>
                        </li>
                    </ul>
                    <div className="flex items-center gap-[18px]">
                        <a href="tel:+79991234567" className="flex items-center gap-[5px] text-sm lg:text-lg leading-[18px] lg:leading-[23px]">
                            <img src={IMG.phoneIcon} alt="" className="w-4 lg:w-auto" />
                            <span>+7 999 123-45-67</span>
                        </a>
                        <Btn className="hidden lg:flex" theme="light" onClick={() => setModal(true)}>Обратный звонок</Btn>
                        <button
                            onClick={() => {setMenu(!menu)}}
                            className="flex lg:hidden items-center justify-center w-6 h-6 flex-shrink-0"
                        >
                            {   menu ? 
                                <img src={IMG.times} alt="" /> :
                                <img src={IMG.bars} alt="" />
                            }
                        </button>
                    </div>
                </div>
            </div>
        </header>
        <div className={`fixed top-0 left-0 w-full h-full z-10 bg-white px-5 pt-[77px] ${menu ? 'block lg:hidden' : 'hidden'}`}>
            <ul className="flex flex-col gap-4 text-[17px] leading-[21px] mb-10">
                <li>
                    <a href="#">О проекте</a>
                </li>
                <li>
                    <a href="#">Карта</a>
                </li>
                <li>
                    <a href="#">Дома</a>
                </li>
                <li>
                    <a href="#">Ипотека</a>
                </li>
                <li>
                    <a href="#">Обратная связь</a>
                </li>
                <li>
                    <a href="#">О компании</a>
                </li>
                <li>
                    <a href="#">Контакты</a>
                </li>
            </ul>
            <a href="tel:+79991234567" className="flex items-center gap-[5px] text-lg leading-[23px] mb-4">
                <img src={IMG.phoneIcon} alt="" />
                <span>+7 999 123-45-67</span>
            </a>
            <a href="mailto:info@gmail.com" className="flex items-center gap-[5px] text-lg leading-[23px] mb-4">
                <img src={IMG.mailDark} alt="" />
                <span>info@gmail.com</span>
            </a>
            <Btn className="mb-4" theme="light-green" onClick={() => setModal(true)}>Обратный звонок</Btn>
            <p className="text-base leading-[22px] mb-2">Наши соцсети:</p>
            <div className="flex items-center gap-[10px]">
                <a href="#">
                    <img src={IMG.telegramDark} alt="" />
                </a>
                <a href="#">
                    <img src={IMG.instagramDark} alt="" />
                </a>
                <a href="#">
                    <img src={IMG.facebookDark} alt="" />
                </a>
                <a href="#">
                    <img src={IMG.whatsappDark} alt="" />
                </a>
            </div>
        </div>
    </>)
}

export default Header;