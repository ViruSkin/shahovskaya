import { YMaps, Map, Placemark, Polygon } from "@pbe/react-yandex-maps";

const MyMapComponent = () => (
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
);

export default MyMapComponent;
