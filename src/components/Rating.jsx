import React from 'react';

class Rating extends React.Component {
  render() {
    const { movieInfo } = this.props;
    return (
      <p>
        rating:
        {' '}
        {movieInfo.rating}
      </p>
    );
  }
}

export default Rating;
