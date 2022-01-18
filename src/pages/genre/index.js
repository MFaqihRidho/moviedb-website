import React from "react";
import Navbar from "../../Components/navbar";
import Footer from "../../Components/footer";
import GenreList from "../../Components/genrelist";

export default function Genre() {
    return (
        <div className="min-h-screen bg-black -z-50 font-poppins">
            <Navbar></Navbar>
            <GenreList></GenreList>
            <Footer></Footer>
        </div>
    );
}
