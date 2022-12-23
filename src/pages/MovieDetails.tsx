import { useEffect, useState } from 'react';
import { FaStar } from 'react-icons/fa';
import { Link, useParams } from 'react-router-dom';
import { MovieType } from '../types/movieType';
import Error from './Error';

type MovieDetailsType = {
  genres: {
    id: number;
    name: string;
  }[];
  spoken_languages: {
    english_name: string;
    iso_639_1: string;
    name: string;
  }[];
} & MovieType;

export default function MovieDetails() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState({} as MovieDetailsType);

  useEffect(() => {
    // find movie
    async function fetchMovies() {
      const res = await fetch(
        `${process.env.REACT_APP_MOVIE_API}/movie/${movieId}?api_key=${process.env.REACT_APP_MOVIE_API_KEY}&language=en-US&query=2022&page=1&include_adult=true`
      );
      const data = await res.json();

      setMovie(data);
    }

    fetchMovies();
  }, [movieId]);

  if (movieId) {
    if (!movie) {
      return <Error />;
    }

    return (
      <section className="mb-10">
        {/* section header area */}
        <div
          className="min-h-[500px] bg-cover bg-center bg-no-repeat bg-blend-overlay"
          style={{
            backgroundImage: `url(${process.env.REACT_APP_MOVIE_IMAGE_PATH}/${movie.poster_path}), linear-gradient(90deg, #1A1A1A,#1A1A1A, #00000068, #000000c0)`,
          }}
        >
          <div className="wrapper grid md:grid-cols-3 xl:grid-cols-4 gap-7">
            <div className="md:col-span-1 py-10">
              <img
                className="h-full rounded-3xl"
                src={`${process.env.REACT_APP_MOVIE_IMAGE_PATH}/${movie.backdrop_path}`}
                alt={movie.title}
              />
            </div>
            <div className="md:col-span-2 text-white grid items-center mb-5 md:0">
              <div>
                <h2 className="text-4xl font-bold">{movie.title}</h2>

                {/* movie ratings and movie likes */}
                <div className="mt-7 mb-4">
                  <span className="flex items-center gap-2">
                    <span className="flex items-center gap-2 text-3xl font-bold">
                      <FaStar className="text-red-500 mb-[1px]" />{' '}
                      {movie.vote_average}/10
                    </span>
                    <span>{movie.vote_count} votes</span>
                  </span>
                </div>

                {/* movie reviews and movie release data */}
                <div>
                  <div className="flex items-center justify-between gap-3 lg:gap-7 bg-neutral-800 px-6 py-2.5 rounded-lg lg:mr-8">
                    <div>
                      <h4 className="text-2xl font-medium">
                        Add your rating & review
                      </h4>
                      <h5>Your ratings matter</h5>
                    </div>
                    <button className="text-neutral-800 bg-white text-lg px-5 py-3 leading-tight hover:shadow-md rounded-md">
                      Rate now
                    </button>
                  </div>
                </div>

                {/* movie categories and movie languages */}
                <div className="my-5 flex gap-2 flex-wrap">
                  <p className="bg-white rounded text-neutral-900 inline-block px-2 py-1">
                    {/* {movie.genres.map((item, i) => (
                      <Link className="capitalize" to="/" key={item.id}>
                        {item.name}
                        {i === movie.genres.length - 1 ? '' : ', '}
                      </Link>
                    ))} */}
                  </p>
                  <p className="bg-white rounded text-neutral-900 inline-block px-2 py-1">
                    {/* {movie.spoken_languages.map((item, i) => (
                      <Link
                        className="capitalize"
                        to="/"
                        key={item.english_name + i}
                      >
                        {item.english_name}
                        {i === movie.spoken_languages.length - 1 ? '' : ', '}
                      </Link>
                    ))} */}
                  </p>
                </div>

                {/* others option in movie */}
                <div className="mb-5">
                  <span>{movie.release_date}</span>
                </div>

                {/* tickets booking button */}
                <button className="btn font-medium text-lg">
                  Book tickets
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* section body area */}
        <div className="wrapper mt-10">
          <h3 className="text-3xl font-medium text-gray-900">
            About the movie
          </h3>
          <p className="mt-2 text-gray-600">{movie.overview}</p>
        </div>
      </section>
    );
  }

  return <Error />;
}
