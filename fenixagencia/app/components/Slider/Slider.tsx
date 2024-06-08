"use client";

import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Button from "../Shared/Button";

import photoSlides from '../../girls.json'

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
        <div className="container-slider">
            <div className="overflow-hidden rounded-3xl min-h-[550px] sm:min-h-[550px] flex justify-center items-center">
                <div className="container pb-8 sm:pb-0">
                    <Slider {...settings}>
                        {
                            photoSlides.slice(0, 6).map((data) => (
                                <div key={data.id}>
                                    <div className="grid grid-cols-1 sm:grid-cols-2">
                                        <div className="flex flex-col justify-center gap-4 sm:pl-3 pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1 relative z-10">
                                            <h2 className="text-gray-600 text-2xl sm:text-6xl lg:text-2xl font-bold">
                                                {data.services.join(", ")}
                                            </h2>
                                            <h2 className="text-gray-600  text-5xl sm:text-6xl lg:text-7xl font-bold">
                                                {data.name}
                                            </h2>
                                            <h2 className="text-5xl text-gray-600 sm:text-[80px] md:text-[100px] xl:text-[20px]">
                                                {data.description.slice(0, 180)}...
                                            </h2>
                                            <div>
                                                <a href={`/girl/${data.id}`}>
                                                    <Button
                                                        text="Ver más"
                                                        bgColor="bg-black"
                                                        textColor="text-white"
                                                    />
                                                </a>
                                            </div>
                                        </div>
                                        <div className="order-1 sm:order-2">
                                            <div>
                                                <img src={data.photo[0]} alt="" className="p-4 w-[300px] sm:w-[450px] h-[300px] sm:h-[450px] sm:scale-105 lg:scale-110 object-containe mx-auto drop-shadow-[-8px_4px_6px_rgba(0,0,0,.4)] relative z-40 py-4" />
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