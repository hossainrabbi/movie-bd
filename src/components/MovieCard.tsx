import { FaStar } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { MovieType } from '../types/movieType';

export default function MovieCard({
  backdrop_path,
  id,
  original_language,
  title,
  vote_average,
  vote_count,
  ...rest
}: MovieType) {
  const navigate = useNavigate();

  return (
    <article
      className="shadow-sm transition-shadow rounded bg-white cursor-pointer hover:shadow"
      onClick={() => navigate(`/movies/${id}`)}
      {...rest}
    >
      <div className="relative h-80">
        <img
          className="w-full h-full rounded-t"
          src={
            backdrop_path
              ? `${process.env.REACT_APP_MOVIE_IMAGE_PATH}/${backdrop_path}`
              : 'https://via.placeholder.com/350x500'
          }
          alt={title}
        />
        <div className="absolute bottom-0 w-full py-1 px-2 bg-black text-white">
          <span className="flex items-center gap-2">
            <span className="flex items-center gap-2">
              <FaStar className="text-red-500 mb-[1px]" /> {vote_average} / 10
            </span>
            <span>{vote_count} votes</span>
          </span>
        </div>
      </div>

      <div className="p-3">
        <h3 className="text-xl text-gray-900">{title}</h3>
        <p className="text-sm text-gray-600 mt-2">
          Original Language:{' '}
          <span className="capitalize">{original_language}</span>
        </p>
      </div>
    </article>
  );
}
