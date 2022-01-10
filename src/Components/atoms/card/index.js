import React from "react";

export default function Card(props) {
    return (
        <div
            onClick={props.onClick}
            id={props.id}
            className="bg-one transition duration-300 hover:bg-two flex flex-col cursor-pointer rounded overflow-hidden text-ellipsis items-start justify-center w-24 h-44 sm:w-32 sm:h-60 md:w-44 md:h-72 xl:w-48 xl:h-80 pb-5 sm:pb-10"
        >
            <img
                src={`https://image.tmdb.org/t/p/w500/${props.image}`}
                alt=""
                id={props.id}
                className="hover:opacity-50 transition duration-300"
            />
            <div id={props.id} className="px-3 py-2">
                <h5
                    id={props.id}
                    className="text-sm md:text-lg text-white whitespace-nowrap text-ellipsis overflow-hidden max-w-mini md:max-w-readable"
                >
                    {props.title}
                </h5>
                <div className="flex">
                    <p
                        id={props.id}
                        className="text-xs sm:text-sm bg-yellow-600 px-1 rounded text-white mr-1 sm:mr-2"
                    >
                        {props.vote}
                    </p>
                    <p
                        id={props.id}
                        className="text-xs px-1 sm:text-sm text-white"
                    >
                        {props.year.substring(0, 4)}
                    </p>
                </div>
            </div>
        </div>
    );
}
