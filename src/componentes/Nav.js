import React, { useContext } from "react";
import { MovieContext } from "./MovieContext";

const Nav = () => {
  const [movies, setMovies] = useContext(MovieContext);
  return (
    <ul className="nav nav-tabs nav-fill justify-content-center">
      <li className="nav-item">
        <h3 className="nav-link" href="/">
          Santiago Pulido
        </h3>
      </li>
      <li className="nav-item">
        <h3 className="nav-link" href="/">
          Lista de pelis: {movies.length}
        </h3>
      </li>
    </ul>
  );
};

export default Nav;
