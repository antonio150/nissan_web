"use client";

import { FaArrowRightLong, FaArrowUpRightFromSquare } from "react-icons/fa6";

export default function PageConclusion()
{
    const info = [
        {
            src: "/img/conclusion/consumer-guide-brand-award-v2.webp",
            title: "Most Awarded Brand 5 years in a Row",
            subtitle:
            "Nissan earned five Best Buy awards for the Kicks, LEAF, Rogue, Armada, and Frontier - making it Consumer Guide® Automotive's most awarded brand of 2026. [*]",
            label_url: "Build and Price",
            url: "https://www.nissanusa.com/shopping-tools/build-price"
        },
        {
            src: "/img/conclusion/2025-nissan-quality-jd-power-award-small-D.avif",
            title: "Nissan Takes the Top Spot for New Vehicle Quality",
            subtitle:
            "Nissan, #1 for New-Vehicle Quality among Mainstream Brands, engineered for reliability and performance. [*]",
            label_url: "Search Inventory",
            url: "https://www.nissanusa.com/shopping-tools/search-inventory"
        },
    ];
    return(
        <>
    <div className="bg-white px-5 md:px-20 py-14">
        <div className="flex flex-col md:flex-row  md:gap-9">
            {info.map((item, index) => {
                return(
            <div className="text-black w-full md:w-[700px] space-x-2 space-y-10 mb-5">
                <div className="w-full  h-70 ">
                    <img src={item.src} 
                    alt="consumer-guide-brand-award-v2" 
                    className="object-cover w-full h-full"
                    />
                </div>
                <h1 className="text-4xl">{item.title} </h1>
                <p>
                    {item.subtitle} 
                </p>
                <a href={item.url} className="flex group items-center space-x-3 w-auto">
                    <span>{item.label_url} </span> <FaArrowRightLong className="text-md  group-hover:translate-x-2  group-hover:text-red-700" />
                </a>
            </div>
            )
            })}
        </div>
    </div>
    <div className="bg-gray-100 text-black py-7 space-x-7 flex flex-col md:flex-row items-center justify-center gap-5">
        <span>Find Nissan Safety Recall & Service Campaign information here:</span>
        <a className="space-x-2 flex items-center rounded-full px-4 py-2 w-auto border border-black" href="https://www.nissanusa.com/recalls-vin.html"><span>Explore </span> <FaArrowUpRightFromSquare /></a>
    </div>

    </>
    )
}