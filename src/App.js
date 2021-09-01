import React from 'react';
import './App.css';
import Header from './components/Header';
import movie from './data';
import MovieCard from './components/MovieCard';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header />
        {movie.map((mov) => <MovieCard movieInfo={ mov } />)}
      </div>
    );
  }
}

export default App;
