import React from "react";

export default function Hero() {
    return (
        <div
            // className={
            //     "bg-[url('https://image.tmdb.org/t/p/w500/1Rr5SrvHxMXHu5RjKpaMba8VTzi.jpg')] bg-cover flex flex-col items-start py-44 px-10 justify-center"
            // }
            className=""
        >
            <img
                className="min-w-full max-h-screen absolute opacity-60 -z-1"
                src="https://image.tmdb.org/t/p/w500/1Rr5SrvHxMXHu5RjKpaMba8VTzi.jpg"
                alt=""
            />
            <div className="relative px-12 top-14 sm:top-40 lg:top-80 md:top-44">
                <div>
                    <h1 className="text-white font-semibold text-3xl sm:text-4xl md:text-5xl lg:text-6xl py-3 z-20">
                        Spiderman No Way Home
                    </h1>
                    <p className="text-white font-normal md:text-xl text-2xl pb-3 hidden md:block md:w-full lg:w-2/3">
                        Peter Parker is unmasked and no longer able to separate
                        his normal life from the high-stakes of being a
                        super-hero. When he asks for help from Doctor Strange
                        the stakes become even more dangerous, forcing him to
                        discover what it truly means to be Spider-Man.
                    </p>
                </div>
                <div className="flex flex-row gap-2">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 sm:h-8 sm:w-8 text-white"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                    >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <p className="text-white bold text-lg sm:text-2xl">8.4</p>
                </div>
            </div>
        </div>
    );
}
