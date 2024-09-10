import { YMaps, Map, Placemark, Polygon } from "@pbe/react-yandex-maps";
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';

import { Pagination } from 'swiper/modules';

import IMG from "../assets/images/index.tsx";
import Btn from "../components/Btn.tsx";
import Title from "../components/Title.tsx";
import React, { useState } from "react";
import Contact from "../components/Contact.tsx";


const Home: React.FC = () => {
    const [chooceList, setChooceList] = useState([
        {title: "Питание", description: "Рестораны, кафе"},
        {title: "Покупки", description: "Торговые центры, супермаркет"},
        {title: "Развлечения", description: "Школа танцев, бильярд"},
        {title: "Красота", description: "Салоны красоты, парикмахерские"},
        {title: "Здоровье", description: "Аптеки, поликлиники и больница"},
        {title: "Авто", description: "Заправочный центр и автосервисы"},
        {title: "Спорт", description: "Фитнес клубы, тренажерные залы"},
        {title: "Транспорт", description: "Остановки общественного транспорта"},
        {title: "Услуги", description: "Почтовые отделения, нотариус"},
        {title: "Деньги", description: "Банкоматы, и отделения банков"},
        {title: "Образование", description: "Детские сады, средние школы"},
        {title: "Животные", description: "Ветеринарные клиники, и аптеки"},
    ])

    return (<>

        {/* Home */}
        <section className="relative z[1] pt-[276px]">
            <img src={IMG.homeImg} alt="" className="absolute top-0 left-0 w-full h-full z-[-1] object-cover" />
            <div className="pt-[358px] pb-[93px] text-white bg-[linear-gradient(to_bottom,rgba(35,35,35,0),#232323)]">
                <div className="container">
                    <h2 className="text-[60px] leading-[75px] uppercase mb-[10px]">Шаховская Усадьба</h2>
                    <p className="text-xl leading-[25px] uppercase mb-5">уникальный клубный жилой квартал в сердце Подмосковья</p>
                    <Btn className="" theme="green">Обратный звонок</Btn>
                </div>
            </div>
        </section>
        {/* Home end */}

        {/* About the project */}
        <section>
            <div className="container flex items-start py-[80px] gap-[128px]">
                <div className="flex-shrink-0 w-[412px]">
                    <img src={IMG.productCard} alt="" className="rounded-[3px]" />
                </div>
                <div className="relative w-full flex flex-col gap-5">
                    <h1 className="text-[60px] uppercase leading-[75px]">О ПРОЕКТЕ</h1>
                    <ul className="flex flex-col gap-5 text-lg font-thin leading-[140%]">
                        <li className="pb-[25px]">
                            Добро пожаловать в "Шаховскую Усадьбу" — уникальный клубный жилой квартал в сердце Подмосковья,
                            где сочетаются чистый футуризм архитектуры и новый уровень премиального комфорта для всей семьи.
                            Наш проект создан для тех, кто ценит качество жизни и стремится окружить себя красотой и
                            гармонией природы.
                        </li>
                        <li>
                            "Шаховская Усадьба" — это место, где каждое утро начинается с вдохновляющих видов, а уют и покой
                            становятся вашими постоянными спутниками. Мы предлагаем три уникальных типа домов, каждый из
                            которых разработан с учётом современных стандартов и желаний наших клиентов. Прекрасные бани,
                            просторные гаражи и уютные беседки дополняют инфраструктуру, делая её идеальной для комфортного
                            проживания.
                        </li>
                        <li className="text-[28px]">
                            <span className="text-mynormal inline">Наше кредо — удивлять.</span> Мы стремимся предложить больше,
                            чем обычные стандарты
                        </li>
                        <li>
                            Предвосхищаем ваши ожидания и создаем особую атмосферу уюта и обособленности, завораживающую с первого взгляда. Премиальные материалы и продуманные детали в каждом доме обеспечивают долговечность и комфорт, а индивидуальный подход к каждому клиенту делает ваш опыт покупки приятным и простым.
                        </li>
                    </ul>
                    <div className="absolute right-0 -bottom-[62px]">
                        <Title theme="dark">01</Title>
                    </div>
                </div>
            </div>
        </section>
        {/* About the project end */}

        {/* Your chooce */}
        <section className="relative z-[1] py-[60px]">
            <img src={IMG.chooceBg} alt="Header Background" className=" absolute left-0 top-0 z-[-1] w-full h-full object-cover" />
            <div className="container flex items-start gap-[128px] text-white">
                <div className="w-[520px] flex-shrink-0">
                    <h2 className="text-white text-5xl leading-[auto] mb-5">ВЫ ВЫБИРАЕТЕ НЕ ПРОСТО ДОМ, А НОВУЮ ЖИЗНЬ</h2>
                    <p className="text-lg font-thin mb-8">
                        Это шаг в будущее, в котором каждый день будет наполнен радостью и умиротворением.
                        Почувствуйте гармонию с природой и насладитесь всем, что предлагает жизнь в современном
                        загородном квартале.
                    </p>
                    <Title theme="light">02</Title>
                </div>
                <ul className="w-full flex flex-wrap gap-5">
                    {chooceList.map((data, dataIdx) => (
                        <li key={dataIdx} className="w-[calc(100%_/_3_-_40px_/_3)]">
                            <h3 className="text-green text-xl leading-[25px] mb-[5px] flex items-center gap-3 pl-3">
                                <span className="w-[7px] h-[7px] block rounded-full bg-green"></span>
                                <span>{ data.title }</span>
                            </h3>
                            <p className="text-base font-thin">
                                { data.description }
                            </p>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
        {/* Your chooce end */}

        {/* Implementation */}
        <section className="pt-[80px]">
            <div className="container relative">
                <h2 className="max-w-[735px] ml-auto text-[60px] leading-[75px] mb-[30px] pr-[332px] uppercase">Пошаговая <br /> реализация</h2>
                <div className="absolute top-[63px] right-0">
                    <Title theme="dark">03</Title>
                </div>
                <ul className="flex items-start gap-5">
                    <li className="w-full flex flex-col gap-[10px]">
                        <p className="text-sm leading-[18px] relative z-[1]">
                            <span className="absolute top-1/2 translate-y-[-50%] left-0 h-[1px] w-full bg-black opacity-20 z-[-1]"></span>
                            <span className="inline bg-white pr-[10px] text-[rgba(0,0,0,0.4)]">1 Сентября 2024</span>
                        </p>
                        <h3 className="text-green font-normal text-xl leading-[140%] uppercase">Подготовка и проектирование</h3>
                        <ul className="flex flex-col font-thin text-lg leading-[140%] list-disc pl-5">
                            <li>Разработка генерального плана поселка и архитектурных проектов.</li>
                            <li>Проведение геодезических и инженерных изысканий.</li>
                            <li>Подготовка земельных участков и проведение коммуникаций.</li>
                        </ul>
                    </li>
                    <li className="w-full flex flex-col gap-[10px]">
                        <p className="text-sm leading-[18px] relative z-[1]">
                            <span className="absolute top-1/2 translate-y-[-50%] left-0 h-[1px] w-full bg-black opacity-20 z-[-1]"></span>
                            <span className="inline bg-white pr-[10px] text-[rgba(0,0,0,0.4)]">31 декабря 2024</span>
                        </p>
                        <h3 className="text-green font-normal text-xl leading-[140%] uppercase">Начало строительства и инфраструктура</h3>
                        <ul className="flex flex-col font-thin text-lg leading-[140%] list-disc pl-5">
                            <li>Строительство въездной группы, КПП и первой очереди коттеджей.</li>
                            <li>Обустройство внутренних дорог и инженерных сетей.</li>
                            <li>Возведение детских и спортивных площадок</li>
                        </ul>
                    </li>
                    <li className="w-full flex flex-col gap-[10px]">
                        <p className="text-sm leading-[18px] relative z-[1]">
                            <span className="absolute top-1/2 translate-y-[-50%] left-0 h-[1px] w-full bg-black opacity-20 z-[-1]"></span>
                            <span className="inline bg-white pr-[10px] text-[rgba(0,0,0,0.4)]">1 Июня 2025</span>
                        </p>
                        <h3 className="text-green font-normal text-xl leading-[140%] uppercase">Основное строительство и благоустройство</h3>
                        <ul className="flex flex-col font-thin text-lg leading-[140%] list-disc pl-5">
                            <li>Строительство второй очереди коттеджей и общественных зон.</li>
                            <li>Завершение ландшафтных работ и озеленения территории.</li>
                            <li>Установка освещения и систем безопасности.</li>
                        </ul>
                    </li>
                    <li className="w-full flex flex-col gap-[10px]">
                        <p className="text-sm leading-[18px] relative z-[1]">
                            <span className="absolute top-1/2 translate-y-[-50%] left-0 h-[1px] w-full bg-black opacity-20 z-[-1]"></span>
                            <span className="inline w-full bg-white pr-[10px] text-[rgba(0,0,0,0.4)]">31 декабря 2025</span>
                        </p>
                        <h3 className="text-green font-normal text-xl leading-[140%] uppercase">Завершение строительства и ввод в эксплуатацию</h3>
                        <ul className="flex flex-col font-thin text-lg leading-[140%] list-disc pl-5">
                            <li>Завершение строительства всех коттеджей и инфраструктурных объектов.</li>
                            <li>Ввод объектов в эксплуатацию и оформление документов.</li>
                            <li>Заселение жителей и начало эксплуатации поселка.</li>
                        </ul>
                    </li>
                </ul>
            </div>
        </section>
        {/* Implementation end */}

        {/* Location */}
        <section>
            <div className="container flex items-stretch pt-[80px] gap-5">
                <div className="flex flex-col items-start gap-5 w-full">
                    <h2 className="text-[60px] leading-[75px] uppercase">Расположение</h2>
                    <p className="text-lg leading-[140%] font-thin">Комплекс "Шаховская Усадьба" расположен в быстроразвивающемся и престижном районе</p>
                    <p className="text-lg leading-[140%] font-thin">В радиусе 1.5 км от жилого комплекса:</p>
                    <ul className="flex flex-wrap gap-y-[3px]">
                        <li className="w-1/2 flex items-center gap-[10px]">
                            <h3 className="text-green text-5xl leading-[140%] font-normal">12</h3>
                            <p className="font-thin text-lg leading-[140%]">супермаркетов</p>
                        </li>
                        <li className="w-1/2 flex items-center gap-[10px]">
                            <h3 className="text-green text-5xl leading-[140%] font-normal">5</h3>
                            <p className="font-thin text-lg leading-[140%]">фитнес залов</p>
                        </li>
                        <li className="w-1/2 flex items-center gap-[10px]">
                            <h3 className="text-green text-5xl leading-[140%] font-normal">30+</h3>
                            <p className="font-thin text-lg leading-[140%]">кафе и рестораны</p>
                        </li>
                        <li className="w-1/2 flex items-center gap-[10px]">
                            <h3 className="text-green text-5xl leading-[140%] font-normal">7</h3>
                            <p className="font-thin text-lg leading-[140%]">медицинских учреждений</p>
                        </li>
                    </ul>
                    <Title theme="dark">04</Title>
                </div>
                <div className="w-[628px] flex-shrink-0 rounded-[3px] overflow-hidden">
                    <YMaps query={{ apikey: "9fb6dcb2-557b-4c57-9264-0d2f11e124a2" }}>
                        <Map
                            defaultState={{ center: [56.106478, 35.497504], zoom: 13 }} // Установите координаты и уровень масштаба
                            width="100%" // Ширина карты
                            height="100%" // Высота карты
                        >
                            {/* Добавьте метку или другие элементы */}
                            <Placemark geometry={[56.106478, 35.497504]} />
                            <Polygon
                                geometry={[
                                    [
                                        [55.75, 37.8],
                                        [55.8, 37.9],
                                        [55.75, 38.0],
                                        [55.7, 38.0],
                                        [55.7, 37.8],
                                    ],
                                    [
                                        [55.75, 37.82],
                                        [55.75, 37.98],
                                        [55.65, 37.9],
                                    ],
                                ]}
                                options={{
                                    fillColor: "#00FF00",
                                    strokeColor: "#0000FF",
                                    opacity: 0.5,
                                    strokeWidth: 1,
                                    strokeStyle: "shortdash",
                                }}
                            />
                        </Map>
                    </YMaps>
                </div>
            </div>
        </section>
        {/* Location end */}

        {/* Plan */}
        <section className="py-[80px]">
            <div className="container">
                <div className="max-w-[736px] ml-auto mb-5">
                    <h2 className="text-[60px] leading-[75px] mb-5 uppercase">План поселка</h2>
                    <div className="flex items-center justify-between gap-[90px]">
                        <p className="font-thin text-lg leading-[140%]">Наш уютный коттеджный поселок спроектирован с учетом всех потребностей современной семьи. На территории предусмотрено несколько ключевых зон для комфортного проживания:</p>
                        <div className="flex-shrink-0">
                            <Title theme="dark">05</Title>
                        </div>
                    </div>
                </div>
                <div className="flex items-start gap-5">
                    <div className="w-full">
                        <img src={IMG.planCard} alt="" className="w-full" />
                    </div>
                    <ul className="w-full flex flex-wrap gap-5">
                        <li className="w-[calc(50%_-_10px)]">
                            <h3 className="flex items-center gap-3 pl-3 mb-[5px]">
                                <span className="w-[7px] h-[7px] flex-shrink-0 rounded-full bg-green"></span>
                                <span className="text-xl leading-[25px] text-green">Детская площадка</span>
                            </h3>
                            <p className="font-thin text-base leading-5">Безопасная и современная игровая зона для ваших детей.</p>
                        </li>
                        <li className="w-[calc(50%_-_10px)]">
                            <h3 className="flex items-center gap-3 pl-3 mb-[5px]">
                                <span className="w-[7px] h-[7px] flex-shrink-0 rounded-full bg-green"></span>
                                <span className="text-xl leading-[25px] text-green">Офис/КПП</span>
                            </h3>
                            <p className="font-thin text-base leading-5">Обеспечение безопасности и удобства жителей.</p>
                        </li>
                        <li className="w-[calc(50%_-_10px)]">
                            <h3 className="flex items-center gap-3 pl-3 mb-[5px]">
                                <span className="w-[7px] h-[7px] flex-shrink-0 rounded-full bg-green"></span>
                                <span className="text-xl leading-[25px] text-green">Спортивная площадка</span>
                            </h3>
                            <p className="font-thin text-base leading-5">Место для занятий спортом на свежем воздухе.</p>
                        </li>
                        <li className="w-[calc(50%_-_10px)]">
                            <h3 className="flex items-center gap-3 pl-3 mb-[5px]">
                                <span className="w-[7px] h-[7px] flex-shrink-0 rounded-full bg-green"></span>
                                <span className="text-xl leading-[25px] text-green">Парковка комплекса</span>
                            </h3>
                            <p className="font-thin text-base leading-5">Просторная парковка для автомобилей жителей и гостей.</p>
                        </li>
                        <li className="w-[calc(50%_-_10px)]">
                            <h3 className="flex items-center gap-3 pl-3 mb-[5px]">
                                <span className="w-[7px] h-[7px] flex-shrink-0 rounded-full bg-green"></span>
                                <span className="text-xl leading-[25px] text-green">Банный комплекс</span>
                            </h3>
                            <p className="font-thin text-base leading-5">Идеальное место для отдыха и восстановления сил</p>
                        </li>
                        <li className="w-[calc(50%_-_10px)]">
                            <h3 className="flex items-center gap-3 pl-3 mb-[5px]">
                                <span className="w-[7px] h-[7px] flex-shrink-0 rounded-full bg-green"></span>
                                <span className="text-xl leading-[25px] text-green">Основной и второй въезды</span>
                            </h3>
                            <p className="font-thin text-base leading-5">Удобные и продуманные подъезды для вашего комфорта.</p>
                        </li>
                        <li className="w-[calc(50%_-_10px)]">
                            <h3 className="flex items-center gap-3 pl-3 mb-[5px]">
                                <span className="w-[7px] h-[7px] flex-shrink-0 rounded-full bg-green"></span>
                                <span className="text-xl leading-[25px] text-green">Магазин и кафе</span>
                            </h3>
                            <p className="font-thin text-base leading-5">Все необходимые товары и уютное кафе находятся прямо на территории поселка.</p>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
        {/* Plan end */}

        {/* New life */}
        <section className="relative z-[1] py-[60px] text-white">
            <img src={IMG.newLifeBg} alt="" className="absolute top-0 left-0 w-full h-full object-cover z-[-1]"/>
            <div className="container">
                <div className="max-w-[1050px] flex items-end gap-[69px] mb-5">
                    <Title theme="light">06</Title>
                    <div>
                        <h2 className="text-5xl leading-[60px] uppercase mb-5">вы выбираете не просто дом, а новую жизнь</h2>
                        <p className="font-thin text-lg leading-[140%]">Это шаг в будущее, в котором каждый день будет наполнен радостью и умиротворением. Почувствуйте гармонию с природой и насладитесь всем, что предлагает жизнь в современном загородном квартале.</p>
                    </div>
                </div>
                <Swiper
                    slidesPerView={3}
                    spaceBetween={20}
                    pagination={true}
                    modules={[Pagination]}
                    className="new-life-swp"
                >
                    <SwiperSlide>
                        <div className="h-full flex flex-col justify-between gap-5 items-center py-[25px] px-5 bg-black-1 rounded-[3px]">
                            <div>
                                <div className="mb-5">
                                    <img src={IMG.newLifeCard1} alt="" />
                                </div>
                                <h3 className="text-center font-normal text-xl leading-[25px] uppercase mb-[10px]">Gloria</h3>
                                <p className="font-thin text-lg leading-[140%]">Просторный дом площадью 132 м² с тремя спальнями и большой гостиной, идеально подходит для семейного проживания. Высокий уровень комфорта и современные строительные материалы обеспечат уют и долговечность.</p>
                            </div>
                            <Btn className="" theme="green">Подробнее</Btn>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="h-full flex flex-col justify-between gap-5 items-center py-[25px] px-5 bg-black-1 rounded-[3px]">
                            <div>
                                <div className="mb-5">
                                    <img src={IMG.newLifeCard2} alt="" />
                                </div>
                                <h3 className="text-center font-normal text-xl leading-[25px] uppercase mb-[10px]">Katalina</h3>
                                <p className="font-thin text-lg leading-[140%]">Уютный дом площадью 101 м² с тремя спальнями и большой кухней-гостиной. Идеальный выбор для тех, кто ценит гармонию между пространством и функциональностью.</p>
                            </div>
                            <Btn className="" theme="green">Подробнее</Btn>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="h-full flex flex-col justify-between gap-5 items-center py-[25px] px-5 bg-black-1 rounded-[3px]">
                            <div>
                                <div className="mb-5">
                                    <img src={IMG.newLifeCard3} alt="" />
                                </div>
                                <h3 className="text-center font-normal text-xl leading-[25px] uppercase mb-[10px]">Maria</h3>
                                <p className="font-thin text-lg leading-[140%]">Компактный дом площадью 75 м² с двумя спальнями, гостиной и кухней. Отличное решение для небольшой семьи, ищущей комфорт и экономию.</p>
                            </div>
                            <Btn className="" theme="green">Подробнее</Btn>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </section>
        {/* New life end */}

        {/* Ipoteka */}
        <section className="pt-[80px]">
            <div className="container flex items-stretch gap-[128px]">
                <div className="w-[412px] flex-shrink-0 rounded-[3px]">
                    <img src={IMG.ipotekaCard} alt="" className="w-full h-full object-cover" />
                </div>
                <div className="w-full">
                    <div className="flex items-end justify-between">
                        <h2 className="text-[60px] leading-[75px] pb-[13px] uppercase">Все виды <br /> ипотеки</h2>
                        <Title theme="dark">07</Title>
                    </div>
                    <ul className="flex flex-col gap-5 mb-10">
                        <li>
                            <div className="inline-block h-[1px] w-[88px] bg-green"></div>
                            <p className="font-thin text-lg leading-[140%] mt-[10px]">Homewerk предлагает своим клиентам специальные условия приобретения дома в рамках программ ипотечного кредитования от банков-партнеров.</p>
                        </li>
                        <li>
                            <div className="inline-block h-[1px] w-[88px] bg-green"></div>
                            <p className="font-thin text-lg leading-[140%] mt-[10px]">Личный менеджер сопровождает Вас на всех этапах сделки, с момента подачи документов в банк и до регистрации объекта.</p>
                        </li>
                        <li>
                            <div className="inline-block h-[1px] w-[88px] bg-green"></div>
                            <p className="font-thin text-lg leading-[140%] mt-[10px]">Всего за несколько часов банк оповестит Вас смс информированием и уведомлением на Ваш электронный адрес</p>
                        </li>
                    </ul>
                    <ul className="flex flex-wrap gap-5">
                        <li className="w-[calc(100%_/_3_-_40px_/_3)] h-[65px] flex items-center justify-center">
                            <img src={IMG.bank1} alt="" className="w-full h-full object-contain" />
                        </li>
                        <li className="w-[calc(100%_/_3_-_40px_/_3)] h-[65px] flex items-center justify-center">
                            <img src={IMG.bank2} alt="" className="w-full h-full object-contain" />
                        </li>
                        <li className="w-[calc(100%_/_3_-_40px_/_3)] h-[65px] flex items-center justify-center">
                            <img src={IMG.bank3} alt="" className="w-full h-full object-contain" />
                        </li>
                        <li className="w-[calc(100%_/_3_-_40px_/_3)] h-[65px] flex items-center justify-center">
                            <img src={IMG.bank4} alt="" className="w-full h-full object-contain" />
                        </li>
                        <li className="w-[calc(100%_/_3_-_40px_/_3)] h-[65px] flex items-center justify-center">
                            <img src={IMG.bank5} alt="" className="w-full h-full object-contain" />
                        </li>
                        <li className="w-[calc(100%_/_3_-_40px_/_3)] h-[65px] flex items-center justify-center">
                            <img src={IMG.bank6} alt="" className="w-full h-full object-contain" />
                        </li>
                    </ul>
                </div>
            </div>
        </section>
        {/* Ipoteka end */}
        
        {/* Company */}
        <section className="pt-[80px]">
            <div className="container flex items-stretch gap-[128px]">
                <div className="w-full">
                    <div className="flex items-center gap-[73px]">
                        <Title theme="dark">08</Title>
                        <h2 className="text-[60px] leading-[75px] uppercase">О компании</h2>
                    </div>
                    <ul className="flex flex-col gap-5 text-lg font-thin leading-[140%]">
                        <li className="pb-[25px]">
                            Добро пожаловать в "Шаховскую Усадьбу" — уникальный клубный жилой квартал в сердце Подмосковья,
                            где сочетаются чистый футуризм архитектуры и новый уровень премиального комфорта для всей семьи.
                            Наш проект создан для тех, кто ценит качество жизни и стремится окружить себя красотой и
                            гармонией природы.
                        </li>
                        <li>
                            "Шаховская Усадьба" — это место, где каждое утро начинается с вдохновляющих видов, а уют и покой
                            становятся вашими постоянными спутниками. Мы предлагаем три уникальных типа домов, каждый из
                            которых разработан с учётом современных стандартов и желаний наших клиентов. Прекрасные бани,
                            просторные гаражи и уютные беседки дополняют инфраструктуру, делая её идеальной для комфортного
                            проживания.
                        </li>
                        <li className="text-[28px]">
                            <span className="text-mynormal inline">Наше кредо — удивлять.</span> Мы стремимся предложить больше,
                            чем обычные стандарты
                        </li>
                        <li>
                            Предвосхищаем ваши ожидания и создаем особую атмосферу уюта и обособленности, завораживающую с первого взгляда. Премиальные материалы и продуманные детали в каждом доме обеспечивают долговечность и комфорт, а индивидуальный подход к каждому клиенту делает ваш опыт покупки приятным и простым.
                        </li>
                    </ul>
                </div>
                <div className="w-[412px] flex-shrink-0 rounded-[3px]">
                    <img src={IMG.productCard} alt="" className="w-full h-full object-cover" />
                </div>
            </div>
        </section>
        {/* Company end */}

        {/* Contact */}
        <Contact reverse={false}/>
        {/* Contact end */}

    </>);
}

export default Home;