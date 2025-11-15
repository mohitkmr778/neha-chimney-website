import React from "react";
import {
    FaFacebookF,
    FaTwitter,
    FaInstagram,
    FaLinkedinIn,
    FaYoutube,
} from "react-icons/fa";

export default function Footer() {
    return (
        <footer className="bg-[#23589c] text-[#f5f7fa] pt-8 pb-4">
            <div className="max-w-[1200px] mx-auto px-4">
                <div className="text-center mb-6">
                    <img
                        src="/neha-logo.png"
                        alt="neha Logo"
                        className="mx-auto mb-2 h-[48px] w-auto"
                    />
                    <p className="text-xl font-medium mb-4 text-[#ffe082]">
                        Neha Chimney & Repair Services - We will be loyal to our
                        services
                    </p>
                    <div className="flex justify-center gap-4 mb-4">
                        <a
                            href="#"
                            className="bg-gradient-to-r from-[#ffb300] to-[#ff6f00] rounded-full p-3 hover:from-[#ff6f00] hover:to-[#ffb300] transition"
                        >
                            <FaFacebookF className="text-white text-xl" />
                        </a>
                        <a
                            href="#"
                            className="bg-gradient-to-r from-[#ffb300] to-[#ff6f00] rounded-full p-3 hover:from-[#ff6f00] hover:to-[#ffb300] transition"
                        >
                            <FaTwitter className="text-white text-xl" />
                        </a>
                        <a
                            href="#"
                            className="bg-gradient-to-r from-[#ffb300] to-[#ff6f00] rounded-full p-3 hover:from-[#ff6f00] hover:to-[#ffb300] transition"
                        >
                            <FaInstagram className="text-white text-xl" />
                        </a>
                        <a
                            href="#"
                            className="bg-gradient-to-r from-[#ffb300] to-[#ff6f00] rounded-full p-3 hover:from-[#ff6f00] hover:to-[#ffb300] transition"
                        >
                            <FaLinkedinIn className="text-white text-xl" />
                        </a>
                        <a
                            href="#"
                            className="bg-gradient-to-r from-[#ffb300] to-[#ff6f00] rounded-full p-3 hover:from-[#ff6f00] hover:to-[#ffb300] transition"
                        >
                            <FaYoutube className="text-white text-xl" />
                        </a>
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
                    <div>
                        <h3 className="text-[#ffb300] font-semibold mb-2 border-b border-[#ffb300] inline-block">
                            Address
                        </h3>
                        <ul className="mt-2 space-y-1">
                            <li>
                               Shop No. 3 H.No.607,  Patwari Ji Building village bisrakh Jalalpur 
                                Near R.L. international public school sector-1 Greater Noida West 201306
                            </li>
                            <li>
                                <b className="text-[#ffb300] font-bold">
                                    Email:
                                </b>{" "}
                                <span className="text-sm">nehacare26@gmail.com</span>
                            </li>
                            <li>
                                <b className="text-[#ffb300] font-bold">
                                    Phone:
                                </b>{" "}
                                +91 73109 68871
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-[#ffb300] font-semibold mb-2 border-b border-[#ffb300] inline-block">
                            Company
                        </h3>
                        <ul className="mt-2 space-y-1">
                            <li>
                                <a
                                    href="#"
                                    className="hover:underline text-[#ffe082]"
                                >
                                    About us
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="hover:underline text-[#ffe082]"
                                >
                                    Contact us
                                </a>
                            </li>
                            <li>
                                <a
                                    href="/privacy-policy"
                                    className="hover:underline text-[#ffe082]"
                                >
                                    Privacy policy
                                </a>
                            </li>
                            <li>
                                <a
                                    href="/return-refund-policy"
                                    className="hover:underline text-[#ffe082]"
                                >
                                    Return & Refund Policy
                                </a>
                            </li>
                            <li>
                                <a
                                    href="/terms-and-conditions"
                                    className="hover:underline text-[#ffe082]"
                                >
                                    Terms & Conditions
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-[#ffb300] font-semibold mb-2 border-b border-[#ffb300] inline-block">
                            Our Services
                        </h3>
                        <ul className="mt-2 space-y-1">
                            <li>Chimney Repair Service</li>
                            <li>RO Water Purifier Repair Service</li>
                            <li>Hob Gas Repair Service</li>
                            <li>Microwave Repair Service</li>
                            <li>Oven Repair Service</li>
                            <li>Dishwasher Repair Service</li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-[#ffb300] font-semibold mb-2 border-b border-[#ffb300] inline-block">
                            Our Location
                        </h3>
                        <div className="mt-2 rounded-xl overflow-hidden shadow-lg">
                          
                            <iframe src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d437.98678877107756!2d77.43824429429141!3d28.572936264724145!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjjCsDM0JzIyLjYiTiA3N8KwMjYnMTguNyJF!5e0!3m2!1sen!2sin!4v1760426702915!5m2!1sen!2sin"
                                width="100%" height="180"
                                style={{ border: 0 }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="Google Map"></iframe>
                        </div>
                    </div>
                </div>
                <div className="border-t border-[#2c4a6b] pt-4 text-center text-sm">
                    <span>
                        Copyright © 2024{" "}
                        <a
                            href="#"
                            className="text-[#ffb300] font-bold underline"
                        >
                            Neha Chimney & Repair Services
                        </a>{" "}
                        All rights reserved
                    </span>
                </div>
            </div>
        </footer>
    );
}


