import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper/modules";
import IMG from "../assets/images";
import Contact from "../components/Contact";

import SwiperCore from "swiper";

import { Houses } from "../db";

interface ProjectProps {
    name: string;
}
const Project: React.FC<ProjectProps> = ({ name }) => {
    const house = Houses.find((house) => house.name === name);
    if (!house) return null;
    const swp = useRef<SwiperCore | null>(null);
    return (
        <>
            <section className="pt-[77px] lg:pt-[162px]">
                <div className="container text-center">
                    <h2 className="text-4xl lg:text-[60px] leading-[45px] lg:leading-[75px] mb-6 lg:mb-5 uppercase">
                        {name}
                    </h2>
                    <p className="max-w-[844px] mx-auto mb-6 lg:mb-5 text-[17px] lg:text-base leadig-[140%]">
                       {house.description}
                    </p>
                </div>
                <div className="container relative z-[2] hidden lg:block">
                    <button
                        onClick={() => {
                            swp.current?.slidePrev();
                        }}
                        className="w-[56px] h-[56px] flex items-center justify-center rounded-full bg-white absolute top-[372px] left-0"
                    >
                        <img src={IMG.chevronIcon} alt="" className="rotate-180" />
                    </button>
                    <button
                        onClick={() => {
                            swp.current?.slideNext();
                        }}
                        className="w-[56px] h-[56px] flex items-center justify-center rounded-full bg-white absolute top-[372px] right-0"
                    >
                        <img src={IMG.chevronIcon} alt="" />
                    </button>
                </div>
                <Swiper
                    slidesPerView={"auto"}
                    spaceBetween={0}
                    loop={true}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Pagination]}
                    onSwiper={(swiperInstance) => (swp.current = swiperInstance)}
                    className="mb-11 lg:mb-[75px] project-swp overflow-visible"
                >
                    {house.images.map((url) => (
                        <SwiperSlide key={url} className="h-[240px] sm:h-[350px] md:h-[500px] lg:h-[800px]">
                            <img src={url} alt="" className="w-full h-full object-cover" />
                        </SwiperSlide>
                    ))}
                </Swiper>
                <div className="container">
                    <div className="mb-6 lg:mb-10 flex flex-col lg:flex-row items-start gap-4 lg:gap-5">
                        <ul className="w-full text-[17px] lg:text-[22px] leading-[150%] font-light text-[#797979] flex flex-col gap-4 lg:gap-[15px]">
                            <li className="flex items-center gap-[5px]">
                                <p>Статуса проекта:</p>
                                <p className="font-normal text-black-1">активный</p>
                            </li>
                            <li className="flex items-center gap-[5px]">
                                <p>Дата добавления на сайт:</p>
                                <p className="font-normal text-black-1">12.01.2024</p>
                            </li>
                            <li className="flex items-center gap-[5px]">
                                <p>Описание проекта:</p>
                                <p className="font-normal text-black-1">Многоквартирный жилой комплекс</p>
                            </li>
                            <li className="flex items-center gap-[5px]">
                                <p>Целевой IRR;</p>
                                <p className="font-normal text-black-1">12%</p>
                            </li>
                            <li className="flex items-end gap-[5px]">
                                <p>Предполагаемая доходность инвестора:</p>
                                <p className="font-normal text-black-1 flex-shrink-0">х 1,5</p>
                            </li>
                            <li className="flex items-end gap-[5px]">
                                <p>Стоимость всего проекта:</p>
                                <p className="font-normal text-black-1 flex-shrink-0">100 000 000 $</p>
                            </li>
                        </ul>
                        <ul className="w-full text-[17px] lg:text-[22px] leading-[150%] font-light text-[#797979] flex flex-col gap-[15px]">
                            <li className="flex items-end gap-[5px]">
                                <p>Размер привлекаемых средств:</p>
                                <p className="font-normal text-black-1 flex-shrink-0">100 000 000 $</p>
                            </li>
                            <li className="flex items-end gap-[5px]">
                                <p>Минимальная сумма инвестиций:</p>
                                <p className="font-normal text-black-1 flex-shrink-0">100 000 000 $</p>
                            </li>
                            <li className="flex items-center gap-[5px]">
                                <p>Дата начала проекта:</p>
                                <p className="font-normal text-black-1">17.03.2022</p>
                            </li>
                            <li className="flex items-center gap-[5px]">
                                <p>Дата окончания проекта:</p>
                                <p className="font-normal text-black-1">12.01.2024</p>
                            </li>
                            <li className="flex items-center gap-[5px]">
                                <p>Стратегия выхода:</p>
                                <p className="font-normal text-black-1">Продажа проекта инвестору</p>
                            </li>
                            <li className="flex items-start gap-[5px]">
                                <p className="lg:flex-shrink-0">Обновления по проекту:</p>
                                <p className="font-normal text-black-1">
                                    Окончание привлечения инвестиций 15 марта 2024 года.
                                </p>
                            </li>
                        </ul>
                    </div>
                    <img src={IMG.scheme} alt="" className="w-full -mb-10" />
                </div>
            </section>

            <Contact reverse={true} />
        </>
    );
};

export default Project;
