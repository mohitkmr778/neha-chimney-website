import React from "react";
import Image from "next/image";
import PageBanner from "@/components/homePage/PageBanner";

const services = [
    {
        title: "Modern Service Standard",
        subtitle: "About Quality",
        description: [
            "Which don’t look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure",
            "Which don’t look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn’t anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence ernet tend to repeat presure.",
        ],
        points: [
            "Start Roofing Construction Planning",
            "Quality Construction",
            "Work With Architecture Style",
            "Roof Construction Consult With Expert",
        ],
        img: "/slider/noida.jpg",
    },
    {
        title: "Expert Refrigerator Repair",
        subtitle: "Service Excellence",
        description: [
            "Our certified technicians provide fast and reliable refrigerator repair for all brands.",
            "We use genuine parts and offer transparent pricing for every service call.",
        ],
        points: [
            "Quick Diagnosis & Repair",
            "Genuine Spare Parts",
            "Warranty on Service",
            "24x7 Customer Support",
        ],
        img: "/slider/noida.jpg",
    },
];

export default function ServicePage() {
    return (
        <>
            <PageBanner
                title="Our Services"
                subtitle="Modern Service Standards & Expert Solutions"
                image="/slider/noida.jpg"
            />
            <main className="bg-[#f6fbfd] py-10">
                <div className="max-w-[1200px] mx-auto px-4">
                    {services.map((service, idx) => (
                        <section
                            key={idx}
                            className={`flex flex-col md:flex-row items-center gap-8 mb-16 ${
                                idx % 2 === 1 ? "md:flex-row-reverse" : ""
                            }`}
                        >
                            <div className="md:w-1/2 w-full">
                                <Image
                                    src={service.img}
                                    alt={service.title}
                                    width={600}
                                    height={320}
                                    className="rounded-xl w-full h-[320px] object-cover shadow-lg"
                                    priority={idx === 0}
                                />
                            </div>
                            <div className="md:w-1/2 w-full">
                                <h4 className="text-[#0099b7] font-semibold uppercase mb-2 tracking-wide text-sm">
                                    {service.subtitle}
                                </h4>
                                <h2 className="text-3xl font-bold mb-4 text-[#0d5c6b]">
                                    {service.title}
                                </h2>
                                {service.description.map((desc, i) => (
                                    <p
                                        key={i}
                                        className="text-[#222] mb-2 text-base"
                                    >
                                        {desc}
                                    </p>
                                ))}
                                <ul className="mt-4 space-y-2">
                                    {service.points.map((point, i) => (
                                        <li
                                            key={i}
                                            className="flex items-center text-[#0d5c6b] font-medium"
                                        >
                                            <span className="mr-2 text-[#0099b7] text-lg">
                                                &#10003;
                                            </span>{" "}
                                            {point}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </section>
                    ))}
                </div>
            </main>
        </>
    );
}
