import React from "react";
import { Movie, Review } from "~/types/Movie";
import { useGlobalData } from "~/contexts/dataContext";

type Props = {
  movieId: number;
};

function CommentList({ movieId }: Props) {
  const { globalData } = useGlobalData();
  const movie = globalData.find((movie: Movie) => movie.id === movieId);

  if (movie?.reviews.length === 0) {
    return (
      <div className=" no-reviews">
        <h3 className="h3">No Reviews </h3>
      </div>
    );
  }

  return (
    <div>
      {movie.reviews.map((review: Review) => (
        <div key={review.createdAt} className="comment__item">
          <div className="comment__header flex-row">
            <h4>{review.author}</h4>
            <span>{new Date(review.createdAt).toLocaleDateString()}</span>
          </div>
          <p>{review.comment}</p>
        </div>
      ))}
    </div>
  );
}

export default CommentList;
