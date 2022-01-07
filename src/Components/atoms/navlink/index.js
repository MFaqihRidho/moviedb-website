import React from "react";

export default function Navlink({ children }) {
    return (
        <button className="text-2xl font-normal focus:border-b-2 ">
            {children}
        </button>
    );
}
