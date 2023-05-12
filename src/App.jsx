import { useState } from "react";
import "./App.css";
import Input from "./components/input";
import MoviesList from "./components/MoviesList";
import { useMovies } from "./hooks/useMovies";

function App() {
  const [sort, setSort] = useState(false);
  const {
    movies: mappedMovies,
    error,
    getMovies,
    loading,
  } = useMovies({ sort });

  return (
    <>
      <header>
        <Input onSearch={getMovies} onSort={setSort} sort={sort} />
      </header>
      <MoviesList movies={mappedMovies} error={error} loading={loading} />{" "}
    </>
  );
}

export default App;
