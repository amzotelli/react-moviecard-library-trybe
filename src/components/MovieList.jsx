import React from 'react';
import MovieCard from './MovieCard';

class MovieList extends React.Component {
  render() {
    const { movies } = this.props;

    return (
      <main>
        {movies.map((movie) => <MovieCard key={ movie.title } movieInfo={ movie } />)}
      </main>
    );
  }
}

export default MovieList;
