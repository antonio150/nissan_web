"use client";

import { useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";

const discoverImages = [
  {
    src: "/img/discover/2026-nissan-rogue-adventure-ready-suv.avif",
    title: 'For when "let\'s go" beats "let\'s plan"',
    subtitle:
      "From its roomy interior to its VC-Turbo engine, Nissan Rogue is built for the moments that matter most—the ones you didn't see coming. [*]",
    little_text: "Nissan Rogue. Take on all the happy chaos.",
    url: "https://www.nissanusa.com/vehicles/crossovers-suvs/rogue.html"
  },
  {
    src: "/img/discover/2026-nissan-pathfinder-green-exterior-driving-dirt-d.webp",
    title: "The New 2026 Nissan Pathfinder",
    subtitle:
      "Power your adventure from behind the wheel of the new 2026 Nissan Pathfinder.",
    little_text: "New 2026 Nissan Pathfinder",
    url: "https://www.nissanusa.com/vehicles/crossovers-suvs/pathfinder.html"
  },

  {
    src: "/img/discover/2026-nissan-sentra-driving-iihs-award.webp",
    title: "The All-New 2026 Nissan Sentra",
    subtitle:
      "The perfect balance of style, technology, fuel efficiency and IIHS award-winning safety.Nissan's all-new compact sedan. [*]",
    little_text: "The All-New 2026 Nissan Sentra",
    url: "https://www.nissanusa.com/vehicles/cars/sentra.html"
  },
  {
    src: "/img/discover/orange-2026-nissan-frontier-truck-pulling-a-monster-truck.avif",
    title: "Frontier PRO-4X",
    subtitle:
      "Too V6 To Quit! Frontier is the only midsize truck with a standard 310-HP V6  — the biggest V6 engine in its class.   [*]",
    little_text: "Frontier PRO-4X",
    url: "https://www.nissanusa.com/vehicles/trucks/frontier/unleash-the-power.html"
  }
];

export default function PageDiscover() {
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <section className="px-1 py-11  md:px-8 bg-white ">
      <div className="mb-8 max-w-4xl">
        <h2 className="text-5xl font-thin text-slate-900">Discover</h2>
      </div>

      <div className="flex flex-col gap-1 md:flex-row md:items-stretch">
        {discoverImages.map((item, index) => {
          const isSelected = index === selectedIndex;

          return (
            <button
              key={item.src}
              type="button"
              onClick={() => setSelectedIndex(index)}
              className={`group relative overflow-hidden   border border-slate-200 bg-slate-50 transition-all duration-500 ease-out focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-400 ${
                isSelected ? "h-[400px] md:flex-[3] md:h-[520px]" : "h-[150px] md:flex-[1] md:h-[520px]"
              } w-full h-[150px] md:h-[520px]`}
            >
              <div className="absolute inset-0">
                <img
                  src={item.src}
                  alt={item.title}
                  className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              {isSelected ? (
                <div>
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/10 to-transparent" />

                  <div className="absolute bottom-4 left-4 right-4 text-left text-white space-y-5">
                    <h3 className="mt-2 text-2xl font-semibold">
                      {item.title}
                    </h3>
                    <p className="text-xs  tracking-[0.24em] text-white/70">
                      {item.subtitle}
                    </p>

                    <a
                      href={item.url}
                      className="mt-1 flex items-center w-auto space-x-2 text-sm text-white/90"
                    >
                      <span>Learn More</span>{" "}
                      <FaArrowRightLong className="text-md" />{" "}
                    </a>
                  </div>
                </div>
              ) : (
                <div>
                  <div className="absolute top-0 right-0 p-5">
                    <FaPlus />
                  </div>
                  <div className="absolute bottom-4 left-4 right-4 text-left text-white space-y-5">
                    <p className="text-xs  tracking-[0.24em] text-white/70">
                      {item.little_text}
                    </p>
                  </div>
                </div>
              )}
            </button>
          );
        })}
      </div>
    </section>
  );
}
