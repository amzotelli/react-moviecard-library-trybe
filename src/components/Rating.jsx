import React from 'react';
import propTypes from 'prop-types';

class Rating extends React.Component {
  render() {
    const { movieInfo } = this.props;
    return (
      <span>{movieInfo.rating}</span>
    );
  }
}

Rating.propTypes = {
  movieInfo: propTypes.shape({
    rating: propTypes.number,
  }),
};

Rating.defaultProps = {
  movieInfo: [{
    rating: 0,
  }],
};

export default Rating;
