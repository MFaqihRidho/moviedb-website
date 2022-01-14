import React from "react";
import { apiKey } from "../../config";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react/cjs/react.development";
import Card from "../atoms/card";
import CardLoading from "../atoms/card loading";

export default function Result() {
    const [dataMovie, setDataMovie] = useState([]);
    const [dataTv, setDataTv] = useState([]);
    const [loading, setloading] = useState(false);
    let params = useParams();
    let navigate = useNavigate();

    useEffect(() => {
        const fetchDataMovie = async () => {
            setloading(true);
            try {
                fetch(
                    `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&language=en-US&query=${params.keyword}&page=1&include_adult=false`
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
                    `https://api.themoviedb.org/3/search/tv?api_key=${apiKey}&language=en-US&query=${params.keyword}&page=1&include_adult=false`
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
        fetchDataMovie();
        fetchDataTv();
    }, [params.keyword, dataMovie]);

    return (
        <div className="min-h-screen px-5 py-6 text-white sm:py-14 md:px-10 lg:px-14 md:py-8">
            <h1 className="text-4xl font-semibold mb-7">Results</h1>
            {loading ? (
                <div className="grid grid-cols-3 gap-6 sm:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6 justify-items-center sm:gap-10 md:gap-12 lg:gap-14 xl:gap-y-9">
                    <CardLoading></CardLoading>
                    <CardLoading></CardLoading>
                    <CardLoading></CardLoading>
                    <CardLoading></CardLoading>
                    <CardLoading></CardLoading>
                    <CardLoading></CardLoading>
                </div>
            ) : (
                <div className="grid grid-cols-3 gap-6 sm:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6 justify-items-center sm:gap-10 md:gap-12 lg:gap-14 xl:gap-y-9">
                    {dataMovie.map((cardData) => (
                        <Card
                            id={cardData.id}
                            onClick={(e) => navigate(`/movie/${e.target.id}`)}
                            title={
                                cardData.title ? cardData.title : cardData.name
                            }
                            year={
                                cardData.release_date
                                    ? cardData.release_date
                                    : cardData.first_air_date
                                    ? cardData.first_air_date
                                    : "unknown"
                            }
                            image={cardData.poster_path}
                            vote={cardData.vote_average}
                        ></Card>
                    ))}
                    {dataTv.map((cardData) => (
                        <Card
                            id={cardData.id}
                            onClick={(e) => navigate(`/tv/${e.target.id}`)}
                            title={
                                cardData.title ? cardData.title : cardData.name
                            }
                            year={
                                cardData.release_date
                                    ? cardData.release_date
                                    : cardData.first_air_date
                                    ? cardData.first_air_date
                                    : "unknown"
                            }
                            image={cardData.poster_path}
                            vote={cardData.vote_average}
                        ></Card>
                    ))}
                </div>
            )}
        </div>
    );
}
