import React from "react";
import Navbar from "../../Components/navbar";
import Footer from "../../Components/footer";
import GenreList from "../../Components/genrelist";
import RandomGenre from "../../Components/random genre";

export default function Genre() {
    return (
        <div className="min-h-screen bg-black -z-50 font-poppins">
            <Navbar></Navbar>
            <GenreList></GenreList>
            <RandomGenre></RandomGenre>
            <Footer></Footer>
        </div>
    );
}
