import React from "react";
import { SocialIcon } from "react-social-icons";

export default function Footer() {
    return (
        <footer className="w-full h-40 mt-10 bg-one">
            <div className="container flex flex-col items-center justify-center h-full mx-auto bg-one">
                <div className="py-3">
                    <SocialIcon
                        bgColor="white"
                        style={{ height: "30px", width: "30px" }}
                        url="https://github.com/MFaqihRidho"
                        target={"_blank"}
                        rel="noreferrer"
                        className="mx-3"
                    />
                    <SocialIcon
                        bgColor="white"
                        style={{ height: "30px", width: "30px" }}
                        url="https://codepen.io/mfaqihridho"
                        target={"_blank"}
                        rel="noreferrer"
                        className="mx-3"
                    />
                    <SocialIcon
                        bgColor="white"
                        style={{ height: "30px", width: "30px" }}
                        url="https://www.instagram.com/mfaqihridho/"
                        target={"_blank"}
                        rel="noreferrer"
                        className="mx-3"
                    />
                </div>
                <h5 className="mb-3 text-xl text-white md:mb-5">
                    MFaqihRidho © 2022
                </h5>
                <div className="w-full h-0.5 bg-white mb-2"></div>
                <p className="text-white ">
                    Powered By{" "}
                    <a
                        href="https://www.themoviedb.org"
                        className="border-b-2"
                        target="_blank"
                        rel="noreferrer"
                    >
                        TMDB
                    </a>
                </p>
            </div>
        </footer>
    );
}
