import { AiFillLike } from 'react-icons/ai';
import { FaStar } from 'react-icons/fa';
import { Link, useParams } from 'react-router-dom';
import { movies } from '../data/data';

export default function MovieDetails() {
  const { movieId } = useParams();

  if (movieId) {
    const movie = movies.find((item) => item.id === parseInt(movieId));

    if (!movie) {
      return <div>Page not found!</div>;
    }

    return (
      <section className="mb-10">
        {/* section header area */}
        <div
          className="min-h-[500px] bg-cover bg-center bg-no-repeat bg-blend-overlay"
          style={{
            backgroundImage: `url(${movie.banner}), linear-gradient(90deg, #1A1A1A,#1A1A1A, #00000068, #000000c0)`,
          }}
        >
          <div className="wrapper grid md:grid-cols-3 xl:grid-cols-4 gap-7">
            <div className="md:col-span-1 py-10">
              <img
                className="h-full rounded-3xl"
                src={movie.image}
                alt={movie.title}
              />
            </div>
            <div className="md:col-span-2 text-white grid items-center mb-5 md:0">
              <div>
                <h2 className="text-4xl font-bold">{movie.title}</h2>

                {/* movie ratings and movie likes */}
                <div className="mt-7 mb-4">
                  {movie.ratting || movie.votes ? (
                    <span className="flex items-center gap-2">
                      <span className="flex items-center gap-2 text-3xl font-bold">
                        <FaStar className="text-red-500 mb-[1px]" />{' '}
                        {movie.ratting}
                      </span>
                      <span>{movie.votes} votes</span>
                    </span>
                  ) : (
                    <span className="flex items-center gap-2 text-3xl font-bold">
                      <AiFillLike className="text-green-500 mb-[1px]" />{' '}
                      {movie.likes}{' '}
                      <span className="text-lg font-normal self-end">
                        are interested
                      </span>
                    </span>
                  )}
                </div>

                {/* movie reviews and movie release data */}
                <div>
                  {movie.ratting || movie.votes ? (
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
                  ) : (
                    <div className="flex items-center justify-between gap-7 border-white border-2 px-6 py-2.5 rounded-lg mr-8">
                      <div>
                        <h5 className="text-lg font-medium">
                          Releasing on {movie.release}
                        </h5>
                        <p>Mark interested to know when bookings open</p>
                      </div>
                      <button className="text-neutral-800 bg-white px-5 py-3 leading-tight text-sm font-medium hover:shadow-md rounded-md">
                        I'm interested
                      </button>
                    </div>
                  )}
                </div>

                {/* movie categories and movie languages */}
                <div className="my-5 flex gap-2 flex-wrap">
                  <p className="bg-white rounded text-neutral-900 inline-block px-2 py-1">
                    {movie.categories.map((category, i) => (
                      <Link to="/" key={category}>
                        {category}
                        {i === movie.categories.length - 1 ? '' : ', '}
                      </Link>
                    ))}
                  </p>
                  <p className="bg-white rounded text-neutral-900 inline-block px-2 py-1">
                    {movie.language.map((item, i) => (
                      <Link to="/" key={item}>
                        {item}
                        {i === movie.language.length - 1 ? '' : ', '}
                      </Link>
                    ))}
                  </p>
                </div>

                {/* others option in movie */}
                <div className="mb-5">
                  <span>{movie.time} . </span>
                  {movie.tags.map((tag, i) => (
                    <Link
                      to="/"
                      key={tag}
                      className="hover:underline capitalize"
                    >
                      {tag}
                      {i === movie.tags.length - 1 ? '' : ', '}
                    </Link>
                  ))}
                  <span className="uppercase"> . {movie.area}</span>
                  {(movie.ratting || movie.votes) && (
                    <span> . {movie.release}</span>
                  )}
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
          <p className="mt-2 text-gray-600">{movie.about}</p>
        </div>
      </section>
    );
  }

  return <div>Page not found!</div>;
}
