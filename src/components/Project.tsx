import {
    PiBackpackThin,
    PiBasketballThin,
    PiBusThin,
    PiDiscoBallThin,
    PiDogThin,
    PiForkKnifeThin,
    PiGasPumpThin,
    PiHospitalThin,
    PiMailboxThin,
    PiScissorsThin,
    PiShoppingCartThin,
    PiWalletThin,
} from "react-icons/pi";

const Project = () => {
    return (
        <div className="flex flex-col mx-12 space-y-4">
            <div className="flex justify-center">
                <h5 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white">О ПРОЕКТЕ</h5>
            </div>
            <div className="flex flex-row">
                <div className="basis-1/2">
                    <p className="indent-8">
                        Добро пожаловать в "Шаховскую Усадьбу" — уникальный клубный жилой квартал в сердце Подмосковья,
                        где сочетаются чистый футуризм архитектуры и новый уровень премиального комфорта для всей семьи.
                        Наш проект создан для тех, кто ценит качество жизни и стремится окружить себя красотой и
                        гармонией природы.
                    </p>
                    <p className="indent-8">
                        "Шаховская Усадьба" — это место, где каждое утро начинается с вдохновляющих видов, а уют и покой
                        становятся вашими постоянными спутниками. Мы предлагаем три уникальных типа домов, каждый из
                        которых разработан с учётом современных стандартов и желаний наших клиентов. Прекрасные бани,
                        просторные гаражи и уютные беседки дополняют инфраструктуру, делая её идеальной для комфортного
                        проживания.
                    </p>
                    <p className="indent-8">
                        Наше кредо — удивлять. Мы стремимся предложить больше, чем обычные стандарты, предвосхищая ваши
                        ожидания и создавая особую атмосферу уюта и обособленности, завораживающую с первого взгляда.
                        Премиальные материалы и продуманные детали в каждом доме обеспечивают долговечность и комфорт, а
                        индивидуальный подход к каждому клиенту делает ваш опыт покупки приятным и простым.
                    </p>
                    <p className="indent-8">
                        Выбирая "Шаховскую Усадьбу", вы выбираете не просто дом, а новую жизнь — шаг в будущее, в
                        котором каждый день будет наполнен радостью и умиротворением. Почувствуйте гармонию с природой и
                        насладитесь всем, что предлагает жизнь в современном загородном квартале.
                    </p>
                    <p className="indent-8">
                        Присоединяйтесь к числу тех, кто уже выбрал для себя лучшее. Добро пожаловать в "Шаховскую
                        Усадьбу".
                    </p>
                </div>
                <div className="basis-1/2">
                    <div className="flex flex-col">
                        <div>
                            До улица Красная
                            <br />
                        </div>
                        <div className="flex flex-col">
                            <div className="flex items-center basis-1/2">
                                <PiBasketballThin className="mr-2" /> Спорт. Фитнес клубы, тренажерные залы
                            </div>
                            <div className="flex items-center basis-1/2">
                                <PiForkKnifeThin className="mr-2" /> питание. Рестораны, кафе
                            </div>
                            <div className="flex items-center basis-1/2">
                                <PiScissorsThin className="mr-2" /> Красота. Салоны красоты, парикмахерские
                            </div>
                            <div className="flex items-center basis-1/2">
                                <PiWalletThin className="mr-2" /> Деньги. Банкоматы, и отделения банков
                            </div>
                            <div className="flex items-center basis-1/2">
                                <PiShoppingCartThin className="mr-2" /> Покупки. Торговые центры, супермаркет
                            </div>
                            <div className="flex items-center basis-1/2">
                                <PiHospitalThin className="mr-2" /> Здоровье. Аптеки, поликлиники и больница
                            </div>
                            <div className="flex items-center">
                                <PiBusThin className="mr-2" /> Транспорт. Остановки общественного транспорта.
                            </div>
                            <div className="flex items-center">
                                <PiBackpackThin className="mr-2" /> Образование. Детские сады, средние школы
                            </div>
                            <div className="flex items-center">
                                <PiDiscoBallThin className="mr-2" /> Развлечения. Школа танцев, бильярд
                            </div>
                            <div className="flex items-center">
                                <PiGasPumpThin className="mr-2" /> Авто. Заправочный центр и автосервисы
                            </div>
                            <div className="flex items-center">
                                <PiMailboxThin className="mr-2" /> Услуги. Почтовые отделения, нотариус.
                            </div>
                            <div className="flex items-center">
                                <PiDogThin className="mr-2" /> Животные. Ветеринарные клиники, и аптеки
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Project;
