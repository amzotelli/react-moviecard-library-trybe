import React from 'react';

class MovieCard extends React.Component {
  render() {
    const { movieInfo } = this.props;

    return (
      <section>
        <h1>
          {' '}
          title:
          {' '}
          {movieInfo.title}
        </h1>
        <h3>
          subtitle:
          {' '}
          {movieInfo.subtitle}
          {' '}
        </h3>
        <p>
          {' '}
          storyline:
          {' '}
          {movieInfo.storyline}
          {' '}
        </p>
        <p>
          rating:
          {' '}
          {movieInfo.rating}
        </p>
        <img src={ movieInfo.imagePath } alt={ movieInfo.title } />
      </section>
    );
  }
}

export default MovieCard;
