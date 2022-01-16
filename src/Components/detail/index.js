import React from "react";

export default function MovieDetail(props) {
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
                    <h1 className="mb-4 md:mb-3 text-2xl font-semibold text-white md:text-4xl">
                        {props.title}
                    </h1>
                    <div className="grid grid-cols-2 items-center md:flex align-middle text-center md:mb-4 mb-8 gap-3 md:gap-6">
                        {props.genres.includes(10759) ? (
                            <p className="text-black px-2 font-medium transition duration-300 bg-purple-500 rounded hover:bg-purple-600">
                                Action & Adventure
                            </p>
                        ) : null}
                        {props.genres.includes(28) ? (
                            <p className="text-black px-2 font-medium transition duration-300 bg-red-500 rounded hover:bg-red-600">
                                Action
                            </p>
                        ) : null}
                        {props.genres.includes(12) ? (
                            <p className="text-black px-2 font-medium transition duration-300 bg-teal-400 rounded hover:bg-teal-600">
                                Adventure
                            </p>
                        ) : null}
                        {props.genres.includes(16) ? (
                            <p className="text-black px-2 font-medium transition duration-300 bg-blue-400 rounded hover:bg-blue-600">
                                Animation
                            </p>
                        ) : null}
                        {props.genres.includes(80) ? (
                            <p className="text-black px-2 font-medium transition duration-300 bg-red-600 rounded hover:bg-red-800">
                                Crime
                            </p>
                        ) : null}
                        {props.genres.includes(35) ? (
                            <p className="text-black px-2 font-medium transition duration-300 bg-yellow-400 rounded hover:bg-yellow-600">
                                Comedy
                            </p>
                        ) : null}
                        {props.genres.includes(18) ? (
                            <p className="text-black px-2 font-medium transition duration-300 bg-green-400 rounded hover:bg-green-600">
                                Drama
                            </p>
                        ) : null}
                        {props.genres.includes(99) ? (
                            <p className="text-black px-2 font-medium transition duration-300 bg-white rounded hover:bg-gray-400">
                                Documentary
                            </p>
                        ) : null}
                        {props.genres.includes(10751) ? (
                            <p className="text-black px-2 font-medium transition duration-300 bg-orange-400 rounded hover:bg-orange-600">
                                Family
                            </p>
                        ) : null}
                        {props.genres.includes(14) ? (
                            <p className="text-black px-2 font-medium transition duration-300 bg-lime-400 rounded hover:bg-lime-600">
                                Fantasy
                            </p>
                        ) : null}
                        {props.genres.includes(36) ? (
                            <p className="text-black px-2 font-medium transition duration-300 bg-amber-400 rounded hover:bg-amber-600">
                                History
                            </p>
                        ) : null}
                        {props.genres.includes(27) ? (
                            <p className="text-black px-2 font-medium transition duration-300 bg-red-700 rounded hover:bg-red-900">
                                Horror
                            </p>
                        ) : null}
                        {props.genres.includes(10762) ? (
                            <p className="text-black px-2 font-medium transition duration-300 bg-orange-400 rounded hover:bg-orange-600">
                                Kids
                            </p>
                        ) : null}
                        {props.genres.includes(10402) ? (
                            <p className="text-black px-2 font-medium transition duration-300 bg-indigo-400 rounded hover:bg-indigo-600">
                                Music
                            </p>
                        ) : null}
                        {props.genres.includes(9648) ? (
                            <p className="text-black px-2 font-medium transition duration-300 bg-gray-600 rounded hover:bg-gray-800">
                                Mystery
                            </p>
                        ) : null}
                        {props.genres.includes(10763) ? (
                            <p className="text-black px-2 font-medium transition duration-300 bg-gray-600 rounded hover:bg-gray-800">
                                News
                            </p>
                        ) : null}
                        {props.genres.includes(10764) ? (
                            <p className="text-black px-2 font-medium transition duration-300 bg-gray-600 rounded hover:bg-gray-800">
                                Reality
                            </p>
                        ) : null}
                        {props.genres.includes(10765) ? (
                            <p className="text-black px-2 font-medium transition duration-300 bg-emerald-600 rounded hover:bg-emerald-800">
                                Sci-Fi & Fantasy
                            </p>
                        ) : null}
                        {props.genres.includes(10766) ? (
                            <p className="text-black px-2 font-medium transition duration-300 bg-pink-400 rounded hover:bg-pink-600">
                                Soap
                            </p>
                        ) : null}
                        {props.genres.includes(10749) ? (
                            <p className="text-black px-2 font-medium transition duration-300 bg-pink-400 rounded hover:bg-pink-600">
                                Romance
                            </p>
                        ) : null}
                        {props.genres.includes(878) ? (
                            <p className="text-black px-2 font-medium transition duration-300 bg-emerald-400 rounded hover:bg-emerald-600">
                                Science Fiction
                            </p>
                        ) : null}
                        {props.genres.includes(10770) ? (
                            <p className="text-black px-2 font-medium transition duration-300 bg-white rounded hover:bg-gray-400">
                                TV Movie
                            </p>
                        ) : null}
                        {props.genres.includes(53) ? (
                            <p className="text-black px-2 font-medium transition duration-300 bg-red-500 rounded hover:bg-red-700">
                                Thriller
                            </p>
                        ) : null}
                        {props.genres.includes(10752) ? (
                            <p className="text-black px-2 font-medium transition duration-300 bg-gray-600 rounded hover:bg-gray-800">
                                War
                            </p>
                        ) : null}
                        {props.genres.includes(10767) ? (
                            <p className="text-black px-2 font-medium transition duration-300 bg-yellow-600 rounded hover:bg-yellow-800">
                                Talk
                            </p>
                        ) : null}
                        {props.genres.includes(10768) ? (
                            <p className="text-black px-2 font-medium transition duration-300 bg-gray-600 rounded hover:bg-gray-800">
                                War & Politics
                            </p>
                        ) : null}
                        {props.genres.includes(37) ? (
                            <p className="text-black px-2 font-medium transition duration-300 bg-yellow-400 rounded hover:bg-yellow-600">
                                Western
                            </p>
                        ) : null}
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
