import PageBanner from "@/components/homePage/PageBanner";
import React from "react";
import ServiceImageSlider from "@/components/homePage/ServiceImageSlider";

export default function ChimneyRepairServicePage() {
    const sliderImages = [
        "/slider/noida.jpg",
        "/slider/noida.jpg",
        "/slider/noida.jpg",
        "/slider/noida.jpg",
        "/slider/noida.jpg",
        "/slider/noida.jpg",
        "/slider/noida.jpg",
    ];
    return (
        <>
            <PageBanner
                title="Expert Chimney Repair & Maintenance Services"
                subtitle=" Expert chimney repair service offering fast, reliable solutions for cleaning, maintenance, and installation. Ensure safe, efficient kitchen ventilation today!"
                image="/slider/noida.jpg"
            />
            <main className="bg-[#f6fbfd] py-10">
                <div className="max-w-[1200px] mx-auto px-4">
                   
               
                    {/* Alternating sections start */}
                    <section className="flex flex-col md:flex-row items-center gap-8 mb-16">
                        <div className="md:w-1/2 w-full">
                            <img
                                src="/slider/chimney-section-one.jpg"
                                alt="Modern Service Standard"
                                className="rounded-xl w-full h-[320px] object-cover shadow-lg"
                            />
                        </div>
                        <div className="md:w-1/2 w-full">
                            <h4 className="text-[#0099b7] font-semibold uppercase mb-2 tracking-wide text-sm">
                                About Quality
                            </h4>
                            <h2 className="text-3xl font-bold mb-4 text-[#0d5c6b]">
                              Expert Chimney Repair & Maintenance Services
                            </h2>
                            <p className="text-[#222] mb-2 text-base">
                                A kitchen chimney plays a vital role in keeping your kitchen clean, smoke-free, and fresh. Over time, chimneys 
                                may face problems like reduced suction power, unusual noise, oil blockages, or motor issues. If your chimney 
                                is not working efficiently, it’s time to call the best chimney repair service near you.
                                We provide professional chimney repair, cleaning, and maintenance services for all major brands and models.
                                Our trained technicians use advanced tools to diagnose problems quickly and offer long-lasting 
                                solutions at affordable prices. Whether it’s a wall-mounted, island, or built-in chimney, we handle
                                every type with care and expertise.
                            </p>
                            <p className="text-[#222] mb-2 text-base">
                                Your kitchen will remain safe, smoke-free, and clean with 
                                Abhaya Chimney Service as your go-to partner for the best chimney installation, maintenance, and repair services.
                                We provide dependable services for all kinds and brands of chimneys at reasonable costs thanks to our years of experience
                                and staff of knowledgeable experts.
                                A variety of problems are covered by our chimney repair service, such as motor failures, decreased suction, strange noises,
                                clogged filters, damaged ducts, and electrical malfunctions. To provide you piece of mind and prolong the life of your chimney,
                                we exclusively utilize authentic replacement parts and up-to-date equipment.
                            </p>
                           
                        </div>
                    </section>
                    <section className="flex flex-col md:flex-row items-center gap-8 mb-16 md:flex-row-reverse">
                        <div className="md:w-1/2 w-full">
                            <img
                                src="/slider/chimney-section-two.jpg"
                                alt="Expert Chimney Repair"
                                className="rounded-xl w-full h-[320px] object-cover shadow-lg"
                            />
                        </div>
                        <div className="md:w-1/2 w-full">
                            <h4 className="text-[#0099b7] font-semibold uppercase mb-2 tracking-wide text-sm">
                                Service Excellence
                            </h4>
                            <h2 className="text-3xl font-bold mb-4 text-[#0d5c6b]">
                               Reliable Chimney Cleaning & Repair Solutions
                            </h2>
                            <p className="text-[#222] mb-2 text-base">
                                Regular chimney maintenance not only improves performance but also extends its lifespan and keeps
                                your kitchen hygienic. Don’t ignore minor issues like smoke leakage or weak suction — they can
                                lead to bigger problems later.
                                chimney repair service today and enjoy a cleaner, healthier cooking environment. Call us now or 
                                schedule an appointment online for quick support. We ensure your chimney works like new again!`
                            </p>
                            <ul className="mt-4 space-y-2">
                                <li className="flex items-center text-[#0d5c6b] font-medium">
                                    <span className="mr-2 text-[#0099b7] text-lg">
                                        &#10003;
                                    </span>{" "}
                                 Deep cleaning and oil mesh filter cleaning
                                </li>
                                <li className="flex items-center text-[#0d5c6b] font-medium">
                                    <span className="mr-2 text-[#0099b7] text-lg">
                                        &#10003;
                                    </span>{" "}
                                   Motor and PCB repair or replacement
                                </li>
                                <li className="flex items-center text-[#0d5c6b] font-medium">
                                    <span className="mr-2 text-[#0099b7] text-lg">
                                        &#10003;
                                    </span>{" "}
                                   Chimney suction power testing and improvement
                                </li>
                                <li className="flex items-center text-[#0d5c6b] font-medium">
                                    <span className="mr-2 text-[#0099b7] text-lg">
                                        &#10003;
                                    </span>{" "}
                                   Noise reduction and light replacement
                                </li>
                            </ul>
                        </div>
                    </section>
                         <ServiceImageSlider 
                             images={sliderImages} 
                             heading="Our Chimney Repair Gallery" 
                             subheading="See our expert technicians in action, delivering quality chimney repairs across Noida." 
                         />
                </div>
            </main>
        </>
    );
}
