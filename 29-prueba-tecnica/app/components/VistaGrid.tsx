import React from 'react'
import movies from "~/data"
import type { Movie} from "~/types/Movie"
import {MovieCard} from "~/components"

type Props = {}

function VistaGrid({}: Props) {
  return (
<div className='basic-grid'>
    {movies.map((movie:Movie)=> <MovieCard movie={movie}/>)}
</div>
  )
}

export default VistaGrid