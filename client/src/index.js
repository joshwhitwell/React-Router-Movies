//Import dependencies
import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'

//Import styles
import './index.css'

//Import components
import App from './App'

//Render React App to root
ReactDOM.render(

    //Add router to app
    <BrowserRouter>
        <App />
    </BrowserRouter>
    
, document.getElementById('root'))
