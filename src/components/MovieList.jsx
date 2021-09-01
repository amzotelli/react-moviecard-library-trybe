import React from 'react';
import propTypes from 'prop-types';
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

MovieList.propTypes = {
  movies: propTypes.arrayOf(propTypes.shape({
    title: propTypes.string,
    subtitle: propTypes.string,
    storyline: propTypes.string,
    imagePath: propTypes.string,
  })),
};

MovieList.defaultProps = {
  movies: [{
    title: 'erro',
    subtitle: 'erro',
    storyline: 'erro',
    imagePath: 'erro',
  }],
};

export default MovieList;
