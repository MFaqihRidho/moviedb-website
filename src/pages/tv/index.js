import React, { useState, useEffect } from "react";
import MovieDetail from "../../Components/movie detail";
import Navbar from "../../Components/navbar";
import Footer from "../../Components/footer";
import { useParams } from "react-router-dom";
import { apiKey } from "../../config";
import MovieLoading from "../../Components/atoms/movie details loading";

export default function Tv() {
    const [data, setData] = useState([]);
    const [video, setVideo] = useState([]);
    const [loading, setloading] = useState(false);
    let params = useParams();

    const fetchData = async () => {
        setloading(true);
        try {
            fetch(
                `https://api.themoviedb.org/3/tv/${params.id}?api_key=${apiKey}`
            )
                .then((response) => response.json())
                .then((results) => {
                    setData(results);
                    setloading(false);
                });
        } catch (e) {
            setloading(true);
        }
    };

    const fetchTrailer = async () => {
        setloading(true);
        try {
            fetch(
                `https://api.themoviedb.org/3/tv/${params.id}/videos?api_key=${apiKey}&language=en-US`
            )
                .then((response) => response.json())
                .then((results) => {
                    setVideo(results.results[0]);
                    setloading(false);
                });
        } catch (e) {
            setloading(true);
        }
    };

    useEffect(() => {
        fetchData();
        fetchTrailer();
        console.log(data.genres);
        console.log(data.genres);
    }, []);

    return (
        <div className="min-h-screen bg-black -z-50 font-poppins">
            <Navbar></Navbar>
            {loading ? (
                <MovieLoading></MovieLoading>
            ) : (
                <MovieDetail
                    title={data.name}
                    backdrop={data.backdrop_path}
                    poster={data.poster_path}
                    vote={data.vote_average}
                    overview={data.overview}
                    video={video}
                    genres={data.genres}
                ></MovieDetail>
            )}
        </div>
    );
}
