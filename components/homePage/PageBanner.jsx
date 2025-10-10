import Image from "next/image";
import React from "react";

export default function PageBanner({
    title = "Page Title",
    subtitle = "Your trusted partner for appliance repair.",
    image = "/slider/noida.jpg",
}) {
    return (
        <section className="w-full relative h-auto md:h-[40vh] flex items-center justify-center bg-[#0d2235]">
            <Image
                src={image}
                alt={title}
                fill
                className="object-cover brightness-75"
                priority
            />
            <div className="inset-0 flex flex-col items-center justify-center text-center px-6 py-12">
                <h1 className="text-[#ffb300] text-4xl md:text-6xl font-bold mb-2 drop-shadow">
                    {title}
                </h1>
                {subtitle && (
                    <p className="text-white text-lg md:text-2xl font-light drop-shadow">
                        {subtitle}
                    </p>
                )}
            </div>
        </section>
    );
}
