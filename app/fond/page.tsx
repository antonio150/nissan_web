"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";

const slides = [
  {
    image: "/img/fond/slide_fond1.avif",
    title: "Go the distance",
    description: "Explore the NISSAN lineup to see which vehicles can help you save at the pump. [*]",
    btn_label:"Build your Nissan",
    btn_link: "https://www.nissanusa.com/shopping-tools/build-price",
  },
  {
    image: "/img/fond/slide_fond2.webp",
    title: "2026 Rogue, 2026 Frontiere, 2026 Pathfinder, 2026 Murano",
    description: "FOR WELL-QUALIFIED BUYERS WHO FINANCE THROUGH NMAC",
    btn_label:"View Offers",
    btn_link: "https://www.nissanusa.com/shopping-tools/deals-incentives-offers.html",
  },
  {
    image: "/img/fond/slide_fond3.webp",
    title: "Nissan is the fastest-growing mainstream brand [*]",
    description: "Discover why more drivers chose Nissan and explore offers today.",
    btn_label:"Explore Offers",
    btn_link: "https://www.nissanusa.com/shopping-tools/deals-incentives-offers.html",
  },
];



export default function HeroSlider() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(interval);
  }, [current]);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section className="relative h-screen overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            current === index ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
          }`}
        >
          <Image
            src={slide.image}
            alt={slide.title}
            fill
            priority
            className="object-cover"
          />

          {/* Overlay sombre */}
          <div className="absolute inset-0 bg-black/40" />

          {/* Texte */}
          <div className="absolute inset-0 flex flex-col font-thin justify-center items-start text-center text-white px-10">
            <h1 className="text-4xl text-left mb-10 w-150">
              {slide.title}
            </h1>

            <p className="text-md mb-5 max-w-2xl">
              {slide.description}
            </p>
            <a href={slide.btn_link} className="flex space-x-2 items-center text-[14px]  hover:bg-black hover:text-white rounded-3xl bg-white text-black px-6 py-2 justify-between transition">
              <span>{slide.btn_label}</span>
              <FaArrowRight className="text-md " />
            </a>
          </div>
        </div>
      ))}
      {/* Bouton gauche */}
      <button
        onClick={prevSlide}
        className="absolute left-0 top-1/2 -translate-y-1/2 z-20
                   w-9 h-22  bg-white/20 backdrop-blur-sm
                   text-white text-2xl hover:bg-white/30 transition"
      >
        ❮
      </button>

      {/* Bouton droite */}
      <button
        onClick={nextSlide}
        className="absolute right-0 top-1/2 -translate-y-1/2 z-20
                   w-9 h-22  bg-white/20 backdrop-blur-sm
                   text-white text-2xl hover:bg-white/30 transition"
      >
        ❯
      </button>

      
    </section>
  );
}