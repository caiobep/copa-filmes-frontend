import * as React from 'react'
import './App.css'
import MovieSelector from './components/MovieSelector/MovieSelector'
// import MovieTitle from './components/MovieTitle/MovieTitle';'



class App extends React.Component {
  render() {
    return (
      <div className="App">
        <MovieSelector title="Filminho" year={"2019"} />
        <MovieSelector title="Filminho" year={"2019"} />
        <MovieSelector title="Filminho" year={"2019"} />
        <MovieSelector title="Filminho" year={"2019"} />
        <MovieSelector title="Filminho" year={"2019"} />
        {/* <MovieTitle
          title="Fase de Seleção" 
          subtitle="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s" 
        /> */}
      </div>
    )
  }
}

export default App
