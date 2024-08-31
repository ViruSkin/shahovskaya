import { IconType } from "react-icons";
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

interface InfoBoxProps {
    icon: IconType;
    title: string;
    text: string;
}
const InfoBox: React.FC<InfoBoxProps> = ({ icon: Icon, title, text }) => {
    return (
        <div className="flex flex-row">
            <div>
                <Icon className="w-12 h-12" />
            </div>
            <div className="flex flex-col ml-4">
                <div>{title}</div>
                <div className="text-gray-500 text-sm">{text}</div>
            </div>
        </div>
    );
};
const Project = () => {
    return (
        <div className="flex flex-col mx-12 space-y-4">
            <div className="flex justify-center">
                <h5 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white">О ПРОЕКТЕ</h5>
            </div>
            <div className="text-justify indent-8">
                <p>
                    Добро пожаловать в "Шаховскую Усадьбу" — уникальный клубный жилой квартал в сердце Подмосковья, где
                    сочетаются чистый футуризм архитектуры и новый уровень премиального комфорта для всей семьи. Наш
                    проект создан для тех, кто ценит качество жизни и стремится окружить себя красотой и гармонией
                    природы.
                </p>
                <p>
                    "Шаховская Усадьба" — это место, где каждое утро начинается с вдохновляющих видов, а уют и покой
                    становятся вашими постоянными спутниками. Мы предлагаем три уникальных типа домов, каждый из которых
                    разработан с учётом современных стандартов и желаний наших клиентов. Прекрасные бани, просторные
                    гаражи и уютные беседки дополняют инфраструктуру, делая её идеальной для комфортного проживания.
                </p>
                <p>
                    Наше кредо — удивлять. Мы стремимся предложить больше, чем обычные стандарты, предвосхищая ваши
                    ожидания и создавая особую атмосферу уюта и обособленности, завораживающую с первого взгляда.
                    Премиальные материалы и продуманные детали в каждом доме обеспечивают долговечность и комфорт, а
                    индивидуальный подход к каждому клиенту делает ваш опыт покупки приятным и простым.
                </p>
                <p>
                    Выбирая "Шаховскую Усадьбу", вы выбираете не просто дом, а новую жизнь — шаг в будущее, в котором
                    каждый день будет наполнен радостью и умиротворением. Почувствуйте гармонию с природой и насладитесь
                    всем, что предлагает жизнь в современном загородном квартале.
                </p>
            </div>
            <div className="flex flex-col">
                <div>
                    До улица Красная
                    <br />
                </div>
                <div className="flex flex-row justify-center">
                    <div className="flex flex-col basis-1/2 max-w-fit mx-auto">
                        <InfoBox icon={PiForkKnifeThin} title="Питание" text="Рестораны, кафе" />
                        <InfoBox icon={PiScissorsThin} title="Красота" text="Салоны красоты, парикмахерские" />
                        <InfoBox icon={PiBasketballThin} title="Спорт" text="Фитнес клубы, тренажерные залы" />
                        <InfoBox icon={PiWalletThin} title="Деньги" text="Банкоматы, и отделения банков" />
                        <InfoBox icon={PiShoppingCartThin} title="Покупки" text="Торговые центры, супермаркет" />
                        <InfoBox icon={PiHospitalThin} title="Здоровье" text="Аптеки, поликлиники и больница" />
                    </div>
                    <div className="flex flex-col basis-1/2 max-w-fit mx-auto">
                        <InfoBox icon={PiBusThin} title="Транспорт" text="Остановки общественного транспорта" />
                        <InfoBox icon={PiBackpackThin} title="Образование" text="Детские сады, средние школы" />
                        <InfoBox icon={PiDiscoBallThin} title="Развлечения" text="Школа танцев, бильярд" />
                        <InfoBox icon={PiGasPumpThin} title="Авто" text="Заправочный центр и автосервисы" />
                        <InfoBox icon={PiMailboxThin} title="Услуги" text="Почтовые отделения, нотариус" />
                        <InfoBox icon={PiDogThin} title="Животные" text="Ветеринарные клиники, и аптеки" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Project;
