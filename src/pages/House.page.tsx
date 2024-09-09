
import { redirect } from "react-router-dom";
import { useEffect, useRef } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Canvas, FabricImage } from "fabric";


import FooterComponent from "../components/Footer";
import { Houses } from "../db";
interface HouseProps {
    name: string;
}
const HousePage: React.FC<HouseProps> = ({ name }) => {
    const house = Houses.find((house) => house.name === name);
    if (!house) {
        redirect("/");
        return null;
    }
    useEffect(() => {
        // window.scrollTo(0, 0);
    }, []);

    const canvasRef = useRef<HTMLCanvasElement | null>(null);
    const containerRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        if (!canvasRef.current) return;

        const canvas = new Canvas(canvasRef.current);

        const updateCanvasSize = () => {
            const container = containerRef.current;
            if (container) {
                const { width, height } = container.getBoundingClientRect();
                console.log(width, height);
                canvas.setWidth(width);
                canvas.setHeight(height);
                canvas.renderAll();
            }
        };

        const handleResize = () => {
            updateCanvasSize();
        };

        FabricImage.fromURL(house.planImg, { crossOrigin: "anonymous" }).then((img) => {
            console.log(canvas.getWidth(), canvas.getHeight());
            const scale = canvas.getHeight() / img.height;
            img.set({
                originX: "left",
                originY: "top",
                scaleX: scale,
                scaleY: scale,
                selectable: false,
            });
            canvas.add(img);

            // const rects: Rect[] = [];
            // house.plan.rooms.forEach((room, index) => {
            //     // Добавляем прямоугольник для выделения
            //     rects[index] = new Rect({
            //         left: img.left + img.width * room.l, // 10% от левого края изображения
            //         top: img.top + img.height * 0.112, // 10% от верхнего края изображения
            //         fill: "rgba(0,255,0,0.7)", // полупрозрачный красный цвет
            //         width: img.width * 0.081, // 20% от ширины изображения
            //         height: img.height * 0.131, // 10% от высоты изображения
            //         selectable: false, // позволяет перемещать и изменять размер прямоугольника
            //         hasControls: false, // позволяет изменять размер прямоугольника
            //     });
            //     canvas.add(rects[index]);
            // });
            // Обработчик для отображения tooltip при наведении
            // rect.on("mouseover", () => {
            //     rect.set("fill", "rgba(255,0,0,0.7)"); // Меняем цвет для выделения
            //     canvas.renderAll();
            //     showTooltip(rect);
            // });

            // // Обработчик для скрытия tooltip при убирании курсора
            // rect.on("mouseout", () => {
            //     rect.set("fill", null); // Возвращаем цвет обратно
            //     canvas.renderAll();
            //     hideTooltip();
            // });
        });

        // const showTooltip = (rect: Rect) => {
        //     const tooltip = document.getElementById("tooltip");
        //     if (tooltip) {
        //         console.log("asd");
        //         tooltip.style.display = "block";
        //         tooltip.style.left = `${rect.left + rect.width / 2}px`;
        //         tooltip.style.top = `${rect.top - 20}px`;
        //         tooltip.textContent = "Информация об участке"; // Установите нужный текст
        //     }
        // };

        // const hideTooltip = () => {
        //     const tooltip = document.getElementById("tooltip");
        //     if (tooltip) {
        //         tooltip.style.display = "none";
        //     }
        // };

        updateCanvasSize();
        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
            canvas.dispose();
        };
    });
    return (
        <div className="flex flex-col min-h-screen">
            <main className="flex-grow">
                <div className="flex flex-col">
                    <div className="flex justify-center font-bold text-3xl m-3">{name}</div>
                    <div>
                        <Swiper
                            modules={[Navigation, Pagination, Autoplay]} // Подключаем необходимые модули
                            spaceBetween={10} // Расстояние между слайдами
                            slidesPerView={1} // Количество слайдов, видимых одновременно
                            navigation // Включаем навигацию (стрелки)
                            pagination={{ clickable: true }} // Включаем пагинацию (точки)
                            autoplay={{ delay: 3000 }} // Автоплей с задержкой в 3000 мс (3 секунды)
                            loop // Зацикливаем карусель
                        >
                            {house.images.map((image, index) => (
                                <SwiperSlide key={index}>
                                    <img src={image} alt={`Slide ${index}`} className="object-cover w-full h-full" />
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>

                    <div className="mx-16 text-center">{house.description}</div>

                    <div className="flex flex-col md:flex-row">
                        <div className="md:basis-1/2 h-96 flex justify-center items-center">
                            <div ref={containerRef} className="w-full h-full">
                                <canvas ref={canvasRef} />
                            </div>
                        </div>
                        <div className="md:basis-1/2">
                            <ol className="list-decimal">
                                {house.plan.rooms.map((room, index) => (
                                    <li key={index}>
                                        {room.name} - {room.sq}
                                    </li>
                                ))}
                            </ol>
                        </div>
                    </div>
                </div>
                <div className="h-screen"></div>
                <div
                    id="tooltip"
                    style={{
                        display: "none",
                        position: "absolute",
                        backgroundColor: "white",
                        padding: "5px",
                        border: "1px solid black",
                        borderRadius: "4px",
                        zIndex: 1000,
                    }}
                ></div>
            </main>
            <footer id="footer" className="mt-8">
                <FooterComponent />
            </footer>
        </div>
    );
};

export default HousePage;
