import { Link } from "react-router-dom";
import { Houses } from "../db";

const block6 = () => {
    return (
        <div className="relative w-full ">
            <img src="/images/6.webp" alt="Header Background" className="w-full object-cover" />
            <div className="absolute top-0 left-0 w-full h-full">
                <div className="mx-auto h-full max-w-screen-lg relative z-10">
                    <div className="flex flex-col">
                        <div className="pt-10 space-y-5 relative">
                            <div className="mx-auto w-3/5 text-white ">
                                <h5 className="text-4xl uppercase">вы выбираете не просто дом, а новую жизнь</h5>
                                <div>
                                    Это шаг в будущее, в котором каждый день будет наполнен радостью и умиротворением.
                                    Почувствуйте гармонию с природой и насладитесь всем, что предлагает жизнь в
                                    современном загородном квартале.
                                </div>
                            </div>
                            <div className="absolute bottom-0 left-10 text-6xl text-gray-400 linerWhite">06</div>
                        </div>
                        <div className="flex flex-row mt-3 space-x-4">
                            {Houses.map((house) => (
                                <div
                                    key={house.name}
                                    className="flex flex-col basis-1/3 text-white bg-black p-4 space-y-3"
                                >
                                    <img src="/images/gloria/1.jpg" alt="" />
                                    <h3 className="text-2xl flex justify-center">{house.name}</h3>
                                    <div className="text-justify text-sm h-full">{house.description}</div>
                                    <div className="flex justify-center items-end">
                                        <Link to={`/${house.name.toLowerCase()}`}>
                                            <button>ПОДРОБНЕЕ</button>
                                        </Link>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default block6;
