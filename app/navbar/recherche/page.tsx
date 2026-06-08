"use client";

import { FiSearch } from "react-icons/fi";

export default function Recherche(){
    return(
        <div className="fixed bottom-0 w-full bg-gray-300 px-7 py-2">
            <div className="relative">
                <input
                type="text"
                placeholder="Search Nissan USA"
                className="bg-white px-10 text-[14px] text-gray-900 placeholder-gray-500 py-2 w-full rounded-3xl"
                />

                <FiSearch
                size={18}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
                />
            </div>
            </div>
    )
}