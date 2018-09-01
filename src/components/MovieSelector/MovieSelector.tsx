import React, { MouseEvent } from 'react'
import Checkbox from '../Checkbox/Checkbox'
import * as styles from './MovieSelector.styles'

interface Props {
  title?: string,
  year?: Date | string,
  checked: boolean,
  onChange?: any
}

interface State {
  checked: boolean
}

class MovieSelector extends React.Component<Props, State> {

  toggleChecked = (e: MouseEvent<HTMLDivElement>) => {
    e.preventDefault()

    if (this.props.onChange instanceof Function) {
      this.props.onChange(e)
    }
  }

  render() {
    return (
      <div onClick={this.toggleChecked} style={styles.container}>
        <div style={styles.checkboxContainer}>
          <Checkbox checked={this.props.checked}/>
        </div>
        <div style={styles.movieDescription}>
          <h4 style={styles.title}>{this.props.title}</h4>
          <p style={styles.subtitle}>{this.props.year}</p>
        </div>
      </div>
    )
  }
}

export default MovieSelector
