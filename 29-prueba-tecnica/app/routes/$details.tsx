import React from "react";
import {
  LoaderFunction,
  useLoaderData,
  MetaFunction,
  LinksFunction,
} from "remix";
import movies from "~/data";
import { MovieBanner, CommentBox, CommentList } from "~/components";
import { detailsStyles } from "~/styles";

type Props = {};

export const loader: LoaderFunction = async ({ params }) => {
  const movieName = params.details;
  const movie = movies.find((movie) => movie.name === movieName);
  if (!movie) {
    throw new Response("Not Found", { status: 404 });
  }

  return movie;
};

export const meta: MetaFunction = ({ data }) => {
  return {
    title: data.name,
    description: "Detalles de la pelicula",
  };
};

export const links: LinksFunction = () => {
  return [
    {
      rel: "stylesheet",
      href: detailsStyles,
    },
  ];
};

function $details({}: Props) {
  const movieToUse = useLoaderData();
  const [isReviewing, setIsReviewing] = React.useState(false);
  return (
    <main>
      <MovieBanner movie={movieToUse} />

      <div className="container">
        <ul className="flex-row reviews__options pointer  mt-3 mb-3">
          <li
            onClick={() => setIsReviewing(true)}
            className={` ${isReviewing ? "active" : ""}`}
          >
            Dejar Reseña
          </li>
          <li
            onClick={() => setIsReviewing(false)}
            className={`${isReviewing ? "" : "active"}`}
          >
            Leer Reseñas
          </li>
        </ul>

        {isReviewing ? (
          <CommentBox movieId={movieToUse.id} />
        ) : (
          <CommentList movieId={movieToUse.id} />
        )}
      </div>
    </main>
  );
}

export default $details;
