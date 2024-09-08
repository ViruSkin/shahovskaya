import { HiCalendar } from "react-icons/hi";
import Timeline from "../components/Timeline";

const Block3 = () => {

    return (
        <div className="mx-auto max-w-screen-lg flex flex-col relative mt-10">
            <div className="flex justify-center">
                <h5 className="text-5xl">ПОЖАГОВАЯ РЕАЛИЗАЦИЯ</h5>
            </div>
            <div className="absolute top-0 right-0 text-6xl text-gray-400 linerBlack">03</div>
            <Timeline>
                <Timeline.Item>
                    <Timeline.Point icon={<HiCalendar />} />
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
                    <Timeline.Point icon={<HiCalendar />} />
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
                    <Timeline.Point icon={<HiCalendar />} />
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
                    <Timeline.Point icon={<HiCalendar />} />
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
        </div>
    );
};

export default Block3;
