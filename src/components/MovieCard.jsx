import React from 'react';
import propTypes from 'prop-types';
import Rating from './Rating';

class MovieCard extends React.Component {
  render() {
    const { movieInfo } = this.props;

    return (
      <div>
        <img src={ movieInfo.imagePath } alt={ movieInfo.title } />
        <h4>{movieInfo.title}</h4>
        <h5>{movieInfo.subtitle}</h5>
        <p>{movieInfo.storyline}</p>
        <Rating />
      </div>
    );
  }
}

MovieCard.propTypes = {
  movieInfo: propTypes.shape({
    title: propTypes.string,
    subtitle: propTypes.string,
    storyline: propTypes.string,
    imagePath: propTypes.string,
  }),
};

MovieCard.defaultProps = {
  movieInfo: [{
    title: 'erro',
    subtitle: 'erro',
    storyline: 'erro',
    imagePath: 'erro',
  }],
};

export default MovieCard;
