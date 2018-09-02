import React, { Component } from 'react'

import Button from '../../components/Button/Button'
import MovieSelector from '../../components/MovieSelector/MovieSelector'
import MovieTitle from '../../components/MovieTitle/MovieTitle'

import { API_URL, IS_DEV_ENV } from '../../environment'
import { Movie } from '../entities'
import { 
  Container, 
  Description,
  MovieActions,
  MovieListContainer
} from './MoviesList.style'


interface State {
  movies: Movie[]
}

interface Props {
  movies?: Movie[] | null
  onMovieSelect?: (selectedMovies: Movie[]) => void
}

class MoviesList extends Component<Props, State> {

  state = {
    movies: [],
  }
  
  componentDidMount() {
    fetch(`${API_URL}movies`, {
      method: "GET",
      mode: IS_DEV_ENV ? "cors" : "same-origin",
      headers: {
        "Content-Type": "application/json; charset=utf-8",
      },
    })
    .then(response => response.json().then(data => {
        const movies = data.map(
          (m: Movie) => ({checked: false, ...m})
        ) as Movie[]
        this.setState({ movies })
    }))
  }

  selectMovies = () => {
    if (!!this.props.onMovieSelect) {
      const selectedMovies = this.state.movies.filter(
        (m: Movie) => m.checked === true
      )
      
      this.props.onMovieSelect(selectedMovies)
    }
  }

  toggleMovieChecked(movieId: number | string) {
    this.setState(prevState => {
      const oldMovieIndex = prevState.movies.findIndex(m => m.id === movieId)
      const oldMovie = prevState.movies[oldMovieIndex]
      const newMovie = Object.assign({}, oldMovie, {checked: !oldMovie.checked})

      const movies = Object.assign([], 
        prevState.movies,
        {[oldMovieIndex]: newMovie},
      ) as Movie[]

      return { movies }
    })
  }

  render() {
    const moviesCount = this.state.movies.length
    const selectedMoviesCount = this.state.movies.filter(
      (m: Movie) => m.checked === true
    ).length

    return (
      <Container>
        <MovieTitle 
          title="Fase de Seleção" 
          subtitle="Selecione 8 filmes que você deseja que entrem na competição e depois pressione o botão Gerar meu Campeonato" 
        />
        <MovieActions>
          <Description>Selecionado <br /> {selectedMoviesCount} de {moviesCount} Filmes</Description>
          <Button 
            title="Gerar Meu Campeonato" 
            onClick={this.selectMovies}
          />
        </MovieActions>
        <MovieListContainer>
          {this.state.movies.map((movie: Movie) => 
            <MovieSelector 
              key={movie.id}
              title={movie.title}
              year={movie.year}
              checked={movie.checked}
              onChange={this.toggleMovieChecked.bind(this, movie.id)}
          />)}
        </MovieListContainer>
      </Container>
    )
  }
}

export default MoviesList