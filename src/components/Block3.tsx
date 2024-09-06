import { CustomFlowbiteTheme, Flowbite, Timeline } from "flowbite-react";
import { useEffect, useState } from "react";
import { HiCalendar } from "react-icons/hi";

const customTheme: CustomFlowbiteTheme = {
    timeline: {
        root: {
            direction: {
                horizontal: "sm:flex mt-10",
                vertical: "relative border-l border-gray-200 dark:border-gray-700",
            },
        },
        item: {
            root: {
                horizontal: "relative mb-6 sm:mb-0",
                vertical: "mb-10 ml-6",
            },
            content: {
                root: {
                    base: "",
                    horizontal: "mt-3 sm:pr-8",
                    vertical: "",
                },
                body: {
                    base: "mb-4 text-sm text-gray-500 dark:text-gray-400",
                },
                time: {
                    base: "mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500",
                },
                title: {
                    base: "text-base font-semibold text-gray-900 dark:text-white",
                },
            },
            point: {
                horizontal: "flex items-center",
                line: "hidden h-0.5 w-full bg-gray-200 dark:bg-gray-700 sm:flex",
                marker: {
                    base: {
                        horizontal:
                            "absolute -left-1.5 h-3 w-3 rounded-full border border-white bg-gray-200 dark:border-gray-900 dark:bg-gray-700",
                        vertical:
                            "absolute -left-1.5 mt-1.5 h-3 w-3 rounded-full border border-white bg-gray-200 dark:border-gray-900 dark:bg-gray-700",
                    },
                    icon: {
                        base: "h-3 w-3 text-white dark:text-cyan-300",
                        wrapper:
                            "absolute -left-3 flex h-6 w-6 items-center justify-center rounded-full bg-mynormal ring-8 ring-white dark:bg-cyan-900 dark:ring-gray-900",
                    },
                },
                vertical: "",
            },
        },
    },
};

const Block3 = () => {
    const [isHorizontal, setIsHorizontal] = useState(false);

    // Функция для изменения ориентации в зависимости от ширины экрана
    const handleResize = () => {
        if (window.innerWidth >= 768) {
            // Если экран больше или равен 768px, устанавливаем горизонтальную ориентацию
            setIsHorizontal(true);
        } else {
            // Если экран меньше 768px, устанавливаем вертикальную ориентацию
            setIsHorizontal(false);
        }
    };

    useEffect(() => {
        // Устанавливаем начальное значение ориентации
        handleResize();
        // Добавляем слушатель события для изменения размера окна
        window.addEventListener("resize", handleResize);

        // Убираем слушатель при размонтировании компонента
        return () => window.removeEventListener("resize", handleResize);
    }, []);
    return (
        <div className="mx-auto max-w-screen-lg flex flex-col relative mt-10">
            <div className="flex justify-center">
                <h5 className="text-5xl">ПОЖАГОВАЯ РЕАЛИЗАЦИЯ</h5>
            </div>
            <div className="absolute top-0 right-0 text-6xl text-gray-400 linerBlack">03</div>
            <Flowbite theme={{ theme: customTheme }}>
                <Timeline horizontal={isHorizontal}>
                    <Timeline.Item>
                        <Timeline.Point icon={HiCalendar} />
                        <Timeline.Content>
                            <Timeline.Time>1 Сентября 2024</Timeline.Time>
                            <Timeline.Title>Подготовка и проектирование</Timeline.Title>
                            <Timeline.Body>
                                <ul className="list-disc pl-5">
                                    <li>Разработка генерального плана поселка и архитектурных проектов.</li>
                                    <li>Проведение геодезических и инженерных изысканий.</li>
                                    <li>Подготовка земельных участков и проведение коммуникаций.</li>
                                </ul>
                            </Timeline.Body>
                        </Timeline.Content>
                    </Timeline.Item>
                    <Timeline.Item>
                        <Timeline.Point icon={HiCalendar} />
                        <Timeline.Content>
                            <Timeline.Time>31 декабря 2024</Timeline.Time>
                            <Timeline.Title>Начало строительства и инфраструктура</Timeline.Title>
                            <Timeline.Body>
                                <ul className="list-disc pl-5">
                                    <li>Строительство въездной группы, КПП и первой очереди коттеджей.</li>
                                    <li>Обустройство внутренних дорог и инженерных сетей.</li>
                                    <li>Возведение детских и спортивных площадок.</li>
                                </ul>
                            </Timeline.Body>
                        </Timeline.Content>
                    </Timeline.Item>
                    <Timeline.Item>
                        <Timeline.Point icon={HiCalendar} />
                        <Timeline.Content>
                            <Timeline.Time>1 Июня 2025</Timeline.Time>
                            <Timeline.Title>Основное строительство и благоустройство</Timeline.Title>
                            <Timeline.Body>
                                <ul className="list-disc pl-5">
                                    <li>Строительство второй очереди коттеджей и общественных зон.</li>
                                    <li>Завершение ландшафтных работ и озеленения территории.</li>
                                    <li>Установка освещения и систем безопасности.</li>
                                </ul>
                            </Timeline.Body>
                        </Timeline.Content>
                    </Timeline.Item>
                    <Timeline.Item>
                        <Timeline.Point icon={HiCalendar} />
                        <Timeline.Content>
                            <Timeline.Time>31 декабря 2025</Timeline.Time>
                            <Timeline.Title>Завершение строительства и ввод в эксплуатацию</Timeline.Title>
                            <Timeline.Body>
                                <ul className="list-disc pl-5">
                                    <li>Завершение строительства всех коттеджей и инфраструктурных объектов.</li>
                                    <li>Ввод объектов в эксплуатацию и оформление документов.</li>
                                    <li>Заселение жителей и начало эксплуатации поселка.</li>
                                </ul>{" "}
                            </Timeline.Body>
                        </Timeline.Content>
                    </Timeline.Item>
                </Timeline>
            </Flowbite>
        </div>
    );
};

export default Block3;
