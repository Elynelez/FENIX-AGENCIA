"use client";

import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Button from "../Shared/Button";

const photoSlides = [
    {
        id: 1,
        name: "mujer 1",
        photo: "https://www.laststicker.com/i/cards/2428/1.jpg",
        description: "Descripción del mujer 1",
        price: "$10.00",
        services: ["Servicio A", "Servicio B"]
    },
    {
        id: 2,
        name: "mujer 2",
        photo: "https://www.laststicker.com/i/cards/2428/2.jpg",
        description: "Descripción del mujer 2",
        price: "$15.00",
        services: ["Servicio C", "Servicio D"]
    },
    {
        id: 3,
        name: "mujer 3",
        photo: "https://www.laststicker.com/i/cards/2428/3.jpg",
        description: "Descripción del mujer 3",
        price: "$20.00",
        services: ["Servicio E", "Servicio F"]
    },
    {
        id: 4,
        name: "mujer 4",
        photo: "https://www.laststicker.com/i/cards/2428/4.jpg",
        description: "Descripción del mujer 4",
        price: "$25.00",
        services: ["Servicio G", "Servicio H"]
    },
    {
        id: 5,
        name: "mujer 5",
        photo: "https://www.laststicker.com/i/cards/2428/5.jpg",
        description: "Descripción del mujer 5",
        price: "$30.00",
        services: ["Servicio I", "Servicio J"]
    },
    {
        id: 6,
        name: "mujer 6",
        photo: "https://www.laststicker.com/i/cards/2428/6.jpg",
        description: "Descripción del mujer 6",
        price: "$35.00",
        services: ["Servicio K", "Servicio L"]
    },
    {
        id: 7,
        name: "mujer 7",
        photo: "https://www.laststicker.com/i/cards/2428/7.jpg",
        description: "Descripción del mujer 7",
        price: "$40.00",
        services: ["Servicio M", "Servicio N"]
    },
    {
        id: 8,
        name: "mujer 8",
        photo: "https://www.laststicker.com/i/cards/2428/8.jpg",
        description: "Descripción del mujer 8",
        price: "$45.00",
        services: ["Servicio O", "Servicio P"]
    },
    {
        id: 9,
        name: "mujer 9",
        photo: "https://www.laststicker.com/i/cards/2428/9.jpg",
        description: "Descripción del mujer 9",
        price: "$50.00",
        services: ["Servicio Q", "Servicio R"]
    },
    {
        id: 10,
        name: "mujer 10",
        photo: "https://www.laststicker.com/i/cards/2428/10.jpg",
        description: "Descripción del mujer 10",
        price: "$55.00",
        services: ["Servicio S", "Servicio T"]
    },
    {
        id: 11,
        name: "mujer 11",
        photo: "https://www.laststicker.com/i/cards/2428/11.jpg",
        description: "Descripción del mujer 11",
        price: "$60.00",
        services: ["Servicio U", "Servicio V"]
    },
    {
        id: 12,
        name: "mujer 12",
        photo: "https://www.laststicker.com/i/cards/2428/12.jpg",
        description: "Descripción del mujer 12",
        price: "$65.00",
        services: ["Servicio W", "Servicio X"]
    },
    {
        id: 13,
        name: "mujer 13",
        photo: "https://www.laststicker.com/i/cards/2428/13.jpg",
        description: "Descripción del mujer 13",
        price: "$70.00",
        services: ["Servicio Y", "Servicio Z"]
    },
    {
        id: 14,
        name: "mujer 14",
        photo: "https://www.laststicker.com/i/cards/2428/14.jpg",
        description: "Descripción del mujer 14",
        price: "$75.00",
        services: ["Servicio AA", "Servicio BB"]
    },
    {
        id: 15,
        name: "mujer 15",
        photo: "https://www.laststicker.com/i/cards/2428/15.jpg",
        description: "Descripción del mujer 15",
        price: "$80.00",
        services: ["Servicio CC", "Servicio DD"]
    }
];

export default function SimpleSlider() {
    var settings = {
        dots: true,
        arrows: false,
        infinite: true,
        speed: 800,
        slidesToScroll: 1,
        autoplaySpeed: 4000,
        cssEase: "ease-in-out",
        pauseOnHover: false,
        pauseOnFocus: true
    };

    return (
        <div className="container">
            <div className="overflow-hidden rounded-3xl min-h-[550px] sm:min-h-[550px] hero-bg-color flex justify-center items-center">
                <div className="container pb-8 sm:pb-0">
                    <Slider {...settings}>
                        {
                            photoSlides.slice(0, 6).map((data) => (
                                <div key={data.id}>
                                    <div className="grid grid-cols-1 sm:grid-cols-2">
                                        <div className="flex flex-col justify-center gap-4 sm:pl-3 pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1 relative z-10">
                                            <h2 className="text-2xl sm:text-6xl lg:text-2xl font-bold">
                                                {data.services.join(", ")}
                                            </h2>
                                            <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold">
                                                {data.name}
                                            </h2>
                                            <h2 className="text-5xl text-black dark:text-white/5 sm:text-[80px] md:text-[100px] xl:text-[20px] font-bold">
                                                {data.description}
                                            </h2>
                                            <div>
                                                <Button 
                                                    text="Ver más"
                                                    bgColor="bg-black"
                                                    textColor="text-white"
                                                />
                                            </div>
                                        </div>
                                        <div className="order-1 sm:order-2">
                                            <div>
                                                <img src={data.photo} alt="" className="p-4 w-[300px] sm:w-[450px] h-[300px] sm:h-[450px] sm:scale-105 lg:scale-110 object-containe mx-auto drop-shadow-[-8px_4px_6px_rgba(0,0,0,.4)] relative z-40 py-4" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </Slider>
                </div>
            </div>
        </div>
    );
}