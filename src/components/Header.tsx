import { Link } from "react-router-dom";
import IMG from "../assets/images";

import Btn from './Btn.tsx'

export default function Header () {
    return (<header className="absolute z-[2] left-0 top-0 w-full pt-3 pb-[15px]">
        <div className="container flex items-center justify-between">
            <Link to={'/'}>
                <img src={IMG.headerLogo} alt="" />
            </Link>
            <div className="flex flex-col items-end gap-[15px]">
                <ul className="flex items-center gap-10 text-lg leading-[23px]">
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
                    <a href="tel:+79991234567" className="flex items-center gap-[5px] text-lg leading-[23px]">
                        <img src={IMG.phoneIcon} alt="" />
                        <span>+7 999 123-45-67</span>
                    </a>
                    <Btn className="" theme="light">Обратный звонок</Btn>
                </div>
            </div>
        </div>
    </header>)
}