"use client";
import Link from "next/link";
import { useState } from "react";

export default function MobileHeader() {
    const [open, setOpen] = useState(false);
    const [servicesOpen, setServicesOpen] = useState(false);

    const services = [
        { name: "Chimney Repair Service", path: "/chimney-repair-service" },
        { name: "Dishwasher Repair Service", path: "/dishwasher-repair-service" },
        { name: "Hob Gas Repair Service", path: "/hob-gas-repair-service" },
        { name: "Microwave Repair Service", path: "/mircowave-repair-service" },
        { name: "Oven Repair Service", path: "/oven-repair-service" },
        { name: "RO Water Purifier Repair Service", path: "/ro-water-purifier-repair-service" }
    ];

    return (
        <header className="bg-[#23589c] shadow-md md:hidden">
            <div className="flex items-center justify-between px-4 py-3">
                <div className="flex items-center">
                    <Link href="/">
                        <img
                            src="/neha-logo-1.png"
                            alt="Neha Logo"
                            className="h-[36px] w-auto"
                        />
                    </Link>
                </div>
                <button
                    className="text-white focus:outline-none"
                    onClick={() => setOpen((v) => !v)}
                    aria-label="Toggle menu"
                >
                    <svg
                        className="h-7 w-7"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        {open ? (
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M6 18L18 6M6 6l12 12"
                            />
                        ) : (
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M4 8h16M4 16h16"
                            />
                        )}
                    </svg>
                </button>
            </div>
            {/* Mobile Menu */}
            <nav
                className={`bg-[#23589c] transition-all duration-300 overflow-hidden ${
                    open ? "max-h-[400px] py-2" : "max-h-0"
                }`}
            >
                <ul className="flex flex-col gap-2 px-6">
                    <li>
                        <Link
                            href="/"
                            className="block py-2 !text-white font-semibold"
                            onClick={() => setOpen(false)}
                        >
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="/about"
                            className="block py-2 !text-white font-semibold"
                            onClick={() => setOpen(false)}
                        >
                            About
                        </Link>
                    </li>
                    <li>
                        <div>
                            <button
                                className="flex items-center justify-between w-full px-2 py-2 !text-white font-semibold text-left"
                                onClick={() => setServicesOpen(!servicesOpen)}
                            >
                                Services
                                <svg 
                                    className={`h-4 w-4 transition-transform duration-200 ${servicesOpen ? 'rotate-180' : ''}`}
                                    fill="none" 
                                    stroke="currentColor" 
                                    viewBox="0 0 24 24"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                            </button>
                            <div className={`overflow-hidden transition-all duration-300 ${servicesOpen ? 'max-h-[300px]' : 'max-h-0'}`}>
                                <ul className="pl-4 mt-1">
                                    {services.map((service) => (
                                        <li key={service.path}>
                                            <Link
                                                href={service.path}
                                                className="block py-2 text-white text-sm hover:text-blue-200 transition-colors duration-200"
                                                onClick={() => {
                                                    setServicesOpen(false);
                                                    setOpen(false);
                                                }}
                                            >
                                                {service.name}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </li>
                    <li>
                        <Link
                            href="/contact"
                            className="block py-2 !text-white font-semibold"
                            onClick={() => setOpen(false)}
                        >
                            Contact
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}
