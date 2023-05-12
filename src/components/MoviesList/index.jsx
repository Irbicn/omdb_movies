import s from "./MoviesList.module.css";

export default function MoviesList({ movies, error, loading }) {
  return (
    <div className={s.container}>
      {loading && <p>loading...</p>}
      {error && !loading && <p>{error}</p>}
      {Boolean(movies?.length) &&
        movies.map(({ title, id, year, img }) => (
          <div key={id} className={s.movie}>
            <p>{title}</p>
            <p>{year}</p>
            <img src={img} alt={title} />
          </div>
        ))}
    </div>
  );
}
