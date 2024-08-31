import { Button, Card } from "flowbite-react";
import React from "react";

interface HouseProps {
    name: string;
    images: string[];
    description: string;
}
const House2: React.FC<HouseProps> = ({ name, images, description }) => {
    return (
        <Card renderImage={() => <img src={images[0]} alt="..." />} className="h-full flex flex-col">
            <div className="flex-grow">
                <h5 className="flex justify-center text-2xl font-bold tracking-tight text-green-700 dark:text-white">{name}</h5>
                <p className="mt-4 indent-6 font-normal text-gray-700 dark:text-gray-400 text-justify">{description}</p>
            </div>
            <Button className="mt-auto" color="success">Подробнее</Button>
        </Card>
    );
};

export default House2;
