//Import dependencies
import React from 'react'
import { Link, useRouteMatch } from 'react-router-dom'

//MovieList component
export default function MovieList(props) {
  
  //Return MovieList
  return (
    <div className="movie-list">

      {/* Map movies array and return MovieDetails for each movie */}
      {props.movies.map(movie => (
        <MovieDetails key={movie.id} movie={movie} />
      ))}

    </div>
  )
}

//MovieDetails component
function MovieDetails(props) {
  
  //Destructure props
  const { title, director, metascore, id } = props.movie

  //Return MovieDetails
  return (
    <div className="movie-card">

      {/* Link to movies/ using id from props as parameter */}
      <Link to={`movies/${id}`}>
        <h2>{title}</h2>
        <div className="movie-director">
          Director: <em>{director}</em>
        </div>
        <div className="movie-metascore">
          Metascore: <strong>{metascore}</strong>
        </div>
      </Link>
      
    </div>
  )
}
