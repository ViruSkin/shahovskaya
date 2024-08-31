import { Houses } from "../db";
import FooterComponent from "../components/Footer";
import NavbarComponent from "../components/Navbar";
import { redirect } from "react-router-dom";
import { Carousel } from "flowbite-react";
import { useEffect } from "react";

interface HouseProps {
    name: string;
}
const HousePage: React.FC<HouseProps> = ({ name }) => {
    const house = Houses.find((house) => house.name === name);
    if (!house) {
        redirect("/");
        return null;
    }
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <div className="flex flex-col min-h-screen">
            <header className="mt-16">
                <NavbarComponent />
            </header>
            <main className="flex-grow">
                <div className="flex flex-col">
                    <div className="flex justify-center font-bold text-3xl m-3">{name}</div>
                    <div className="flex flex-col md:flex-row">
                        <div className="md:basis-1/2 h-96">
                            <Carousel pauseOnHover>
                                {house.images.map((image) => (
                                    <img key={image} src={image} alt="..." />
                                ))}
                            </Carousel>
                        </div>
                        <div className="md:basis-1/2">{house.description}</div>
                    </div>
                    <div className="flex flex-col md:flex-row">
                        <div className="md:basis-1/2 h-96 flex justify-center items-center">
                            <img src={house.planImg} alt="" className="w-full h-full object-contain" />
                        </div>
                        <div className="md:basis-1/2">{house.plan}</div>
                    </div>
                </div>
            </main>
            <footer id="footer" className="mt-8">
                <FooterComponent />
            </footer>
        </div>
    );
};

export default HousePage;
