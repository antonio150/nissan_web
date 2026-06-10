"use client";

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";

type CarItem = {
  titre: string;
  nom: string;
  img: string;
  description: string;
  build_link: string;
  explore_link: string;
};

type CarCategory = {
  type: string;
  value: CarItem[];
};

const categories: CarCategory[] = [
  {
    type: "featured_vehicles",
    value: [
      {
        titre: "Rogue",
        nom: "Rogue",
        img: "/img/car/2026-nissan-rogue-profile-outdoors-xl.avif",
        description: "2026.5 Rogue Starting at $29,490 [*][*]",
        build_link:
          "https://www.nissanusa.com/shopping-tools/build-price?models=rogue&modelYear=current-year",
        explore_link: "https://www.nissanusa.com/vehicles/crossovers-suvs/rogue"
      },
      {
        titre: "Pathfinder",
        nom: "Pathfinder",
        img: "/img/car/2026-pathfinder.avif",
        description: "2026.5 Pathfinder Starting at $35,490 [*][*]",
        build_link:
          "https://www.nissanusa.com/shopping-tools/build-price?models=pathfinder&modelYear=current-year",
        explore_link:
          "https://www.nissanusa.com/vehicles/crossovers-suvs/pathfinder.html"
      },
      {
        titre: "Frontier",
        nom: "Frontier",
        img: "/img/car/2026-nissan-frontier-in-profile-outdoors-xl-v2.webp",
        description: "2026.5 Frontier Starting at $31,490 [*][*]",
        build_link:
          "https://www.nissanusa.com/shopping-tools/build-price?models=frontier&modelYear=current-year",
        explore_link:
          "https://www.nissanusa.com/vehicles/crossovers-suvs/frontier.html"
      },
      {
        titre: "Armada",
        nom: "Armada",
        img: "/img/car/2026-nissan-armada-profile-xl.webp",
        description: "2026.5 Armada Starting at $45,490 [*][*]",
        build_link:
          "https://www.nissanusa.com/shopping-tools/build-price?models=armada&modelYear=current-year",
        explore_link:
          "https://www.nissanusa.com/vehicles/crossovers-suvs/armada.html"
      }
    ]
  },
  {
    type: "crossovers_suvs",
    value: [
      {
        nom: "Rogue",
        titre: "Rogue",
        img: "/img/car/2026-nissan-rogue-profile-outdoors-xl.avif",
        description: "2026.5 Rogue Starting at $29,490 [*][*]",
        build_link:
          "https://www.nissanusa.com/shopping-tools/build-price?models=rogue&modelYear=current-year",
        explore_link: "https://www.nissanusa.com/vehicles/crossovers-suvs/rogue"
      },
      {
        nom: "Pathfinder",
        titre: "Pathfinder",
        img: "/img/car/2026-pathfinder.avif",
        description: "2026.5 Pathfinder Starting at $35,490 [*][*]",
        build_link:
          "https://www.nissanusa.com/shopping-tools/build-price?models=pathfinder&modelYear=current-year",
        explore_link:
          "https://www.nissanusa.com/vehicles/crossovers-suvs/pathfinder.html"
      },
      {
        nom: "Murano",
        titre: "Murano",
        img: "/img/car/2026-nissan-murano-midsize-suv-profile-XL.webp",
        description: "2026.5 Murano Starting at $33,490 [*][*]",
        build_link:
          "https://www.nissanusa.com/shopping-tools/build-price?models=murano&modelYear=current-year",
        explore_link:
          "https://www.nissanusa.com/vehicles/crossovers-suvs/murano.html"
      },
      {
        nom: "Armada",
        titre: "Armada",
        img: "/img/car/2026-nissan-armada-profile-xl.webp",
        description: "2026.5 Armada Starting at $45,490 [*][*]",
        build_link:
          "https://www.nissanusa.com/shopping-tools/build-price?models=armada&modelYear=current-year",
        explore_link:
          "https://www.nissanusa.com/vehicles/crossovers-suvs/armada.html"
      },
      {
        nom: "Kicks",
        titre: "Kicks",
        img: "/img/car/2025-nissan-kicks-profile-outdoors-v3-xl.webp",
        description: "2026.5 Kicks Starting at $24,490 [*][*]",
        build_link:
          "https://www.nissanusa.com/shopping-tools/build-price?models=kicks&modelYear=current-year",
        explore_link:
          "https://www.nissanusa.com/vehicles/crossovers-suvs/kicks.html"
      },
      {
        titre: "LEAF",
        nom: "All-NewLEAF",
        img: "/img/car/2026-nissan-leaf-electric-suv-profile-outdoor-xl.webp",
        description: "2026 Nissan LEAF starting at $29,990 [*][*][*]",
        build_link:
          "https://www.nissanusa.com/shopping-tools/build-price?models=nissan-leaf",
        explore_link:
          "https://www.nissanusa.com/vehicles/electric-cars/leaf.html"
      },
      {
        titre: "Rogue Plug-in Hybrid",
        nom: "Rogue Plug-in Hybrid",
        img: "/img/car/2026-nissan-rogue-plug-in-hybrid-profile-outdoors-xl.webp",
        description: "2026 Rogue® Plug-in Hybrid Starting at $45,990 [*][*]",
        build_link:
          "https://www.nissanusa.com/shopping-tools/build-price?models=rogue-plug-in-hybrid&modelYear=current-year",
        explore_link:
          "https://www.nissanusa.com/vehicles/crossovers-suvs/rogue-plug-in-hybrid.html"
      }
    ]
  },
  {
    type: "trucks",
    value: [
      {
        titre: "Frontier",
        nom: "Frontier",
        img: "/img/car/2026-nissan-frontier-in-profile-outdoors-xl-v2.webp",
        description: "2026.5 Frontier Starting at $31,490 [*][*]",
        build_link:
          "https://www.nissanusa.com/shopping-tools/build-price?models=frontier&modelYear=current-year",
        explore_link:
          "https://www.nissanusa.com/vehicles/crossovers-suvs/frontier.html"
      }
    ]
  },
  {
    type: "cars",
    value: [
      {
        titre: "Sentra",
        nom: "All-New Sentra",
        img: "/img/car/2026-nissan-sentra-compact-sedan-parked-XL.webp",
        description: "2026.5 Sentra Starting at $22,600 [*][*]",
        build_link:
          "https://www.nissanusa.com/shopping-tools/build-price?models=sentra&modelYear=current-year",
        explore_link: "https://www.nissanusa.com/vehicles/cars/sentra.html"
      },
      {
        titre: "Altima",
        nom: "Altima",
        img: "/img/car/2026-nissan-altima-profile-outdoors-xl-v1.webp",
        description: "2026 Altima Starting at $27,580 [*][*]",
        build_link:
          "https://www.nissanusa.com/shopping-tools/build-price?models=altima&modelYear=current-year",
        explore_link: "https://www.nissanusa.com/vehicles/cars/altima.html"
      },
      {
        titre: "Versa",
        nom: "Versa",
        img: "/img/car/2025-nissan-versa-profile-outdoors-XL.avif",
        description: "2026.5 Versa Starting at $17,390 [*][*]",
        build_link: "https://www.nissanusa.com/vehicles/cars/versa-sedan.html",
        explore_link: "https://www.nissanusa.com/vehicles/cars/versa-sedan.html"
      }
    ]
  },
  {
    type: "electrified",
    value: [
      {
        titre: "LEAF",
        nom: "All-NewLEAF",
        img: "/img/car/2026-nissan-leaf-electric-suv-profile-outdoor-xl.webp",
        description: "2026 Nissan LEAF starting at $29,990 [*][*][*]",
        build_link:
          "https://www.nissanusa.com/shopping-tools/build-price?models=nissan-leaf",
        explore_link:
          "https://www.nissanusa.com/vehicles/electric-cars/leaf.html"
      },
      {
        titre: "Rogue Plug-in Hybrid",
        nom: "Rogue Plug-in Hybrid",
        img: "/img/car/2026-nissan-rogue-plug-in-hybrid-profile-outdoors-xl.webp",
        description: "2026 Rogue® Plug-in Hybrid Starting at $45,990 [*][*]",
        build_link:
          "https://www.nissanusa.com/shopping-tools/build-price?models=rogue-plug-in-hybrid&modelYear=current-year",
        explore_link:
          "https://www.nissanusa.com/vehicles/crossovers-suvs/rogue-plug-in-hybrid.html"
      }
    ]
  },
  {
    type: "sports_cars",
    value: [
      {
        titre: "Nissan Z",
        nom: "Nissan Z",
        img: "/img/car/Award_NissanZ_MY26_Desktop_XL.webp",
        description: "2026 Nissan Z with bold performance and style.",
        build_link:
          "https://www.nissanusa.com/shopping-tools/build-price?models=nissan-z&modelYear=current-year",
        explore_link:
          "https://www.nissanusa.com/vehicles/sports-cars/nissan-z.html"
      }
    ]
  }
];

