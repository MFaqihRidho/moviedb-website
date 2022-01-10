import React from "react";

export default function MovieLoading() {
    return (
        <div className="bg-one min-h-screen flex flex-col">
            <div className="bg-two w-full h-100 animate-pulse"></div>
            <div className="relative px-16 flex items-end -mt-24">
                <div className="bg-two rounded h-56 w-48 px-1 py-1 animate-pulse"></div>
                <div className="px-10 flex flex-col animate-pulse">
                    <div className="bg-two h-10 mb-6 w-80"></div>
                    <div className="bg-two h-7 w-80"></div>
                </div>
            </div>
            <div className="px-16 py-14 animate-pulse">
                <div className="w-80 bg-two h-10 mb-6"></div>
                <div className="w-full bg-two h-40"></div>
            </div>
        </div>
    );
}
