import { movies } from '../data/data';
import MovieCard from './MovieCard';

export default function Movies() {
  return (
    <section className="wrapper">
      <div className="grid lg:grid-cols-4 gap-7">
        {movies.map((movie) => (
          <MovieCard {...movie} key={movie.id} />
        ))}
      </div>
    </section>
  );
}
