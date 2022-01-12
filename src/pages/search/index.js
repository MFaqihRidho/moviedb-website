import React from "react";
import Navbar from "../../Components/navbar";
import Result from "../../Components/result";

export default function Search() {
    return (
        <div className="min-h-screen bg-black -z-50 font-poppins">
            <Navbar></Navbar>
            <Result></Result>
        </div>
    );
}
