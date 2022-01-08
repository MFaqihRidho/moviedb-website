import React, { useEffect, useState } from "react";
import { getTrendingAPI } from "../../config";

export default function Hero() {
    const [data, setData] = useState([]);
    const fetchData = async () => {
        await getTrendingAPI().then((result) =>
            setData(result.results[Math.floor(Math.random() * 20)])
        );
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div className="">
            <div>
                <img
                    className="absolute max-h-screen min-w-full opacity-60 -z-1"
                    src={`https://image.tmdb.org/t/p/w500/${data.backdrop_path}`}
                    alt=""
                />
                <p className="absolute py-3 pl-2 text-sm font-semibold text-white rounded-br-full md:text-3xl pr-7 bg-two">
                    Trending 🔥
                </p>
            </div>
            <div className="relative px-12 py-16 sm:py-36 lg:py-80 h-96">
                <div>
                    <h1 className="z-20 py-3 text-xl font-semibold text-white sm:text-3xl md:text-4xl lg:text-6xl">
                        {data.title ? data.title : data.name}
                    </h1>
                    <p className="hidden pb-3 overflow-hidden text-2xl font-normal text-white max-h-28 overflow-ellipsis md:text-xl md:block md:w-full lg:w-2/3">
                        {data.overview}
                    </p>
                </div>
                <div className="flex flex-row gap-2">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-6 h-6 text-white sm:h-8 sm:w-8"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                    >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <p className="text-lg text-white bold sm:text-2xl">
                        {data.vote_average}
                    </p>
                </div>
            </div>
        </div>
    );
}
