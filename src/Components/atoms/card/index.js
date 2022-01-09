import React from "react";

export default function Card() {
    return (
        <div className="bg-two flex flex-col rounded overflow-hidden text-ellipsis items-start justify-center w-48 h-80 py-3">
            <img
                src="https://image.tmdb.org/t/p/w500/1g0dhYtq4irTY1GPXvft6k4YLjm.jpg"
                alt=""
            />
            <div className="px-3 py-2">
                <h5 className="text-lg text-white whitespace-nowrap text-ellipsis overflow-hidden max-w-readable">
                    Spider-Man: No Way Home
                </h5>
                <p className="text-sm text-white">2021</p>
            </div>
        </div>
    );
}
