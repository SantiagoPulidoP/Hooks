import React, { useState, useContext } from "react";

import { MovieContext } from "./MovieContext";

const AddMovie = () => {
  const [name, setName] = useState("");
  const [año, setAño] = useState("");
  const [taquilla, setTaquilla] = useState("");

  const [movies, setMovies] = useContext(MovieContext);

  const getLastId = () => {
    let max = 0;
    movies.map((movie) => {
      if (movie.id > max) {
        max = movie.id;
      }
    });
    console.log(max);
    return max;
  };
  const updateName = (e) => {
    setName(e.target.value);
  };
  const updateAño = (e) => {
    setAño(e.target.value);
  };
  const updateTaquilla = (e) => {
    setTaquilla(e.target.value);
  };

  const addMovie = (e) => {
    e.preventDefault();
    setMovies((prevMovies) => [
      ...prevMovies,
      {
        nombre: name,
        año: año,
        taquilla: taquilla,
        id: getLastId() + 1,
      },
    ]);
  };
  return (
    <form onSubmit={addMovie}>
      <input
        type="text"
        name="name"
        onChange={updateName}
        placeholder="Nombre"
      />
      <input type="text" name="año" onChange={updateAño} placeholder="Año" />
      <input
        type="text"
        name="taquilla"
        onChange={updateTaquilla}
        placeholder="Taquilla"
      />
      <button>Submit</button>
    </form>
  );
};

export default AddMovie;
