const Block9 = () => {
    return (
        <>
            <div className="mx-auto max-w-screen-lg flex flex-row relative pb-12 mt-5">
                <div className="basis-1/3 flex items-center">
                    <img src="/images/9.webp" className="object-cover" alt="" />
                </div>
                <div className="basis-2/3">
                    <div className="w-2/4 mx-auto p-5 space-y-5">
                        <h5 className="text-5xl">СВЯЖИТЕСЬ С НАМИ</h5>
                        <div>Заполните форму и наши специалисты свяжутся с вами в течение 30 минут</div>
                        <form action="" className="space-y-4">
                            <input type="text" className="w-full" placeholder="Ваше имя" />
                            <input type="text" className="w-full" placeholder="Номер телефона" />
                            <button className="w-full">ОСТАВИТЬ ЗАЯВКУ</button>
                            <span className="text-xs mx-auto w-full">Нажимая на кнопку вы соглашаетесь с условиями Политики конфиденциальности</span>
                        </form>
                    </div>
                </div>
                <div className="absolute top-0 right-0 text-6xl text-gray-400 linerBlack">09</div>
            </div>
        </>
    );
};

export default Block9;
