import React, { useEffect } from "react";
import NavLink from "../atoms/navlink";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function MobileNav() {
    const [showDropDown, setShowDropDown] = useState(false);

    let navigate = useNavigate();
    const home = () => {
        navigate("/");
        setShowDropDown(!showDropDown);
    };

    const trending = () => {
        navigate("/#trending");
        document.getElementById("trending").scrollIntoView();
        setShowDropDown(!showDropDown);
    };

    const toggleDropDown = () => {
        setShowDropDown(!showDropDown);
    };

    useEffect(() => {}, [showDropDown]);
    return (
        <div className="order-last md:hidden">
            <button className="" onClick={toggleDropDown}>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-8 h-8 text-white "
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
                <div className="fixed right-11 flex flex-col opacity-100 transition-all duration-300 items-center bg-three rounded px-1.5 py-3 gap-2 z-10">
                    <NavLink onClick={home}>Home</NavLink>
                    <NavLink onClick={trending}>Trending</NavLink>
                </div>
            ) : (
                <div className="fixed z-10 flex flex-col items-center gap-2 px-0 py-0 transition-all duration-300 rounded opacity-0 right-11 bg-three">
                    <NavLink>Home</NavLink>
                    <NavLink>Trending</NavLink>
                </div>
            )}
        </div>
    );
}
