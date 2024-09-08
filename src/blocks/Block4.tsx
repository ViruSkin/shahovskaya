import { YMaps, Map, Placemark, Polygon } from "@pbe/react-yandex-maps";
import "./block4.css";

const Block4 = () => (
    <div className="mx-auto h-full max-w-screen-lg flex flex-row relative mt-5">
        <div className="basis-1/2 flex flex-col space-y-5">
            <div>
                <h5 className="text-5xl">РАСПОЛОЖЕНИЕ</h5>
            </div>
            <div>Комплекс "Шаховская Усадьба" расположен в быстроразвивающемся и престижном районе </div>
            <div>В радиусе 1.5 км от жилого комплекса:</div>
            <div id="list" className="grid grid-cols-2 space-y-5">
                <div>
                    <h5>12</h5>супермаркетов
                </div>
                <div>
                    <h5>5</h5>фитнес залов
                </div>
                <div>
                    <h5>30+</h5> кафе и рестораны
                </div>
                <div>
                    <h5>7</h5> медецинских учреждений
                </div>
            </div>
        </div>
        <div className="basis-1/2 flex items-center">
            <YMaps query={{ apikey: "9fb6dcb2-557b-4c57-9264-0d2f11e124a2" }}>
                <Map
                    defaultState={{ center: [56.106478, 35.497504], zoom: 13 }} // Установите координаты и уровень масштаба
                    width="100%" // Ширина карты
                    height="400px" // Высота карты
                >
                    {/* Добавьте метку или другие элементы */}
                    <Placemark geometry={[56.106478, 35.497504]} />
                    <Polygon
                        geometry={[
                            [
                                [55.75, 37.8],
                                [55.8, 37.9],
                                [55.75, 38.0],
                                [55.7, 38.0],
                                [55.7, 37.8],
                            ],
                            [
                                [55.75, 37.82],
                                [55.75, 37.98],
                                [55.65, 37.9],
                            ],
                        ]}
                        options={{
                            fillColor: "#00FF00",
                            strokeColor: "#0000FF",
                            opacity: 0.5,
                            strokeWidth: 1,
                            strokeStyle: "shortdash",
                        }}
                    />
                </Map>
            </YMaps>
        </div>
        <div className="absolute bottom-0 left-10 text-6xl text-gray-400 linerBlack">04</div>
    </div>
);

export default Block4;
