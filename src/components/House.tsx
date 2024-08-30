import { Carousel } from "flowbite-react";
import React from "react";

interface HouseProps {
    name: string;
    images: string[];
    description: string;
    planImg: string;
    plan: string;
}
const House: React.FC<HouseProps> = ({ name, images, description, planImg, plan }) => {
    return (
        <div className="flex flex-col">
            <div className="flex justify-center font-bold text-3xl m-3">{name}</div>
            <div className="flex flex-col md:flex-row">
                <div className="md:basis-1/2 h-96">
                    <Carousel pauseOnHover>
                        {images.map((image) => (
                            <img key={image} src={image} alt="..." />
                        ))}
                    </Carousel>
                </div>
                <div className="md:basis-1/2">{description}</div>
            </div>
            <div className="flex flex-col md:flex-row">
                <div className="md:basis-1/2 h-96 flex justify-center items-center">
                    <img src={planImg} alt="" className="w-full h-full object-contain" />
                </div>
                <div className="md:basis-1/2">{plan}</div>
            </div>
        </div>
    );
};

export default House;
