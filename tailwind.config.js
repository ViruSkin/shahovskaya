const flowbite = require("flowbite-react/tailwind");

/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}", flowbite.content()],
    theme: {
        extend: {
            fontFamily: {
                sans: ["Geologica", "Georgia", "sans-serif"],
            },
            colors: {
                mynormal: "#79A071",
                myhover: "#658C5D",
                myactive: "#476E3F",
            },
        },
    },
    plugins: [flowbite.plugin()],
};
