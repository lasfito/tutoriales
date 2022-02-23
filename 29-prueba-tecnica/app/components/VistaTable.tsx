import React from "react";
import { useGlobalData } from "~/contexts/dataContext";
import { Movie } from "~/types/Movie";
import { LikeButton } from "~/components/";
import { Link } from "remix";

type Props = {};

function VistaTable({}: Props) {
  const { globalData: movies } = useGlobalData();
  const [shallowCopy, setShallowCopy] = React.useState([...movies]);

  function sortBy(property: string) {
    const sortingComparation = (a: Movie, b: Movie) => {
      if (a[property] < b[property]) return -1;
      if (a[property] > b[property]) return 1;
      return 0;
    };

    const sorted = movies.sort(sortingComparation);
    console.log("sorted", sorted);
    setShallowCopy([...sorted]);
  }
  return (
    <div>
      <table className="home-table">
        <thead>
          <tr>
            <th></th>
            <th onClick={() => sortBy("name")}>Title</th>
            <th onClick={() => sortBy("duration")}>Duration</th>
            <th onClick={() => sortBy("likes")}>Likes</th>
            <th>Dislikes</th>
          </tr>
        </thead>
        <tbody>
          {shallowCopy?.map((movie: Movie) => (
            <tr key={movie.id}>
              <td>
                <Link to={`/${movie.name}`} key={movie.id}>
                  <img
                    src={movie.photoUrl}
                    alt={movie.name}
                    className="table-poster"
                  />
                </Link>
              </td>
              <td>
                <Link to={`/${movie.name}`} key={movie.id}>
                  {movie.name}
                </Link>
              </td>
              <td>
                <Link to={`/${movie.name}`} key={movie.id}>
                  {movie.duration}
                </Link>
              </td>
              <td>
                <LikeButton action="like" movie={movie} />
              </td>
              <td>
                <LikeButton action="dislike" movie={movie} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default VistaTable;
