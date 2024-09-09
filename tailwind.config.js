/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                mynormal: "#79A071",
                myhover: "#658C5D",
                myactive: "#476E3F",
                'green': '#79A071',
                'black-1': '#131313',
                'gray-1': '#D3D3D3',
            },
        },
        fontFamily: {
            lato: ["Lato", "sans-serif"],
            geologica: ["Geologica", "sans-serif"],
        },
    },
    plugins: [],
};
