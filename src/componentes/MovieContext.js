import React, { useState, createContext } from "react";

export const MovieContext = createContext();

export const MovieProvider = (props) => {
  const [movies, setMovies] = useState([
    {
      id: 0,
      nombre: "peli1",
      año: 2000,
      taquilla: 203269,
    },
    {
      id: 1,
      nombre: "peli2",
      año: 1995,
      taquilla: 1026589,
    },
    {
      id: 2,
      nombre: "peli3",
      año: 2018,
      taquilla: 22657819,
    },
  ]);

  return (
    <MovieContext.Provider value={[movies, setMovies]}>
      {props.children}
    </MovieContext.Provider>
  );
};
