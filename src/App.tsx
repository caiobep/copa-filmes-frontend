import * as React from 'react'
import './App.css'

import MoviesList from './containers/MoviesList/MoviesList'

export const API_URL = process.env.REACT_APP_API || 'http://localhost:5000/'

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <MoviesList />
      </div>
    )
  }
}

export default App
