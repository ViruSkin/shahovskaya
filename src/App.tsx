import "./App.css";

import Header from "./blocks/Header";
import Block1 from "./blocks/Block1";
import Block2 from "./blocks/Block2";
import Block3 from "./blocks/Block3";
import Block4 from "./blocks/Block4";
import Block5 from "./blocks/Block5";
import Block6 from "./blocks/Block6";
import Block7 from "./blocks/Block7";
import Block8 from "./blocks/Block8";
import Block9 from "./blocks/Block9";
import FooterComponent from "./blocks/Footer";
import Navbar from "./components/Navbar";

function App() {
    return (
        <>
            <div className="flex flex-col md:min-h-screen w-full ">
                <header>
                    <Navbar />

                    <Header />
                </header>
                <main className="flex-grow">
                    <div id="about">
                        <Block1 />
                    </div>
                    <div id="about">
                        <Block2 />
                    </div>
                    <div id="timeline">
                        <Block3 />
                    </div>
                    <div id="map">
                        <Block4 />
                    </div>
                    <div id="plan">
                        <Block5 />
                    </div>
                    <div id="houses">
                        <Block6 />
                    </div>
                    <div id="credit">
                        <Block7 />
                    </div>
                    <div id="company">
                        <Block8 />
                    </div>
                    <div id="feedback">
                        <Block9 />
                    </div>
                </main>{" "}
                <footer id="footer">
                    <FooterComponent />
                </footer>
            </div>
        </>
    );
}

export default App;
