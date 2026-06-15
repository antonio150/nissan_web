"use client";

import { FaArrowRight } from "react-icons/fa6";

export default function PageVideo() {
  return (
    <div className="w-full  md:px-12 py-6 bg-gray-100 text-black">
      {/* container avec hauteur fixe */}
      <div className="w-full h-[600px] overflow-hidden relative">
        <video
          src="/video/car/New Cars, SUVs, Trucks & Electric Vehicles - Nissan USA.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover object-center"
        />
      </div>

      <div className="px-4 py-6 text-left space-y-4">
        <h3 className="text-3xl mb-7 m-0">Go ahead—Rogue can take it</h3>
        <p className="text-base mb-7 m-0 leading-relaxed">
          Rogue is built to take all the noisy, crazy, happy chaos you can throw
          at it.
        </p>

        <a
          href="https://www.nissanusa.com/vehicles/crossovers-suvs/rogue.html"
          className="w-42 border  w-25 border-black text-[14px] space-x-4 font-thin rounded-full px-7 py-2 flex items-center bg-white text-black no-underline font-semibold hover:bg-gray-800 hover:text-white transition-colors"
        >
          <span>Learn More</span>
          <FaArrowRight className="text-md" />
        </a>
      </div>
    </div>
  );
}
