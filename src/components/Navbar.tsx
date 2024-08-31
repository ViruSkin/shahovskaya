"use client";

import { Navbar } from "flowbite-react";

export default function NavbarComponent() {
    return (
        <Navbar fluid rounded className="fixed top-0 w-full z-50">
            <Navbar.Brand href="https://flowbite-react.com">
                <img src="/images/logotype2.svg" className="mr-3 h-6 sm:h-9" alt="Flowbite React Logo" />
                <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
                    Шаховская Усадьба
                </span>
            </Navbar.Brand>
            <div className="flex md:order-2">
                <Navbar.Toggle />
            </div>
            <Navbar.Collapse>
                <Navbar.Link href="#" active>
                    Главная
                </Navbar.Link>
                <Navbar.Link href="#about">О проекте</Navbar.Link>
                <Navbar.Link href="#map">Карта</Navbar.Link>
                <Navbar.Link href="#houses">Дома</Navbar.Link>
                <Navbar.Link href="#credit">Кредитования</Navbar.Link>
                <Navbar.Link href="#feedback">Обратная связь</Navbar.Link>
                <Navbar.Link href="#footer">Контакты</Navbar.Link>
            </Navbar.Collapse>
        </Navbar>
    );
}
