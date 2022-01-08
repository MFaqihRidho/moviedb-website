import React from "react";
import Navbar from "../../Components/navbar";
import Hero from "../../Components/hero";

export default function Home() {
    return (
        <div className="min-h-screen bg-black -z-50 font-poppins">
            <Navbar></Navbar>
            <Hero></Hero>
            <div>
                <h1 className="text-white">hello world</h1>
            </div>
        </div>
    );
}
