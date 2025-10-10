"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import PopularServices from "./PopularServices";
import AboutSection from "./AboutSection";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import Image from "next/image";

const slides = [
    {
        image: "/slider/chimney-slider-one.jpg", // replace with your image
        title: "Expert Chimney Repair Service",
        subtitle:
            "Fast, reliable chimney repair for smoke issues, cleaning, maintenance, and installation at affordable rates.",
    },
    {
        image: "/slider/chimney-slider-two.jpg",
        title: "Trusted RO & Chimney Repair Service for Every Home",
        subtitle: "Quick, reliable repairs ensuring clean water and smoke-free kitchens.",
    },
    {
        image: "/slider/chimney-slider-three.jpg",
        title: "Expert Chimney Repair Service for Safe, Efficient Kitchens",
        subtitle: "Trusted Repair Solutions for Your Appliances",
    },
];

export default function ApplianceSlider() {
    return (
        <div className="w-full relative bg-[#0d2235]">
            <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                navigation
                pagination={{ clickable: true }}
                autoplay={{ delay: 4000 }}
                loop={true}
                className="h-[60vh] md:h-[75vh] w-full"
            >
                {slides.map((slide, index) => (
                    <SwiperSlide key={index}>
                        <div className="relative w-full h-full">
                            {/* Background Image */}
                            <Image
                                src={slide.image}
                                alt={slide.title}
                                fill
                                className="object-cover brightness-75"
                                priority
                            />

                            {/* Overlay Content */}
                            <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 y">
                                <p className="text-[#fff] text-sm md:text-lg font-light mb-2">
                                    {slide.subtitle}
                                </p>
                                <h2 className="text-[#ffb300] text-4xl md:text-6xl font-bold mb-4 drop-shadow">
                                    {slide.title}
                                </h2>
                               
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}
