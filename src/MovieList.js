import React, { useContext } from "react";
import Movie from "./Movie";
import {MovieContext} from "./MovieContext";

const MovieList=()=>{
    const [Movies,SetMovies]=useContext(MovieContext);
    return(<>
        
        {Movies.map(movies=>(
            <Movie key={movies.id} name={movies.name} price={movies.price}/>
        ))}
    </>)
};
export default MovieList;