"use client";

import { useState } from "react";
import { FaChevronDown, FaChevronRight, FaComment, FaFacebookF, FaInstagram, FaPinterestP, FaTiktok, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function PageFooter() {
  const [openMenu, setOpenMenu] = useState<number | null>(null);

  const toggleMenu = (index: number) => {
    setOpenMenu(openMenu === index ? null : index);
  };

  const links = [
    {
      nom: "ABOUT",
      value: [
        {
          label: "About Nissan",
          url: "https://www.nissanusa.com/about.html"
        },
        {
          label: "Culture",
          url: "https://www.nissanusa.com/about/culture.html"
        },
        {
          label: "News & Events",
          url: "https://usa.nissannews.com/en-US/"
        },
        {
          label: "Business & Fleet",
          url: "https://www.nissanusa.com/business-fleet.html"
        },
        {
          label: "Nissan Rental Car Program",
          url: "https://www.nissanusa.com/rental-cars.html"
        },
        {
          label: "Accessibility",
          url: "https://www.nissanusa.com/accessibility.html"
        },
        {
          label: "Nissan Stories",
          url: "https://www.nissanusa.com/experience-nissan/news-and-events.html"
        },
        {
          label: "Cookie Settings",
          url: "https://www.nissanusa.com/rental-cars.html"
        }
      ]
    },
    {
      nom: "SHOP",
      value: [
        {
          label: "All Vehicles",
          url: "https://www.nissanusa.com/vehicles/new.html"
        },
        {
          label: "Search Inventory",
          url: "https://www.nissanusa.com/shopping-tools/search-inventory"
        },
        {
          label: "View a Brochure",
          url: "https://www.nissanusa.com/shopping-tools/request-brochure.html"
        },
        {
          label: "Compare Competitors",
          url: "https://compare.nissanusa.com/vehicle/select/primary/compare"
        },
        {
          label: "Build & Price",
          url: "https://www.nissanusa.com/shopping-tools/build-price"
        },
        {
          label: "Locate a Dealer",
          url: "https://www.nissanusa.com/dealer-locator.html"
        },
        {
          label: "Parts & Accessories",
          url: "https://parts.nissanusa.com/"
        },
        {
          label: "Certified Pre-Owned",
          url: "https://www.nissanusa.com/shopping-tools/certified-pre-owned.html"
        }
      ]
    },
    {
      nom: "OWNERS",
      value: [
        {
          label: "MyNISSAN Owner Portal",
          url: "https://www.nissanusa.com/owners.html"
        },
        {
          label: "Schedule Service",
          url: "https://www.nissanusa.com/parts-service"
        },
        {
          label: "Manuals & Guides",
          url: "https://www.nissanusa.com/owners/manuals-guides.html"
        },
        {
          label: "Maintenance Schedules",
          url: "https://www.nissanusa.com/maintenance-schedules/"
        },
        {
          label: "NissanConnect",
          url: "https://www.nissanusa.com/connect.html"
        },
        {
          label: "Extended Protection Plans",
          url: "https://nissan-securityplus.com/"
        },
        {
          label: "HOW TO DISCONNECT REMOTE VEHICLES ACCESS",
          url: "https://nissanna.my.site.com/forms/s/legalsurvivorlaw?language=en_US"
        },
        {
          label: "California Consumer Warranty Notice",
          url: "https://www.nissanusa.com/california-lemon-law.html"
        }
      ]
    },
    {
      nom: "OFFERS & FINANCING",
      value: [
        {
          label: "Deals & Offers",
          url: "https://www.nissanusa.com/shopping-tools/deals-incentives-offers.html"
        },
        {
          label: "Financing Options",
          url: "https://www.nissanfinance.com/s/login/?language=en_US"
        },
        {
          label: "Estimate Payments",
          url: "https://www.nissanusa.com/shopping-tools/lease-finance-payment-calculator"
        },
        {
          label: "Get Pre-Approved",
          url: "https://www.nissanusa.com/shopping-tools/pre-approval.html"
        },
        {
          label: "Estimate Credit Scores",
          url: "https://www.intelliprice.com/intellipricedealer/start.htm?dealerid=970200"
        },
        {
          label: "Get Internet Quote",
          url: "https://www.nissanusa.com/shopping-tools/request-internet-quote.html"
        }
      ]
    }
  ];

  const link_down=[
    {
        label:"SITE MAP",
        url:"https://www.nissanusa.com/sitemap.html",
    },
    {
        label:"CONTACT US",
        url:"https://www.nissanusa.com/contact-us.html",
    },
    {
        label:"DO NOT SELL OR SHARE MY PERSONAL INFORMATION",
        url:"https://www.nissanusa.com/data-privacy.html",
    },
    {
        label:"TERMS OF USE",
        url:"https://www.nissanusa.com/legal-terms.html",
    },
    {
        label:"PRIVACY NOTICE",
        url:"https://www.nissanusa.com/privacy.html",
    },
  
  ]
  return (
    <div className="space-y-10 p-5">
      <div className="flex flex-col space-y-4 md:flex-row md:justify-between ">
        <div className="flex items-center">
          <span>Nissan</span>
          <FaChevronRight className="text-md text-gray-700" aria-hidden="true" />
          <span>Home</span>
        </div>

        <div className="flex justify-between md:justify-left space-x-4">
          <div className="flex space-x-2 items-center">
            <span>English</span>
            <FaChevronDown
              className="text-md text-white-700"
              aria-hidden="true"
            />
          </div>
          <div className="flex space-x-2 items-center">
            <span>Live Chat</span>
            <FaComment className="text-md text-white-700" aria-hidden="true" />
          </div>
        </div>
      </div>
      <div className="flex flex-col space-y-4 md:flex-row md:justify-between md:space-y-0">
        {links.map((item, index) => {
          return (
            <div key={item.nom} className="flex flex-col border-t border-gray-700 pt-4 md:border-none md:pt-0">
              <button
                type="button"
                id="menu"
                className="flex w-full items-center justify-between py-4 text-sm font-semibold text-left md:cursor-default"
                aria-expanded={openMenu === index}
                onClick={() => toggleMenu(index)}
              >
                <span>{item.nom}</span>
                <span className="md:hidden">
                  {openMenu === index ? (
                    <FaChevronDown className="h-4 w-4 text-gray-300" aria-hidden="true" />
                  ) : (
                    <FaChevronRight className="h-4 w-4 text-gray-300" aria-hidden="true" />
                  )}
                </span>
              </button>
              <div
                id="sous-menu"
                className={`flex flex-col gap-2 pl-4 md:pl-0 ${openMenu === index ? "flex" : "hidden"} md:flex`}
              >
                {item.value.map((lien) => {
                  return (
                    <a key={lien.label} className="py-2 text-[12px] text-gray-300 hover:text-white" href={lien.url}>
                      {lien.label}
                    </a>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
      <div>
        <div className="flex justify-between md:justify-start space-x-4 text-xl">
           <a href="https://www.tiktok.com/@nissanusa?lang=en"><FaTiktok /></a> 
            <a href="https://www.instagram.com/nissanusa/"><FaInstagram /></a>
            <a href="https://www.youtube.com/user/nissanusa/featured"><FaYoutube /></a>
            <a href="https://twitter.com/NissanUSA"><FaXTwitter /></a>
            <a href="https://www.facebook.com/nissanusa/"><FaFacebookF /></a>
            <a href="https://www.pinterest.com/nissanusa/"><FaPinterestP /></a>
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-between items-center space-y-4">
        <div className="flex flex-col md:flex-wrap  md:flex-row space-x-2 space-y-4">
            {link_down.map((item, index)=>{ return(
            <div className="flex  space-x-4 text-gray-300 text-[10px]">
                <a className=" tracking-[2px] whitespace-nowrap" href={item.url}>{item.label}</a>
                <div className="hidden md:block h-5 border-l border-gray-500 "></div>
            </div>
            )})}
            <div>
                <a className="px-4 py-2 border  whitespace-nowrap border-white rounded-full w-auto text-[12px]" href="">RECALL INFORMATION</a>
            </div>
            
        </div>
        <div className="py-10 md:py-0">
            <span className="text-gray-300 text-[14px] shrink-0">© Nissan USA 2026</span>
        </div>
      </div>
      
    </div>
  );
}
