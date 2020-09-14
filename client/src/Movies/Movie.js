//Import dependencies
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams, useRouteMatch } from 'react-router-dom'

//Movie component
export default function Movie(props) {
  
  //Initialize state
  const [movie, setMovie] = useState()

  //Destructures current id from router.provider
  const { id } = useParams()

  //Set Axios response to state on id change
  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/movies/${id}`)
      .then(response => {
        setMovie(response.data)
      })
      .catch(error => {
        console.error(error)
      })
  }, [id])

  // Uncomment this only when you have moved on to the stretch goals
  // const saveMovie = evt => { }

  //Renders loading message when state is null
  if (!movie) {
    return <div>Loading movie information...</div>
  }

  //Destructure movie state
  const { title, director, metascore, stars } = movie

  //Return Movie
  return (
    <div className="save-wrapper">
      <div className="movie-card">
        <h2>{title}</h2>
        <div className="movie-director">
          Director: <em>{director}</em>
        </div>
        <div className="movie-metascore">
          Metascore: <strong>{metascore}</strong>
        </div>
        <h3>Actors</h3>

        {/* Map over stars array and return star at each index */}
        {stars.map(star => (
          <div key={star} className="movie-star">
            {star}
          </div>
        ))}

      </div>
      <div className="save-button">Save</div>
    </div>
  )
}
