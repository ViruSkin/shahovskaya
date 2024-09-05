import "./App.css";
import { Houses } from "./db";
import Header from "./components/Header";
import Maps from "./components/Maps";
import FooterComponent from "./components/Footer";
import FeedBack from "./components/Feedback";
import House2 from "./components/House2";
import TimelineComponent from "./components/Timeline";
import Plan from "./components/Plan";
import Credit from "./components/Credit";
import Project from "./components/Project";

function App() {
    return (
        <>
            <div className="flex flex-col min-h-screen">
                <header>
                    {/* <NavbarComponent /> */}
                    <Header />
                </header>
                <main className="flex-grow">
                    <div id="about" className="pt-16">
                      <Project/>
                    </div>
                    <div id="timeline" className="mx-12 pt-16">
                        <TimelineComponent />
                    </div>
                    <div id="map" className="pt-16">
                        <Maps />
                    </div>
                    <div id="plan" className="pt-0">
                        <Plan />
                    </div>
                    <div id="houses" className="flex md:flex-row flex-col md:space-y-0 space-y-4 md:space-x-8 mx-8 pt-16">
                        {Houses.map((house) => (
                            <div className="md:basis-1/3" key={house.name}>
                                <House2 {...house} />
                            </div>
                        ))}
                    </div>

                    <div id="credit" className="pt-16">
                        <Credit />
                    </div>
                    <div id="feedback" className="pt-16">
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
