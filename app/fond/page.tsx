"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const slides = [
  {
    image: "/img/fond/slide_fond1.avif",
    title: "Go the distance",
    description: "Puissance et élégance sur tous les terrains.",
  },
  {
    image: "/img/fond/slide_fond2.webp",
    title: "2026 Rogue, 2026 Frontiere, 2026 Pathfinder, 2026 Murano",
    description: "L'aventure commence ici.",
  },
  {
    image: "/img/fond/slide_fond3.webp",
    title: "Nissan Navara",
    description: "Conçu pour le travail et les loisirs.",
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
            current === index ? "opacity-100" : "opacity-0"
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
          <div className="absolute inset-0 flex flex-col justify-center items-start text-center text-white px-10">
            <h1 className="text-xl font-bold mb-4">
              {slide.title}
            </h1>

            <p className="text-xl max-w-2xl">
              {slide.description}
            </p>
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