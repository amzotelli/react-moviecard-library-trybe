import React from 'react';
import movies from './data';
import Header from './components/Header';
import MovieList from './components/MovieList';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header />
        <MovieList movies={ movies } />
      </div>
    );
  }
}

export default App;
