"use client";

import { Navbar } from "flowbite-react";
import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

export default function NavbarComponent() {
    const location = useLocation();

    useEffect(() => {
        if (location.hash) {
            const element = document.querySelector(location.hash);
            if (element) {
                element.scrollIntoView({ behavior: "smooth" });
            }
        }
    }, [location]);

    return (
        <Navbar fluid rounded className="fixed top-0 w-full z-50">
            <Navbar.Brand href="https://flowbite-react.com">
                {/* <img src="/images/logotype2.svg" className="mr-3 h-6 sm:h-9" alt="Flowbite React Logo" />
                <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
                    Шаховская Усадьба
                </span> */}
            </Navbar.Brand>
            <div className="flex md:order-2">
                <Navbar.Toggle />
            </div>
            <Navbar.Collapse>
                <Navbar.Link as={Link} to="/#" active>
                    Главная
                </Navbar.Link>
                <Navbar.Link as={Link} to="/#about">
                    О проекте
                </Navbar.Link>
                <Navbar.Link as={Link} to="/#map">
                    Карта
                </Navbar.Link>
                <Navbar.Link as={Link} to="/#houses">
                    Дома
                </Navbar.Link>
                <Navbar.Link as={Link} to="/#credit">
                    Ипотека
                </Navbar.Link>
                <Navbar.Link as={Link} to="/#feedback">
                    Обратная связь
                </Navbar.Link>
                <Navbar.Link as={Link} to="/#footer">
                    Контакты
                </Navbar.Link>
            </Navbar.Collapse>
        </Navbar>
    );
}
