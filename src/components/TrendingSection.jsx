import React from 'react';
import MovieItem from './MovieItem';

import './style.css';

// Import movie images
import movie1 from './images/movie1.webp';
import movie2 from './images/movie2.png';
import movie3 from './images/movie3.png';
import movie4 from './images/movie4.png';
import movie5 from './images/movie5.png';
import movie6 from './images/movie6.png';
import movie7 from './images/movie7.png';
import movie8 from './images/movie8.png';
import movie9 from './images/movie9.png';
import movie10 from './images/movie10.png';

const TrendingSection = () => {
  const movies = [
    { src: movie1, alt: "Movie 1", rank: 1 },
    { src: movie2, alt: "Movie 2", rank: 2 },
    { src: movie3, alt: "Movie 3", rank: 3 },
    { src: movie4, alt: "Movie 4", rank: 4 },
    { src: movie5, alt: "Movie 5", rank: 5 },
    { src: movie6, alt: "Movie 6", rank: 6 },
    { src: movie7, alt: "Movie 7", rank: 7 },
    { src: movie8, alt: "Movie 8", rank: 8 },
    { src: movie9, alt: "Movie 9", rank: 9 },
    { src: movie10, alt: "Movie 10", rank: 10 }
  ];

  return (
    <section className="trending">
      <h2>Trending Now</h2>
      <div className="movie-grid">
        {movies.map((movie) => (
          <MovieItem 
            key={movie.rank} 
            src={movie.src} 
            alt={movie.alt} 
            rank={movie.rank} 
          />
        ))}
      </div>
      <button className="next-button">
       
      </button>
    </section>
  );
};

export default TrendingSection;