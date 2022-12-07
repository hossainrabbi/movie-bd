import { movies } from '../data/data';
import MovieCard from './MovieCard';

export default function Movies() {
  return (
    <section className="wrapper my-8">
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-7">
        {movies.map((movie) => (
          <MovieCard {...movie} key={movie.id} />
        ))}
      </div>
    </section>
  );
}
