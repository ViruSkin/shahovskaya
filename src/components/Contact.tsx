import React from 'react';
import Title from './Title.tsx';
import Btn from './Btn.tsx';
import IMG from '../assets/images';

interface ContactProps {
    reverse: Boolean;
}

const Contact: React.FC<ContactProps> = ({reverse = false}) => {
    return (
        <section className="py-12 lg:py-[80px]">
            <div className={`container flex gap-[60px] xl:gap-[128px] relative ${reverse ? 'flex-row-reverse justify-center' : 'items-start'}`}>
                <div className={`absolute right-0 top-12 ${reverse ? 'hidden' : 'hidden lg:block'}`}>
                    <Title theme="dark">09</Title>
                </div>
                <div className="w-[520px] flex-shrink-0 rounded-[3px] overflow-hidden hidden lg:block">
                    <img src={IMG.contactCard} alt="" className="w-full" />
                </div>
                <div className="lg:pt-[38px] w-full lg:w-auto">
                    <div className="max-w-full lg:max-w-[412px]">
                        <h2 className="text-[28px] lg:text-[60px] leading-[45px] lg:leading-[75px] uppercase mb-4 lg:mb-5">Свяжитесь <br className='hidden lg:block' /> с нами</h2>
                        <p className="text-[17px] lg:text-lg font-thin leading-[140%] mb-6 lg:mb-9">Заполните форму и наши специалисты свяжутся с вами в течение 30 минут</p>
                        <input type="text" placeholder="Ваше имя" className="mb-6 lg:mb-10" />
                        <input type="tel" placeholder="Номер телефона" className="mb-6 lg:mb-10" />
                        <Btn theme="green" className="w-full !font-light mb-[7px]" onClick={() => console.log('ok')}>Оставить заявку</Btn>
                        <p className="font-thin text-xs leading-[15px] text-center">Нажимая на кнопку вы соглашаетесь с условиями Политики конфиденциальности</p>
                    </div>
                </div>
            </div>
        </section>
    )
};

export default Contact;