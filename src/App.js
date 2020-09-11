import React from "react";
import "./App.css";
import Nav from "./componentes/Nav";
import MoviesList from "./componentes/MoviesList";
import { MovieProvider } from "./componentes/MovieContext";
import AddMovie from "./componentes/AddMovie";

function App() {
  return (
    <MovieProvider>
      <div>
        <Nav />
        <AddMovie />
        <MoviesList />
      </div>
    </MovieProvider>
  );
}

export default App;
