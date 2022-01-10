import React, { useEffect, useState } from "react";
import Card from "../atoms/card";
import CardLoading from "../atoms/card loading";
import { apiKey } from "../../config";

export default function TrendingMovies() {
    const [data, setData] = useState([]);
    const [loading, setloading] = useState(false);
    const fetchData = async () => {
        setloading(true);
        try {
            fetch(
                `https://api.themoviedb.org/3/trending/movie/day?api_key=${apiKey}`
            )
                .then((response) => response.json())
                .then((results) => {
                    setData(results.results);
                    setloading(false);
                });
        } catch (e) {
            setloading(true);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);
    return (
        <div className="px-5 sm:py-36 md:px-10 lg:px-14 py-6 md:py-8">
            <h1 className="text-white px-3 lg:px-1 text-2xl md:text-5xl font-semibold mb-3 sm:mb-5 md:mb-8">
                Trending Movies
            </h1>
            {loading ? (
                <div className="grid grid-cols-3 sm:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6 justify-items-center gap-6 sm:gap-10 md:gap-12 lg:gap-14 xl:gap-y-9">
                    <CardLoading></CardLoading>
                    <CardLoading></CardLoading>
                    <CardLoading></CardLoading>
                    <CardLoading></CardLoading>
                    <CardLoading></CardLoading>
                    <CardLoading></CardLoading>
                </div>
            ) : (
                <div className="grid grid-cols-3 sm:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6 justify-items-center gap-6 sm:gap-10 md:gap-12 lg:gap-14 xl:gap-y-9">
                    {data.map((cardData) => (
                        <Card
                            id={cardData.id}
                            onClick={(e) => console.log(e.target.id)}
                            title={cardData.title}
                            year={cardData.release_date}
                            image={cardData.poster_path}
                        ></Card>
                    ))}
                </div>
            )}
        </div>
    );
}
