"use client";

import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { Menu, X } from "lucide-react";
import { FiMapPin, FiSearch } from "react-icons/fi";
import Recherche from "./recherche/page";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [showVehiclesMenu, setShowVehiclesMenu] = useState(false);
  const [showShopMenu, setShowShopMenu] = useState(false);
  const [showElectrifiedMenu, setShowElectrifiedMenu] = useState(false);
  const [showOwnersMenu, setShowOwnersMenu] = useState(false);
  const [showDealersMenu, setShowDealersMenu] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const navRef = useRef<HTMLElement | null>(null);
  const menuRef = useRef<HTMLDivElement | null>(null);
  const shopMenuRef = useRef<HTMLDivElement | null>(null);
  const electrifiedMenuRef = useRef<HTMLDivElement | null>(null);
  const ownersMenuRef = useRef<HTMLDivElement | null>(null);
  const dealersMenuRef = useRef<HTMLDivElement | null>(null);

  const featured_vehicles = [
    {
      image: "/img/menu/vehicles/features_vehicles/rogue.webp",
      nom: "Rogue",
      price: "Starting at $29,490",
      url: "https://www.nissanusa.com/shopping-tools/build-price?models=rogue&modelYear=current-year"
    },
    {
      image: "/img/menu/vehicles/features_vehicles/pathfinders.png",
      nom: "Pathfinders",
      price: "Starting at $39,900",
      url: "https://www.nissanusa.com/shopping-tools/build-price?models=pathfinder&modelYear=current-year"
    },
    {
      image: "/img/menu/vehicles/features_vehicles/frontier.png",
      nom: "Frontier",
      price: "Starting at $29,490",
      url: "https://www.nissanusa.com/shopping-tools/build-price?models=frontier&modelYear=current-year"
    },
    {
      image: "/img/menu/vehicles/features_vehicles/sentra.png",
      nom: "Sentra",
      price: "Starting at $29,490*",
      url: "https://www.nissanusa.com/shopping-tools/build-price?models=sentra&modelYear=current-year"
    }
  ];

  const crossovers_suvs = [
    {
      image: "/img/menu/vehicles/crossover_suvs/kicks.webp",
      nom: "Kicks",
      price: "Starting at $22,730",
      url: "https://www.nissanusa.com/shopping-tools/build-price?models=kicks&modelYear=current-year"
    },
    {
      image: "/img/menu/vehicles/crossover_suvs/rogue.webp",
      nom: "Rogue",
      price: "Starting at $29,490",
      url: "https://www.nissanusa.com/shopping-tools/build-price?models=rogue&modelYear=current-year"
    },
    {
      image: "/img/menu/vehicles/crossover_suvs/nissan_leaf.avif",
      nom: "Nissan Leaf",
      price: "Starting at $29,990",
      url: "https://www.nissanusa.com/shopping-tools/build-price?models=nissan-leaf&modelYear=current-year"
    },
    {
      image: "/img/menu/vehicles/crossover_suvs/pathfinder.avif",
      nom: "Pathfinder",
      price: "Starting at $39,900",
      url: "https://www.nissanusa.com/shopping-tools/build-price?models=pathfinder&modelYear=current-year"
    },
    {
      image: "/img/menu/vehicles/crossover_suvs/murano.avif",
      nom: "Murano",
      price: "Starting at $41,670",
      url: "https://www.nissanusa.com/shopping-tools/build-price?models=murano&modelYear=current-year"
    },
    {
      image: "/img/menu/vehicles/crossover_suvs/rogue_plug-in-hybrid.webp",
      nom: "Rogue Plug-In Hybrid",
      price: "Starting at $45,990",
      url: "https://www.nissanusa.com/shopping-tools/build-price?models=rogue-plug-in-hybrid&modelYear=current-year"
    },
    {
      image: "/img/menu/vehicles/crossover_suvs/armada.avif",
      nom: "Armada",
      price: "Starting at $58,840",
      url: "https://www.nissanusa.com/shopping-tools/build-price?models=armada&modelYear=current-year"
    }
  ];

  const trucks = [
    {
      image: "/img/menu/vehicles/trucks/frontier.avif",
      nom: "Frontier",
      price: "Starting at $32,150",
      url: "https://www.nissanusa.com/shopping-tools/build-price?models=frontier&modelYear=current-year"
    }
  ];

  const cars = [
    {
      image: "/img/menu/vehicles/cars/versa.avif",
      nom: "Versa",
      price: "Starting at $19,990",
      url: "https://www.nissanusa.com/shopping-tools/build-price?models=versa&modelYear=current-year"
    },
    {
      image: "/img/menu/vehicles/cars/sentra.avif",
      nom: "Sentra",
      price: "Starting at $29,490*",
      url: "https://www.nissanusa.com/shopping-tools/build-price?models=sentra&modelYear=current-year"
    },
    {
      image: "/img/menu/vehicles/cars/altima.avif",
      nom: "Altima",
      price: "Starting at $29,990",
      url: "https://www.nissanusa.com/shopping-tools/build-price?models=altima&modelYear=current-year"
    }
  ];

  const sports_cars = [
    {
      image: "/img/menu/vehicles/sports_cars/nissan_z.avif",
      nom: "Nissan Z",
      price: "Starting at $42,970",
      url: "https://www.nissanusa.com/shopping-tools/build-price?models=nissan-z&modelYear=current-year"
    }
  ];

  const future_vehicles = [
    {
      image: "/img/menu/vehicles/future_vehicles/2027_nissan_rogue_hybrid.webp",
      nom: "2027 Nissan Rogue Hybrid",
      comming: "Coming late 2026 [*]",
      url: "https://www.nissanusa.com/vehicles/future-concept/2027-rogue-hybrid.html"
    },
    {
      image: "/img/menu/vehicles/future_vehicles/2027_nissan_z.webp",
      nom: "2027 Nissan Z",
      comming: "Coming Summer 2026 [*]",
      url: "https://www.nissanusa.com/vehicles/future-concept/2027-new-nissan-z.html"
    },
    {
      image: "/img/menu/vehicles/future_vehicles/future_vehicles.webp",
      nom: "Future Vehicles",
      comming: "Coming Summer 2026 [*]",
      url: "https://www.nissanusa.com/vehicles/future-concept.html"
    }
  ];

  const sections = [
    { label: "Featured Vehicles", items: featured_vehicles },
    { label: "Crossovers & SUVs", items: crossovers_suvs },
    { label: "Trucks", items: trucks },
    { label: "Cars", items: cars },
    {
      label: "Electrified",
      items: crossovers_suvs.filter((_, index) => index === 2 || index === 5)
    },
    { label: "Sports cars", items: sports_cars },
    { label: "Futur vehicles", items: future_vehicles },
    { label: "All vehicles", items: [] },
    { label: "Going Electric", items: [] },
    { label: "Certified Pre-Owned", items: [] },
    { label: "Business & Fleet", items: [] }
  ];

  const [activeSection, setActiveSection] = useState("Featured Vehicles");

  const activeSectionData =
    sections.find((section) => section.label === activeSection) || sections[0];

  const shop = [
    {
      titre: "Shopping Tools",
      img: "/img/menu/shop/rogue-global-nav-shop.jpg",
      description: null,
      link: [
        {
          label: "Shop New Inventory",
          url: "https://www.nissanusa.com/shopping-tools/search-inventory"
        },
        {
          label: "Shop Pre-Owned",
          url: "https://www.nissanusa.com/shopping-tools/search-inventory/certified-pre-owned"
        },
        {
          label: "Build & Price",
          url: "https://www.nissanusa.com/shopping-tools/build-price"
        },
        {
          label: "Parts & Accessories",
          url: "https://parts.nissanusa.com/"
        }
      ]
    },
    {
      titre: "Offers & Financing with NMAC",
      img: "/img/menu/shop/nissan-pathfinder-off-road.jpg",
      description: null,
      link: [
        {
          label: "View offers",
          url: "https://www.nissanusa.com/shopping-tools/deals-incentives-offers.html"
        },
        {
          label: "Financing option",
          url: "https://www.nissanusa.com/finance.html"
        },
        {
          label: "Estimate payments",
          url: "https://www.nissanusa.com/shopping-tools/lease-finance-payment-calculator"
        },
        {
          label: "Estimate Trade-In",
          url: "https://www.intelliprice.com/intellipricedealer/start.htm?dealerid=970001"
        },
        {
          label: "Get credit Score",
          url: "https://www.intelliprice.com/intellipricedealer/start.htm?dealerid=970200"
        }
      ]
    },
    {
      titre: "Building Our Best For You",
      img: "/img/menu/shop/nissan-frontier-pro4x-offroad-trail-d-t.jpg",
      description:
        "Driven by an unwavering commitment to quality, reliability, durability, and enhanced safety. For every mile, every journey.",
      link: [
        {
          label: "About Nissan",
          url: "https://www.nissanusa.com/about.html"
        },
        {
          label: "Rogue Rock Creek: Explore true toughness",
          url: "https://www.nissanusa.com/vehicles/crossovers-suvs/rogue/built-to-endure.html"
        },
        {
          label: "Frontier PRO-4X: Explore true strength",
          url: "https://www.nissanusa.com/vehicles/trucks/frontier/unleash-the-power.html"
        }
      ]
    }
  ];

  const electrified = [
    {
      nom: "Electric Vehicles",
      img: "/img/menu/electrified/2026-nissan-leaf-redesigned-front-fascia.jpg",
      description:
        "Discover the striking new crossover design, advanced connected features, and access to a fast-growing charging network you can trust in the All-New 2026 Nissan LEAF®.",
      label: "Explore LEAF",
      url: "https://www.nissanusa.com/vehicles/electric-cars/leaf.html"
    },
    {
      nom: "Going Electric",
      img: "/img/menu/electrified/2026-nissan-leaf-electric-suv-white-driving-tunnel.webp",
      description:
        "Discover the striking new crossover design, advanced connected features, and access to a fast-growing charging network you can trust in the All-New 2026 Nissan LEAF®.",
      label: "Explore LEAF",
      url: "https://www.nissanusa.com/vehicles/going-electric-ev.html"
    }
  ];

  const owners = [
    {
      img: "/img/menu/owners/man-driving-nissan-black-blue-interior.webp",
      titre: "MyNISSAN Owner Portal",
      description:
        "Enhance your ownership experience with MyNISSAN - your online home for information on your Nissan model.",
      link: [
        {
          label: "Login/Register",
          url: "https://www.nissanusa.com/mynissan.html"
        },
        {
          label: "Experience MyNISSAN",
          url: "https://www.nissanusa.com/owners/owner-experience.html"
        },
        {
          label: "Owners Resources",
          url: "https://www.nissanusa.com/owners.html"
        },
        {
          label: "NissanConnect Services",
          url: "https://www.nissanusa.com/owners.html"
        }
      ]
    },
    {
      img: "/img/menu/owners/nissan-service-staff-helping-client.webp",
      titre: null,
      description: null,
      link: [
        {
          label: "Recalls & Service Info",
          url: "https://www.nissanusa.com/owners/recalls-vin.html"
        },
        {
          label: "Scedules Service",
          url: "https://www.nissanusa.com/parts-service"
        }
      ]
    }
  ];

  useEffect(() => {
    if (!showVehiclesMenu) return;

    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Node;

      if (
        menuRef.current &&
        navRef.current &&
        !menuRef.current.contains(target) &&
        !navRef.current.contains(target)
      ) {
        setShowVehiclesMenu(false);
        setShowMenu(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [showVehiclesMenu]);

  useEffect(() => {
    if (!showShopMenu) return;

    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Node;

      if (
        shopMenuRef.current &&
        navRef.current &&
        !shopMenuRef.current.contains(target) &&
        !navRef.current.contains(target)
      ) {
        setShowShopMenu(false);
        setShowMenu(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [showShopMenu]);

  useEffect(() => {
    if (!showElectrifiedMenu) return;

    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Node;

      if (
        electrifiedMenuRef.current &&
        navRef.current &&
        !electrifiedMenuRef.current.contains(target) &&
        !navRef.current.contains(target)
      ) {
        setShowElectrifiedMenu(false);
        setShowMenu(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [showElectrifiedMenu]);

  useEffect(() => {
    if (!showOwnersMenu) return;

    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Node;

      if (
        ownersMenuRef.current &&
        navRef.current &&
        !ownersMenuRef.current.contains(target) &&
        !navRef.current.contains(target)
      ) {
        setShowOwnersMenu(false);
        setShowMenu(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [showOwnersMenu]);

  useEffect(() => {
    if (!showDealersMenu) return;

    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Node;

      if (
        dealersMenuRef.current &&
        navRef.current &&
        !dealersMenuRef.current.contains(target) &&
        !navRef.current.contains(target)
      ) {
        setShowDealersMenu(false);
        setShowMenu(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [showDealersMenu]);

  const renderSectionItem = (
    vehicle: {
      image: string;
      nom: string;
      price?: string;
      comming?: string;
      url: string;
    },
    index: number
  ) => (
    <li
      key={`${vehicle.nom}-${index}`}
      className="border-b border-slate-200 last:border-b-0 py-3"
    >
      <div className="flex gap-3 items-center">
        <img
          src={vehicle.image}
          alt={vehicle.nom}
          className="w-20 h-14 rounded object-cover"
        />
        <div className="flex-1">
          <div className="font-semibold text-sm">{vehicle.nom}</div>
          <div className="text-xs text-slate-600">
            {vehicle.price || vehicle.comming}
          </div>
        </div>
        <div>
          <a
            href={vehicle.url}
            className="text-blue-600 hover:underline text-sm"
          >
            {vehicle.comming ? "Learn more" : "Build"}
          </a>
        </div>
      </div>
    </li>
  );

  return (
    <>
      <nav
        ref={navRef}
        className="fixed top-0 left-0 w-full bg-white md:bg-transparent  text-white z-50"
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          {/* Logo */}
         
          <img className="h-13 hidden md:block" src="/img/menu/nissan-logo-white.svg" alt="nissan-logo-white" />
          <span className="block md:hidden text-black font-bold">
            Nissan
          </span>
          {/* Desktop Menu */}
          <ul className="hidden md:flex md:items-center gap-8 text-[12px]">
            <li>
              <Link
                href="#"
                onClick={(event) => {
                  event.preventDefault();
                  setShowVehiclesMenu((current) => !current);
                  setShowShopMenu(false);
                  setShowElectrifiedMenu(false);
                  setShowOwnersMenu(false);
                  setShowDealersMenu(false);
                  setShowMenu(true);
                }}
                className={`transition ${showVehiclesMenu ? "font-bold" : "font-normal"} ${showMenu ? "text-black font-bold" : "text-white"}`}
              >
                Vehicles
              </Link>
            </li>

            <li>
              <Link
                href="#"
                onClick={(event) => {
                  event.preventDefault();
                  setShowShopMenu((current) => !current);
                  setShowVehiclesMenu(false);
                  setShowElectrifiedMenu(false);
                  setShowDealersMenu(false);
                  setShowOwnersMenu(false);
                  setShowMenu(true);
                }}
                className={`transition ${showShopMenu ? "font-bold" : "font-normal"} ${showMenu ? "text-black" : "text-white"}`}
              >
                Shop
              </Link>
            </li>

            <li>
              <Link
                href="#"
                onClick={(event) => {
                  event.preventDefault();
                  setShowElectrifiedMenu((current) => !current);
                  setShowVehiclesMenu(false);
                  setShowShopMenu(false);
                  setShowDealersMenu(false);
                  setShowOwnersMenu(false);
                  setShowMenu(true);
                }}
                className={`transition ${showElectrifiedMenu ? "font-bold" : "font-normal"} ${showMenu ? "text-black" : "text-white"}`}
              >
                Electrified
              </Link>
            </li>

            <li>
              <Link
                href="#"
                onClick={(event) => {
                  event.preventDefault();
                  setShowOwnersMenu((current) => !current);
                  setShowVehiclesMenu(false);
                  setShowShopMenu(false);
                  setShowDealersMenu(false);
                  setShowElectrifiedMenu(false);
                  setShowMenu(true);
                }}
                className={`transition ${showOwnersMenu ? "font-bold" : "font-normal"} ${showMenu ? "text-black" : "text-white"}`}
              >
                Owners
              </Link>
            </li>

            <li>
              <Link
                href="#"
                onClick={(event) => {
                  event.preventDefault();
                  setShowDealersMenu((current) => !current);
                  setShowVehiclesMenu(false);
                  setShowShopMenu(false);
                  setShowOwnersMenu(false);
                  setShowElectrifiedMenu(false);
                  setShowMenu(true);
                }}
                className={`transition ${showDealersMenu ? "font-bold" : "font-normal"} ${showMenu ? "text-black" : "text-white"}`}
              >
                Dealers
              </Link>
            </li>

            <li
              className={`border rounded-full px-6 py-3 transition ${showMenu ? "bg-red-900 text-white" : "bg-transparent text-white hover:bg-transparent"}`}
            >
              <Link
                href="https://www.nissanusa.com/shopping-tools/build-price"
                className="transition"
              >
                Build & Price
              </Link>
            </li>
          </ul>

          {/* Mobile Button */}
          <button className="md:hidden relative z-30 text-black" onClick={() => setOpen(!open)}>
            {open ? <X size={30} /> : <Menu size={30} />}
          </button>
       

        {/* Mobile Menu */}
         </div>
        {open && (
          <div
            className="z-20 md:hidden overflow-auto bg-white transition-all duration-500 absolute top-10 left-0 w-full h-screen"
          >
            <ul className="flex flex-col mt-10 gap-6 px-6  text-[12px] text-black ">
              <li>
                <Link
                  href="/"
                  onClick={() => setOpen(false)}
                  className="flex items-center justify-between"
                >
                  <span>Vehicles</span>
                  <span aria-hidden="true">&gt;</span>
                </Link>
              </li>
            <hr className="border-gray-300" />
            <li>
              <Link
                href="/about"
                onClick={() => setOpen(false)}
                className="flex items-center justify-between"
              >
                <span>Shop</span>
                <span aria-hidden="true">&gt;</span>
              </Link>
            </li>
            <hr className="border-gray-300" />
            <li>
              <Link
                href="/services"
                onClick={() => setOpen(false)}
                className="flex items-center justify-between"
              >
                <span>Electrified</span>
                <span aria-hidden="true">&gt;</span>
              </Link>
            </li>
            <hr className="border-gray-300"/>
            <li>
              <Link
                href="/contact"
                onClick={() => setOpen(false)}
                className="flex items-center justify-between"
              >
                <span>Owners</span>
                <span aria-hidden="true">&gt;</span>
              </Link>
            </li>
            <hr className="border-gray-300"/>
            <li>
              <Link
                href="/contact"
                onClick={() => setOpen(false)}
                className="flex items-center justify-between"
              >
                <span>Dealers</span>
                <span aria-hidden="true">&gt;</span>
              </Link>
            </li>
            <hr className="border-gray-300"/>
            <li 
            className={`border rounded-full w-50 px-6 py-3 transition bg-red-900 text-white`}
            >
              <Link
                href="https://www.nissanusa.com/shopping-tools/build-price"
                className="flex items-center justify-between transition"
              >
                <span>Build & Price</span>
                <span aria-hidden="true">&gt;</span>
              </Link>
            </li>
          </ul>
        </div>
        )}
      </nav>
      {showVehiclesMenu && (
        <div
          ref={menuRef}
          id="menu-vehicles"
          className={`bg-white text-black py-5 absolute right-0 h-full w-[600px]  gap-3 z-21 shadow-2xl overflow-hidden border border-slate-200 transition-transform duration-500 ease-out ${
            showVehiclesMenu
              ? "translate-x-0 pointer-events-auto"
              : "translate-x-full pointer-events-none"
          }`}
          onClick={() => setShowShopMenu(false)}
        >
          <div className="flex gap-3 h-full">
            <div className="w-1/3 overflow-auto border-r mt-7 border-slate-200 bg-slate-50 p-4">
              <ul className="space-y-2">
                {sections.map((section) => (
                  <li key={section.label}>
                    <button
                      type="button"
                      onClick={() => setActiveSection(section.label)}
                      className={`w-full text-left rounded-xl px-3 py-3 text-sm font-medium transition ${
                        section.label === activeSection
                          ? "bg-white text-black shadow"
                          : "text-slate-600 hover:bg-slate-100"
                      }`}
                    >
                      {section.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            <div className="w-2/3 p-4 mt-7 overflow-auto">
              {activeSectionData.items.length > 0 ? (
                <ul className="space-y-3">
                  {activeSectionData.items.map(renderSectionItem)}
                </ul>
              ) : (
                <div className="rounded-2xl border border-dashed border-slate-300 p-8 text-center text-sm text-slate-500">
                  Cliquez sur un menu à gauche pour afficher son contenu.
                </div>
              )}
            </div>
          </div>
          <Recherche />
        </div>
      )}
      {showShopMenu && (
        <div
          ref={shopMenuRef}
          id="menu-shop"
          className={`bg-white text-black py-5 absolute right-0 h-full w-[600px]  gap-3 z-21 shadow-2xl overflow-hidden border border-slate-200 transition-transform duration-500 ease-out ${
            showShopMenu
              ? "translate-x-0 pointer-events-auto"
              : "translate-x-full pointer-events-none"
          }`}
        >
          <div className="w-full p-4 mt-7 h-full overflow-auto">
            {shop.map((shop_section, item) => (
              <div key={item} className="my-6">
                <h1 className="my-6">{shop_section.titre}</h1>
                <div className="flex item-center ">
                  <div className="w-1/3 mr-4">
                    <img
                      src={shop_section.img}
                      alt={shop_section.titre}
                      className="w-100 h-30 object-cover "
                    />
                  </div>
                  <div className="w-2/3">
                    <p className="mx-4">{shop_section.description ?? ""}</p>
                    {shop_section.link.map((shop_section_link, item) => (
                      <a
                        key={item}
                        href={shop_section_link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-4 text-[12px] py-2 px-4 text-black-500 hover:text-black-700"
                      >
                        <span>{shop_section_link.label}</span>
                        <span className="text-red-700 font-bold">&gt;</span>
                      </a>
                    ))}
                  </div>
                </div>
                <hr className="border-gray-400" />
              </div>
            ))}
          </div>
          <Recherche />
        </div>
      )}
      {showElectrifiedMenu && (
        <div
          ref={electrifiedMenuRef}
          id="menu-electrified"
          className={`bg-white text-black py-5 absolute right-0 h-full w-[600px] gap-3 z-21 shadow-2xl overflow-hidden border border-slate-200 transition-transform duration-500 ease-out ${
            showElectrifiedMenu
              ? "translate-x-0 pointer-events-auto"
              : "translate-x-full pointer-events-none"
          }`}
        >
          <div className="w-full p-4 mt-7 h-full overflow-auto">
            {electrified.map((electrified_item, index) => (
              <div className="w-full  p-4 mt-7 overflow-auto" key={index}>
                <h1>{electrified_item.nom}</h1>
                <div className="flex items-center gap-4">
                  <div className="w-1/3 mr-4">
                    <img
                      src={electrified_item.img}
                      alt={electrified_item.nom}
                    />
                  </div>
                  <div className="w-2/3 flex flex-col ">
                    <p className="text-[12px] ">
                      {electrified_item.description}
                    </p>
                    <a
                      href={electrified_item.url}
                      className="flex items-start gap-4 text-[12px] py-2 text-black-500 hover:text-black-700"
                    >
                      <span className="font-bold">
                        {electrified_item.label}
                      </span>
                      <span className="text-red-700 font-bold">&gt;</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <Recherche />
        </div>
      )}
      {showOwnersMenu && (
        <div
          ref={ownersMenuRef}
          id="menu-owners"
          className={`bg-white text-black py-5 absolute right-0 h-full w-[600px]  gap-3 z-21 shadow-2xl overflow-hidden border border-slate-200 transition-transform duration-500 ease-out ${
            showOwnersMenu
              ? "translate-x-0 pointer-events-auto"
              : "translate-x-full pointer-events-none"
          }`}
        >
          <div className="w-full p-4 mt-7 h-full overflow-auto">
            {owners.map((owner_item, index) => (
              <div key={index} className="w-full flex  p-4 mt-7 overflow-auto">
                <div className="w-1/3 mr-4">
                  <img src={owner_item.img} alt={owner_item.titre ?? "img"} />
                </div>
                <div className="w-2/3">
                  <h1>{owner_item.titre}</h1>
                  <p className="text-[12px]">{owner_item.description}</p>
                  {owner_item.link.map((owner_item_link, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-4 text-[12px] py-2 text-black-500 hover:text-black-700"
                    >
                      <a
                        href={owner_item_link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {owner_item_link.label}
                      </a>
                      <span className="text-red-700 font-bold">&gt;</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <Recherche />
        </div>
      )}
      {showDealersMenu && (
        <div
          ref={dealersMenuRef}
          id="menu-dealers"
          className={`bg-white text-black py-5 absolute right-0 h-full w-[600px] gap-3 z-21 shadow-2xl overflow-hidden border border-slate-200 transition-transform duration-500 ease-out ${
            showDealersMenu
              ? "translate-x-0 pointer-events-auto"
              : "translate-x-full pointer-events-none"
          }`}
        >
          <div className="w-full p-4 pb-19 mt-7 overflow-auto h-full gap-4">
            <div className="mt-7">
              <img
                src="/img/menu/dealers/infiniti-dealer-inventory-map.jpg"
                alt="finiti-dealer-inventory-map"
              />
            </div>
            <div className="flex gap-4 items-center  justify-between py-9">
              <div className="relative">
                <input
                  type="text"
                  className="bg-gray-200 rounded-3xl px-5 py-2 pr-12"
                  placeholder="Enter ZIP Code"
                />

                <FiSearch
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500"
                  size={18}
                />
              </div>
              <div className="flex items-center gap-2">
                <FiMapPin size={18} />
                <p className="text-[12px]">Locate Me</p>
              </div>
            </div>
            <div className="text-[14px] space-y-2 ">
              <p>Please enter your location</p>
              <p>
                To find the best offers and nearby inventory, we need to find
                the location
              </p>
            </div>
          </div>
          <Recherche />
        </div>
      )}
    </>
  );
}
