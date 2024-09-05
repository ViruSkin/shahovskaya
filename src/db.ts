
export const Houses = [
    {
        name: "Gloria",
        images: [
            "/images/gloria/1.jpg",
            "/images/gloria/2.jpg",
            "/images/gloria/3.jpg",
            "/images/gloria/4.jpg",
            "/images/gloria/5.jpg",
            "/images/gloria/6.jpg",
        ],
        description:
            "Просторный дом площадью 132 м² с тремя спальнями и большой гостиной, идеально подходит для семейного проживания. Высокий уровень комфорта и современные строительные материалы обеспечат уют и долговечность.",
        planImg: "/images/gloria/plan.jpg",
        plan: {
            width: 14,
            height: 10,
            sq: 132,
            rooms: [
                { name: "Прихожая", sq: 7.4, l: 0.038, t: 0.112, w: 0.082, h: 0.042 },
                { name: "Кухня", sq: 15.2, l: 0.038, t: 0.157, w: 0.082, h: 0.086 },
                { name: "Гостиная", sq: 34.8, l: 0.12, t: 0.112, w: 0.123, h: 0.131 },
                { name: "Хоз. помещение", sq: 7.2, l: 0.038, t: 0.022, w: 0.039, h: 0.087 },
                { name: "Санузел", sq: 7.2, l: 0.079, t: 0.022, w: 0.039, h: 0.087 },
                { name: "Спальня 1", sq: 15, l: 0.121, t: 0.022, w: 0.081, h: 0.087 },
                { name: "Спальня 2", sq: 22.6, l: 0.204, t: 0.22, w: 0.123, h: 0.087 },
                { name: "Спальня 3", sq: 22.6, l: 0.246, t: 0.112, w: 0.081, h: 0.131 },
            ],
        },
    },
    {
        name: "Katalina",
        images: [
            "/images/katalina/1.jpg",
            "/images/katalina/2.jpg",
            "/images/katalina/3.jpg",
            "/images/katalina/4.jpg",
            "/images/katalina/5.jpg",
            "/images/katalina/6.jpg",
        ],
        description:
            "Уютный дом площадью 101 м² с тремя спальнями и большой кухней-гостиной. Идеальный выбор для тех, кто ценит гармонию между пространством и функциональностью.",
        planImg: "/images/katalina/plan.jpg",
        plan: {
            width: 12,
            height: 8,
            sq: 101,
            rooms: [
                { name: "Прихожая", sq: 3.5 },
                { name: "Кухня - гостиная", sq: 43.5 },
                { name: "Хоз. помещение", sq: 5.2 },
                { name: "Санузел", sq: 5.2 },
                { name: "Спальня 1", sq: 11 },
                { name: "Спальня 2", sq: 18.5 },
                { name: "Спальня 3", sq: 15 },
            ],
        },
    },
    {
        name: "Maria",
        images: [
            "/images/maria/1.jpg",
            "/images/maria/2.jpg",
            "/images/maria/3.jpg",
            "/images/maria/4.jpg",
            "/images/maria/5.jpg",
            "/images/maria/6.jpg",
        ],
        description:
            "Компактный дом площадью 75 м² с двумя спальнями, гостиной и кухней. Отличное решение для небольшой семьи, ищущей комфорт и экономию.",
        planImg: "/images/maria/plan.jpg",
        plan: {
            width: 10,
            height: 8,
            sq: 75,
            rooms: [
                { name: "Прихожая", sq: 3.5, l: 0.038, t: 0.112, w: 0.082, h: 0.042 },
                { name: "Кухня", sq: 43.5, l: 0.038, t: 0.157, w: 0.082, h: 0.086 },
                { name: "Гостиная", sq: 34.8, l: 0.12, t: 0.112, w: 0.123, h: 0.131 },
                { name: "Хоз. помещение", sq: 5.2, l: 0.038, t: 0.022, w: 0.039, h: 0.087 },
                { name: "Санузел", sq: 5.2, l: 0.079, t: 0.022, w: 0.039, h: 0.087 },
                { name: "Спальня 1", sq: 11, l: 0.121, t: 0.022, w: 0.081, h: 0.087 },
                { name: "Спальня 2", sq: 18.5, l: 0.204, t: 0.22, w: 0.123, h: 0.087 },
                { name: "Спальня 3", sq: 15, l: 0.246, t: 0.112, w: 0.081, h: 0.131 },
            ],
        },
    },
];
