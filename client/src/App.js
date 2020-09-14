//Import dependencies
import React, { useState, useEffect } from 'react'
import { Route, Switch } from 'react-router-dom'
import axios from 'axios'

//Import components
import SavedList from './Movies/SavedList'
import MovieList from './Movies/MovieList'
import Movie from './Movies/Movie'

//App component
export default function App () {
  
  //Initialize state
  const [saved, setSaved] = useState([])
  const [movieList, setMovieList] = useState([])

  //Set Axios response to state
  useEffect(() => {
    const getMovies = () => {
      axios
        .get('http://localhost:5000/api/movies')
        .then(response => {
          setMovieList(response.data)
        })
        .catch(error => {
          console.error('Server Error', error)
        })
    }
    getMovies()
  }, [])

  //Stretch
  const addToSavedList = id => {
    // This is stretch. Prevent the same movie from being "saved" more than once
  }

  //Return App
  return (
    <div>
      {/* SavedList component */}
      <SavedList list={[ /* This is stretch */]} />

      {/* Render first URL match */}
      <Switch>

        {/* Movie route */}
        <Route path='/movies/:id'>
          <Movie />
        </Route>

        {/* MovieList route */}
        <Route path='/'>
          <MovieList movies={movieList}/>
        </Route>

      </Switch>
    </div>
  )
}
