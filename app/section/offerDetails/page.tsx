"use client";

import { useState } from "react";
import { FaArrowRight, FaTimes } from "react-icons/fa";

export default function OfferDetails({ nom }: { nom: string|null }) {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<"offerDetails" | "textMe">(
    "offerDetails"
  );

  return (
    <div className="bg-black-500">
      <div className="flex items-center text-[12px] gap-4 p-4">
        <p>
          0.0% APR for 60 mos. for well-qualified NMAC buyers. On select 2026
          trims.
        </p>
        <button
          id="offer-details-button"
          type="button"
          onClick={() => setIsOpen(true)}
          className="group shrink-0 flex items-center gap-2 text-white-500"
        >
          <span>Offer Details</span>
          <span className="w-9 text-white text-md group-hover:text-red-500 group-hover:translate-x-[7px] transition-transform">
            ❯
          </span>
        </button>
      </div>

      {isOpen ? (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4">
          <div className="w-full max-w-2xl overflow-hidden rounded-md border border-white/10 bg-gray-200 shadow-2xl">
            <div className="flex items-center justify-between border-b border-white/10 px-6 py-4">
              <div>
                <h2 className="text-xl font-semibold text-black">
                  {nom} Offers
                </h2>
              </div>
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="rounded-full bg-white/5 px-3 py-2 text-sm text-gray-900 transition hover:bg-white/10"
              >
                <FaTimes />
              </button>
            </div>

            <div className="border-b border-white/10  px-6 py-3">
              <div className="flex w-full">
                <button
                  type="button"
                  onClick={() => setActiveTab("offerDetails")}
                  className={` px-4 py-2 text-sm text-black w-full font-medium transition ${
                    activeTab === "offerDetails"
                      ? " border-b border-b-red-500"
                      : "border-b border-b-gray-500"
                  }`}
                >
                  Offers details
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTab("textMe")}
                  className={`px-4 py-2 text-sm text-black w-full font-medium transition ${
                    activeTab === "textMe"
                      ? " border-b border-b-red-500"
                      : "border-b border-b-gray-500"
                  }`}
                >
                  Text me this offer
                </button>
              </div>
            </div>

            <div className="px-6 py-6">
              <div className="bg-white rounded-xl p-5  h-50 w-auto overflow-auto scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-black-200">
                {activeTab === "offerDetails" ? (
                  <div className="space-y-4">
                    <div className="flex items-center text-[12px] text-black justify-between">
                      <span>2026 {nom}</span>
                      <span className="font-bold">APR</span>
                    </div>
                    <div className="flex items-center text-black justify-between w-50 ">
                      <div className="space-y-1 flex flex-col items-center">
                        <span className="text-xl">0.0%</span>
                        <span className="text-[12px]">APR Financing</span>
                      </div>
                      <div className="w-px h-10 bg-gray-700 mx-3" />
                      <div className="space-y-1 flex flex-col items-center">
                        <span className="text-xl">60</span>
                        <span className="text-[12px]">Month</span>
                      </div>
                    </div>
                    <div className="text-gray-500 flex flex-col text-[11px] mb-4 space-y-7">
                      <span className="">
                        For Well-Qualified Buyers who finance with NMAC
                      </span>
                      <span className="">
                        0.0% APR / 60 months on a new 2026 Pathfinder (Trims:
                        all) for well qualified buyers
                      </span>
                    </div>
                    <div className="bg-gray-200 rounded-xl p-5 ">
                      <span className="text-black w-full text-[11px]">
                        Available on 2026 Pathfinder (Trims: all) from new
                        Dealer stock. 0.0% APR financing for 60 months (e.g.
                        $16.67 per month per $1,000 financed at 0.0% for 60
                        months). Actual down payment may vary. Subject to
                        residency restrictions. Subject to NMAC credit approval.
                        Not all buyers qualify. Dealer contribution may affect
                        actual price set by Dealer. Contact Dealer for details.
                        APR Offer Ends 06/30/2026.
                      </span>
                    </div>
                    <div className="flex space-x-4">
                      <button
                       onClick={() => setActiveTab("textMe")}
                       className="bg-red-700 flex space-x-4 items-center text-white py-2 px-5 border border-red-700 rounded-full hover:text-red-700 hover:bg-white"><span>Text Me This Offer</span> <FaArrowRight className="text-md " /></button>
                      <button className="bg-white flex items-center space-x-4 text-black py-2 px-5 border border-black rounded-full hover:text-white hover:bg-black"><span>View Offers</span> <FaArrowRight className="text-md " /></button>
                    </div>
                  </div>
                ) : (
                  <div className="space-y-4">
                    <div className="flex text-[12px] items-center text-black justify-between">
                      <span>2026 {nom}</span>
                      <span className="font-bold">APR</span>
                    </div>
                    <div className="flex items-center text-black justify-between w-50 ">
                      <div className="space-y-1 flex flex-col items-center">
                        <span className="text-xl">0.0%</span>
                        <span className="text-[12px]">APR Financing</span>
                      </div>
                      <div className="w-px h-10 bg-gray-700 mx-3" />
                      <div className="space-y-1 flex flex-col items-center">
                        <span className="text-xl">60</span>
                        <span className="text-[12px]">Month</span>
                      </div>
                    </div>
                    <div className="text-gray-500 flex flex-col text-[11px] mb-4 space-y-7">
                      <span className="">
                        For Well-Qualified Buyers who finance with NMAC
                      </span>
                      <span className="">
                        0.0% APR / 60 months on a new 2026 Pathfinder (Trims:
                        all) for well qualified buyers
                      </span>
                    </div>
                    <div className="relative w-50">
                      <input
                        type="text"
                        name="input_phone"
                        className="border border-black text-black w-full pt-2 pb-2 px-2"
                      />

                      <label
                        htmlFor="input_phone"
                        className="absolute left-2 -top-2 text-black bg-white px-1 text-[11px]"
                      >
                        Phone <span className="text-red-500">*</span>
                      </label>
                    </div>
                    <div className="text-gray-500 rounded-xl  ">
                      <span className=" w-full text-[11px]">
                        By entering your phone number and clicking submit, you
                        authorize Nissan to contact you at the phone number and
                        subscriber name you provide, including by the use of
                        software or automated dialing technology, with
                        advertising and promotional calls (including
                        pre-recorded ones) or SMS/text messages related to your
                        requested offer. Your consent is not a condition to
                        purchase or receive any products or services. Message
                        and data rates may apply. To stop receiving text
                        messages, you may opt-out by texting STOP at any time.
                      </span>
                    </div>
                    <div className="flex space-x-4">
                      <button
                       onClick={() => setActiveTab("textMe")}
                       className="bg-red-700 flex items-center space-x-4 text-white py-2 px-5 border border-red-700 rounded-full hover:text-red-700 hover:bg-white"><span>Submit</span> <FaArrowRight className="text-md " /></button>
                      
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}
