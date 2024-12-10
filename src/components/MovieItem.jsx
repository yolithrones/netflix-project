import React from 'react';
import './style.css';

const MovieItem = ({ src, alt, rank }) => {
  return (
    <div className="movie-item">
      <img src={src} alt={alt} />
      <span>{rank}</span>
    </div>
  );
};

export default MovieItem;