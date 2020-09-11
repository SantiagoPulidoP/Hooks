import React from "react";

const Movie = ({ nombre, año, taquilla }) => {
  return (
    <div>
      <h2>{nombre}</h2>
      <h4>Año: {año}</h4>
      <h5>Taquilla: {taquilla}</h5>
    </div>
  );
};

export default Movie;
