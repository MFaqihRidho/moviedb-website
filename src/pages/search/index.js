import React from "react";
import Navbar from "../../Components/navbar";
// import Result from "../../Components/result";
import TrendingMovies from "../../Components/Trending Card";
import Footer from "../../Components/footer";

export default function Search() {
    return (
        <div className="min-h-screen bg-black -z-50 font-poppins">
            <Navbar></Navbar>
            {/* <Result></Result> */}
            <TrendingMovies></TrendingMovies>
            <h1>Spiderman</h1>
            <Footer></Footer>
        </div>
    );
}
