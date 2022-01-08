import React from "react";
import Navbar from "../../Components/navbar";
import Hero from "../../Components/hero";

export default function Home() {
    return (
        <div className="min-h-screen -z-50 bg-black font-poppins">
            <Navbar></Navbar>
            <Hero></Hero>
        </div>
    );
}
