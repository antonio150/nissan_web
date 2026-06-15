"use client";

import { MdSettings } from "react-icons/md";
import { FaSearch } from "react-icons/fa";
import { FaTicketAlt } from "react-icons/fa";
import { FaCalculator } from "react-icons/fa";

export default function Choix() {
  return (
    <div className="h-50 flex flex-col md:flex-row space-y-2 items-center h-auto bg-gray-200 justify-between text-black p-9">
      <div className="flex flex-col items-center gap-4 border-t-1 p-3 md:border-none  w-full">
        <MdSettings className="text-4xl  " />
        <span>Build & Price</span>
      </div>
      <div className="flex flex-col items-center border-t-1 md:border-none p-3 gap-4 w-full">
        <FaSearch className="text-4xl  " />
        <span>Search Inventory</span>
      </div>
      <div className="flex flex-col items-center border-t-1 p-3 md:border-none gap-4 w-full">
        <FaTicketAlt className="text-4xl  " />
        <span>View Offers</span>
      </div>
      <div className="flex flex-col items-center border-t-1 p-3 md:border-none gap-4 w-full">
        <FaCalculator className="text-4xl  " />
        <span>Estimate Payments</span>
      </div>

    </div>
  );
}