import "./block2.css";
const Block2 = () => {
    return (
        <div className="relative w-full">
            <img src="/images/2.webp" alt="Header Background" className="w-full object-cover" />
            <div className="absolute top-0 left-0 w-full h-full">
                <div className="mx-auto h-full max-w-screen-lg relative z-10">
                    <div className="flex flex-row text-gray-400">
                        <div className="basis-1/2 space-y-5 mt-10 pr-10">
                            <h1 className="text-white text-5xl">ВЫ ВЫБИРАЕТЕ НЕ ПРОСТО ДОМ, А НОВУЮ ЖИЗНЬ</h1>
                            <div className="text-lg">
                                Это шаг в будущее, в котором каждый день будет наполнен радостью и умиротворением.
                                Почувствуйте гармонию с природой и насладитесь всем, что предлагает жизнь в современном
                                загородном квартале.
                            </div>
                        </div>
                        <div className="basis-1/2 pt-5">
                            <div id="rightBlock" className="grid grid-cols-3 gap-4">
                                <div>
                                    <h5> • Питание</h5>
                                    <span>Рестораны, кафе</span>
                                </div>
                                <div>
                                    <h5> • Красота</h5>
                                    <span>Салоны красоты, парикмахерские</span>
                                </div>
                                <div>
                                    <h5> • Спорт</h5>
                                    <span>Фитнес клубы, тренажерные залы</span>
                                </div>
                                <div>
                                    <h5> • Деньги</h5>
                                    <span>Банкоматы, и отделения банков</span>
                                </div>
                                <div>
                                    <h5> • Покупки</h5>
                                    <span>Торговые центры, супермаркет</span>
                                </div>
                                <div>
                                    <h5> • Здоровье</h5>
                                    <span>Аптеки, поликлиники и больница</span>
                                </div>
                                <div>
                                    <h5> • Транспорт</h5>
                                    <span>Остановки общественного транспорта</span>
                                </div>
                                <div>
                                    <h5> • Образование</h5>
                                    <span>Детские сады, средние школы</span>
                                </div>
                                <div>
                                    <h5> • Развлечения</h5>
                                    <span>Школа танцев, бильярд</span>
                                </div>
                                <div>
                                    <h5> • Авто</h5>
                                    <span>Заправочный центр и автосервисы</span>
                                </div>
                                <div>
                                    <h5> • Услуги</h5>
                                    <span>Почтовые отделения, нотариус</span>
                                </div>
                                <div>
                                    <h5> • Животные</h5>
                                    <span>Ветеринарные клиники, и аптеки</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="absolute bottom-0 left-10 text-6xl text-gray-400 linerWhite">02</div>
                </div>
            </div>
        </div>
    );
};

export default Block2;
