import React from 'react';
import { AiFillLike } from 'react-icons/ai';
import { FaStar } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

// movie props for card
type MovieCardProps = {
  image: string;
  title: string;
  language: string[];
  id: number;
  ratting: string;
  votes: string;
  likes?: string;
};

export default function MovieCard({
  image,
  title,
  language,
  ratting,
  votes,
  likes = '0',
  id,
}: MovieCardProps) {
  const navigate = useNavigate();

  return (
    <article
      className="shadow-sm transition-shadow rounded bg-white cursor-pointer hover:shadow"
      onClick={() => navigate(`/movies/${id}`)}
    >
      <div className="relative h-80">
        <img className="w-full h-full rounded-t" src={image} alt={title} />
        <div className="absolute bottom-0 w-full p-1 px-2 bg-black text-white">
          {ratting || votes ? (
            <span className="flex items-center gap-2">
              <span className="flex items-center gap-2">
                <FaStar className="text-red-500 mb-[1px]" /> {ratting}
              </span>
              <span>{votes} votes</span>
            </span>
          ) : (
            <span className="flex items-center gap-2">
              <AiFillLike className="text-green-500 mb-[1px]" /> {likes} likes
            </span>
          )}
        </div>
      </div>

      <div className="p-3">
        <h3 className="text-xl text-gray-900">{title}</h3>
        <p className="text-sm text-gray-600 mt-2">
          {language.length > 3 ? (
            <>
              {language.slice(0, 3).map((item, i) => (
                <React.Fragment key={item}>
                  {item}
                  {i === language.slice(0, 3).length - 1 ? '' : ', '}
                </React.Fragment>
              ))}
              ...
            </>
          ) : (
            language.map((item, i) => (
              <React.Fragment key={item}>
                {item}
                {i === language.length - 1 ? '' : ', '}
              </React.Fragment>
            ))
          )}
        </p>
      </div>
    </article>
  );
}
