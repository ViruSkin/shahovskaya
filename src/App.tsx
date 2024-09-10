
import { Route, Routes } from 'react-router-dom';
import { Outlet } from "react-router-dom";
import Home from "./pages/Home.tsx";
import Project from "./pages/Project.tsx";
import React, { useEffect, useState } from "react";
import Header from "./components/Header.tsx";
import Footer from "./components/Footer.tsx";
import Btn from './components/Btn.tsx'
import IMG from './assets/images/index.tsx';


const App:React.FC = () => {
    const [modal, setModal] = useState<boolean>(false);

    useEffect(() => {
        if (modal) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'visible';
        }
    }, [modal])

    return (
        <div className="w-full overflow-x-hidden font-geologica font-light text-black-1">
            <Routes>
                <Route path="/" element={<Home setModal={setModal} />} />
                <Route path="/project" element={<Project />} />
            </Routes>

            <Header  setModal={setModal} />

            <main>
                <Outlet />
            </main>

            <Footer setModal={setModal} />

            <section className={`fixed z-40 top-0 left-0 w-full h-full ${modal ? 'flex' : 'hidden'} items-center justify-center`}>
                <div className='absolute top-0 left-0 w-full h-full backdrop-blur-[10px]'></div>
                <div className='relative bg-white w-[320px] lg:w-[844px] flex flex-col items-center px-5 lg:px-0 pt-[45px] pb-[86px] lg:pb-[80px] lg:pt-[80px]'>
                    <button onClick={() => {setModal(false)}} className='absolute top-5 right-5 lg:top-[38px] lg:right-[37px]'>
                        <img src={IMG.times} alt="" />
                    </button>
                    <h2 className='text-2xl lg:text-4xl leading-[30px] lg:leading-[45px] mb-6 lg:mb-[27px] font-normal text-center'>Заказать обратный звонок</h2>
                    <div className='w-full lg:w-[535px] flex flex-col items-center'>
                        <input type="text" placeholder="Ваше имя" className="mb-6 lg:mb-5" />
                        <input type="tel" placeholder="Номер телефона" className="mb-6 lg:mb-5" />
                        <Btn theme="green" className="w-full lg:w-auto !font-light mb-[7px]" onClick={() => console.log('ok')}>Оставить заявку</Btn>
                        <p className="w-full font-thin text-xs leading-[15px] text-center">Нажимая на кнопку вы соглашаетесь с условиями Политики <br className='hidden lg:block'/> конфиденциальности</p>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default App;
