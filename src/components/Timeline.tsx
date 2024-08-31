import {  Timeline } from "flowbite-react";
import { useEffect, useState } from "react";
import {  HiCalendar } from "react-icons/hi";

const TimelineComponent = () => {
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
    );
};

export default TimelineComponent;
