import * as React from 'react'
import './App.css'


import { Movie } from './containers/entities'
import MoviesList from './containers/MoviesList/MoviesList'
import WinnersList from './containers/Winners/Winners'
import { API_URL, IS_DEV_ENV } from './environment'

// const winner = {
//   id: "tt0001",
//   title: "Good Movie",
//   year: "2001",
// } as Movie

// const runnerUp = {
//   id: "tt0001",
//   title: "Good Movie",
//   year: "2001",
// } as Movie

interface Winners {
  winner: Movie
  runnerUp: Movie
}

interface State {
  winners?: Winners | null
}

class App extends React.Component<any, State> {
  state = {
    winners: null
  }

  getWinners = async (movies: Movie[]) => {
    try {
      const response = await fetch(API_URL + 'movies/tournament',{
        method: "POST",
        mode: IS_DEV_ENV ? "cors" : "same-origin",
        cache: "no-cache",
        headers: {
          "Content-Type": "application/json; charset=utf-8",
        },
        body: JSON.stringify(movies)
      })
      const winners = await response.json() as Winners
      this.setState({ winners })
    } catch (exception) {
      /* tslint:disable */
      console.error(exception)
    }
  }

  onMoviesSelect = async (selectedMovies: Movie[]) => {
    await this.getWinners(selectedMovies)
  }

  render() {
    const winners = this.state.winners

    return (
      <div className="App">
        { !winners
          ? (<MoviesList onMovieSelect={this.onMoviesSelect}/>)
          : (<WinnersList 
              winner={winners['winner']} 
              runnerUp={winners['runnerUp']} 
          />)
        }

      </div>
    )
  }
}

export default App
