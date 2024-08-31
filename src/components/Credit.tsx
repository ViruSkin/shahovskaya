const Credit = () => {
    return (
        <div className="flex flex-col">
            <div className="flex justify-center">
                <h5 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white">Все виды ипотеки</h5>
            </div>
            <div className="flex flex-col md:flex-row mx-8 md:space-x-8 indent-8 text-justify mt-4">
                <div className="md:basis-1/3">
                    Homewerk предлагает своим клиентам специальные условия приобретения дома в рамках программ
                    ипотечного кредитования от банков-партнеров.
                </div>
                <div className="md:basis-1/3">
                    Личный менеджер сопровождает Вас на всех этапах сделки, с момента подачи документов в банк и до
                    регистрации объекта.
                </div>
                <div className="md:basis-1/3">
                    Всего за несколько часов банк оповестит Вас смс информированием и уведомлением на Ваш электронный
                    адрес
                </div>
            </div>
            <div className="flex flex-col md:flex-row md:h-32 space-y-8 md:space-y-0 md:space-x-12 justify-center items-center icon-container">
                <div>
                    <a href="https://domclick.ru/">
                        <img src="/images/banks/Domclick_logo.svg" alt="" />
                    </a>
                </div>
                <div>
                    <a href="https://www.vtb.ru/">
                        <img src="/images/banks/VTB_Logo_2018.svg" alt="" />
                    </a>
                </div>
                <div>
                    <a href="https://дом.рф/">
                        <img src="/images/banks/domrf.svg" alt="" />
                    </a>
                </div>
                <div>
                    <a href="https://www.centrinvest.ru/">
                        <img src="/images/banks/bank_center_invest.svg" alt="" />
                    </a>
                </div>
                <div>
                    <a href="https://alfabank.ru/">
                        <img src="/images/banks/Alfa-Bank.svg" alt="" />
                    </a>
                </div>
                <div>
                    <a href="https://www.gazprombank.ru/">
                        <img src="/images/banks/Gazprombank_2022.svg" alt="" />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Credit;
