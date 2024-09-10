import React from 'react';
import Title from './Title.tsx';
import Btn from './Btn.tsx';
import IMG from '../assets/images';

interface ContactProps {
    reverse: Boolean;
}

const Contact: React.FC<ContactProps> = ({reverse = false}) => {
    return (
        <section className="py-[80px]">
            <div className={`container flex gap-[128px] relative ${reverse ? 'flex-row-reverse justify-center' : 'items-start'}`}>
                <div className={`absolute right-0 top-12 ${reverse ? 'hidden' : ''}`}>
                    <Title theme="dark">09</Title>
                </div>
                <div className="w-[520px] flex-shrink-0 rounded-[3px] overflow-hidden">
                    <img src={IMG.contactCard} alt="" className="w-full" />
                </div>
                <div className="pt-[38px]">
                    <div className="max-w-[412px]">
                        <h2 className="text-[60px] leading-[75px] uppercase mb-5">Свяжитесь <br /> с нами</h2>
                        <p className="text-lg font-thin leading-[140%] mb-9">Заполните форму и наши специалисты свяжутся с вами в течение 30 минут</p>
                        <input type="text" placeholder="Ваше имя" className="mb-10" />
                        <input type="tel" placeholder="Номер телефона" className="mb-10" />
                        <Btn theme="green" className="w-full !font-light mb-[7px]">Оставить заявку</Btn>
                        <p className="font-thin text-xs leading-[15px] text-center">Нажимая на кнопку вы соглашаетесь с условиями Политики конфиденциальности</p>
                    </div>
                </div>
            </div>
        </section>
    )
};

export default Contact;