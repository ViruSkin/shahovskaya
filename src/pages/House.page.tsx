import { Houses } from "../db";
import FooterComponent from "../components/Footer";
import NavbarComponent from "../components/Navbar";
import { redirect } from "react-router-dom";
import { useEffect } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "../App.css";

import { Autoplay, Navigation, Pagination } from "swiper/modules";

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
        window.scrollTo(0, 0);
    }, []);
    return (
        <div className="flex flex-col min-h-screen">
            <header className="mt-16">
                <NavbarComponent />
            </header>
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
                            <img src={house.planImg} alt="" className="w-full h-full object-contain" />
                        </div>
                        <div className="md:basis-1/2">{house.plan}</div>
                    </div>
                </div>
            </main>
            <footer id="footer" className="mt-8">
                <FooterComponent />
            </footer>
        </div>
    );
};

export default HousePage;
