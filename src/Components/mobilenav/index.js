import React, { useEffect } from "react";
import NavLink from "../atoms/navlink";
import { useState } from "react";

export default function MobileNav() {
    const [showDropDown, setShowDropDown] = useState(false);

    const toggleDropDown = () => {
        setShowDropDown(!showDropDown);
    };

    useEffect(() => {
        console.log(showDropDown);
    }, [showDropDown]);
    return (
        <div className="order-last md:hidden">
            <button className="" onClick={toggleDropDown}>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className=" w-8 h-8 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4 6h16M4 12h16m-7 6h7"
                    />
                </svg>
            </button>
            {showDropDown ? (
                <div className="fixed right-11 flex flex-col transition-all opacity-100 duration-300 items-center bg-three rounded px-1.5 py-3 gap-2">
                    <NavLink>Home</NavLink>
                    <NavLink>Trending</NavLink>
                </div>
            ) : (
                <div className="fixed right-11 flex flex-col transition-all opacity-0 duration-300 items-center bg-three rounded px-0 py-0 gap-2">
                    <NavLink>Home</NavLink>
                    <NavLink>Trending</NavLink>
                </div>
            )}
        </div>
    );
}
