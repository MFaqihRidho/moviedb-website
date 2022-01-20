import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Card from "../atoms/card";
import CardLoading from "../atoms/card loading";
import { apiKey } from "../../config";

export default function RandomGenre() {
    const [dataMovie, setDataMovie] = useState([]);
    const [dataTv, setDataTv] = useState([]);
    const [loading, setloading] = useState(false);
    let navigate = useNavigate();

    const fetchDataMovie = async () => {
        setloading(true);
        try {
            fetch(
                `https://api.themoviedb.org/3/discover/movie?language=en-US&include_adult=false&include_video=false&page=1&with_genres=28&api_key=${apiKey}`
            )
                .then((response) => response.json())
                .then((results) => {
                    setDataMovie(results.results);
                    setloading(false);
                });
        } catch (e) {
            setloading(true);
        }
    };

    const fetchDataTv = async () => {
        setloading(true);
        try {
            fetch(
                `https://api.themoviedb.org/3/discover/tv?language=en-US&include_adult=false&include_video=false&page=1&with_genres=action&api_key=${apiKey}`
            )
                .then((response) => response.json())
                .then((results) => {
                    setDataTv(results.results);
                    setloading(false);
                });
        } catch (e) {
            setloading(true);
        }
    };

    useEffect(() => {
        fetchDataMovie();
        fetchDataTv();
    }, []);

    return (
        <div
            id="trending"
            className="px-5 py-6 sm:py-36 md:px-10 lg:px-14 md:py-8"
        >
            <h1 className="mb-3 text-2xl font-semibold text-white lg:px-1 md:text-5xl sm:mb-5 md:mb-8">
                Random Movies With Genre Science Fiction
            </h1>
            {loading ? (
                <div className="grid grid-cols-3 gap-6 sm:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6 justify-items-center sm:gap-10 md:gap-12 lg:gap-14 mb-7 md:mb-16 xl:gap-y-9">
                    <CardLoading></CardLoading>
                    <CardLoading></CardLoading>
                    <CardLoading></CardLoading>
                    <CardLoading></CardLoading>
                    <CardLoading></CardLoading>
                    <CardLoading></CardLoading>
                </div>
            ) : (
                <div className="grid grid-cols-3 gap-6 sm:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6 justify-items-center sm:gap-10 md:gap-12 lg:gap-14 mb-7 md:mb-16 xl:gap-y-9">
                    {dataMovie.map((cardData) => (
                        <Card
                            id={cardData.id}
                            onClick={(e) => navigate(`/movie/${e.target.id}`)}
                            title={cardData.title}
                            year={cardData.release_date}
                            image={cardData.poster_path}
                            vote={cardData.vote_average}
                        ></Card>
                    ))}
                    {dataTv.map((cardData) => (
                        <Card
                            id={cardData.id}
                            onClick={(e) => navigate(`/tv/${e.target.id}`)}
                            title={cardData.name}
                            year={cardData.first_air_date}
                            image={cardData.poster_path}
                            vote={cardData.vote_average}
                        ></Card>
                    ))}
                </div>
            )}
        </div>
    );
}
