import React from 'react'
import Checkbox from '../Checkbox/Checkbox'
import * as styles from './MovieSelector.styles'

interface Props {
  title?: string,
  year?: Date | string,
  checked?: boolean
}

interface State {
  checked: boolean
}

class MovieSelector extends React.Component<Props, State> {
  state = {
    checked: this.props.checked || false
  }

  toggleChecked = () => this.setState(prev => ({checked: !prev.checked}))

  render() {
    return (
      <div onClick={this.toggleChecked} style={styles.container}>
        <div style={styles.checkboxContainer}>
          <Checkbox checked={this.state.checked}/>
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
