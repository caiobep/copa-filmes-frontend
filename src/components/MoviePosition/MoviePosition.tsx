import React from 'react'
import { Container, Position, Title } from './MoviePosition.styles'

interface Props {
  title?: string,
  position?: number
}

const MoviePosition = (props: Props) => (
  <Container>
    <Position> {props.position}º </Position>
    <Title> {props.title} </Title>
  </Container>
)


export default MoviePosition