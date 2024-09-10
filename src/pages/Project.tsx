import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';

import { Pagination } from 'swiper/modules';
import IMG from '../assets/images';
import Contact from '../components/Contact';

const Project:React.FC = () => {
    const swp = useRef(null)
    return (<>
        <section className='pt-[162px]'>
            <div className="container text-center">
                <h2 className='text-[60px] leading-[75px] mb-5 uppercase'>Gloria</h2>
                <p className="max-w-[844px] mx-auto mb-5">Просторный дом площадью 132 м² с тремя спальнями и большой гостиной, идеально подходит для семейного проживания. Высокий уровень комфорта и современные строительные материалы обеспечат уют и долговечность.</p>
            </div>
            <div className="container relative z-[2]">
                <button onClick={() => {swp.current.swiper.slidePrev()}} className="w-[56px] h-[56px] flex items-center justify-center rounded-full bg-white absolute top-[372px] left-0">
                    <img src={IMG.chevronIcon} alt="" className="rotate-180" />
                </button>
                <button onClick={() => {swp.current.swiper.slideNext()}} className="w-[56px] h-[56px] flex items-center justify-center rounded-full bg-white absolute top-[372px] right-0">
                    <img src={IMG.chevronIcon} alt="" />
                </button>
            </div>
            <Swiper
                slidesPerView={'auto'}
                spaceBetween={0}
                loop={true}
                pagination={{
                clickable: true,
                }}
                modules={[Pagination]}
                ref={swp}
                className="mb-[75px]"
            >
                {[1, 2, 3, 4, 5, 6].map((data, dataIdx) => (
                    <SwiperSlide key={dataIdx} className="h-[800px]">
                        <img src={IMG.projectCard} alt="" className="w-full h-full object-cover" />
                    </SwiperSlide>
                ))}
            </Swiper>
            <div className="container">
                <div className='mb-10 flex items-start gap-5'>
                    <ul className='w-full text-[22px] leading-[150%] font-light text-[#797979] flex flex-col gap-[15px]'>
                        <li className='flex items-center gap-[5px]'>
                            <p>Статуса проекта:</p>
                            <p className='font-normal text-black-1'>активный</p>
                        </li>
                        <li className='flex items-center gap-[5px]'>
                            <p>Дата добавления на сайт:</p>
                            <p className='font-normal text-black-1'>12.01.2024</p>
                        </li>
                        <li className='flex items-center gap-[5px]'>
                            <p>Описание проекта:</p>
                            <p className='font-normal text-black-1'>Многоквартирный жилой комплекс</p>
                        </li>
                        <li className='flex items-center gap-[5px]'>
                            <p>Целевой IRR;</p>
                            <p className='font-normal text-black-1'>12%</p>
                        </li>
                        <li className='flex items-center gap-[5px]'>
                            <p>Предполагаемая доходность инвестора:</p>
                            <p className='font-normal text-black-1'>х 1,5</p>
                        </li>
                        <li className='flex items-center gap-[5px]'>
                            <p>Стоимость всего проекта:</p>
                            <p className='font-normal text-black-1'>100 000 000 $</p>
                        </li>
                    </ul>
                    <ul className='w-full text-[22px] leading-[150%] font-light text-[#797979] flex flex-col gap-[15px]'>
                        <li className='flex items-center gap-[5px]'>
                            <p>Размер привлекаемых средств:</p>
                            <p className='font-normal text-black-1'>100 000 000 $</p>
                        </li>
                        <li className='flex items-center gap-[5px]'>
                            <p>Минимальная сумма инвестиций:</p>
                            <p className='font-normal text-black-1'>100 000 000 $</p>
                        </li>
                        <li className='flex items-center gap-[5px]'>
                            <p>Дата начала проекта:</p>
                            <p className='font-normal text-black-1'>17.03.2022</p>
                        </li>
                        <li className='flex items-center gap-[5px]'>
                            <p>Дата окончания проекта:</p>
                            <p className='font-normal text-black-1'>12.01.2024</p>
                        </li>
                        <li className='flex items-center gap-[5px]'>
                            <p>Стратегия выхода:</p>
                            <p className='font-normal text-black-1'>Продажа проекта инвестору</p>
                        </li>
                        <li className='flex items-start gap-[5px]'>
                            <p className='flex-shrink-0'>Обновления по проекту:</p>
                            <p className='font-normal text-black-1'>Окончание привлечения инвестиций 15 марта 2024 года.</p>
                        </li>
                    </ul>
                </div>
                <img src={IMG.scheme} alt="" className='w-full -mb-10' />
            </div>
        </section>

        <Contact reverse={true} />
    </>)
}

export default Project;