import React from 'react'

import MoviePosition from '../../components/MoviePosition/MoviePosition'
import MovieTitle from '../../components/MovieTitle/MovieTitle'
import { Container, MoviePositionContainer } from './Winners.style'

import { Movie } from '../entities'

interface Props {
  winner: Movie,
  runnerUp: Movie
}

const Winners = ({winner, runnerUp}: Props) => (
  <Container>
    <MovieTitle 
      title="Resultado Final" 
      subtitle="Veja o resultado final do Campeonato de filmes de forma simlpes e rápida" 
    />
    <MoviePositionContainer>
      <MoviePosition title={winner.title} position={1} />
      <MoviePosition title={runnerUp.title} position={2} />
    </MoviePositionContainer>
  </Container>
)

export default Winners
