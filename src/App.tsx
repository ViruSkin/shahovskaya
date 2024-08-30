import "./App.css";
import Header from "./components/Header";
import Maps from "./components/Maps";
import NavbarComponent from "./components/Navbar";
import House from "./components/House";
import FooterComponent from "./components/Footer";
import FeedBack from "./components/Feedback";

function App() {
    return (
        <>
            <div className="flex flex-col min-h-screen">
                <header className="mt-16">
                    <NavbarComponent />
                    <Header />
                </header>
                <main className="flex-grow">
                    <div id="about">О проекте</div>
                    <div id="map">
                        <Maps />
                    </div>
                    <div id="plan">ген план</div>
                    <div id="gloria">
                        <House
                            name="Gloria"
                            images={[
                                "/images/gloria/1.jpg",
                                "/images/gloria/2.jpg",
                                "/images/gloria/3.jpg",
                                "/images/gloria/4.jpg",
                                "/images/gloria/5.jpg",
                                "/images/gloria/6.jpg",
                            ]}
                            description="описание"
                            planImg="/images/gloria/plan.jpg"
                            plan="Текст плана"
                        />
                    </div>
                    <div id="katalina">
                        <House
                            name="Katalina"
                            images={[
                                "/images/katalina/1.jpg",
                                "/images/katalina/2.jpg",
                                "/images/katalina/3.jpg",
                                "/images/katalina/4.jpg",
                                "/images/katalina/5.jpg",
                                "/images/katalina/6.jpg",
                            ]}
                            description="описание"
                            planImg="/images/katalina/plan.jpg"
                            plan="Текст плана"
                        />
                    </div>
                    <div id="maria">
                        <House
                            name="Maria"
                            images={[
                                "/images/maria/1.jpg",
                                "/images/maria/2.jpg",
                                "/images/maria/3.jpg",
                                "/images/maria/4.jpg",
                                "/images/maria/5.jpg",
                                "/images/maria/6.jpg",
                            ]}
                            description="описание"
                            planImg="/images/maria/plan.jpg"
                            plan="Текст плана"
                        />
                    </div>
                    <div id="credit">кредитование</div>
                    <div id="feedback">
                        <FeedBack />
                    </div>
                </main>
                <footer id="footer" className="mt-8">
                    <FooterComponent />
                </footer>
            </div>
        </>
    );
}

export default App;
