import PageBanner from "@/components/homePage/PageBanner";
import React from "react";
import Image from "next/image";

export default function ROWaterPurifierRepairServicePage() {
    return (
        <>
            <PageBanner
                title="RO Water Purifier Repair Service"
                subtitle="Expert RO Water Purifier Repair Service for all brands. Quick doorstep support, genuine parts, affordable pricing, and skilled technicians to ensure clean, safe drinking water. Book your service today!"
                image="/slider/water-purifierone.jpg"
            />
           <main className="bg-[#f6fbfd] py-10">
                <div className="max-w-[1200px] mx-auto px-4">
                    {/* Alternating sections start */}
                    <section className="flex flex-col md:flex-row items-center gap-8 mb-16">
                        <div className="md:w-1/2 w-full">
                            <Image
                                src="/slider/water-purifierone.jpg"
                                alt="Modern Service Standard"
                                width={600}
                                height={320}
                                className="rounded-xl w-full h-[320px] object-cover shadow-lg"
                                priority
                            />
                        </div>
                        <div className="md:w-1/2 w-full">
                            <h4 className="text-[#0099b7] font-semibold uppercase mb-2 tracking-wide text-sm">
                                Water Purifier
                            </h4>
                            <h2 className="text-3xl font-bold mb-4 text-[#0d5c6b]">
                              Best RO Water Purifier Repair & Service at Your Doorstep
                            </h2>
                          
                            <p className="text-[#222] mb-2 text-base">
                                ${`For the greatest RO water purifier installation, maintenance, and repair services, Abhaya Services 
                                is your go-to source, guaranteeing your family's access to clean and safe drinking water. We offer 
                                dependable and reasonably priced services for all of the top brands of RO water purifiers because to
                                our staff of skilled experts and customer-first philosophy.
                                Problems including water leaks, strange noises, poor or no water flow, unpleasant tastes or odors, and
                                broken filters or pumps are all addressed by our RO repair services. To restore your purifier's 
                                functionality and guarantee a steady supply of clean drinking water, we employ authentic replacement
                                parts and cutting-edge equipment.`}
                            </p>
                           
                        </div>
                    </section>
                    <section className="flex flex-col md:flex-row items-center gap-8 mb-16 md:flex-row-reverse">
                        <div className="md:w-1/2 w-full">
                            <Image
                                src="/slider/water-purifiertwo.jpg"
                                alt="Expert water purifierone Repair"
                                width={600}
                                height={320}
                                className="rounded-xl w-full h-[320px] object-cover shadow-lg"
                                priority={false}
                            />
                        </div>
                        <div className="md:w-1/2 w-full">
                            <h4 className="text-[#0099b7] font-semibold uppercase mb-2 tracking-wide text-sm">
                                Service Excellence
                            </h4>
                            <h2 className="text-3xl font-bold mb-4 text-[#0d5c6b]">
                               Trusted RO Purifier Installation, Cleaning & Maintenance
                            </h2>
                            <p className="text-[#222] mb-2 text-base">
                                ${`We clean and replace filters, check TDS levels, sanitise storage
                                tanks, and inspect pipelines as part of our routine servicing and maintenance programs to avoid contamination.
                                Maintaining your RO system on a regular basis not only increases its purifying effectiveness but also prolongs 
                                its longevity, preventing future expensive replacements.
                                Our expert RO installation services are available to clients installing a new purifier. Proper fitting,
                                leak-proof connections, and secure electrical setup are guaranteed by our professionals. We also help you 
                                choose the best model for your needs depending on factors like family size, water quality, and usage.
                                Our combination of genuine parts, technical know-how, and upfront pricing makes Abhaya Services the go-to 
                                option for RO water purifier installation, maintenance, and repair.`}
                            </p>
                            <ul className="mt-4 space-y-2">
                               
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
