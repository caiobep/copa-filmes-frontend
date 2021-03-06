import React from 'react'

import * as styles from './MovieTitle.styles'

export interface MovieTitle {
  title?: string,
  subtitle?: string
}

const MovieTitle = ({title, subtitle}: MovieTitle) => {
  return (
    <div style={styles.movieContainer}>
      <span style={styles.titleSupport}>Campeonato de filmes</span>
      <h1 style={styles.title}>{title}</h1>
      <div style={styles.whiteBar} />
      <p style={styles.subtitle}>{subtitle}</p>
    </div>
  )
}


export default MovieTitle