import { HR } from "flowbite-react";
import "./block7.css";

const Block7 = () => {
    return (
        <>
            <div className="mx-auto max-w-screen-lg flex flex-row relative pb-12 mt-5">
                <div className="basis-1/3 flex items-center">
                    <img src="/images/7.webp" className="object-cover" alt="" />
                </div>
                <div className="basis-2/3 text-justify ml-20 text-sm">
                    <h1 className="text-5xl font-light">ВСЕ ВИДЫ ИПОТЕКИ</h1>
                    <div>
                        <HR className="w-20 bg-mynormal mt-4 mb-2" />
                        <div>
                            Homewerk предлагает своим клиентам специальные условия приобретения дома в рамках программ
                            ипотечного кредитования от банков-партнеров.
                        </div>
                        <HR className="w-20 bg-mynormal mt-4 mb-2" />
                        <div>
                            Личный менеджер сопровождает Вас на всех этапах сделки, с момента подачи документов в банк и
                            до регистрации объекта.
                        </div>
                        <HR className="w-20 bg-mynormal mt-4 mb-2" />
                        <div>
                            Всего за несколько часов банк оповестит Вас смс информированием и уведомлением на Ваш
                            электронный адрес
                        </div>
                    </div>
                    <div className="icon-container grid grid-cols-3 gap-4 mt-4">
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
                <div className="absolute top-0 right-0 text-6xl text-gray-400 linerBlack">07</div>
            </div>
        </>
    );
};

export default Block7;
