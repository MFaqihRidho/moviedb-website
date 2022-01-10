import React from "react";
import Navbar from "../../Components/navbar";
import Hero from "../../Components/hero";
import TrendingMovies from "../../Components/Trending Card";

export default function Home() {
    return (
        <div className="min-h-screen bg-black -z-50 font-poppins">
            <Navbar></Navbar>
            <Hero></Hero>
            <TrendingMovies></TrendingMovies>
        </div>
    );
}
