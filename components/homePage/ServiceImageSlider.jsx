"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

export default function ServiceImageSlider({ images = [], heading = "", subheading = "" }) {
    return (
        <div className="w-full mb-8">
            {heading && (
                <h2 className="text-2xl md:text-3xl font-bold text-center mb-2 text-[#e31e24]">
                    {heading}
                </h2>
            )}
            {subheading && (
                <p className="text-center text-base md:text-lg mb-4 text-[#b71c1c]">
                    {subheading}
                </p>
            )}
            <Swiper
                modules={[Autoplay]}
                spaceBetween={20}
                slidesPerView={3}
                loop={true}
                autoplay={{ delay: 2500, disableOnInteraction: false }}
                className="rounded-xl"
            >
                {images.map((img, idx) => (
                    <SwiperSlide key={idx}>
                        <img
                            src={img}
                            alt={`Service Slide ${idx + 1}`}
                            className="rounded-xl w-full h-[220px] object-cover shadow-md"
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}
