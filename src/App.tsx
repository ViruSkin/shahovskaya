import "./App.css";

import Header from "./components/Header";
import Block1 from "./components/Block1";
import Block2 from "./components/Block2";
import Block3 from "./components/Block3";
import Block4 from "./components/Block4";
import Block5 from "./components/Block5";
import Block6 from "./components/Block6";
import Block7 from "./components/Block7";
import Block8 from "./components/Block8";
import Block9 from "./components/Block9";
import FooterComponent from "./components/Footer";

function App() {
    return (
        <>
            <div className="flex flex-col min-h-screen">
                <header>
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
                </main>
                <footer id="footer">
                    <FooterComponent />
                </footer>
            </div>
        </>
    );
}

export default App;
