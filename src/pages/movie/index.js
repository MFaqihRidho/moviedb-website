import React, { useState, useEffect } from "react";
import Navbar from "../../Components/navbar";
import { useParams } from "react-router-dom";
import { apiKey } from "../../config";

export default function Movie() {
    const [data, setData] = useState([]);
    const [loading, setloading] = useState(false);
    let params = useParams();

    const fetchData = async () => {
        setloading(true);
        try {
            fetch(
                `https://api.themoviedb.org/3/movie/${params.id}?api_key=${apiKey}`
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

    useEffect(() => {
        fetchData();
    }, []);

    console.log(data);

    return (
        <div className="min-h-screen bg-black -z-50 font-poppins">
            <Navbar></Navbar>
            <div>
                <img
                    src={`https://image.tmdb.org/t/p/w500/${data.backdrop_path}`}
                    alt=""
                    className="w-full h-100 object-top object-cover opacity-60 -z-1"
                />
            </div>
            <div className="relative px-16 flex items-end -mt-24">
                <img
                    src={`https://image.tmdb.org/t/p/w500/${data.poster_path}`}
                    alt=""
                    className="h-52"
                />
                <div className="px-10">
                    <h1 className="text-white text-4xl font-semibold mb-5">
                        {data.title}
                    </h1>
                    <div className="flex flex-row">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-7 h-7 text-white sm:h-8 sm:w-8 mr-3"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                        >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                        <p className="text-xl text-white font-medium sm:text-2xl">
                            {data.vote_average}
                        </p>
                        <a
                            href=""
                            className="text-black rounded ml-7 bg-yellow-400 px-3 py-1"
                        >
                            Play Trailer
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
