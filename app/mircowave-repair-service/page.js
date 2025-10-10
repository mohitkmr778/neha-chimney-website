import PageBanner from "@/components/homePage/PageBanner";
import React from "react";

export default function MircowaveRepairServicePage() {
    return (
        <>
            <PageBanner
                title="Mircowave Repair Service"
                subtitle="Get reliable Washing Machine repair services in Noida with 24x7 support. Expert technicians for all brands, fast and affordable repairs. Now."
                image="/slider/noida.jpg"
            />
            <main className="bg-[#f6fbfd] py-10">
                <div className="max-w-[1200px] mx-auto px-4">
                    <h2 className="text-2xl font-bold mb-4 text-[#0d5c6b]">
                        Mircowave Repair Service
                    </h2>
                    <p className="text-[#222] mb-2 text-base">
                        Get reliable Washing Machine repair services in Noida
                        with 24x7 support. Expert technicians for all brands,
                        fast and affordable repairs. Now.
                    </p>
                    <div className="mt-4 mb-12">
                        <span className="font-semibold text-[#ffb300]">
                            ₹ 249
                        </span>
                    </div>
                    {/* Alternating sections start */}
                    <section className="flex flex-col md:flex-row items-center gap-8 mb-16">
                        <div className="md:w-1/2 w-full">
                            <img
                                src="/slider/noida.jpg"
                                alt="Modern Service Standard"
                                className="rounded-xl w-full h-[320px] object-cover shadow-lg"
                            />
                        </div>
                        <div className="md:w-1/2 w-full">
                            <h4 className="text-[#0099b7] font-semibold uppercase mb-2 tracking-wide text-sm">
                                About Quality
                            </h4>
                            <h2 className="text-3xl font-bold mb-4 text-[#0d5c6b]">
                                Modern Service Standard
                            </h2>
                            <p className="text-[#222] mb-2 text-base">
                                Which don’t look even slightly believable. If
                                you are going to use a passage of Lorem Ipsum,
                                you need to be sure
                            </p>
                            <p className="text-[#222] mb-2 text-base">
                                Which don’t look even slightly believable. If
                                you are going to use a passage of Lorem Ipsum,
                                you need to be sure there isn’t anything
                                embarrassing hidden in the middle of text. All
                                the Lorem Ipsum generators on the Internet tend
                                to repeat predefined. It uses a dictionary of
                                over 200 Latin words, combined with a handful of
                                model sentence ernet tend to repeat presure.
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
