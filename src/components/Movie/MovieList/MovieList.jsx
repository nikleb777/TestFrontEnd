import { useState } from "react";
import MovieItem from "../MovieItem/MovieItem.jsx";
import "./Movielist.css";

function MovieList() {
  const [movies, setMovies] = useState([
    { id: 1, title: "Интерстеллар", year: 2014 },
    { id: 2, title: "Начало", year: 2010 },
    { id: 3, title: "Матрица", year: 1999 },
  ]);
  const [newMovie, setNewMovie] = useState("");
  const [newYear, setNewYear] = useState("");

  const addMovie = () => {
    if (newMovie.trim() === "" || newYear.trim() === "") return;
    const movie = { id: Date.now(), title: newMovie, year: newYear };
    setMovies([...movies, movie]);
    setNewMovie("");
    setNewYear("");
  };

  return (
    <div className="movie-list">
      <h2>Список фильмов</h2>
      <ul>
        {movies.map((movie) => (
          <MovieItem key={movie.id} movie={movie} />
        ))}
      </ul>
      <div className="movie-inputs">
        <input
          type="text"
          value={newMovie}
          onChange={(e) => setNewMovie(e.target.value)}
          placeholder="Название фильма"
        />
        <input
          type="text"
          value={newYear}
          onChange={(e) => setNewYear(e.target.value)}
          placeholder="Год"
        />
        <button onClick={addMovie}>Добавить фильм</button>
      </div>
    </div>
  );
}

export default MovieList;
