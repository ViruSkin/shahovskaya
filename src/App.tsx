
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Outlet } from "react-router-dom";
import Home from "./pages/Home.tsx";
import Project from "./pages/Project.tsx";
import React from "react";
import Header from "./components/Header.tsx";
import Footer from "./components/Footer.tsx";


const App:React.FC = () => {
    return (
        <div className="w-full overflow-x-hidden font-geologica font-light text-black-1">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/project" element={<Project />} />
            </Routes>

            <Header />

            <main>
                <Outlet />
            </main>

            <Footer />
        </div>
    );
}

export default App;