function formatTypeLabel(type: string) {
  return type
    .split("_")
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(" ");
}

export default function Cars() {
  const [activeType, setActiveType] = useState(categories[0].type);
  const [activeIndex, setActiveIndex] = useState(0);

  const activeCategory = useMemo(
    () =>
      categories.find((category) => category.type === activeType) ??
      categories[0],
    [activeType]
  );

  const activeItem =
    activeCategory.value[activeIndex] ?? activeCategory.value[0];

  useEffect(() => {
    setActiveIndex(0);
  }, [activeType]);

  function handlePrev() {
    setActiveIndex(
      (current) =>
        (current - 1 + activeCategory.value.length) %
        activeCategory.value.length
    );
  }

  function handleNext() {
    setActiveIndex((current) => (current + 1) % activeCategory.value.length);
  }

  function selectSlide(index: number) {
    setActiveIndex(index);
  }

  return (
    <section className="mx-auto max-w-[1200px] ">
      <div className="relative">
        <div id="cars" className="relative overflow-hidden  bg-slate-900 shadow-2xl h-[300px] sm:h-[520px]">
          <div className="absolute inset-0">
            <div className="relative w-full h-full h-[720px] min-h-[300px] sm:min-h-[520px]">
              <img
                id="img_fond"
                src={activeItem.img}
                alt={activeItem.nom}
                className="absolute inset-0 w-full h-full  object-cover object-right"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/30 to-transparent" />
          </div>

          <div className="flex absolute inset-0">
            <div className="  flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
              <span className="text-sm text-white">
                {activeIndex + 1} / {activeCategory.value.length}
              </span>
            </div>
            <div className=" space-x-4  flex items-center px-3 sm:px-6">
              <button
                type="button"
                onClick={handlePrev}
                className="rounded-full bg-white/0 text-white hover:text-black border border-white   h-10 w-10 text-xl font-bold  shadow-lg transition hover:bg-white"
                aria-label="Précédent"
              >
                ‹
              </button>
              <button
                type="button"
                onClick={handleNext}
                className="rounded-full bg-white/0 text-white hover:text-black border border-whit  h-10 w-10 text-xl font-bold text-slate-900 shadow-lg transition hover:bg-white"
                aria-label="Suivant"
              >
                ›
              </button>
            </div>
          </div>

          <div className="absolute top-10 left-0 right-0 p-6 text-white">
            <h2 className="text-3xl font-bold sm:text-4xl">{activeItem.nom}</h2>
            <p className="mt-3 mb-3 max-w-3xl text-sm leading-6 text-slate-100 sm:text-base">
              {activeItem.description}
            </p>

            <div className="space-x-4 flex">
              <button className="border space-x-4 border-black px-4 py-2 bg-white text-black flex items-center rounded-3xl">
                <span>Build</span> <FaArrowRight className="text-md " />
              </button>
              <button className="border space-x-4 border-black px-4 py-2 bg-white text-black flex items-center rounded-3xl">
                <span>Explore</span> <FaArrowRight className="text-md " />
              </button>
            </div>
          </div>
        </div>

        <div
          id="section-list-cars"
          className="relative mt-8 sm:absolute sm:bottom-0 sm:left-1 sm:mt-0"
        >
          <div className=" flex items-center ">
            {categories.map((category) => (
              <button
                key={category.type}
                type="button"
                onClick={() => setActiveType(category.type)}
                className={`rounded-full text-white  px-4 py-2 text-sm transition ${
                  activeType === category.type ? "font-bold" : "font-normal "
                }`}
              >
                {formatTypeLabel(category.type)}
              </button>
            ))}
          </div>

          <div className="flex flex-nowrap overflow-x-auto w-screen mt-4 px-3 ">
            {activeCategory.value.map((item, index) => {
              const isActive = item.img === activeItem.img;
              return (
                <button
                  key={item.img}
                  type="button"
                  onClick={() => selectSlide(index)}
                  className={` shrink-0  group relative overflow-hidden  border-2 p-1 text-left transition ${
                    isActive
                      ? "border-slate-400 shadow-[0_10px_30px_rgba(249,115,22,0.18)]"
                      : "  border-none"
                  }`}
                >
                  <div className="relative w-30 h-20 overflow-hidden  bg-slate-100">
                    <img
                      src={item.img}
                      alt={item.nom}
                      className="w-full h-full object-cover object-right scale-125 transition duration-300 group-hover:scale-105"
                    />
                  </div>
                  <div className="mt-3 absolute bottom-3">
                    <p className={`font-semibold   text-white-500`}>
                      {item.titre}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
