import React, { useState, useContext } from "react";
import Movie from "./Movie";
import { MovieContext } from "./MovieContext";

function MoviesList() {
  const [movies, setMovies] = useContext(MovieContext);

  return (
    <div className="text-center">
      {movies.map((movie) => {
        return (
          <Movie
            nombre={movie.nombre}
            año={movie.año}
            taquilla={movie.taquilla}
            key={movie.id}
          />
        );
      })}
    </div>
  );
}

export default MoviesList;
