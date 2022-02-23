import React, {useState} from 'react'
import {useGlobalData} from '~/contexts/dataContext'
import type { Review, Movie} from '~/types/Movie'

type Props = {
  movieId: number
}

function CommentBox({movieId}: Props) {

const {globalData, setGlobalData} = useGlobalData();
const [review,setReview]= useState<Review>({
  comment:"",
  author:"",
  createdAt: 0,
});

function postReview(review:Review,reviewedMoviedID:number){

  const reviewedMovieIndex = globalData.findIndex((movie:Movie)=>movie.id === reviewedMoviedID);
  const shallowMovies = [...globalData];
  shallowMovies[reviewedMovieIndex].reviews = [...shallowMovies[reviewedMovieIndex].reviews,review];
  setGlobalData(shallowMovies);
  localStorage.setItem('localMovies',JSON.stringify(shallowMovies));


}

function submitHandler(e:any){
  e.preventDefault();
  postReview(review,movieId);
  e.target.author.value = e.target.comment.value = "";

}


  return (
    <form
    onSubmit={e=> submitHandler(e)}
    className="flex-col details__form">

      <input
      required={true}
      type="text"
      placeholder="Your name"
      name="author"
      minLength={4}
      onChange={e=> setReview({...review, author: e.target.value})}
      onBlur={e=> setReview({...review, createdAt: Date.now()})}
      />
      <textarea
      required={true}
 
      placeholder="Your opinion"
      name="comment"
      onChange={e=> setReview({...review, comment: e.target.value})}
      minLength={10}
      />
      
 <button type="submit">Send</button>     
      </form>
  )
}

export default CommentBox