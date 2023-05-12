const apikey = "2a6c3e4d";

export async function searchMovies(search) {
  if (!search) {
    throw new Error("Movie not found");
  }

  try {
    const res = await fetch(
      `https://www.omdbapi.com/?apikey=${apikey}&s=${search}`
    );
    const json = await res.json();

    const error = json.Error;
    const movies = json.Search
      ? json.Search.map((movie) => ({
          title: movie.Title,
          id: movie.imdbID,
          year: movie.Year,
          img: movie.Poster,
        }))
      : [];

    return { error, movies };
  } catch (e) {
    throw new Error("Error searching movies");
  }
}
