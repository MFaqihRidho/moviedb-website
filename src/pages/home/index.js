import React from "react";
import Navbar from "../../Components/navbar";
import Hero from "../../Components/hero";
import Card from "../../Components/atoms/card";

export default function Home() {
    return (
        <div className="min-h-screen bg-black -z-50 font-poppins">
            <Navbar></Navbar>
            <Hero></Hero>
            <div className="py-16 sm:py-36 lg:py-80"></div>
            <h1 className="text-3xl text-white">Trending</h1>
            <Card></Card>
        </div>
    );
}
