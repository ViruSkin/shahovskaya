const Block5 = () => {
    return (
        <div className="mx-auto h-full max-w-screen-lg flex flex-row relative mt-10">
            <div className="absolute top-0 right-0 text-6xl text-gray-400 linerBlack">05</div>

            <div className="flex flex-col">
                <div className="flex flex-col">
                    <h5 className="flex justify-center text-5xl">ПЛАН ПОСЕЛКА</h5>
                    <div className="w-1/2 mx-auto">
                        Наш уютный коттеджный поселок спроектирован с учетом всех потребностей современной семьи. На
                        территории предусмотрено несколько ключевых зон для комфортного проживания:
                    </div>
                </div>
                <div className="flex flex-row">
                    <div className="md:basis-1/2">
                        <img src="/images/plan.jpg" alt="" />
                    </div>
                    <div className="md:basis-1/2 flex items-center">
                        <div id="rightBlock" className="grid grid-cols-2 gap-2  ">
                            <div>
                                <h5> • Детская площадка</h5>
                                <span>Безопасная и современная игровая зона для ваших детей</span>
                            </div>
                            <div>
                                <h5> • Офис/КПП</h5>
                                <span>Обеспечение безопасности и удобства жителей</span>
                            </div>
                            <div>
                                <h5> • Спортивная площадка</h5>
                                <span>Место для занятий спортом на свежем воздухе</span>
                            </div>
                            <div>
                                <h5> • Парковка комплекса</h5>
                                <span>Просторная парковка для автомобилей жителей и гостей</span>
                            </div>
                            <div>
                                <h5> • Банный комплекс</h5>
                                <span>Идеальное место для отдыха и восстановления сил</span>
                            </div>
                            <div>
                                <h5> • Основной и второй въезды</h5>
                                <span>Удобные и продуманные подъезды для вашего комфорта</span>
                            </div>
                            <div>
                                <h5> • Магазин и кафе</h5>
                                <span>Все необходимые товары и уютное кафе находятся прямо на территории поселка</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Block5;
