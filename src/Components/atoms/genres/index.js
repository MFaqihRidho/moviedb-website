import React from "react";
import { useEffect, useState } from "react/cjs/react.development";

export default function Genres(props) {
    const [data, setData] = useState([props.data]);

    useEffect(() => {
        setData(props.data);
    }, [data]);

    function Drama() {
        return <p className="text-white">Drama</p>;
    }

    function Genre() {
        if (data.includes(18)) {
            return <Drama></Drama>;
        } else {
            return null;
        }
    }

    return (
        <div className="flex gap-3">
            <Genre></Genre>
        </div>
    );
}
