import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    server: {
        host: "0.0.0.0", // Это позволит Vite слушать все доступные интерфейсы
        port: 3000, // Укажите порт, на котором вы хотите запустить сервер
    },
});
