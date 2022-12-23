import { useEffect, useState } from 'react';
import { MovieType } from '../types/movieType';
import MovieCard from './MovieCard';

export default function Movies() {
  const [movies, setMovies] = useState([] as MovieType[]);

  // find movies
  async function fetchMovies() {
    const res = await fetch(
      `${process.env.REACT_APP_MOVIE_API}/search/movie?api_key=${process.env.REACT_APP_MOVIE_API_KEY}&language=bn-BD&query=2022&page=1&include_adult=false`
    );
    const data = await res.json();

    setMovies(data.results);
  }
  useEffect(() => {
    fetchMovies();
  }, []);

  return (
    <section className="wrapper my-8">
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-7">
        {movies.map((movie: MovieType) => (
          <MovieCard {...movie} key={movie.id} />
        ))}
      </div>
    </section>
  );
}
