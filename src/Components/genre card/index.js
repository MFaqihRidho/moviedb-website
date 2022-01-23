import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Card from "../atoms/card";
import CardLoading from "../atoms/card loading";
import { apiKey } from "../../config";

export default function GenreCard() {
    const [dataMovie, setDataMovie] = useState([]);
    const [dataTv, setDataTv] = useState([]);
    const [dataGenreListMovie, setDataGenreListMovie] = useState("");
    const [dataGenreListTv, setDataGenreListTv] = useState("");
    const [loading, setloading] = useState(true);
    let params = useParams();
    let navigate = useNavigate();

    useEffect(() => {
        const fetchDataMovie = async (id) => {
            setloading(true);
            try {
                fetch(
                    `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=${id}`
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

        const fetchDataTv = async (id) => {
            setloading(true);
            try {
                fetch(
                    `https://api.themoviedb.org/3/discover/tv?api_key=${apiKey}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=${id}`
                )
                    .then((response) => response.json())
                    .then((results) => {
                        setDataTv(results.results);
                        setloading(false);
                    })
                    .catch(() => {
                        setloading(true);
                    });
            } catch (e) {
                setloading(true);
            }
        };

        const fetchDataGenreListMovie = async () => {
            setloading(true);
            try {
                fetch(
                    `https://api.themoviedb.org/3/genre/movie/list?api_key=${apiKey}&language=en-US`
                )
                    .then((response) => response.json())
                    .then((results) => {
                        for (let i = 0; i < results.genres.length; i++) {
                            if (results.genres[i].id.toString() === params.id) {
                                setDataGenreListMovie(results.genres[i].name);
                                fetchDataMovie(results.genres[i].id);
                            }
                            setloading(false);
                        }
                    });
            } catch (e) {
                setloading(true);
            }
        };

        const fetchDataGenreListTv = async () => {
            setloading(true);
            try {
                fetch(
                    `https://api.themoviedb.org/3/genre/tv/list?api_key=${apiKey}&language=en-US`
                )
                    .then((response) => response.json())
                    .then((results) => {
                        for (let i = 0; i < results.genres.length; i++) {
                            if (results.genres[i].id.toString() === params.id) {
                                setDataGenreListTv(results.genres[i].name);
                                fetchDataTv(results.genres[i].id);
                            }
                            setloading(false);
                        }
                    });
            } catch (e) {
                setloading(true);
            }
        };

        fetchDataGenreListMovie();
        fetchDataGenreListTv();
        console.log(dataMovie);
        console.log(dataMovie);
    }, [params.id]);

    return (
        <div className="min-h-screen px-5 py-6 text-white sm:py-14 md:px-10 lg:px-14 md:py-8">
            <h1 className="mb-3 text-2xl font-semibold text-center text-white lg:px-1 md:text-5xl sm:mb-5 md:mb-8">
                Popular Movie & Tv with genre{" "}
                {dataGenreListMovie !== ""
                    ? dataGenreListMovie
                    : dataGenreListTv}
            </h1>
            {loading ? (
                <div className="grid grid-cols-3 gap-6 sm:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6 justify-items-center sm:gap-10 md:gap-12 lg:gap-14 xl:gap-y-9">
                    <CardLoading></CardLoading>
                    <CardLoading></CardLoading>
                    <CardLoading></CardLoading>
                    <CardLoading></CardLoading>
                    <CardLoading></CardLoading>
                    <CardLoading></CardLoading>
                </div>
            ) : dataGenreListMovie.length === 0 &&
              dataGenreListTv.length === 0 &&
              loading === false ? (
                <h1 className="text-white text-3xl font-normal">Not Found</h1>
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
