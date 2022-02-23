import React from "react";
import { Link } from "remix";
import type { Movie } from "~/types/Movie";
import { LikeButton } from "~/components";

type Props = {
  movie: Movie;
};
//contenedor carta
//imagen poster
//informaciòn pelìcula
function MovieCard({ movie }: Props) {
  return (
    <div className="MovieCard__container">
      <Link to={`/${movie.name}`}>
        <div
          className="MovieCard__poster"
          style={{ backgroundImage: `url(${movie.photoUrl})` }}
        />
      </Link>
      <div className="MovieCard__content">
        <div className="MovieCard__title ">
          <h1>{movie.name}</h1>
        </div>
        <div className="MovieCard__details">
          <p className="MovieCard__duration">{movie.duration}</p>
          <div className="like-container">
            <LikeButton movie={movie} action="like" />
            <LikeButton movie={movie} action="dislike" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default MovieCard;
