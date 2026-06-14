"use client";

import { FaArrowRight } from "react-icons/fa6";

export default function PageVideo() {
    return (
        <div className="w-full h-full flex bg-gray-100 text-gray-800 justify-center">
            <div className="w-full max-w-5xl">
                <video
                    src="/video/car/New Cars, SUVs, Trucks & Electric Vehicles - Nissan USA.mp4"
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-auto block"
                />
                <div className="px-4 py-6 text-left space-y-4">
                    <h3 className="text-3xl mb-3 m-0">
                        Go ahead—Rogue can take it
                    </h3>
                    <p className="text-base mb-5 m-0 leading-relaxed">
                        Rogue is built to take all the noisy, crazy, happy chaos you can throw at it.
                    </p>
                    <a
                        href="/"
                        className=" w-42 space-x-4 font-thin rounded-full px-6 py-3 flex items-center bg-white text-black no-underline rounded font-semibold hover:bg-gray-800 hover:text-white transition-colors"
                    >
                        <span>Learn More</span> <FaArrowRight className="text-md " />
                    </a>
                </div>
            </div>
        </div>
    );
}