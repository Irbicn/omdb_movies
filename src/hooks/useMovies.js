import { useCallback, useMemo, useRef, useState } from "react";
import { searchMovies } from "../services/movies";

export function useMovies({ sort } = {}) {
  const [response, setResponse] = useState({});
  const [loading, setLoading] = useState(false);
  const { movies, error } = response;
  const previusSearch = useRef("");

  const getMovies = useCallback(async (search) => {
    if (previusSearch.current === search) {
      return;
    }
    setLoading(true);
    try {
      previusSearch.current = search;
      const res = await searchMovies(search);
      setResponse(res);
    } catch (e) {
      setResponse({ error: e.message });
    } finally {
      setLoading(false);
    }
  }, []);

  const sortMovies = useMemo(() => {
    return sort
      ? [...movies].sort((a, b) => a.title.localeCompare(b.title))
      : movies;
  }, [sort, movies]);
  return { movies: sortMovies, error, getMovies, loading };
}
