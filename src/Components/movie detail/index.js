import React from "react";
import { useEffect, useState } from "react/cjs/react.development";

export default function MovieDetail(props) {
    const [genres, setGenres] = useState();
    useEffect(() => {
        setGenres(props.genres);
    }, []);
    return (
        <div>
            <div>
                <img
                    src={`https://image.tmdb.org/t/p/w500/${props.backdrop}`}
                    alt=""
                    className="object-cover object-top w-full md:h-100 opacity-60 -z-1"
                />
            </div>
            <div className="relative flex flex-col items-start px-16 -mt-24 md:items-end md:flex-row">
                <img
                    src={`https://image.tmdb.org/t/p/w500/${props.poster}`}
                    alt=""
                    className="rounded md:h-56"
                />
                <div className="px-0 py-3 md:py-0 md:px-10">
                    <h1 className="mb-2 text-2xl font-semibold text-white md:text-4xl">
                        {props.title}
                    </h1>
                    <div className="flex flex-row mb-2">
                        <div className="flex gap-3">
                            {genres
                                ? genres.map((g) =>
                                      g.id === 18 ? (
                                          <a
                                              href="#"
                                              className="text-black rounded px-2 bg-green-500 hover:bg-green-600"
                                          >
                                              Drama
                                          </a>
                                      ) : null
                                  )
                                : null}
                            {genres
                                ? genres.map((g) =>
                                      g.id === 35 ? (
                                          <a
                                              href="#"
                                              className="text-black rounded px-2 bg-yellow-500 hover:bg-yellow-600"
                                          >
                                              Comedy
                                          </a>
                                      ) : null
                                  )
                                : null}
                            {genres
                                ? genres.map((g) =>
                                      g.id === 28 ? (
                                          <a
                                              href="#"
                                              className="text-black rounded px-2 bg-red-500 hover:bg-red-600"
                                          >
                                              Action
                                          </a>
                                      ) : null
                                  )
                                : null}
                        </div>
                    </div>
                    <div className="flex flex-row">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="mr-3 text-white w-7 h-7 sm:h-8 sm:w-8"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                        >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                        <p className="text-xl font-medium text-white sm:text-2xl">
                            {props.vote}
                        </p>
                        <a
                            href={
                                props.video
                                    ? `https://www.youtube.com/watch?v=${props.video.key}`
                                    : `https://www.youtube.com/results?search_query=${props.title}`
                            }
                            className="px-3 py-1 font-medium text-black transition duration-300 bg-yellow-400 rounded hover:bg-yellow-600 ml-7"
                            target="_blank"
                            rel="noreferrer"
                        >
                            Play Trailer
                        </a>
                    </div>
                </div>
            </div>
            <div className="px-16 py-3 text-white md:py-14">
                <h5 className="mb-2 text-2xl font-semibold md:text-4xl">
                    Overview
                </h5>
                <p className="text-xl font-normal md:w-3/4 md:text-3xl">
                    {props.overview}
                </p>
            </div>
        </div>
    );
}
