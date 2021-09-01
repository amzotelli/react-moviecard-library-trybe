import React from 'react';
import movies from './data';
import Header from './components/Header';
import MovieList from './components/MovieList';
import MovieCard from './components/MovieCard';
import Rating from './components/Rating';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header />
        <MovieList movies={ movies } />
        <MovieCard />
        <Rating />
      </div>
    );
  }
}

export default App;
