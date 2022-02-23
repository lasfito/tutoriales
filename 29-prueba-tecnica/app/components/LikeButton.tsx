import React from 'react'
import { Movie } from '~/types/Movie'
import {Pulgar} from "~/assets"
import {useGlobalData} from "~/contexts/dataContext"

type Props = {
    movie: Movie;
    action:string;
}

function LikeButton({movie, action}: Props) {

const {globalData, setGlobalData} = useGlobalData();
const id = movie.id;
const freshMovie = globalData.find((m:Movie) => m.id === id);

    function modifyLikes(movie:Movie, action:string){
        const shallowCopy = [...globalData];
        const index = shallowCopy.findIndex(m => m.id === movie.id);
        if(index===-1) return;
        if(action === "like" && !movie.hasLiked){
            shallowCopy[index].likes+=1;
            shallowCopy[index].hasLiked = true;
            if(shallowCopy[index].hasDisliked) {
                shallowCopy[index].dislikes-=1;
            }
            shallowCopy[index].hasDisliked = false;
        }
        if(action === "dislike" && !movie.hasDisliked){
            shallowCopy[index].dislikes+=1;
            shallowCopy[index].hasDisliked = true;
            if (shallowCopy[index].hasLiked) {
              shallowCopy[index].likes -= 1;
            }
            shallowCopy[index].hasLiked = false;
        }
        setGlobalData(shallowCopy);
        localStorage.setItem("localMovies", JSON.stringify(shallowCopy));

    }

  return (
    <div
    className="flex-row mr-3"
    onClick={()=> modifyLikes(freshMovie, action)}>
        <img src={Pulgar} alt="like button" 
        className={` thumbs ${action === "like" ? "up" : "down"} ${action === "like" && freshMovie.hasLiked ? "active"  : ""}   ${action === "dislike" && freshMovie.hasDisliked ? "active" : ""}`}/>
        {action === "like" ? freshMovie.likes : freshMovie.dislikes}
    </div>
  )
}

export default LikeButton