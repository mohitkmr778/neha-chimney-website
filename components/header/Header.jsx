"use client";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
    const [isServicesOpen, setIsServicesOpen] = useState(false);

    const services = [
        { name: "Chimney Repair Service", path: "/chimney-repair-service" },
        { name: "Dishwasher Repair Service", path: "/dishwasher-repair-service" },
        { name: "Hob Gas Repair Service", path: "/hob-gas-repair-service" },
        { name: "Microwave Repair Service", path: "/mircowave-repair-service" },
        { name: "Oven Repair Service", path: "/oven-repair-service" },
        { name: "RO Water Purifier Repair Service", path: "/ro-water-purifier-repair-service" }
    ];

    return (
        <header className="bg-[#23589c]">
            <div className="max-w-[1200px] mx-auto flex items-center px-4 py-3">
                <div className="mr-6">
                    <Link href="/">
                        <img
                            src="/abhaya-logo.png"
                            alt="Gen1service Logo"
                            className="h-[40px] w-auto"
                        />
                    </Link>
                </div>
                <nav className="flex gap-[18px] flex-wrap ml-auto">
                    <Link
                        href="/"
                        className="!text-white no-underline font-semibold"
                    >
                        Home
                    </Link>
                    <Link
                        href="/about"
                        className="!text-white no-underline font-semibold"
                    >
                        About
                    </Link>
                    <div 
                        className="relative"
                        onMouseEnter={() => setIsServicesOpen(true)}
                        onMouseLeave={() => setIsServicesOpen(false)}
                    >
                        <Link
                            href="/service"
                            className="!text-white no-underline font-semibold flex items-center"
                        >
                            Services
                            <svg 
                                className={`ml-1 h-4 w-4 transition-transform duration-200 ${isServicesOpen ? 'rotate-180' : ''}`}
                                fill="none" 
                                stroke="currentColor" 
                                viewBox="0 0 24 24"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                        </Link>
                        {isServicesOpen && (
                            <div className="absolute top-full left-0 pt-2 w-64 z-10">
                                <div className="bg-white rounded-md shadow-lg border border-gray-200 py-2">
                                    {services.map((service) => (
                                        <Link
                                            key={service.path}
                                            href={service.path}
                                            className="block px-4 py-2 text-gray-700 hover:bg-[#f0f8ff] hover:text-[#23589c] transition-colors duration-200 no-underline"
                                        >
                                            {service.name}
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                    <Link
                        href="/contact"
                        className="!text-white no-underline font-semibold"
                    >
                        Contact
                    </Link>
                </nav>
            </div>
        </header>
    );
}
