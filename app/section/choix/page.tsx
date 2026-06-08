"use client";

import { MdSettings } from "react-icons/md";
import { FaSearch } from "react-icons/fa";
import { FaTicketAlt } from "react-icons/fa";
import { FaCalculator } from "react-icons/fa";

export default function Choix() {
  return (
    <div className="h-50 flex items-center bg-gray-200 justify-between text-black p-9">
      <div className="flex flex-col items-center gap-4">
        <MdSettings className="text-4xl  " />
        <span>Build & Price</span>
      </div>
      <div className="flex flex-col items-center gap-4">
        <FaSearch className="text-4xl  " />
        <span>Search Inventory</span>
      </div>
      <div className="flex flex-col items-center gap-4">
        <FaTicketAlt className="text-4xl  " />
        <span>View Offers</span>
      </div>
      <div className="flex flex-col items-center gap-4">
        <FaCalculator className="text-4xl  " />
        <span>Estimate Payments</span>
      </div>

    </div>
  );
}