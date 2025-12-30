import PageBanner from "@/components/homePage/PageBanner";
import React from "react";

export default function OvenRepairServicePage() {
    return (
        <>
            <PageBanner
                title="Oven Repair Service"
                subtitle="Get reliable  Oven repair services in Noida with 24x7 support. Expert technicians for all brands, fast and affordable repairs. Now."
                image="/slider/oven.jpg"
            />
            <main className="bg-[#f6fbfd] py-10">
                
             
                    {/* Alternating sections start */}
                    <section className="flex flex-col md:flex-row items-center gap-8 mb-16">
                        <div className="md:w-1/2 w-full">
                            <img
                                src="/slider/oven.jpg"
                                alt="Modern Service Standard"
                                className="rounded-xl w-full h-[320px] object-cover shadow-lg"
                            />
                        </div>
                        <div className="md:w-1/2 w-full">
                            <h4 className="text-[#0099b7] font-semibold uppercase mb-2 tracking-wide text-sm">
                               Oven Repair
                            </h4>
                            <h2 className="text-3xl font-bold mb-4 text-[#0d5c6b]">
                               Oven Repair Service 
                            </h2>
                            <p className="text-[#222] mb-2 text-base">
                               They offer 24×7 doorstep repair for home appliances, including microwaves and ovens. Their technicians are experienced and well-trained. 
                                    They also provide transparent pricing and a 3-month warranty on repairs.
                            </p>
                            <p className="text-[#222] mb-2 text-base">  
                                ${`What makes Neha stand out is their commitment to customer satisfaction: they offer transparent pricing, genuine
                                    replacement parts, and prompt service. 
                                nehacare.shop
                                Their team is experienced, well-trained, and equipped to diagnose and fix both mechanical faults and electrical issues. 
                                nehacare.shop
                                
                                Moreover, Neha’s services are available across Noida and Greater Noida, making it convenient to book a technician right at your doorstep. 
                                Sulekha
                                Whether it’s a minor glitch or a major breakdown, Neha Chimney & Repair Services gives you peace of mind and quality repair work.`}
                            </p>
                            <ul className="mt-4 space-y-2">
                                <li className="flex items-center text-[#0d5c6b] font-medium">
                                    <span className="mr-2 text-[#0099b7] text-lg">
                                        &#10003;
                                    </span>{" "}
                                    Start Roofing Construction Planning
                                </li>
                                <li className="flex items-center text-[#0d5c6b] font-medium">
                                    <span className="mr-2 text-[#0099b7] text-lg">
                                        &#10003;
                                    </span>{" "}
                                    Quality Construction
                                </li>
                                <li className="flex items-center text-[#0d5c6b] font-medium">
                                    <span className="mr-2 text-[#0099b7] text-lg">
                                        &#10003;
                                    </span>{" "}
                                    Work With Architecture Style
                                </li>
                                <li className="flex items-center text-[#0d5c6b] font-medium">
                                    <span className="mr-2 text-[#0099b7] text-lg">
                                        &#10003;
                                    </span>{" "}
                                    Roof Construction Consult With Expert
                                </li>
                            </ul>
                        </div>
                    </section>
                    <section className="flex flex-col md:flex-row items-center gap-8 mb-16 md:flex-row-reverse">
                        <div className="md:w-1/2 w-full">
                            <img
                                src="/slider/noida.jpg"
                                alt="Expert Refrigerator Repair"
                                className="rounded-xl w-full h-[320px] object-cover shadow-lg"
                            />
                        </div>
                        <div className="md:w-1/2 w-full">
                            <h4 className="text-[#0099b7] font-semibold uppercase mb-2 tracking-wide text-sm">
                                Service Excellence
                            </h4>
                            <h2 className="text-3xl font-bold mb-4 text-[#0d5c6b]">
                                Expert Refrigerator Repair
                            </h2>
                            <p className="text-[#222] mb-2 text-base">
                                Our certified technicians provide fast and
                                reliable refrigerator repair for all brands.
                            </p>
                            <p className="text-[#222] mb-2 text-base">
                                We use genuine parts and offer transparent
                                pricing for every service call.
                            </p>
                            <ul className="mt-4 space-y-2">
                                <li className="flex items-center text-[#0d5c6b] font-medium">
                                    <span className="mr-2 text-[#0099b7] text-lg">
                                        &#10003;
                                    </span>{" "}
                                    Quick Diagnosis & Repair
                                </li>
                                <li className="flex items-center text-[#0d5c6b] font-medium">
                                    <span className="mr-2 text-[#0099b7] text-lg">
                                        &#10003;
                                    </span>{" "}
                                    Genuine Spare Parts
                                </li>
                                <li className="flex items-center text-[#0d5c6b] font-medium">
                                    <span className="mr-2 text-[#0099b7] text-lg">
                                        &#10003;
                                    </span>{" "}
                                    Warranty on Service
                                </li>
                                <li className="flex items-center text-[#0d5c6b] font-medium">
                                    <span className="mr-2 text-[#0099b7] text-lg">
                                        &#10003;
                                    </span>{" "}
                                    24x7 Customer Support
                                </li>
                            </ul>
                        </div>
                    </section>
                </div>
            </main>
        </>
    );
}
