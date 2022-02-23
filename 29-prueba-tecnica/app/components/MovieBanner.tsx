import React from 'react'
import type { Movie } from '~/types/Movie'
import {LikeButton} from "~/components"

type Props = {
    movie: Movie
}

function MovieBanner({movie}: Props) {
  return (
    <div className="MovieBanner__container">
      <div
        className="MovieBanner__poster"
        style={{ backgroundImage: `url(${movie.photoUrl})` }}
      ></div>
      <div className="MovieBanner__content">
        <h1 className="h1">{movie.name}</h1>
        <div className="MovieBanner__details flex-row">
          <p className="MovieBanner__duration">{movie.duration}min</p>
          <div className="flex-row">
            <LikeButton movie={movie} action="like" />
            <LikeButton movie={movie} action="dislike" />
          </div>
        </div>
        <p className="MovieBanner__description">{movie.description}</p>
      </div>
    </div>
  );
}

export default MovieBanner