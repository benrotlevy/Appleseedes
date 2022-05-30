import axios from "axios";
import React, { useEffect, useState } from "react";


export const SimpleFetch = () => {

    const [movie, setMovie] = useState({});

    useEffect(() => {
        const getMovie = async () => {
            const {data} = await axios.get("https://swapi.dev/api/films/1");
            console.log(data);
            setMovie(data);
        }
        getMovie();
    }, []);

    return (
        <div>
            {movie.title && <><h1>{movie.title}</h1><h1>{movie.director}</h1></>}
        </div>
    )
}