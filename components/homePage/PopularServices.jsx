import React from "react";
import Link from "next/link";

const services = [
    {
        title: "Chimney Repair Service",
        description:
            "A kitchen chimney plays a vital role in keeping your kitchen clean, smoke-free, and fresh. Over time, chimneys may face problems like .\u00A0Now.",
        img: "/slider/chimney-section-one.jpg",
        link: "/chimney-repair-service",
    },
    {
        title: "RO Water Purifier Repair Service",
        description:
            "For the greatest RO water purifier installation, maintenance, and repair services, Abhaya Services is your go-to source.\u00A0Now.",
        img: "/slider/water-purifierone.jpg",
        link: "/ro-water-purifier-repair-service",
    },
    {
        title: "Hob Gas Repair Service",
        description:
            "Get reliable Hob/Cooktop stove repair services in Noida with 24x7 support. Expert technicians for all brands, fast and affordable repairs.\u00A0Now.",
      
        img: "/slider/gasone.jpg",
        link: "/hob-gas-repair-service",
    },
    {
        title: "Mircowave Repair Service",
        description:
            "Get reliable Washing Machine repair services in Noida with 24x7 support. Expert technicians for all brands, fast and affordable repairs.\u00A0Now.",
    
        img: "/slider/noida.jpg",
        link: "/mircowave-repair-service",
    },
    {
        title: "Oven Repair Service",
        description:
            "Get reliable Microwave Oven repair services in Noida with 24x7 support. Expert technicians for all brands, fast and affordable repairs.\u00A0Now.",
      
        img: "/slider/noida.jpg",
        link: "/oven-repair-service",
    },
    {
        title: "Dishwasher Repair Service",
        description:
            "Get reliable Kitchen-Chimney repair services in Noida with 24x7 support. Expert technicians for all brands, fast and affordable repairs.\u00A0Now.",
      
        img: "/slider/noida.jpg",
        link: "/dishwasher-repair-service",
    },
];

export default function PopularServices() {
    return (
        <section className="bg-[#ffffff] py-8">
            <h2 className="text-center text-2xl font-semibold mb-6 text-[#ffb300] drop-shadow">
                Our Popular Services
            </h2>
            <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
                {services.map((service, idx) => (
                    <div
                        key={idx}
                        className="bg-[#18344a] rounded-xl border border-[#2c4a6b] p-4 flex flex-col items-center shadow-md"
                    >
                        <img
                            src={service.img}
                            alt={service.title}
                            className="rounded-md w-full h-[140px] object-cover mb-4"
                        />
                        <h3 className="font-bold text-lg text-center mb-2 text-[#fff]">
                            {service.title}
                        </h3>
                        <p className="text-sm text-center mb-2 text-[#ffe082]">
                            {service.description}
                        </p>
                        <div className="flex w-full justify-between items-center mt-auto mb-2">
                            <span className="font-semibold text-[#ffb300]">
                                {service.price}
                            </span>
                            <Link href={service.link} passHref>
                                <button className="bg-gradient-to-r from-[#e31e24] to-[#b71c1c] text-white px-4 py-1 rounded-full font-semibold border-none shadow hover:from-[#b71c1c] hover:to-[#e31e24] transition-all">
                                    Read More
                                </button>
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
