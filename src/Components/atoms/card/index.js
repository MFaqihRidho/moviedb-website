import React from "react";

export default function Card(props) {
    return (
        <div
            onClick={props.onClick}
            id={props.id}
            className="bg-one flex flex-col rounded overflow-hidden text-ellipsis items-start justify-center w-24 h-44 sm:w-32 sm:h-60 md:w-44 md:h-72 xl:w-48 xl:h-80 pb-5 sm:pb-10"
        >
            <img
                src={`https://image.tmdb.org/t/p/w500/${props.image}`}
                alt=""
                id={props.id}
            />
            <div id={props.id} className="px-3 py-2">
                <h5
                    id={props.id}
                    className="text-sm md:text-lg text-white whitespace-nowrap text-ellipsis overflow-hidden max-w-mini md:max-w-readable"
                >
                    {props.title}
                </h5>
                <p id={props.id} className="text-xs sm:text-sm text-white">
                    {props.year}
                </p>
            </div>
        </div>
    );
}
