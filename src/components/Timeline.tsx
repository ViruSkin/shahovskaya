import { Button, Timeline } from "flowbite-react";
import { useEffect, useState } from "react";
import { HiArrowNarrowRight, HiCalendar } from "react-icons/hi";

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
                    <Timeline.Title>Application UI code in Tailwind CSS</Timeline.Title>
                    <Timeline.Body>
                        Get access to over 20+ pages including a dashboard layout, charts, kanban board, calendar, and
                        pre-order E-commerce & Marketing pages.
                    </Timeline.Body>
                    <Button color="gray">
                        Learn More
                        <HiArrowNarrowRight className="ml-2 h-3 w-3" />
                    </Button>
                </Timeline.Content>
            </Timeline.Item>
            <Timeline.Item>
                <Timeline.Point icon={HiCalendar} />
                <Timeline.Content>
                    <Timeline.Time>31 декабря 2024</Timeline.Time>
                    <Timeline.Title>Marketing UI design in Figma</Timeline.Title>
                    <Timeline.Body>
                        All of the pages and components are first designed in Figma and we keep a parity between the two
                        versions even as we update the project.
                    </Timeline.Body>
                </Timeline.Content>
            </Timeline.Item>
            <Timeline.Item>
                <Timeline.Point icon={HiCalendar} />
                <Timeline.Content>
                    <Timeline.Time>1 Июня 2025</Timeline.Time>
                    <Timeline.Title>E-Commerce UI code in Tailwind CSS</Timeline.Title>
                    <Timeline.Body>
                        Get started with dozens of web components and interactive elements built on top of Tailwind CSS.
                    </Timeline.Body>
                </Timeline.Content>
            </Timeline.Item>
            <Timeline.Item>
                <Timeline.Point icon={HiCalendar} />
                <Timeline.Content>
                    <Timeline.Time>31 декабря 2025</Timeline.Time>
                    <Timeline.Title>E-Commerce UI code in Tailwind CSS</Timeline.Title>
                    <Timeline.Body>
                        Get started with dozens of web components and interactive elements built on top of Tailwind CSS.
                    </Timeline.Body>
                </Timeline.Content>
            </Timeline.Item>
        </Timeline>
    );
};

export default TimelineComponent;
