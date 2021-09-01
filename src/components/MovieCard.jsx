import React from 'react';

class MovieCard extends React.Component {
  render() {
    const { movieInfo } = this.props;

    return (
      <section>
        <h4>
          {' '}
          title:
          {' '}
          {movieInfo.title}
        </h4>
        <h5>
          subtitle:
          {' '}
          {movieInfo.subtitle}
          {' '}
        </h5>
        <p>
          {' '}
          storyline:
          {' '}
          {movieInfo.storyline}
          {' '}
        </p>
        <img src={ movieInfo.imagePath } alt={ movieInfo.title } />
      </section>
    );
  }
}

export default MovieCard;
